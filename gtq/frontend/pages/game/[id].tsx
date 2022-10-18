import { useState } from "react";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";

interface Question {
  question: string;
  playerId: string;
  gameId: string;
  answer: string;
  answered: boolean;
}

const Game: NextPage = () => {
  const [guess, setGuess] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const router = useRouter();
  const { id } = router.query;
  const { userId } = router.query;

  const { data: question } = useQuery(["question"], async () => {
    const res = await axios.get(`/api/question/${id}`);

    return res.data;
  });

  const createQuestion = useMutation(() => axios.post("/api/question/create", {})); 

  const handleGuessSubmit = () => {};

  const handleQuestionSubmit = () => {};

  return (
    <div className="flex h-screen flex-col items-center justify-center p-16">
      <h1 className="mb-16 text-center text-4xl font-bold">Guess the Quote</h1>
      <label className="block text-center">Name</label>
      <form onSubmit={handleGuessSubmit}>
        <label className="block text-center">Guess</label>
        <input
          className="mb-8 rounded-md border-2 border-black p-2"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
      </form>
      <form onSubmit={handleQuestionSubmit}>
        <label className="block text-center">
          New Question Suggestion (will be placed in a queue)
        </label>
        <input
          className="mb-8 rounded-md border-2 border-black p-2"
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <input
          className="mb-8 rounded-md border-2 border-black p-2"
          type="text"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <input
          className="mb-8 block aspect-square h-12 w-full cursor-pointer rounded-full border-2 border-black"
          type="submit"
          value="SUBMIT"
        />
      </form>
    </div>
  );
};

export default Game;
