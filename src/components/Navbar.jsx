import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/video-editing-app.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import NavLink from "./NavLink";

const links = [
  {
    name: "Movies",
    path: "/",
  },
  {
    name: "Genres",
    path: "/genres",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex items-center  justify-between p-4 px-10  gap-10 bg-(--color-bg) ">
      <Link to={"/"} className="flex gap-4 items-center ">
        <img src={logo} alt="" className="invert-100 w-[40px]" />
        <h2 className="text-2xl font-bold text-(--color-primary)">Netlify</h2>
      </Link>

      {/* search bar */}
      <div className="w-full md:flex hidden items-center">
        <input
          className="bg-(--color-white) w-full max-w-xl mx-auto p-2 rounded border-none outline-0 text-xl px-4"
          placeholder="Search by Movie Name..."
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* desktop navigation bar */}
      <div className="md:flex hidden  gap-3 items-center  ">
        <nav className="flex items-center justify-center list-none gap-6">
          {links.map((link) => (
            <NavLink key={link.path} link={link} location={location} />
          ))}
        </nav>
      </div>

      {/* mobile buttons */}
      <button
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoMdCloseCircle className="text-3xl text-(--color-white)" />
        ) : (
          <GiHamburgerMenu className="text-3xl text-(--color-white)" />
        )}
      </button>

      {/* mobile navigation bar */}

      <nav
        className={`absolute invisible opacity-0 top-[100%] p-2 bg-(--color-bg) -right-[100%]  w-full z-20 flex flex-col transition-all duration-200  ease-in items-center justify-center gap-4 ${
          isOpen ? "visible opacity-100 right-0" : ""
        }`}
      >
        <input
          className="bg-(--color-white) w-full max-w-xl mx-auto p-2 rounded border-none outline-0 text-xl px-4"
          placeholder="Search by Movie Name..."
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {links.map((link) => (
          <NavLink
            key={link.path}
            link={link}
            location={location}
            isMobileLink={true}
            setIsOpen={setIsOpen}
          />
        ))}
      </nav>
    </div>
  );
}
