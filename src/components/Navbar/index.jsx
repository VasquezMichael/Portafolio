import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkModeContext();
  return (
    <nav className=" py-10 mb-12 flex justify-between">
      <h1 className=" text-xl  font-burtons">Developer</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className=" cursor-pointer"
          />
        </li>
        <li>
          <a
            className="  bg-gradient-to-r  from-purple-500  to-purple-800  text-white px-4 py-2 
             rounded-md ml-8"
            href="#"
          >
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
