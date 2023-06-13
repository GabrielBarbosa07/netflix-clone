import { useEffect, useState } from "react";
import fetcher from "../../../lib/fetcher";

import { AiOutlineInfoCircle } from "react-icons/ai";

interface MovieProps {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
}

const Billboard = () => {
  const [movie, setMovie] = useState<MovieProps>();

  useEffect(() => {
    fetcher("http://localhost:3000/api/random").then((response) => {
      setMovie(response);
    });
  }, []);

  return (
    <div className="relative h-[56.25vw]">
      <video
        poster={movie?.thumbnailUrl}
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
        src={movie?.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {movie?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {movie?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button
            className="
          bg-white
          text-white
            bg-opacity-30 
            rounded-md 
            py-1 md:py-2 
            px-2 md:px-4
            w-auto 
            text-xs lg:text-lg 
            font-semibold
            flex
            flex-row
            items-center
            justify-center
            hover:bg-opacity-20
            transition
          "
          >
            <AiOutlineInfoCircle className="mr-1" />
            Mais Informações
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
