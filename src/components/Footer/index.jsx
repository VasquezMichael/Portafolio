import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div
      className="h-96 mt-64 flex flex-col text-center items-center justify-evenly md:flex-row md:gap-24
    dark:bg-gradient-to-b p-2 bg-slate-700"
    >
      <div className="md:h-20">
        <h2 className="text-3xl text-slate-300 font-burtons">
          michael vasquez
        </h2>
        <h3 className=" text-4xl text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text font-burtons">
          Front-End developer
        </h3>
      </div>
      <div className="flex text-center justify-center gap-14 text-4xl  md:h-20 text-slate-300">
        <a
          href="https://github.com/VasquezMichael"
          target="blank"
          className="h-10"
        >
          <AiFillGithub className="transition-all hover:scale-110 " />
        </a>
        <a
          href="https://www.linkedin.com/in/michael-vasquez-4b4827205/"
          target="blank"
          className="h-10"
        >
          <AiFillLinkedin className="transition-all hover:scale-110 " />
        </a>
        <a
          href="https://www.instagram.com/__michaelsteven/"
          target="blank"
          className="h-10"
        >
          <AiFillInstagram className="transition-all hover:scale-110 " />
        </a>
      </div>
      <div
        id="links"
        className="flex md: h-20 justify-between text-xl font-lg gap-5 font-burtons flex-wrap text-slate-300"
      >
        <Link
          activeClass="active"
          to="Sobremi"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className="cursor-pointer hover:text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text h-10"
        >
          SOBRE MI
        </Link>
        <Link
          activeClass="active"
          to="Training"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className="cursor-pointer  hover:text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text h-10"
        >
          FORMACIÓN
        </Link>
        <Link
          activeClass="active"
          to="Jobs"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className="cursor-pointer  hover:text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text h-10"
        >
          PORTAFOLIO
        </Link>
      </div>
    </div>
  );
};

export default Footer;
