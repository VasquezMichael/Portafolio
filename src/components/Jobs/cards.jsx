import React from "react";
import mkrolex from "../../../public/mkrolex.png";
import zzshop from "../../../public/zzshop.png";
import webBarber from "../../../public/barber-web.png";
import Image from "next/image";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
export const Cards = () => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row justify-center w-full h-full gap-5  md:justify-evenly">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="card flex flex-col text-center justify-center h-full shadow-xl w-full md:w-80 p-6 rounded-lg dark:bg-slate-700 mb-5 "
      >
        <Image
          alt="image job"
          src={webBarber}
          className="mx-auto w-full h-72 rounded-sm "
        />

        <div className="flex items-center text-center justify-evenly h-14 w-full gap-1 ">
          <a
            href="https://barberzz.netlify.app/"
            target="_blank"
            className="flex justify-evenly w-36 h-8 text-lg rounded-lg mx-auto transition-all duration-700 items-center bg-gradient-to-r from-purple-400 to-blue-500 hover:scale-110 md:w-32 "
          >
            Visitar
            <AiFillEye />
          </a>
          <a
            href="https://github.com/VasquezMichael/Barbazul"
            target="_blank"
            className="flex justify-evenly w-28 h-8 text-lg mx-auto items-center  transition-all duration-700 md:w-24 rounded-lg border border-purple-400 hover:bg-gradient-to-r from-purple-400 to-blue-500 hover:scale-110 "
          >
            Repo
            <AiFillGithub />
          </a>
        </div>
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="card flex flex-col text-center justify-center h-full shadow-xl w-full md:w-80 p-6 rounded-lg dark:bg-slate-700 mb-5"
      >
        <Image
          alt="image job"
          src={mkrolex}
          className="mx-auto w-full h-72 rounded-sm "
        />

        <div className="flex items-center text-center justify-evenly h-14 w-full gap-1 ">
          <a
            href="https://mkrolex.netlify.app/"
            target="_blank"
            className="flex justify-evenly w-36 h-8 text-lg rounded-lg mx-auto transition-all duration-700 items-center bg-gradient-to-r from-purple-400 to-blue-500 hover:scale-110 md:w-32 "
          >
            Visitar
            <AiFillEye />
          </a>
          <a
            href="https://github.com/VasquezMichael/mkrolex.github.io"
            target="_blank"
            className="flex justify-evenly w-28 h-8 text-lg mx-auto items-center  transition-all duration-700 md:w-24 rounded-lg border border-purple-400 hover:bg-gradient-to-r from-purple-400 to-blue-500 hover:scale-110 "
          >
            Repo
            <AiFillGithub />
          </a>
        </div>
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="card flex flex-col text-center justify-center h-full shadow-xl w-full md:w-80 p-6 rounded-lg dark:bg-slate-700 mb-5"
      >
        <Image
          alt="image job"
          src={zzshop}
          className="mx-auto w-full h-72 rounded-sm "
        />

        <div className="flex items-center text-center justify-evenly h-14 w-full gap-1 ">
          <a
            href="https://zz-shop.netlify.app"
            target="_blank"
            className="flex justify-evenly w-36 h-8 text-lg rounded-lg mx-auto transition-all duration-700 items-center bg-gradient-to-r from-purple-400 to-blue-500 hover:scale-110 md:w-32 "
          >
            Visitar
            <AiFillEye />
          </a>
          <a
            href="https://github.com/VasquezMichael/ReactJs-CoderHouse"
            target="_blank"
            className="flex justify-evenly w-28 h-8 text-lg mx-auto items-center  transition-all duration-700 md:w-24 rounded-lg border border-purple-400 hover:bg-gradient-to-r from-purple-400 to-blue-500 hover:scale-110 "
          >
            Repo
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="card flex flex-col text-center justify-center h-full shadow-xl w-full md:w-80 p-6 rounded-lg dark:bg-slate-700 mb-5"
      >
        <Image
          alt="image job"
          src={zzshop}
          className="mx-auto w-full h-72 rounded-sm "
        />

        <div className="flex items-center text-center justify-evenly h-14 w-full gap-1 ">
          <a
            href="https://mike-porfolio.netlify.app"
            target="_blank"
            className="flex justify-evenly w-36 h-8 text-lg rounded-lg mx-auto transition-all duration-700 items-center bg-gradient-to-r from-purple-400 to-blue-500 hover:scale-110 md:w-32 "
          >
            Visitar
            <AiFillEye />
          </a>
          <a
            href="https://github.com/VasquezMichael/Portafolio"
            target="_blank"
            className="flex justify-evenly w-28 h-8 text-lg mx-auto items-center  transition-all duration-700 md:w-24 rounded-lg border border-purple-400 hover:bg-gradient-to-r from-purple-400 to-blue-500 hover:scale-110 "
          >
            Repo
            <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
