import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Tile from "../components/Tile";

const Index = () => {
  // const {
  //   data: unsplash,
  //   error,
  //   isLoading,
  //   isError,
  // } = useQuery(["unsplash"], async () => {
  //   const res = await axios.get(
  //     `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&count=23&orientation=squarish`
  //   );

  //   return res.data.map((image: any) => {
  //     return image.urls.full;
  //   });
  // });

  const unsplash = [
    "https://images.unsplash.com/photo-1668700287442-59…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1668449003991-42…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669050589643-a0…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669846510648-95…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669720020306-cb…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1670481382179-39…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1670845494093-0b…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1670705848498-02…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1667736697093-b4…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1668066826983-2b…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669650853522-fe…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669501084883-85…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1670362246724-ce…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669484179894-4c…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669307260367-8d…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669390412953-67…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669725337418-f8…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669721166543-de…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1668202190149-43…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1670348282804-a6…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1667833183058-c1…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669406780538-e5…RvbXx8fHx8fHx8fDE2NzA5NDc1ODA&ixlib=rb-4.0.3&q=80",
  ];

  // choose random number 1-24, if equals random in map then dalle
  return (
    <div className="p-16">
      <div className="grid grid-cols-6 grid-rows-4 w-full border border-black">
        {unsplash.map((image) => (
          <Tile src={image} />
        ))}
        idk man
      </div>
    </div>
  );
};

export default Index;
