import React from "react";
import mkrolex from "../../../public/mkrolex.png";
import zzshop from "../../../public/zzshop.png";
import webBarber from "../../../public/barber-web.png";
import Image from "next/image";

export const Cards = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="flex flex-wrap flex-col md:flex-row justify-center w-full h-full gap-5  md:justify-evenly"
    >
      <div className="card flex flex-col text-center justify-center h-full shadow-xl w-full md:w-80 p-4 rounded-lg dark:bg-slate-700 mb-5">
        <Image
          alt="image job"
          src={webBarber}
          className="mx-auto w-full h-72 rounded-sm "
        />

        <div className="flex items-center text-center justify-evenly h-20 w-full gap-1">
          <a
            href="https://barberzz.netlify.app/"
            target="_blank"
            className="flex justify-center w-40 h-10 rounded-lg border mx-auto items-center transition-all bg-purple-600  font-medium hover:bg-purple-700 md:w-28"
          >
            Visitar
          </a>
          <a
            href="https://github.com/VasquezMichael/Barbazul"
            target="_blank"
            className="flex justify-center w-40 h-10 rounded-lg border border-slate-500 mx-auto items-center transition-all hover:bg-gray-200 font-medium md:w-28"
          >
            Repositorio
          </a>
        </div>
      </div>

      <div className="card flex flex-col text-center justify-center h-full shadow-xl w-full md:w-80 p-4 rounded-lg dark:bg-slate-700 mb-5">
        <Image
          alt="image job"
          src={mkrolex}
          className="mx-auto w-full h-72 rounded-sm "
        />

        <div className="flex items-center text-center justify-evenly h-20 w-full gap-1">
          <a
            href="https://mkrolex.netlify.app"
            target="_blank"
            className="flex justify-center w-40 h-10 rounded-lg border   mx-auto items-center transition-all bg-purple-600  font-medium hover:bg-purple-700 md:w-28"
          >
            Visitar
          </a>
          <a
            href="https://github.com/VasquezMichael/mkrolex.github.io"
            target="_blank"
            className="flex justify-center w-40 h-10 rounded-lg border border-slate-500 mx-auto items-center transition-all hover:bg-gray-200 font-medium md:w-28"
          >
            Repositorio
          </a>
        </div>
      </div>

      <div className="card flex flex-col text-center justify-center h-full shadow-xl w-full md:w-80 p-4 rounded-lg dark:bg-slate-700 mb-5">
        <Image
          alt="image job"
          src={zzshop}
          className="mx-auto w-full h-72 rounded-sm "
        />

        <div className="flex items-center text-center justify-evenly h-20 w-full gap-1">
          <a
            href="https://zz-shop.netlify.app/"
            target="_blank"
            className="flex justify-center w-40 h-10 rounded-lg border   mx-auto items-center transition-all bg-purple-600  font-medium hover:bg-purple-700 md:w-28"
          >
            Visitar
          </a>
          <a
            href="https://github.com/VasquezMichael/ReactJs-CoderHouse"
            target="_blank"
            className="flex justify-center w-40 h-10 rounded-lg border border-slate-500 mx-auto items-center transition-all hover:bg-gray-200 font-medium md:w-28"
          >
            Repositorio
          </a>
        </div>
      </div>
      <div className="card flex flex-col text-center justify-center h-full shadow-xl w-full md:w-80 p-4 rounded-lg dark:bg-slate-700 mb-5">
        <Image
          alt="image job"
          src={zzshop}
          className="mx-auto w-full h-72 rounded-sm "
        />

        <div className="flex items-center text-center justify-evenly h-20 w-full gap-1">
          <a
            href="https://barberzz.netlify.app/"
            target="_blank"
            className="flex justify-center w-40 h-10 rounded-lg border   mx-auto items-center transition-all bg-purple-600  font-medium hover:bg-purple-700 md:w-28"
          >
            Visitar
          </a>
          <a
            href=""
            className="flex justify-center w-40 h-10 rounded-lg border border-slate-500 mx-auto items-center transition-all hover:bg-gray-200 font-medium md:w-28"
          >
            Repositorio
          </a>
        </div>
      </div>
    </div>
  );
};
