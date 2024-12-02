package com.codeforall.online.c3po.services;

import com.codeforall.online.c3po.exceptions.PlanetNotFoundException;
import com.codeforall.online.c3po.model.Planet;

import java.util.List;

public interface PlanetService {

    Planet getPlanetById(long id) throws PlanetNotFoundException;

    List<Planet> list() throws PlanetNotFoundException;

    Planet add(Planet planet);

    Planet remove(Planet planet) throws PlanetNotFoundException;
}
