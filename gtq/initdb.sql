SELECT 'CREATE DATABASE gtq'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'gtq')\gexec

CREATE TABLE IF NOT EXISTS games (
  game_id serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS players (
  player_id serial PRIMARY KEY NOT NULL,
  game_id serial NOT NULL,
  username VARCHAR (50),
  points VARCHAR (50),
  FOREIGN KEY (game_id)
    REFERENCES games (game_id)
);