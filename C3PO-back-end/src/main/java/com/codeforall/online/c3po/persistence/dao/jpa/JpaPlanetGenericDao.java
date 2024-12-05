package com.codeforall.online.c3po.persistence.dao.jpa;

import com.codeforall.online.c3po.model.Planet;
import com.codeforall.online.c3po.persistence.dao.PlanetDao;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

@Repository
public class JpaPlanetGenericDao extends JpaGenericDao<Planet> implements PlanetDao {
    /**
     * Initialize a new JPA DAO instance given a planet model
     *
     */
    public JpaPlanetGenericDao() {
        super(Planet.class);
    }

    public Planet findByName(String name) {
        EntityManager em = sm.getCurrentSession();

        return em.find(Planet.class, name);
    }
}
