import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components/export";
import { Movies } from "./pages/export";
import Genres from "./pages/Genres";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/genres" element={<Genres />} />
        </Routes>
        <Footer />
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
