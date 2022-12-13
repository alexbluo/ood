import { FormEvent, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { NextPage } from "next";
import { useMutation, useQuery } from "react-query";

interface Player {
  username: string;
  points?: number;
}

interface Question {
  question: string;
  answer: string;
}

const Home: NextPage = () => {
  const [guess, setGuess] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [newPlayer, setNewPlayer] = useState("Guest");
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [winner, setWinner] = useState("");

  const { data: question, refetch: refetchQuestion } = useQuery(
    ["question"],
    async () => {
      const res = await axios.get(`/api/question/next`);

      return res.data;
    }
  );

  const { data: players, refetch: refetchPlayers } = useQuery(
    ["players"],
    async () => {
      const res = await axios.get("/api/player/all");

      return res.data;
    }
  );

  const createPlayer = useMutation((player: Player) =>
    axios.post("/api/player/create", {
      username: player.username,
    })
  );

  const createQuestion = useMutation((q: Question) =>
    axios.post("/api/question/create", {
      question: q.question,
      answer: q.answer,
    })
  );

  const handleCreatePlayer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPlayer === "") return;
    createPlayer.mutate(
      { username: newPlayer },
      {
        onSuccess: (data: AxiosResponse<any, any>) => {
          if (data.data) {
            refetchPlayers();
          }
        },
      }
    );
  };

  const handleCreateQuestion = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createQuestion.mutate(
      { question: newQuestion, answer: newAnswer },
      {
        onSuccess: () => {
          if (!question) refetchQuestion();
        },
      }
    );
    setNewQuestion("");
    setNewAnswer("");
  };

  const handleGuessSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question) return;

    const res = await axios.get("/api/question/check", {
      params: {
        guess,
        player: currentPlayer,
      },
    });

    if (res.data) {
      await axios.post("/api/player/increment", { username: currentPlayer });
      refetchPlayers();
      refetchQuestion();
      const check = await axios.get("/api/player/checkWinner");
      if (check.data !== "") {
        setWinner(check.data);
      }
    }
  };

  const reset = async () => {
    await axios.post("/api/player/reset");
    await axios.post("/api/question/reset");
    refetchPlayers();
    refetchQuestion();
    setWinner("");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center p-16">
      <h1 className="mb-16 text-center text-4xl font-bold">Guess the Quote</h1>
      <h2 className="mb-16 text-center text-3xl font-bold">
        {question && winner === "" ? `"${question.question}"` : "Please enter a quote!"}
      </h2>
      {winner !== "" && (
        <>
          <h2 className="text-center text-3xl font-bold">{winner} Won!</h2>
          <button
            className="mb-8 w-32 rounded-full border-2 border-black p-4"
            onClick={reset}
          >
            Reset
          </button>
        </>
      )}
      <form onSubmit={handleGuessSubmit}>
        <label className="block text-center">Guess</label>
        <input
          className="mb-8 rounded-md border-2 border-black p-2"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <input
          className="mb-8 block aspect-square h-12 w-full cursor-pointer rounded-full border-2 border-black"
          type="submit"
          value="Submit Guess"
        />
      </form>
      <form onSubmit={handleCreateQuestion}>
        <label className="block text-center">New Quote</label>
        &quot;
        <input
          className="mb-8 rounded-md border-2 border-black p-2"
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        &quot; -&nbsp;&nbsp;
        <input
          className="mb-8 rounded-md border-2 border-black p-2"
          type="text"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <input
          className="mb-8 block aspect-square h-12 w-full cursor-pointer rounded-full border-2 border-black"
          type="submit"
          value="Submit Quote"
        />
      </form>
      <div className="fixed left-0 top-0 p-8">
        <h2>Rules:</h2>
        <p>- Guess which player said the stupid/weird thing (probably orhan)</p>
        <p>- First to guess correctly gets a point</p>
        <p>- First player to 3 points wins</p>
      </div>
      <div className="fixed top-0 right-0 p-8">
        <h2>Players (click on a name to play as that person)</h2>
        <p>Currently playing as: {currentPlayer}</p>
        <form onSubmit={handleCreatePlayer}>
          <label className="mt-4 block text-center">New Player:</label>
          <input
            className="mb-8 w-full rounded-md border-2 border-black p-2"
            type="text"
            value={newPlayer}
            onChange={(e) => setNewPlayer(e.target.value)}
          />
          <input
            className="mb-8 block aspect-square h-12 w-full cursor-pointer rounded-full border-2 border-black"
            type="submit"
            value="Add Player"
          />
        </form>
        {players &&
          players.map((player: Player) => {
            return (
              <button
                className="block"
                key={player.username}
                onClick={() => setCurrentPlayer(player.username)}
              >
                {player.username}: {player.points} points
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
