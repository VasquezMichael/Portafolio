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
        className=" h-full mx-auto mt-40 mb-20 md:w-1/2 px-5 text-left "
      >
        <div className="flex flex-col gap-2 ">
          <span className="text-3xl text-gray-800 dark:text-gray-400">
            Hola, soy Michael 👋
          </span>
          <div className=" ">
            <span className="text-4xl md:text-5xl text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text font-burtons ">
              FrontEnd Developer.
            </span>
          </div>
        </div>
        <p className="text-md py-2 text-gray-800 md:text-xl mx-auto w-auto  2xl:-translate-x-1/3 2xl:w-3/5  dark:text-gray-400  ">
          Estudio sistemas en la Universidad Nacional de La Plata. Me apasionan
          los gatos, el clima templado y disfrutar de un buen café. ☕
        </p>
        <div className=" redes-sociales flex gap-16 text-5xl py-3 text-gray-600 dark:text-gray-300">
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
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="h-80 my-auto bg-black w-0.5 hidden md:block dark:bg-slate-300"
      ></div>
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
