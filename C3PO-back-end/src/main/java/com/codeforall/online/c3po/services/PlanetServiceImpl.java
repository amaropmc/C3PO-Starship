package com.codeforall.online.c3po.services;

import com.codeforall.online.c3po.exceptions.PlanetNotFoundException;
import com.codeforall.online.c3po.model.Planet;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanetServiceImpl implements PlanetService {
    @Override
    public Planet getPlanetById(long id) throws PlanetNotFoundException {
        return null;
    }

    @Override
    public List<Planet> list() throws PlanetNotFoundException {
        return List.of();
    }

    @Override
    public Planet add(Planet planet) {
        return null;
    }

    @Override
    public Planet remove(Planet planet) throws PlanetNotFoundException {
        return null;
    }
}
