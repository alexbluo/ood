import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Tile from "../components/Tile";

const Index = () => {
  const [round, setRound] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [end, setEnd] = useState<boolean>(false);

  const {
    data: unsplash,
    isLoading: unsplashIsLoading,
    isError: unsplashIsError,
    refetch,
  } = useQuery(["unsplash"], async () => {
    const res = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&count=25&orientation=squarish&9218743`
    );

    return res.data
      .map((image: any) => {
        return { url: image.urls.full, description: image.alt_description };
      })
      .filter((image: any) => image.description != null);
  });
  console.log(unsplash?.length);

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
    refetch();
  };

  if (unsplashIsError) return <div>error</div>;
  if (dalleIsError) return <div>error</div>;
  return (
    <div className="p-[10vw]">
      <h1 className="text-3xl">
        score: {score} / {round}
      </h1>
      <div className="grid grid-cols-2 w-full border border-black">
        {!unsplashIsLoading &&
          !dalleIsLoading &&
          (Math.floor(Math.random() * 2) === 0 ? (
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
          ))}
      </div>
    </div>
  );
};

export default Index;
