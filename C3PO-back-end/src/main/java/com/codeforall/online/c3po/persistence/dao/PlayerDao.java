package com.codeforall.online.c3po.persistence.dao;

import com.codeforall.online.c3po.model.Player;

import java.util.Optional;

public interface PlayerDao extends Dao<Player> {
    Player findByUsername(String username);
}
