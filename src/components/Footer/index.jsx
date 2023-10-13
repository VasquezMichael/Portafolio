import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div
      className="h-screen mt-20 bg-gradient-to-t from-gray-900 to-gray-200 flex flex-col text-center items-center  justify-evenly md:flex-row
    dark:bg-gradient-to-b"
    >
      <div>
        <h2 className="text-5xl py-2 text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text font-burtons">
          Michael vasquez
        </h2>
        <h3 className="py-2 text-2xl dark:text-slate-300">
          Front-End developer
        </h3>
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
          className="cursor-pointer hover:text-slate-300"
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
          className="cursor-pointer hover:text-slate-300"
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
          className="cursor-pointer hover:text-slate-300"
        >
          Portafolio
        </Link>
      </div>
    </div>
  );
};

export default Footer;
