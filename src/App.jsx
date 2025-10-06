import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components/export";
import { Home, Movies, AboutUs, ContactUs } from "./pages/export";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
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
