package com;

import java.sql.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlayerController {
  private static final Connection CON = connect();

  /**
   * Establishes a connection to the server with the specified URL, USERNAME, and
   * PASSWORD.
   * 
   * @return a connection to the server with the specified URL, USERNAME, and
   *         PASSWORD.
   */
  private static Connection connect() {
    final String URL = "jdbc:postgresql://localhost:5432/gtq";
    final String USERNAME = "alexbluo";
    final String PASSWORD = "";

    Connection c = null;
    try {
      c = DriverManager.getConnection(URL, USERNAME, PASSWORD);
    } catch (SQLException ex) {
      ex.printStackTrace();
    }
    return c;
  }

  @GetMapping("/")
  public Player index() {

    return new Player(1, 1, "BUHMBO", 1);
  }

}
