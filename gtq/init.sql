CREATE DATABASE gtq;

CREATE TABLE IF NOT EXISTS games (
  game_id serial PRIMARY KEY UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS players (
  player_id serial PRIMARY KEY UNIQUE NOT NULL,
  game_id serial NOT NULL,
  username VARCHAR (50),
  points VARCHAR (50),
  FOREIGN KEY (game_id)
    REFERENCES games (game_id)
);

CREATE TABLE IF NOT EXISTS questions (
  question_id serial PRIMARY KEY UNIQUE NOT NULL,
  player_id serial NOT NULL,
  game_id serial NOT NULL,
  question text NOT NULL,
  answered boolean NOT NULL,
  FOREIGN KEY (player_id)
    REFERENCES players (player_id),
  FOREIGN KEY (game_id)
    REFERENCES players (player_id)
)