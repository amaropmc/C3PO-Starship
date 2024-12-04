package com.codeforall.online.c3po.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

/**
 * Class that represents a planet the user can travel to
 */
@Entity
@Table(name = "planets")
public class Planet extends AbstractModel {

    @Column(nullable = false)
    private String name;
    @OneToMany(
            cascade = {CascadeType.ALL},
            orphanRemoval = false,
            mappedBy = "planet",
            fetch = FetchType.EAGER
    )
    private Set<Question> questions = new HashSet<>();

    public void addQuestion(Question question) {
        this.questions.add(question);
        question.setPlanet(this);
    }

    public void removeQuestion(Question question) {
        this.questions.remove(question);
        question.setPlanet(null);
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }
}
