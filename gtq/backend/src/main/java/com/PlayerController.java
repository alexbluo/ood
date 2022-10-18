package com;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlayerController {

  @Autowired
  private PlayerRepository playerRepository;

  @GetMapping("/player")
  public Player index() {
    return new Player(1, "BUHMBO", 1);
  }

  @PostMapping("/player/create")
  public ResponseEntity<Player> createPlayer(@RequestBody Player player) {
    try {
      Player _player = playerRepository
          .save(new Player(player.getGameId(), player.getUsername()));
      return new ResponseEntity<>(_player, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PostMapping("/player/increment")
  public ResponseEntity<Player> incrementPlayer(@RequestBody Integer playerId) {
    try {
      Optional<Player> _player = playerRepository.findById(playerId);
      _player.get().increment();

      return new ResponseEntity<>(_player.get(), HttpStatus.CREATED);
    } catch (Exception e) {

      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
