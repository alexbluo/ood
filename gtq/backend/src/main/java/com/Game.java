package com;

import javax.persistence.*;

@Entity
@Table(name = "games")
public class Game {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "game_id")
  private Integer gameId; 
}
