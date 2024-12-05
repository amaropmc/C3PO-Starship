package com.codeforall.online.c3po.controller;

import com.codeforall.online.c3po.exceptions.PlanetNotFoundException;
import com.codeforall.online.c3po.model.Planet;
import com.codeforall.online.c3po.services.PlanetService;
import com.codeforall.online.c3po.services.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/planet")
public class QuestionController {

    private PlanetService planetService;
    private QuestionService questionService;

    @RequestMapping(method = RequestMethod.GET, path = {"/{planetName}/quiz"})
    public ResponseEntity<List<QuestionDto>> getPlanetQuestions(@PathVariable String planetName) {

        try {
            Planet planet = planetService.getPlanetByName(planetName);


        } catch (PlanetNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @Autowired
    public void setPlanetService(PlanetService planetService) {
        this.planetService = planetService;
    }

    @Autowired
    public void setQuestionService(QuestionService questionService) {
        this.questionService = questionService;
    }
}
