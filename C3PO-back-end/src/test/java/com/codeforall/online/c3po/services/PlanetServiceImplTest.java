package com.codeforall.online.c3po.services;

import com.codeforall.online.c3po.exceptions.PlanetNotFoundException;
import com.codeforall.online.c3po.model.Planet;
import com.codeforall.online.c3po.model.Question;
import com.codeforall.online.c3po.persistence.dao.PlanetDao;
import com.codeforall.online.c3po.persistence.managers.TransactionManager;
import junitparams.JUnitParamsRunner;
import junitparams.Parameters;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import static org.mockito.Mockito.*;

@RunWith(JUnitParamsRunner.class)
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

    private Planet setUpFakePlanet(Integer planetId) {
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
    @Parameters({"1"})
    public void testGet(Integer fakePlanetId) throws PlanetNotFoundException {
        //Setup
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
