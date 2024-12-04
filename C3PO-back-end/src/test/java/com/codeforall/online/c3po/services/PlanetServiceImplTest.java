package com.codeforall.online.c3po.services;

import com.codeforall.online.c3po.exceptions.PlanetNotFoundException;
import com.codeforall.online.c3po.model.Planet;
import com.codeforall.online.c3po.model.Question;
import com.codeforall.online.c3po.persistence.dao.PlanetDao;
import com.codeforall.online.c3po.persistence.managers.TransactionManager;
import org.junit.Before;
import org.junit.Test;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import static org.mockito.Mockito.*;

public class PlanetServiceImplTest {
    //SUT
    private PlanetServiceImpl planetServiceImpl;

    //DOC
    private TransactionManager transactionManager;
    private PlanetDao planetDao;

    @Before
    public void setUp() {
        planetServiceImpl = spy(PlanetServiceImpl.class);

        transactionManager = mock(TransactionManager.class);
        planetDao = mock(PlanetDao.class);

        planetServiceImpl.setTransactionManager(transactionManager);
        planetServiceImpl.setPlanetDao(planetDao);
    }

    private Planet setUpFakePlanet(Long planetId) {
        Planet planet = new Planet();

        planet.setId(planetId);
        planet.setName("Pedro");
        return planet;
    }

    private void assertPlanet(Planet fakePlanet, Planet actualPlanet) {
        assert(fakePlanet.getName().equals(actualPlanet.getName()));
        assert(fakePlanet.getId() == actualPlanet.getId());
        assert(actualPlanet.getQuestions().equals(fakePlanet.getQuestions()));
    }

    private Planet setUpFakeQuestions(Planet planet) {
        List<Question> questions = new ArrayList<>();

        Question question1 = mock(Question.class);
        questions.add(question1);

        Question question2 = mock(Question.class);
        questions.add(question2);

        planet.setQuestions(new HashSet<>(questions));

        return planet;
    }

    @Test
    public void testGet() throws PlanetNotFoundException {
        //Setup
        long fakePlanetId = 1;
        Planet fakePlanet = setUpFakePlanet(fakePlanetId);

        //Mock dependencies
        Planet mockedPlanet = mock(Planet.class);

        //Mock behaviour
        when(planetDao.findById(anyLong())).thenReturn(mockedPlanet);

        //Attach fake Planet to mocked questions
        setUpFakeQuestions(fakePlanet);

        //Mock requested PlanetServiceImpl request
        when(planetServiceImpl.getPlanetById(fakePlanetId)).thenReturn(fakePlanet);

        //Exercise
        Planet actualPlanet = planetServiceImpl.getPlanetById(fakePlanetId);

        //Verify
        verify(planetDao).findById(fakePlanetId);
        assertPlanet(fakePlanet, actualPlanet);
    }
}
