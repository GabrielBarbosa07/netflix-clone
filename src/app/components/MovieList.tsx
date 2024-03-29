import React from "react";

// import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

export interface MovieProps {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  genre: string;
}

interface MovieListProps {
  data: any;
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data = [], title = "" }) => {
  if (!data.length) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie: any) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
