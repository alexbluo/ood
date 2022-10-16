package com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameController {

  @Autowired
  private GameRepository gameRepository;

  @PostMapping("/game/create")
  public ResponseEntity<Game> createGame() {
    gameRepository.save(new Game());
    try {
      Game _game = gameRepository
          .save(new Game());
      return new ResponseEntity<>(_game, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
