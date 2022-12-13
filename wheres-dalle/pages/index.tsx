import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const Index = () => {
  const {
    data: unsplash,
    error,
    isLoading,
    isError,
  } = useQuery(["unsplash"], async () => {
    const res = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&count=23&orientation=squarish`
    );

    console.log(res);

    return res.data.map((image: any) => {
      return image.urls.full;
    });
  });

  // choose random number 1-24, if equals random in map then dalle
  return (
    <div className="p-16">
      <div className="grid grid-cols-6 grid-rows-4 w-full border border-black">
        idk man
      </div>
    </div>
  );
};

export default Index;
