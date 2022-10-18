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

  @Column(name = "game_id")
  private Integer gameId;

  @Column(name = "question")
  private String question;

  @Column(name = "answer")
  private String answer;

  @Column(name = "answered")
  private Boolean answered;

  public Question(Integer playerId, Integer gameId, String question, String answer, Boolean answered) {
    this.playerId = playerId;
    this.gameId = gameId;
    this.question = question;
    this.answered = answered;
  }

  public Integer getQuestionId() {
    return questionId;
  }

  public Integer getPlayerId() {
    return playerId;
  }

  public Integer getGameId() {
    return gameId;
  }

  public String getQuestion() {
    return question;
  }

  public String getAnswer() {
    return answer;
  }

  public Boolean getAnswered() {
    return answered;
  }

  public void setAnsweredToTrue() {
    answered = true;
  }
}
