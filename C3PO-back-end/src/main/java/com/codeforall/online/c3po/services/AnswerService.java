package com.codeforall.online.c3po.services;

import com.codeforall.online.c3po.exceptions.AnswerNotFoundException;
import com.codeforall.online.c3po.model.Answer;

import java.util.List;
import java.util.Set;

/**
 * Common interface for answer service, provides methods to deal with answers
 */
public interface AnswerService {

    /**
     * Retrieves an answer by its id
     * @param answerId
     * @return
     * @throws AnswerNotFoundException
     */
    Answer getAnswerById(long answerId) throws AnswerNotFoundException;

    /**
     * Retrieves  alist of all registered questions
     * @return list of questions
     */
    List<Answer> getAllAnswers();


}