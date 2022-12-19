import { useState } from "react";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import Tile from "../components/Tile";

const Index = () => {
  const { round, setRound } = useState(0);

  // const {
  //   data: unsplash,
  //   isLoading: unsplashIsLoading,
  //   isError: unsplashIsError,
  // } = useQuery(["unsplash"], async () => {
  //   const res = await axios.get(
  //     `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&count=10&orientation=squarish`
  //   );

  //   console.log(res);
  //   return {
  //     url: res.data[round].urls.full,
  //     description: res.data[round].alt_description,
  //   };
  // });
  const unsplash = {
    url: "https://images.unsplash.com/photo-1670969490504-0f1be0abfc90?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    description:
      "a christmas card with a picture of a christmas tree and a white box",
  };

  // TODO: wait for unsplash
  const {
    data: dalle,
    isLoading: dalleIsLoading,
    isError: dalleIsError,
  } = useQuery(
    ["dalle"],
    async () => {
      const res = await axios.post(
        "https://api.openai.com/v1/images/generations",
        { prompt: unsplash!.description, n: 1, size: "1024x1024" },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_DALLE_KEY}`,
          },
        }
      );

      return res.data[0].url;
    }
    // { enabled: !unsplashIsLoading }
  );

  // if (unsplashIsError) return <div>error</div>;
  if (dalleIsError) return <div>error</div>;
  return (
    <div className="p-16">
      <div className="grid grid-cols-2 w-full border border-black">
        {!dalleIsLoading && (
          <>
            <Tile
              src={unsplash!.url}
              alt={unsplash!.description}
              type="unsplash"
              key={unsplash!.url}
            />
            <Tile
              src={dalle.url}
              alt={unsplash.description}
              type="dalle"
              key={dalle.url}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
