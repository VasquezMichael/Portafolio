import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import mike from "../../../public/mike.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" hero text-center">
      <h2 className=" text-5xl py-2  text-purple-600 font-medium md:text-6xl">
        Michael Vasquez
      </h2>
      <h3 className=" text-2xl py-2 md:text-3xl">
        Desarrollador & administrativo.
      </h3>
      <p className=" text-md py-5  leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto possimus
        accusantium a est expedita quos
      </p>
      <div className=" redes-sociales flex justify-center gap-16 text-5xl py-3 text-gray-600">
        <AiFillGithub />
        <AiFillInstagram />
        <AiFillLinkedin />
      </div>
      <div className=" img-hero relative rounded-full mx-auto h h-72 w-72 my-9 bg-gradient-to-b from-purple-900 overflow-hidden md:h-80 md:w-80">
        <Image layout="fill" objectFit="cover" src={mike} />
      </div>
    </div>
  );
};

export default Hero;
