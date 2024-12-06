package com.codeforall.online.c3po.persistence.dao.jpa;

import com.codeforall.online.c3po.model.Player;
import com.codeforall.online.c3po.persistence.dao.PlayerDao;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;


public class JpaPlayerGenericDao extends JpaGenericDao<Player> implements PlayerDao {

    /**
     * Initialize a new JPA Dao instance given a player model
     * @param modelType
     */

   public JpaPlayerGenericDao(Class<Player> modelType) {
        super(modelType);
    }

    public Player findByUsername(String username) {
        EntityManager em = sm.getCurrentSession();

        return em.find(Player.class, username);
    }
}
