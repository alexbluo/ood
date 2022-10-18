import { useEffect, useState } from "react";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";

interface Player {
  gameId: string;
  username: string;
}

const Home: NextPage = () => {
  const [username, setUsername] = useState<string>("");
  const [gameId, setGameId] = useState<string>("");

  // reject if: same username and same join game id already exist
  const createPlayer = useMutation((player: Player) =>
    axios.post("/api/player/create", {
      gameId: player.gameId,
      username: player.username,
    })
  );

  const createGame = useMutation(() => axios.post("api/game/create"));

  const handleSubmit = () => {
    createPlayer.mutate({ gameId, username });
  };

  const handleCreateGame = () => {
    createGame.mutate();
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center p-16">
      <h1 className="mb-16 text-center text-4xl font-bold">Guess the Quote</h1>
      <label className="block text-center">Name</label>
      <input
        className="mb-8 rounded-md border-2 border-black p-2"
        type="text"
        value={username}
        placeholder="Guest"
        onChange={(e) => setUsername(e.target.value)}
      />
      <form onSubmit={handleSubmit}>
        <label className="block text-center">Game Code</label>
        <input
          className="mb-8 rounded-md border-2 border-black p-2"
          type="number"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
        />
        <input
          className="mb-8 block aspect-square h-12 w-full cursor-pointer rounded-full border-2 border-black"
          type="submit"
          value="GO!"
        />
      </form>
      <span className="block text-center">OR</span>
      <button className="rounded-md border-2 border-black p-4">
        Create Game
      </button>
      {/* <span>put error here based on res</span> */}
    </div>
  );
};

export default Home;
