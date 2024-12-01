package com.codeforall.online.c3po.model.Services;

public interface User {

    /**
     * Get the user by username
     * @param username
     * @return
     */
    User getUser(String username);

    /**
     * register the user with username
     * @param username
     * @return
     */
    boolean registerUser(String username);

    /**
     * login?
     * @param username
     * @return
     */
    User authenticate(String username);

    /**
     * update the user's score
     * @param username
     * @param score
     * @return
     */
    boolean UpdateUserScore(String username, int score);

}
