import React from "react";
import RatingStars from "./RatingStars";

export default function MovieCard({ movie, featured = false, styles }) {
  return (
    <div
      className={`rounded-md relative flex flex-col items-center transition-all duration-300 cursor-pointer ease-in-out justify-center gap-2 ${styles} ${
        featured && ""
      }`}
    >
      <div className="relative w-full h-full">
        {featured ? (
          <img
            src={`https://media.themoviedb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover rounded-2xl shadow-2xs "
          />
        ) : (
          <img
            src={`https://media.themoviedb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover rounded-2xl shadow-2xs "
          />
        )}
        {featured && (
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
        )}
      </div>
      {featured ? (
        <div className="absolute bottom-5 left-15 text-white flex-col items-center justify-center z-20 gap-2">
          <h2 className="text-4xl capitalize font-bold">{movie.title}</h2>
          <p className="text-lg opacity-90">{movie.description}</p>
          <RatingStars
            rating={movie.vote_average}
            size="text-lg"
            showNumeric={true}
            className="text-white"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 p-2">
          <h2 className="text-xl capitalize font-semibold text-center">
            {movie.title}
          </h2>
          <RatingStars
            rating={movie.vote_average}
            size="text-sm"
            showNumeric={false}
          />
        </div>
      )}
    </div>
  );
}
