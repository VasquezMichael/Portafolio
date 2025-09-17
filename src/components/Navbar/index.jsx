import React from "react";
import { BsFillMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { useDarkModeContext } from "../../context/DarkModeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkModeContext();
  return (
    <nav className="navbar fixed w-full flex h-14 items-center justify-between px-10 md:px-20 lg:px-32 2xl:px-80 z-50 backdrop-blur-sm">
      <h1 className=" text-xl text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text font-burtons ">
        DEVELOPER
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
            className=" hidden sm:block bg-gradient-to-r from-purple-400 to-blue-500 font-burtons px-4 py-1 
             rounded-md ml-8 "
            href="https://drive.google.com/file/d/1EYop5trgPNkGqjeC9XcAYB1JS6rlbgx9/view?usp=sharing"
            target="blank"
          >
            ver cv
          </a>
          <a
            href="https://drive.google.com/file/d/1mA4DBoiSyeXbZfusGZ2T6TKa6hzRKJsq/view?usp=drive_link"
            target="blank"
          >
            <LuFileSpreadsheet
              size={23}
              className="block sm:hidden dark:text-white ml-3"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
