import React from "react";
import { BsFillMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkModeContext();
  return (
    <nav className="fixed w-full flex h-16  items-center justify-between px-10 md:px-20 lg:px-40 z-50">
      <h1 className=" text-xl  font-burtons dark:text-white">Developer</h1>
      <ul className="flex items-center">
        <li>
          {darkMode ? (
            <BsMoonStars
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              className=" cursor-pointer  text-white"
            />
          ) : (
            <BsFillMoonStarsFill
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              className=" cursor-pointer "
            />
          )}
        </li>
        <li>
          <a
            className="  bg-gradient-to-r  from-purple-500  to-purple-800  text-white px-4 py-2 
             rounded-md ml-8"
            href="https://www.linkedin.com/in/michael-vasquez-4b4827205/"
          >
            Contactame
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
