package com.codeforall.online.c3po.model;

import jakarta.persistence.*;

import java.util.List;

/**
 * A class that represents the questions that are part of a quiz
 */
@Entity
@Table(name = "questions")
public class Question extends AbstractModel {
    private String description;
    @OneToMany(
            cascade = {CascadeType.ALL},
            orphanRemoval = true,
            mappedBy = "question",
            fetch = FetchType.LAZY
    )
    private List<Answer> answers;
    private Integer score;
    @ManyToOne
    private Planet planet;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public Planet getPlanet() {
        return planet;
    }

    public void setPlanet(Planet planet) {
        this.planet = planet;
    }
}
