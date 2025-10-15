import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components/export";
import { MovieDetails, Movies, Genres } from "./pages/export";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;

// movies api
// genre movies api
// search for a movie
// movie details
// account details api
