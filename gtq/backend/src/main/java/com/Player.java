package com;

public class Player {
  private String username;

  private int points;

  public Player(String username, int points) {
    this.username = username;
    this.points = 0;
  }

  public String getUsername() {
    return username;
  }

  public int getPoints() {
    return points;
  }

  public void setPoints(int points) {
    this.points = points;
  }
}
