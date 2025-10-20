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

  const actors = movie?.credits?.cast;

  console.log(movie);
  console.log(id);

  if (isLoading)
    return (
      <div className="w-full flex h-screen items-center justify-center ">
        <RingLoader size={100} color="red" />
      </div>
    );

  if (error) return <h2>{error.message}</h2>;

  console.log(actors);
  return (
    <div className="p-5 px-30 flex items-start justify-between gap-30 shadow-2xl">
      <div className=" rounded-2xl">
        <img
          src={`https://media.themoviedb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          className="w-full max-w-[500px] h-full object-cover rounded-2xl  shadow-md shadow-black "
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col gap-3 items-center justify-center">
          <h1 className="text-4xl text-wrap text-red-500">{movie.title}</h1>
          <p className="text-2xl text-gray-500">{movie.tagline}</p>
        </div>

        <div className="flex items-center justify-between w-full">
          <RatingStars rating={movie.vote_average.toFixed(1)} size="text-xl" />
          <p className="text-xl">
            {movie.runtime} min / {movie.release_date}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 justify-between items-center w-full">
          {movie.genres.map((genre) => (
            <div key={genre.id} className="text-center">
              <p className="text-(--color-dark-gray)">{genre.name}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl">Overview</h2>
          <p className="text-lg text-gray-500">{movie.overview}</p>
        </div>

        <div className="w-full h-full">
          <h2 className="text-xl">Top Cast</h2>
          <div className="grid grid-cols-6 w-full items-center h-full justify-between gap-10">
            {actors?.slice(0, 6)?.map((actor) => (
              <div
                key={actor.id}
                className="flex flex-col items-start h-full w-full justify-center "
              >
                <img
                  src={`https://media.themoviedb.org/t/p/original/${actor.profile_path}`}
                  alt={actor.name}
                  className="w-[130px] h-[130px] rounded-2xl object-cover shadow-md"
                />
                <div>
                  <h4>{actor.name}</h4>
                  <p>{actor.character}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
