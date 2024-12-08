package com.codeforall.online.c3po.command;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class PlayerDto {

    @NotNull(message = "Username is mandatory")
    @NotBlank(message = "Username is mandatory")
    @Size(min = 3, max = 64)
    private String username;
    private int score;

    private Long id;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getScore() {
        return score;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setScore(int score) {
        this.score = score;
    }


}
