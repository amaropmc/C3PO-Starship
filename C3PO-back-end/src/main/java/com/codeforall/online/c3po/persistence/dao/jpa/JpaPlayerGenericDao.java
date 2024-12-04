package com.codeforall.online.c3po.persistence.dao.jpa;

import com.codeforall.online.c3po.model.Player;
import jakarta.persistence.EntityManager;

import java.util.Optional;

public class JpaPlayerGenericDao extends JpaGenericDao<Player> {

    /**
     * Initialize a new JPA Dao instance given a player model
     * @param modelType
     */
    public JpaPlayerGenericDao(Class<Player> modelType) {
        super(modelType);
    }

    public Player findByUsername(String username) {
        EntityManager em = sm.getCurrentSession();

        return em.find(modelType, username);
    }
}
