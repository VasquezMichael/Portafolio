import React from "react";
import Image from "next/image";
import html from "../../../public/html-icon.png";
import github from "../../../public/github-icon.png";
import js from "../../../public/javascript-icon.png";
import react from "../../../public/react-js-icon.png";
import node from "../../../public/nodejs.png";
import mysql from "../../../public/mysql.png";
import git from "../../../public/git-icon.png";
import css from "../../../public/css-icon.png";
const cards = () => {
  return (
    <section
      id="section-cards"
      className="grid grid-cols-2 md:grid-cols-4 gap-5 my-10"
    >
      <div
        id="card"
        className=" shadow-xl rounded-xl w-28 h-28 p-4 mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
      >
        <Image src={js} className="w-full h-full object-cover" />
      </div>
      <div
        id="card"
        className=" shadow-xl rounded-xl w-28 h-28 p-4 mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
      >
        <Image src={react} className="w-full h-full object-contain" />
      </div>
      <div
        id="card"
        className=" shadow-xl rounded-xl w-28 h-28 p-4 mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
      >
        <Image src={github} className="w-full h-full object-contain" />
      </div>
      <div
        id="card"
        className=" shadow-xl rounded-xl w-28 h-28 p-4  mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
      >
        <Image src={git} className="w-full h-full object-contain" />
      </div>
      <div
        id="card"
        className=" shadow-xl rounded-xl w-28 h-28 p-4  mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
      >
        <Image src={mysql} className="w-full h-full object-contain" />
      </div>
      <div
        id="card"
        className=" shadow-xl rounded-xl w-28 h-28 p-4  mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
      >
        <Image src={node} className="w-full h-full object-contain" />
      </div>
      <div
        id="card"
        className=" shadow-xl rounded-xl w-28 h-28 p-4  mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
      >
        <Image src={html} className="w-full h-full object-contain" />
      </div>
      <div
        id="card"
        className=" shadow-xl rounded-xl w-28 h-28 p-4  mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
      >
        <Image src={css} className="w-full h-full object-contain" />
      </div>
    </section>
  );
};

export default cards;
