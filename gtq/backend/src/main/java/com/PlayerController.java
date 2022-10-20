package com;

import java.util.ArrayList;

import javax.net.ssl.HttpsURLConnection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlayerController {

  Logger logger = LoggerFactory.getLogger(PlayerController.class);

  ArrayList<Player> players = new ArrayList<>();
  // keep list of players
  // allow add on the screen idk scuffed but whatever
  //

  @GetMapping("/player/all")
  public ArrayList<Player> getAllPlayers() {
    return players;
  }

  @PostMapping("/player/increment")
  public void increment(@RequestBody Player player) {
    for (Player p : players) {
      if (p.getUsername().equals(player.getUsername()))
        p.setPoints(p.getPoints() + 1);
    }
  }

  @PostMapping("/player/create")
  public boolean createPlayer(@RequestBody Player player) {
    for (Player p : players) {
      if (p.getUsername().equals(player.getUsername())) {
        return false;
      }
    }

    players.add(player);

    return true;
  }

  @GetMapping("/player/checkWinner")
  public String checkWinner() {
    for (Player p : players) {
      if (p.getPoints() == 3)
        return p.getUsername();
    }

    return "";
  }

  @PostMapping("/player/reset")
  public void resetPlayers() {
    for (Player p : players) {
      p.setPoints(0);
    }
  }
}
