package com.codeforall.online.c3po.services;


import com.codeforall.online.c3po.model.Persistence.managers.TransactionManager;

public class UserService implements User {

    private TransactionManager transactionManager;


    /**
     * Get the user by username
     *
     * @param username
     * @return
     */
    @Override
    public User getUser(String username) {
        return null;
    }

    /**
     * register the user with username
     *
     * @param username
     * @return
     */
    @Override
    public boolean registerUser(String username) {
        return false;
    }

    /**
     * login?
     * @param username
     * @return
     */
    @Override
    public User authenticate(String username) {
        return null;
    }

    public double getScore(String username) {
    }

    /**
     * update the user's score
     *
     * @param username
     * @param score
     * @return
     */
    @Override
    public boolean UpdateUserScore(String username, int score) {
        return false;
    }
}