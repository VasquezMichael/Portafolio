import React from "react";
import { BsFillMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { useDarkModeContext } from "../../context/DarkModeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkModeContext();
  return (
    <nav className="navbar fixed w-full flex h-14 items-center justify-between px-10 md:px-20 lg:px-28 z-50 backdrop-blur-sm">
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
            className=" hidden sm:block bg-gradient-to-r from-purple-400 to-blue-500  text-black px-4 py-2 
             rounded-md ml-8 "
            href="https://docs.google.com/document/d/1WT41IwNFCjtXtUidVa_BxsJ2dEOqo3jsHLDUHWi6KoY/edit?usp=drive_link"
            target="blank"
          >
            ver CV
          </a>
          <a
            href="https://docs.google.com/document/d/1WT41IwNFCjtXtUidVa_BxsJ2dEOqo3jsHLDUHWi6KoY/edit?usp=drive_link"
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
