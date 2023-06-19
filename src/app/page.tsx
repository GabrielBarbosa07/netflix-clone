"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Loading from "./loading";
import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";
import MovieList from "./components/MovieList";

import useMovieList from "../../hooks/useMovieList";
import useFavorites from "../../hooks/useFavorites";

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  const { push } = useRouter();
  const { status } = useSession();

  {
    status !== "authenticated" && <Loading />;
  }

  if (status === "unauthenticated") {
    push("/auth");
  }

  return (
    <>
      {status === "authenticated" && (
        <>
          <Navbar />
          <Billboard />
          <div className="pb-40">
            <MovieList title="Tendência Agora" data={movies} />
            <MovieList title="Minha Lista" data={favorites} />
          </div>
        </>
      )}
    </>
  );
}
