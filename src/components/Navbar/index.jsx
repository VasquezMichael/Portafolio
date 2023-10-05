import React from "react";
import { BsFillMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useEffect, useState } from "react";
import "./style.css";
const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkModeContext();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 100;
      setScrolled(isScrolling);
      console.log(window.scrollY);
      console.log(isScrolling);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={
        scrolled
          ? "navbar fixed w-full flex h-16  items-center justify-between px-10 md:px-20 lg:px-28 z-50 scrolled"
          : "navbar fixed w-full flex h-16  items-center justify-between px-10 md:px-20 lg:px-28 z-50"
      }
    >
      <h1 className=" text-xl  font-burtons dark:text-white">Developer</h1>
      <ul className="flex items-center">
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
            className=" hidden sm:block bg-gradient-to-r  from-purple-500  to-purple-800  text-white px-4 py-2 
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
