import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Tile from "../components/Tile";

const Index = () => {
  const [round, setRound] = useState<number>(0);

  const {
    data: unsplash,
    isLoading: unsplashIsLoading,
    isError: unsplashIsError,
  } = useQuery(["unsplash"], async () => {
    const res = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&count=10&orientation=squarish`
    );
    console.log(res);

    return {
      url: res.data[round].urls.full,
      description: res.data[round].alt_description,
    };
  });

  const {
    data: dalle,
    isLoading: dalleIsLoading,
    isError: dalleIsError,
  } = useQuery(
    ["dalle"],
    async () => {
      const res = await axios.post(
        "https://api.openai.com/v1/images/generations",
        {
          prompt: `stock photo of ${unsplash!.description}`,
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

    if (type === "unsplash") {
      console.log("hi");
    }
  };

  if (unsplashIsError) return <div>error</div>;
  if (dalleIsError) return <div>error</div>;
  return (
    <div className="p-16">
      <div className="grid grid-cols-2 w-full border border-black">
        {!unsplashIsLoading &&
          !dalleIsLoading &&
          (Math.floor(Math.random() * 2) === 0 ? (
            <>
              <Tile
                src={unsplash!.url}
                alt={unsplash!.description}
                type="unsplash"
                onClick={handleTileClick}
                key={unsplash!.url}
              />
              <Tile
              src={dalle}
              alt={unsplash!.description}
              type="dalle"
              onClick={handleTileClick}
              key={dalle.url}
            />
            </>
          ) : (
            <>
              <Tile
              src={dalle}
              alt={unsplash!.description}
              type="dalle"
              onClick={handleTileClick}
              key={dalle.url}
            />
              <Tile
                src={unsplash!.url}
                alt={unsplash!.description}
                type="unsplash"
                onClick={handleTileClick}
                key={unsplash!.url}
              />
            </>
          ))}
      </div>
    </div>
  );
};

export default Index;
