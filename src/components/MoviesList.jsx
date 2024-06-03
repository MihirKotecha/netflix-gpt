import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="p-4 overflow-x-hidden">
      <div className="text-4xl mb-4 text-white">{title}</div>
      <div className="flex  hover:overflow-x-scroll ">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard backdrop_path={movie.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
