import React from "react";
import sonicLogo from "../assets/image.png";
import MovieCard from "../components/MovieCard";
import conjuringImage from "../assets/image copy.png";
const movies = [
  {
    id: crypto.randomUUID(),
    title: "sonic the hedgehog",
    rating: 10,
    image: sonicLogo,
  },
  {
    id: crypto.randomUUID(),
    title: "sonic the hedgehog",
    rating: 10,
    image: sonicLogo,
  },
  {
    id: crypto.randomUUID(),
    title: "sonic the hedgehog",
    rating: 10,
    image: sonicLogo,
  },
  {
    id: crypto.randomUUID(),
    title: "sonic the hedgehog",
    rating: 10,
    image: sonicLogo,
  },
  {
    id: crypto.randomUUID(),
    title: "sonic the hedgehog",
    rating: 10,
    image: sonicLogo,
  },
  {
    id: crypto.randomUUID(),
    title: "sonic the hedgehog",
    rating: 7,
    image: sonicLogo,
  },
  {
    id: crypto.randomUUID(),
    title: "sonic the hedgehog",
    rating: 7,
    image: sonicLogo,
  },
  {
    id: crypto.randomUUID(),
    title: "sonic the hedgehog",
    rating: 7,
    image: sonicLogo,
  },
  {
    id: crypto.randomUUID(),
    title: "sonic the hedgehog",
    rating: 7,
    image: sonicLogo,
  },
];

const featuredMovie = {
  id: crypto.randomUUID(),
  title: "the conjuring",
  image: conjuringImage,
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quas?`,
  rating: 10,
};
export default function Movies() {
  return (
    <>
      <div>
        <MovieCard
          movie={featuredMovie}
          featured={true}
          styles={"h-96 px-10 mt-4 "}
        />
      </div>

      <div className="grid grid-cols-5 p-8 max-h gap-15 items-center justify-center w-full">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} styles={"hover:scale-105"} />
          </div>
        ))}
      </div>
    </>
  );
}
