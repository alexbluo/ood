package com;

public class Player {
  private final int playerId;
  private final int gameId;
  private final String username;
  private final int points;

  public Player(int playerId, int gameId, String username, int points) {
    this.playerId = playerId;
    this.gameId = gameId;
    this.username = username;
    this.points = points;
  }

  public int getPlayerId() {
    return playerId;
  }

  public int getGameId() {
    return gameId;
  }

  public String getUsername() {
    return username;
  }

  public int getPoints() {
    return points;
  }
}
