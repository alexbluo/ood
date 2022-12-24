import { useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "react-query";
import Tile from "../components/Tile";

const Index = () => {
  const [round, setRound] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [end, setEnd] = useState<boolean>(false);
  const [rulesOpen, setRulesOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);

  const {
    data: unsplash,
    isLoading: unsplashIsLoading,
    isError: unsplashIsError,
    refetch,
  } = useQuery(["unsplash"], async () => {
    const res = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&count=25&orientation=squarish`
    );

    return res.data
      .map((image: any) => {
        return { url: image.urls.full, description: image.alt_description };
      })
      .filter((image: any) => image.description != null);
  });

  const {
    data: dalle,
    isLoading: dalleIsLoading,
    isError: dalleIsError,
  } = useQuery(
    ["dalle", round],
    async () => {
      const res = await axios.post(
        "https://api.openai.com/v1/images/generations",
        {
          prompt: `stock photo of ${unsplash[round].description}`,
          n: 1,
          size: "1024x1024",
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_DALLE_KEY}`,
          },
        }
      );

      return res.data.data[0].url;
    },
    { enabled: !unsplashIsLoading }
  );

  useEffect(() => {
    setPosition(Math.floor(Math.random() * 2));
  }, [round]);

  const handleTileClick = (type: string) => {
    setRound((prev) => prev + 1);

    if (type === "dalle") {
      setScore((prev) => prev + 1);
    }

    if (round === 4) {
      setEnd(true);
    }
  };

  const resetGame = () => {
    setRound(0);
    setScore(0);
    setEnd(false);
    refetch();
  };

  if (unsplashIsError) return <div>error</div>;
  if (dalleIsError) return <div>error</div>;
  if (unsplashIsLoading) return <div>loading...</div>;
  if (dalleIsLoading) return <div>loading...</div>;
  return (
    <div className="p-[10vw]">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">
          score: {score} / {round}
        </h1>
        <button
          className="rounded-full border border-black h-8 w-8"
          onClick={() => setRulesOpen(true)}
        >
          ?
        </button>
      </div>
      {end ? (
        <motion.div
          className="fixed top-0 left-0 z-50 flex h-[100vh] w-screen cursor-pointer items-center justify-center bg-black/20"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <motion.div
            className="w-1/2 max-w-[44rem] origin-bottom rounded-2xl bg-white text-black p-8"
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            Game over. Your final score was: {score} / {round}
          </motion.div>
          <button className="p-4 border-2 rounded-md" onClick={resetGame}>
            Play Again
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-2 w-full border border-black">
          {position === 0 ? (
            <>
              <Tile
                src={unsplash[round].url}
                alt={unsplash[round].description}
                type="unsplash"
                onClick={handleTileClick}
                key={unsplash[round].url}
              />
              <Tile
                src={dalle}
                alt={unsplash[round].description}
                type="dalle"
                onClick={handleTileClick}
                key={dalle.url}
              />
            </>
          ) : (
            <>
              <Tile
                src={dalle}
                alt={unsplash[round].description}
                type="dalle"
                onClick={handleTileClick}
                key={dalle.url}
              />
              <Tile
                src={unsplash[round].url}
                alt={unsplash[round].description}
                type="unsplash"
                onClick={handleTileClick}
                key={unsplash[round].url}
              />
            </>
          )}
        </div>
      )}
      {rulesOpen && (
        <motion.div
          className="fixed top-0 left-0 z-50 flex h-[100vh] w-screen cursor-pointer items-center justify-center bg-black/20"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          onTap={() => setRulesOpen(false)}
        >
          <motion.div
            className="w-1/2 max-w-[44rem] origin-bottom rounded-2xl bg-white text-black p-8"
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <p className="text-3xl font-bold">Rules:</p>
            <p>
              - Each round, two pictures will be displayed: one random image
              from Unsplash and another generated by DALL-E using the same
              prompt
            </p>
            <p>
              - Guess which image is generated by DALL-E in order to earn a
              point and proceed to the next round
            </p>
            <p>- Game ends after 5 rounds</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
