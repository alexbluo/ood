package com;

import javax.persistence.*;

@Entity
@Table(name = "questions")
public class Question {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer questionId;

  @Column(name = "player_id")
  private Integer playerId;

  @Column(name = "question")
  private String question;

  @Column(name = "answered")
  private Boolean answered;

  public Question(Integer playerId, String question, Boolean answered) {
    this.playerId = playerId;
    this.question = question;
    this.answered = answered;
  }

  public Integer getPlayerId() {
    return playerId;
  }

  public String getQuestion() {
    return question;
  }

  public Boolean getAnswered() {
    return answered;
  }
}
