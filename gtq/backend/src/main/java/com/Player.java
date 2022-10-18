package com;

import javax.persistence.*;

@Entity
@Table(name = "players")
public class Player {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "player_id")
  private Integer playerId;

  @Column(name = "game_id")
  private Integer gameId;

  @Column(name = "username")
  private String username;

  @Column(name = "points")
  private Integer points;

  public Player() {
    this.username = "Guest";
    this.points = 0;
  }

  public Player(Integer gameId) {
    this.gameId = gameId;
    this.username = "Guest";
    this.points = 0;
  }

  public Player(Integer gameId, String username) {
    this.gameId = gameId;
    this.username = username;
    this.points = 0;
  }

  public Player(Integer gameId, String username, Integer points) {
    this.gameId = gameId;
    this.username = username;
    this.points = points;
  }

  public Integer getPlayerId() {
    return playerId;
  }

  public Integer getGameId() {
    return gameId;
  }

  public String getUsername() {
    return username;
  }

  public Integer getPoints() {
    return points;
  }

  public void increment() {
    points++;
  }
}
