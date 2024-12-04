package com.codeforall.online.c3po.services;

import com.codeforall.online.c3po.model.Answer;
import com.codeforall.online.c3po.persistence.dao.AnswerDao;
import com.codeforall.online.c3po.persistence.managers.TransactionManager;
import org.junit.Before;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.spy;

public class AnswerServiceImplTest {

    //SUT
    private AnswerServiceImpl answerServiceImpl;

    //DOC
    private TransactionManager transactionManager;
    private AnswerDao answerDao;

    @Before
    public void setup() {
        answerServiceImpl = spy(AnswerServiceImpl.class);

        transactionManager = mock(TransactionManager.class);
        answerDao = mock(AnswerDao.class);

        answerServiceImpl.setTransactionManager(transactionManager);
        answerServiceImpl.setAnswerDao(answerDao);

    }

    private Answer fakeAnswer(int answerId) {
        Answer answer = new Answer();
         answer.setId(answerId);
         return answer;

    }


}
