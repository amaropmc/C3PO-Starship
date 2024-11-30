package com.codeforall.online.c3po.model;

import jakarta.persistence.*;

import java.util.List;

/**
 * Class that represents a planet the user can travel to
 */
@Entity
@Table(name = "planets")
public class Planet extends AbstractModel{

    @Column(nullable = false)
    private String name;
    @OneToMany(
            cascade = {CascadeType.ALL},
            orphanRemoval = false,
            mappedBy = "planet",
            fetch = FetchType.LAZY
    )
    private List<Question> questions;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }
}
