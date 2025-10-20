// import sonicLogo from "../assets/image.png";
import MovieCard from "../components/MovieCard";
// import conjuringImage from "../assets/image copy.png";

import { Link } from "react-router-dom";
import { useFetchHook } from "../hooks/useFetchHook";
import { useState } from "react";
import Pagination from "../components/Pagination";
// const localMovies = [
//   {
//     id: crypto.randomUUID(),
//     title: "sonic the hedgehog",
//     rating: 10,
//     image: sonicLogo,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "sonic the hedgehog",
//     rating: 10,
//     image: sonicLogo,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "sonic the hedgehog",
//     rating: 10,
//     image: sonicLogo,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "sonic the hedgehog",
//     rating: 10,
//     image: sonicLogo,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "sonic the hedgehog",
//     rating: 10,
//     image: sonicLogo,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "sonic the hedgehog",
//     rating: 7,
//     image: sonicLogo,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "sonic the hedgehog",
//     rating: 7,
//     image: sonicLogo,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "sonic the hedgehog",
//     rating: 7,
//     image: sonicLogo,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "sonic the hedgehog",
//     rating: 7,
//     image: sonicLogo,
//   },
// ];

// const featuredMovie = {
//   id: crypto.randomUUID(),
//   title: "the conjuring",
//   image: conjuringImage,
//   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quas?`,
//   rating: 10,
// };

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "6bcfb89bb3de7bbf30554d493425ca3d";

export default function Movies() {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  const {
    data: movies,
    isLoading,
    error,
  } = useFetchHook(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${currentPage}`,
    [currentPage]
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return <h1>loading...</h1>;

  if (error) return <h2>{error.message}</h2>;
  console.log(movies);
  return (
    <>
      <div>
        <Link to={`/movies/${movies.results[0].id}`}>
          <MovieCard
            movie={movies.results[0]}
            featured={true}
            styles={"h-96 px-10 mt-4 "}
          />
        </Link>
      </div>

      <div className="grid grid-cols-6 p-8 max-h gap-15 items-center justify-center w-full">
        {movies.results.slice(1).map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id} className="h-full">
            <MovieCard movie={movie} styles={"hover:scale-105"} />
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div>
        {movies !== null && movies !== undefined && (
          <Pagination
            currentPage={currentPage}
            totalPages={movies.total_pages}
            onPageChange={handlePageChange}
            maxVisiblePages={7}
            styles="bg-white p-4 rounded-lg shadow-lg"
          />
        )}
      </div>
    </>
  );
}
