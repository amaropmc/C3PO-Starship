package com.codeforall.online.c3po.services;

import com.codeforall.online.c3po.exceptions.PlanetNotFoundException;
import com.codeforall.online.c3po.model.Planet;
import com.codeforall.online.c3po.model.Question;
import com.codeforall.online.c3po.persistence.dao.PlanetDao;
import com.codeforall.online.c3po.persistence.managers.TransactionManager;
import jakarta.persistence.PersistenceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * A {@link PlanetService} implementation
 */
@Service
public class PlanetServiceImpl implements PlanetService {

    private TransactionManager transactionManager;
    private PlanetDao planetDao;

    /**
     * @see PlanetService#getPlanetById(long id)
     */
    @Override
    public Planet getPlanetById(long id) throws PlanetNotFoundException {
        return Optional.ofNullable(planetDao.findById(id)).orElseThrow(PlanetNotFoundException::new);
    }

    @Override
    public List<Planet> list() throws PlanetNotFoundException {
        return planetDao.findAll();
    }

    @Override
    public Planet add(Planet planet) {
        Planet savedPlanet = null;

        try {
            transactionManager.beginWrite();

            savedPlanet = planetDao.saveOrUpdate(planet);

            transactionManager.commit();

        } catch (PersistenceException e) {
            transactionManager.rollBack();
        }

        return savedPlanet;
    }

    @Override
    public void remove(long id) {

        try {
            transactionManager.beginWrite();

            planetDao.delete(id);

            transactionManager.commit();

        } catch (PersistenceException e) {
            transactionManager.rollBack();
        }
    }
/*
    public Question addQuestion(long planetId, Question question) throws PlanetNotFoundException {
        Question addedQuestion = null;

        try {
            transactionManager.beginWrite();

            Planet planet = getPlanetById(planetId);

            planet.addQuestion(question); //This will also set this question planet property to this planet

            planetDao.saveOrUpdate(planet);
            addedQuestion = questionDao.saveOrUpdate(question);

            transactionManager.commit();

        } catch (PersistenceException e) {
            transactionManager.rollBack();
        }

        return addedQuestion;
    }

    public Question removeQuestion(long planetId, long questionId) throws PlanetNotFoundException {
        Question removedQuestion = null;

        try {
            transactionManager.beginWrite();

            Planet planet = getPlanetById(planetId);
            Question question = questionDao.getQuestionById(questionId);

            planet.removeQuestion(question);
            planetDao.saveOrUpdate(planet);
            removedQuestion = questionDao.delete(questionId);

            transactionManager.commit();

        } catch(PersistenceException e) {
            transactionManager.rollBack();
        }

        return removedQuestion;
    }
 */

    public Set<Long> getQuestionsIds(long planetId) throws PlanetNotFoundException {
        Planet planet = getPlanetById(planetId);

        return planet.getQuestions().stream()
                .map(Question::getId)
                .collect(Collectors.toSet());
    }

    @Autowired
    public void setTransactionManager(TransactionManager transactionManager) {
        this.transactionManager = transactionManager;
    }

    @Autowired
    public void setPlanetDao(PlanetDao planetDao) {
        this.planetDao = planetDao;
    }
}
