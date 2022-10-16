package com;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
  public void createPlayer() {
    playerRepository.save(new Player(2, "Alex", 216));
  }
}
