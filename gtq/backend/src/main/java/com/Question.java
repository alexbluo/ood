package com;

import javax.persistence.*;

@Entity
@Table(name = "questions")
public class Question {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer questionId;

  @Column(name = "game_id")
  private Integer gameId;

  @Column(name = "player_id")
  private Integer playerId;

  @Column(name = "question")
  private String question;

  @Column(name = "answered")
  private Boolean answered;

  public Question(Integer questionId, Integer gameId, Integer playerId, String question, Boolean answered) {
    this.questionId = questionId;
    this.gameId = gameId;
    this.playerId = playerId;
    this.question = question;
    this.answered = answered;
  }
}
