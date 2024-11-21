import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const ontoggle = () => {
    settoggle(!toggle);
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    settoggle(!toggle);
  };
  return (
    <nav className=" flex shadow-lg font-bold justify-between items-center relative text-white px-6 py-3 w-full ">
      <div className="px-6  ">
        <h1 className="font-qwitcher text-purple-200 text-5xl after:content-[''] after:ml-3 after:w-20 after:h-1 after:bg-gray-300 after:absolute after:bottom-0 after:left-8 after:bg-gradient-to-r from-black via-purple-400 to-black  ">
          Kartik
        </h1>
      </div>
      <ul className="sm:flex font-qwitcher gap-14 justify-between items-center hidden mr-10">
        <li className="text-4xl hover:scale-110 hover:rotate-3 hover:skew-x-3 hover:text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-purple-400 to-gray-200 transition duration-500 ease-in-out">
          <Link
            to="/"
            className="hover:text-purple-400 hover:underline transition"
          >
            Home
          </Link>
        </li>
        <li className="text-4xl hover:scale-110 hover:text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-purple-400 to-gray-400 transition duration-500 ease-in-out">
          <Link
            to="/about"
            className="hover:text-purple-400 hover:underline transition"
          >
            About
          </Link>
        </li>
        <li className="text-4xl hover:scale-110 hover:text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-purple-400 to-gray-400 transition duration-500 ease-in-out">
          <Link
            to="/contact"
            className="hover:text-purple-400 hover:underline transition"
          >
            Contact
          </Link>
        </li>{" "}
        <li className="text-4xl hover:scale-110 hover:text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-purple-400 to-gray-400 transition duration-500 ease-in-out">
          <a
            onClick={() => scrollToSection("services")}
            className="hover:text-purple-400 hover:underline transition"
            href="#services"
          >
            Services
          </a>
        </li>
      </ul>
      <div className="text-2xl z-20 sm:hidden">
        <button className="sm:hidden cursor-pointer" onClick={ontoggle}>
          {toggle ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`lg:hidden  bg-gradient-to-r from-black via-purple-900 to-black text-white z-10 rounded-xl w-full fixed top-0 left-0 transform ${
          toggle ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out`}
      >
        {" "}
        <ul className="flex space-y-6 items-center justify-center  font-qwitcher  flex-col    h-80 rounded-xl">
          <li className="text-4xl  hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-200  to-yellow-200 transition duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:skew-x-3 hover:shadow-2xl ">
            <Link
              to="/"
              onClick={ontoggle}
              className="hover:text-purple-400 hover:underline transition"
            >
              Home
            </Link>
          </li>
          <li className="text-4xl  hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-200  to-yellow-200 transition duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:skew-x-3 hover:shadow-2xl">
            <Link
              to="/about"
              onClick={ontoggle}
              className="hover:text-purple-400 hover:underline transition"
            >
              About
            </Link>
          </li>
          <li className="text-4xl   hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-200  to-yellow-200 transition duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:skew-x-2 hover:shadow-2xl">
            <Link
              to="/contact"
              onClick={ontoggle}
              className="hover:text-purple-400 hover:underline transition"
            >
              Contact
            </Link>
          </li>{" "}
          <li className=" text-4xl hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-200  to-yellow-200 transition duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:skew-x-3 hover:shadow-2xl">
            <a
              onClick={() => scrollToSection("services")}
              className="hover:text-purple-400 hover:underline transition"
              href="#services"
            >
              Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
