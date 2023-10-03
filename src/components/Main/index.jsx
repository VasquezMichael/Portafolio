import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Skills from "../Skills";
import Jobs from "../Jobs";
import Training from "../Training";
import Footer from "../Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Main = () => {
  const { darkMode } = useDarkModeContext();
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <main
      className={
        darkMode
          ? "  dark min-h-screen bg-slate-900"
          : " min-h-screen bg-slate-100"
      }
    >
      <Navbar />
      <section
        id="body"
        className=" bg-slate-100 px-10 md:px-20 lg:px-28 h-full dark:bg-gray-900"
      >
        <Hero />
        <Skills />
        <Training />
        <Jobs />
      </section>
      <Footer />
    </main>
  );
};
export default Main;
