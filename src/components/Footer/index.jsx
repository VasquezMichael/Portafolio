import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div
      className="h-screen mt-20 bg-slate-700 flex flex-col text-center items-center  justify-evenly md:flex-row
    dark:bg-slate-800"
    >
      <div>
        <h2 className="text-6xl py-2 text-purple-600 font-burtons">Michael</h2>
        <h3 className="py-2 text-2xl">Front-End developer</h3>
      </div>
      <div className="flex  text-center justify-center gap-14 text-4xl">
        <a href="">
          <AiFillGithub className="transition-all hover:scale-110 " />
        </a>
        <a href="">
          <AiFillLinkedin className="transition-all hover:scale-110 " />
        </a>
        <a href="">
          <AiFillInstagram className="transition-all hover:scale-110 " />
        </a>
      </div>
      <div
        id="links"
        className="flex flex-col h-28 justify-between text-2xl font-lg gap-8 font-burtons"
      >
        <Link
          activeClass="active"
          to="Sobremi"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className="cursor-pointer hover:text-purple-600"
        >
          Sobre mi
        </Link>
        <Link
          activeClass="active"
          to="Training"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className="cursor-pointer hover:text-purple-600"
        >
          Formacion
        </Link>
        <Link
          activeClass="active"
          to="Jobs"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className="cursor-pointer hover:text-purple-600"
        >
          Portafolio
        </Link>
      </div>
    </div>
  );
};

export default Footer;
