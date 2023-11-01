import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import mike from "../../../public/Michael.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="Sobremi"
      className=" hero text-center justify-center flex flex-col md:flex-row mb-24 "
    >
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className=" h-full mx-auto mt-28 mb-20 md:w-1/2"
      >
        <h2 className="text-5xl py-2 text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text font-medium font-burtons">
          MICHAEL VASQUEZ
        </h2>
        <h3 className=" text-2xl py-2 md:text-3xl dark:text-white">
          Desarrollador & administrativo.
        </h3>
        <p className=" text-md py-2 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
          Estudiante de Licenciatura en sistemas, actualmente enfocado en el
          desarrollo web. Mi objetivo se centra en crear experiencias digitales
          eficientes.
        </p>
        <div className=" redes-sociales flex justify-center gap-16 text-5xl py-3 text-gray-600 dark:text-gray-300">
          <a href="https://github.com/VasquezMichael" target="blank">
            <AiFillGithub className="transition-all hover:scale-110 " />
          </a>
          <a href="https://www.instagram.com/__michaelsteven/" target="blank">
            <AiFillInstagram className="transition-all hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-vasquez-4b4827205/"
            target="blank"
          >
            <AiFillLinkedin className=" transition-all hover:scale-110 " />
          </a>
        </div>
      </div>
      <div className="h-80 my-auto bg-black w-0.5 hidden md:block"></div>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className=" img-hero relative rounded-full mx-auto my-auto h-72 w-72  overflow-hidden md:h-80 md:w-80"
      >
        <Image alt="Image michael" layout="fill" objectFit="cover" src={mike} />
      </div>
    </div>
  );
};

export default Hero;
