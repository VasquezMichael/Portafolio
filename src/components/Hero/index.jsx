import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Hero = () => {
  return (
    <div className=" text-center">
      <h2 className=" text-5xl py-2  text-teal-600 font-medium">
        Michael Vasquez
      </h2>
      <h3 className=" text-2xl py-2">Desarrollador & administrativo.</h3>
      <p className=" text-md py-5  leading-8 text-gray-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto possimus
        accusantium a est expedita quos, nostrum voluptates obcaecati ipsam
        veritatis neque
      </p>
      <div>
        <AiFillGithub />
        <AiFillInstagram />
        <AiFillLinkedin />
      </div>
    </div>
  );
};

export default Hero;
