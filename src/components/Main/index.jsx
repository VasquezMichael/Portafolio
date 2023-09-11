import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Services from "../Services";
import Jobs from "../Jobs";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Main = () => {
  const { darkMode, setDarkMode } = useDarkModeContext();
  return (
    <main
      className={
        darkMode ? " bg-slate-300 dark min-h-screen" : " min-h-screen "
      }
    >
      <Navbar />
      <section
        id="body"
        className=" bg-white px-10 md:px-20 lg:px-40 h-full
   
        dark:bg-gray-900"
      >
        <Hero />
        <Services />
        <Jobs />
      </section>
    </main>
  );
};
export default Main;
