package com.codeforall.online.c3po.services;

import com.codeforall.online.c3po.exceptions.PlayerNotFoundException;
import com.codeforall.online.c3po.model.Player;

import java.util.List;

public interface PlayerService {

    /**
     * Get the user by username
     *
     * @param username
     * @return
     */
    Player getPlayer(String username) throws PlayerNotFoundException;

    /**
     * Returns a list of users
     * @return
     * @throws PlayerNotFoundException
     */
    List<Player> listAllPlayers() throws PlayerNotFoundException;

    /**
     * register the user with username
     * @param username
     * @return
     */
    boolean registerPlayer(String username);

    /**
     * login?
     * @param username
     * @return
     */
    boolean authenticate(String username);

    /**
     * update the user's score
     * @param username
     * @param newScore
     * @return
     */
    boolean UpdatePlayerScore(String username, int newScore);

    /**
     * get the player score
     * @param username
     * @return
     */
    int getTotalScore(String username) throws PlayerNotFoundException;

}
