package com.codeforall.online.c3po.controller;

import com.codeforall.online.c3po.command.PlanetDto;
import com.codeforall.online.c3po.converters.PlanetToPlanetDto;
import com.codeforall.online.c3po.exceptions.PlanetNotFoundException;
import com.codeforall.online.c3po.model.Planet;
import com.codeforall.online.c3po.services.PlanetService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Rest controller for providing each planet's quiz
 */
@RestController
@RequestMapping("/planet")
public class PlanetController {

    private PlanetService planetService;
    private PlanetToPlanetDto planetToPlanetDto;

    @RequestMapping(method = RequestMethod.GET, path = "/")
    public ResponseEntity<List<PlanetDto>> listPlanets() {

        try{
            List<Planet> planets = planetService.list();

            return new ResponseEntity<>(planetToPlanetDto.convert(planets), HttpStatus.OK);

        } catch (PlanetNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
