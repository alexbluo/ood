package com;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlayerController {

  @GetMapping("/")
  public Player index() {
    return new Player(1, 1, "BUHMBO", 1);
  }

}
