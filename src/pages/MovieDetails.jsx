import React from "react";
import { useParams } from "react-router-dom";
import { useFetchHook } from "../hooks/useFetchHook";
import { RingLoader } from "react-spinners";
import RatingStars from "../components/RatingStars";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "6bcfb89bb3de7bbf30554d493425ca3d";
export default function MovieDetails() {
  const { id } = useParams();

  const {
    data: movie,
    isLoading,
    error,
  } = useFetchHook(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`
  );

  console.log(movie);
  console.log(id);

  if (isLoading)
    return (
      <div className="w-full flex h-screen items-center justify-center ">
        <RingLoader size={100} color="red" />
      </div>
    );

  if (error) return <h2>{error.message}</h2>;

  return (
    <div className="p-5 px-30 flex items-start justify-between gap-30">
      <div>
        <img
          src={`https://media.themoviedb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          className="w-full max-w-[500px] h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col gap-3 items-center justify-center">
          <h1 className="text-4xl text-wrap text-red-500">{movie.title}</h1>
          <p className="text-2xl text-gray-500">{movie.tagline}</p>
        </div>

        <div className="flex items-center justify-between w-full">
          <RatingStars rating={movie.vote_average} size="text-xl" />
          <p className="text-xl">
            {movie.runtime} min / {movie.release_date}
          </p>
        </div>

        <div>{/* genres should be here */}</div>
        <div>
          <h2 className="text-xl">Overview</h2>
          <p className="text-lg text-gray-500">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
