package com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameController {

  @Autowired
  private GameRepository gameRepository; 

  @PostMapping("/game/create")
  public void createGame() {
    gameRepository.save(new Game());
  }
}
