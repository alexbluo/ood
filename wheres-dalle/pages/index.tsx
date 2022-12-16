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

  // TODO: could do one or the other image variation
  const unsplash = [
    "https://images.unsplash.com/photo-1670969490504-0f1be0abfc90?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1668449003991-42e6e9e635ec?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669406780538-e57f8c0b248e?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1670705848498-0253286bae3a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1667833183058-c13008862b87?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669720020306-cb84c67b5e97?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669484179894-4cfb13b51b7d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669650853522-fe5a4b89a119?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669501084883-85849ad2d40f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669725337418-f81459093abd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1667736697093-b42d29d0dc73?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1670481382179-3968ad563542?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669390412953-677ec75ae6d0?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1668202190149-43b18156d5f4?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669050589643-a06e01d7391e?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1670944662141-d3753516873c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669846510648-95ffffb8e269?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669307260367-8d5e7d61b9b9?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1670991761566-534b07539db5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1669721166543-de1035adc9cf?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1670362246724-ce120df90392?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1670845494093-0bd5704e1e0d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1670348282804-a66da753b87e?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODkyNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzExMjU0NjM&ixlib=rb-4.0.3&q=80",
  ];

  // choose random number 1-24, if equals random in map then dalle
  // if (isError) return <div>error</div>
  return (
    <div className="p-16">
      <div className="grid grid-cols-6 grid-rows-4 w-full border border-black">
        {/*! isLoading && */ unsplash.map((image) => (
          <Tile src={image} alt={image} type="unsplash" key={image} />
        ))}
      </div>
    </div>
  );
};

export default Index;
