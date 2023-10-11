import React from "react";
import { BsFillMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { useDarkModeContext } from "../../context/DarkModeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkModeContext();
  return (
    <nav className="navbar fixed w-full flex h-14 items-center justify-between px-10 md:px-20 lg:px-28 z-50 backdrop-blur-sm">
      <h1 className=" text-2xl text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text font-burtons ">
        Developer
      </h1>
      <ul className="flex items-center ">
        <li className="mx-5">
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
            className=" hidden sm:block bg-gradient-to-r from-purple-400 to-blue-500  text-white px-4 py-2 
             rounded-md ml-8"
            href="mailto:vasquez.michael.steven@gmail.com"
          >
            Contactame
          </a>
          <a href="mailto:vasquez.michael.steven@gmail.com" target="blank">
            <HiOutlineMail
              size={25}
              className="block sm:hidden dark:text-white ml-3"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
