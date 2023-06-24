"use client";

import { AiOutlineArrowLeft } from "react-icons/ai";
import useMovie from "../../../../hooks/useMovie";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Watch = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  const splitUrl = pathname.split("/");

  const movieId = splitUrl[splitUrl.length - 1];

  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          size={40}
          onClick={() => push("/")}
          className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition font-bold"
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Assistindo:</span>{" "}
          {data?.title ? data.title : "carregando.."}
        </p>
      </nav>

      <video
        className="h-full w-full"
        autoPlay
        controls
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Watch;
