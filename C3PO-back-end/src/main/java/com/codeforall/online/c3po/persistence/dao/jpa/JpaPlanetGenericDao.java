package com.codeforall.online.c3po.persistence.dao.jpa;

import com.codeforall.online.c3po.model.Planet;

public class JpaPlanetGenericDao extends JpaGenericDao<Planet> {
    /**
     * Initialize a new JPA DAO instance given a planet model
     *
     * @param modelType the model type
     */
    public JpaPlanetGenericDao(Class<Planet> modelType) {
        super(modelType);
    }
}
