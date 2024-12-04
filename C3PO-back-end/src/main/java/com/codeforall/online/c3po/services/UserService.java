package com.codeforall.online.c3po.services;

import com.codeforall.online.c3po.exceptions.PlayerNotFoundException;
import com.codeforall.online.c3po.model.Player;

import java.util.Optional;

public interface UserService {

    /**
     * Get the user by username
     *
     * @param username
     * @return
     */
    Player getUser(String username) throws PlayerNotFoundException;

    /**
     * register the user with username
     * @param username
     * @return
     */
    boolean registerUser(Player player, String username);

    /**
     * login?
     * @param username
     * @return
     */
    boolean authenticate(String username);

    /**
     * update the user's score
     * @param username
     * @param score
     * @return
     */
    boolean UpdateUserScore(String username, int score);

    int getTotalScore(String username) throws PlayerNotFoundException;

}
