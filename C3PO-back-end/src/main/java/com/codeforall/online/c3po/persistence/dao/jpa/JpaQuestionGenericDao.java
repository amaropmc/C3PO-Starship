package com.codeforall.online.c3po.persistence.dao.jpa;

import com.codeforall.online.c3po.model.Question;

public class JpaQuestionGenericDao extends JpaGenericDao<Question>{
    /**
     * Initialize a new JPA DAO instance given a question model
     *
     * @param modelType the model type
     */
    public JpaQuestionGenericDao(Class<Question> modelType) {
        super(modelType);
    }
}
