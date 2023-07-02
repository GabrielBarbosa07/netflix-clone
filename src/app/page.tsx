"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Loading from "./loading";
import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";
import MovieList from "./components/MovieList";
import InfoModal from "./components/InfoModal";

import useMovieList from "../../hooks/useMovieList";
import useFavorites from "../../hooks/useFavorites";
import useInfoModal from "../../hooks/useInfoModal";

export const dynamic = "force-dynamic"

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

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
        <main>
          <InfoModal visible={isOpen} onClose={closeModal} />
          <Navbar />
          <Billboard />
          <div className="max-[496px]:py-12 max-[310px]:py-20">
            <MovieList title="Tendência Agora" data={movies} />
            <MovieList title="Minha Lista" data={favorites} />
          </div>
        </main>
      )}
    </>
  );
}
