package com.codeforall.online.c3po.services;

import com.codeforall.online.c3po.exceptions.PlayerAlreadyExistsException;
import com.codeforall.online.c3po.exceptions.PlayerNotFoundException;
import com.codeforall.online.c3po.model.Player;
import com.codeforall.online.c3po.persistence.dao.PlayerDao;
import com.codeforall.online.c3po.persistence.managers.TransactionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerServiceImpl implements PlayerService {

    private TransactionManager transactionManager;
    private PlayerDao playerDao;

    /**
     * Get the user by username
     *
     * @param username
     * @return
     */
    @Override
    public Player getPlayer(String username) throws PlayerNotFoundException {
        Player player = playerDao.findByUsername(username);

        if (player == null) {
            throw new PlayerNotFoundException();
        }
        return player;
    }

    public List<Player> listAllPlayers() throws PlayerNotFoundException {

        List<Player> players = playerDao.findAll();

        if (players.isEmpty()) {
            throw new PlayerNotFoundException();
        }

        return players;
    }

    /**
     * register the user with username
     *
     * @param username
     * @return
     */
    @Override
    public boolean registerPlayer(String username) {
        if (username == null || username.isEmpty()) {
            throw new IllegalArgumentException("Username cannot be null or empty");
        }

        try {
            transactionManager.beginWrite();

            Player existingPlayer = playerDao.findByUsername(username);

            if (!existingPlayer.equals(existingPlayer)) {
                existingPlayer = new Player();

                existingPlayer.setUsername(username);
                playerDao.saveOrUpdate(existingPlayer);

                transactionManager.commit();
                System.out.print("UserService registered successfully" + username);
                return true;
            } else {
                transactionManager.rollBack();
                throw new PlayerAlreadyExistsException("Username already exists");
            }

        } catch (Exception e) {
            transactionManager.rollBack();
            return false;
        }
    }

    /**
     * login?
     *
     * @param username
     * @return
     */
    @Override
    public boolean authenticate(String username) {
        if (username == null || username.isEmpty()) {
            throw new IllegalArgumentException("Username cannot be null or empty");
        }

        try {

            transactionManager.beginWrite();

            Player player = playerDao.findByUsername(username);

            if (player == null) {
                transactionManager.rollBack();
                System.out.println("Username not found");
                return false;
            }

            transactionManager.commit();
            return true;
        } catch (Exception e) {
            transactionManager.rollBack();
            return false;
        }
    }

    /**
     * @param username
     * @return
     */
    @Override
    public int getTotalScore(String username) throws PlayerNotFoundException {
        Player player = playerDao.findByUsername(username);

        if(player == null) {
            throw new PlayerNotFoundException();
        }

        return player.getTotalScore() != null ? player.getTotalScore() : 0;
    }

    /**
     * update the user's score
     *
     * @param username
     * @param newScore
     * @return
     */
    @Override
    public boolean UpdatePlayerScore(String username, int newScore) {
        Player player = playerDao.findByUsername(username);

        try {
            transactionManager.beginWrite();

            if (!player.equals(playerDao.findByUsername(username))) {
               throw new PlayerNotFoundException();
            }

            if(newScore > (player.getTotalScore() != null ? player.getTotalScore() : 0)) {
                player.setTotalScore(newScore);
                playerDao.saveOrUpdate(player);
            }

            transactionManager.commit();
        } catch (Exception e) {
            transactionManager.rollBack();
            return false;
        }
        return true;
    }

    @Autowired
    public void setPlayerDao(PlayerDao playerDao) {
        this.playerDao = playerDao;
    }

    @Autowired
    public void setTransactionManager(TransactionManager transactionManager) {
        this.transactionManager = transactionManager;
    }
}