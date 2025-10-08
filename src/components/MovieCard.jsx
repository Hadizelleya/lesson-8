import React from "react";
import RatingStars from "./RatingStars";

export default function MovieCard({ movie, featured = false, styles }) {
  const stars = [0, 1, 2, 3, 4];

  return (
    <div
      className={`rounded-md relative flex flex-col items-center transition-all duration-300 cursor-pointer ease-in-out justify-center gap-2 ${styles} ${
        featured && ""
      }`}
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-full object-cover rounded-2xl shadow-2xs "
      />
      {featured ? (
        <div className="absolute bottom-5 left-15 text-(--color-white) flex-col items-center justify-center gap-2">
          <h2 className="text-4xl capitalize">{movie.title}</h2>
          <p>{movie.description}</p>
          <RatingStars rating={movie.rating} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-2xl capitalize">{movie.title}</h2>
          <RatingStars rating={movie.rating} />
        </div>
      )}
    </div>
  );
}
