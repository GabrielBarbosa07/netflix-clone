"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "./loading";
import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";
import MovieList from "./components/MovieList";
import fetcher from "../../lib/fetcher";

export default function Home() {
  const { push } = useRouter();
  const { data: session, status } = useSession();

  const [movies, setMovies] = useState([]);

  {
    status !== "authenticated" && <Loading />;
  }

  if (status === "unauthenticated") {
    <Loading />;
    push("/auth");
  }

  useEffect(() => {
    fetcher("http://localhost:3000/api/movies").then((response) => {
      setMovies(response);
    });
  }, []);

  return (
    <>
      {status === "authenticated" && (
        <>
          <Navbar />
          <Billboard />
          <div className="pb-40">
            <MovieList title="Tendência Agora" data={movies} />
          </div>
        </>
      )}
    </>
  );
}
