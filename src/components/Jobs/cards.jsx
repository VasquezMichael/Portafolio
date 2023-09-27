import React from "react";
import mkrolex from "../../../public/mkrolex.png";
import zzshop from "../../../public/zzshop.png";
import webBarber from "../../../public/barber-web.png";
import Image from "next/image";
import "./style.css";
export const Cards = () => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row justify-center w-full mb-20 h-full md:gap-5  md:justify-evenly">
      <div className="card flex flex-col text-center justify-center h-full shadow-xl w-full my-5 md:w-80 px-8 rounded-lg">
        <Image
          alt="image job"
          src={webBarber}
          className="mx-auto w-full h-72 rounded-xl "
        />

        <div className="flex items-center text-center justify-evenly h-20 w-full">
          <a
            href="https://barberzz.netlify.app/"
            target="_blank"
            className="flex justify-center w-40 h-10 rounded-xl border   mx-auto items-center transition-all bg-purple-600  font-medium hover:bg-purple-700 md:w-28"
          >
            Visitar
          </a>
          <a
            href=""
            className="flex justify-center w-40 h-10 rounded-xl border border-slate-500 mx-auto items-center transition-all hover:bg-gray-200 font-medium md:w-28"
          >
            Repositorio
          </a>
        </div>
      </div>

      <div className="card flex flex-col text-center justify-center h-full shadow-xl w-full my-5 md:w-80 px-8 rounded-lg">
        <Image
          alt="image job"
          src={mkrolex}
          className="mx-auto w-full h-72 rounded-xl "
        />

        <div className="flex items-center text-center justify-evenly h-20 w-full ">
          <a
            href="https://barberzz.netlify.app/"
            target="_blank"
            className="flex justify-center w-40 h-10 rounded-xl border   mx-auto items-center transition-all bg-purple-600  font-medium hover:bg-purple-700 md:w-28"
          >
            Visitar
          </a>
          <a
            href=""
            className="flex justify-center w-40 h-10 rounded-xl border border-slate-500 mx-auto items-center transition-all hover:bg-gray-200 font-medium md:w-28"
          >
            Repositorio
          </a>
        </div>
      </div>

      <div className="card flex flex-col text-center justify-center h-full shadow-xl w-full my-5 md:w-80 px-8 rounded-lg">
        <Image
          alt="image job"
          src={zzshop}
          className="mx-auto w-full h-72 rounded-xl "
        />

        <div className="flex items-center text-center justify-evenly h-20 w-full ">
          <a
            href="https://barberzz.netlify.app/"
            target="_blank"
            className="flex justify-center w-40 h-10 rounded-xl border   mx-auto items-center transition-all bg-purple-600  font-medium hover:bg-purple-700 md:w-28"
          >
            Visitar
          </a>
          <a
            href=""
            className="flex justify-center w-40 h-10 rounded-xl border border-slate-500 mx-auto items-center transition-all hover:bg-gray-200 font-medium md:w-28"
          >
            Repositorio
          </a>
        </div>
      </div>
    </div>
  );
};
