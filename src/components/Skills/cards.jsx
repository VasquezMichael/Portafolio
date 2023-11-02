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
import "./style.css";
const cards = () => {
  return (
    <section
      id="section-cards"
      className="grid grid-cols-2 md:grid-cols-4 gap-7 my-10"
    >
      <div data-aos="fade-up" data-aos-duration="1000">
        <div
          id="card"
          className=" shadow-xl rounded-xl w-28 h-28 p-4 mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
        >
          <Image
            alt="Image skill"
            src={js}
            className="w-full h-full object-cover "
          />
          <span className=" tooltip opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 dark:text-slate-300 transition-all duration-200">
            JavaScript
          </span>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <div
          id="card"
          className=" shadow-xl rounded-xl w-28 h-28 p-4 mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
        >
          <Image
            alt="Image skill"
            src={react}
            className="w-full h-full object-contain"
          />
          <span className=" tooltip opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 dark:text-slate-300 transition-all duration-200 whitespace-nowrap">
            React js
          </span>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <div
          id="card"
          className=" shadow-xl rounded-xl w-28 h-28 p-4  mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
        >
          <Image
            alt="Image skill"
            src={mysql}
            className="w-full h-full object-contain"
          />
          <span className=" tooltip opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 dark:text-slate-300 transition-all duration-200 whitespace-nowrap">
            My sql
          </span>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <div
          id="card"
          className=" shadow-xl rounded-xl w-28 h-28 p-4  mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
        >
          <Image
            alt="Image skill"
            src={node}
            className="w-full h-full object-contain"
          />
          <span className=" tooltip opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 dark:text-slate-300 transition-all duration-200 whitespace-nowrap">
            Node js
          </span>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <div
          id="card"
          className=" shadow-xl rounded-xl w-28 h-28 p-4 mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
        >
          <Image
            alt="Image skill"
            src={github}
            className="w-full h-full object-contain"
          />
          <span className=" tooltip opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 dark:text-slate-300 transition-all duration-200 whitespace-nowrap">
            Git hub
          </span>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <div
          id="card"
          className=" shadow-xl rounded-xl w-28 h-28 p-4  mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
        >
          <Image
            alt="Image skill"
            src={git}
            className="w-full h-full object-contain"
          />
          <span className=" tooltip opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 dark:text-slate-300 transition-all duration-200 whitespace-nowrap">
            Git
          </span>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <div
          id="card"
          className=" shadow-xl rounded-xl w-28 h-28 p-4  mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
        >
          <Image
            alt="Image skill"
            src={html}
            className="w-full h-full object-contain"
          />
          <span className=" tooltip opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 dark:text-slate-300 transition-all duration-200 whitespace-nowrap">
            Html
          </span>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <div
          id="card"
          className=" shadow-xl rounded-xl w-28 h-28 p-4  mx-auto dark:bg-slate-700 hover:scale-110 duration-300"
        >
          <Image
            alt="Image skill"
            src={css}
            className="w-full h-full object-contain"
          />
          <span className=" tooltip opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 dark:text-slate-300 transition-all duration-200 whitespace-nowrap">
            Css
          </span>
        </div>
      </div>
    </section>
  );
};

export default cards;
