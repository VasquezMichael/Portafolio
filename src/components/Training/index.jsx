import React from "react";
import unlp from "../../../public/UNLP.png";
import coder from "../../../public/coderhouse.png";
import mumuki from "../../../public/mumuki-logo.svg";
import Image from "next/image";
import { FaUniversity } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
const Training = () => {
  return (
    <div
      id="Training"
      className="flex w-full h-auto flex-col flex-wrap text-center justify-center p-5 md:gap-2 mb-24"
    >
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl mb-5 dark:text-white font-burtons"
      >
        Formación
      </h3>
      <div
        id="Container-cards"
        className=" flex flex-col flex-wrap md:flex-row"
      >
        <div
          data-aos="flip-left"
          data-aos-duration="1000"
          id="UNLP"
          className=" w-full h-80 m-auto p-3 rounded-xl my-5 shadow-xl bg-slate-700 md:w-64"
        >
          <div
            id="img-unlp"
            className="flex w-full h-1/2 text-center justify-center "
          >
            <Image width={110} height={110} src={unlp} alt="" />
          </div>
          <div className=" text-slate-200 flex flex-col justify-center text-center items-center">
            <p className="my-2 font-semibold">
              UNIVERSIDAD NACIONAL DE LA PLATA
            </p>
            <p>Licenciatura en sistemas</p>
            <button className="rounded-md bg-gradient-to-r from-purple-400 to-blue-500 h-8 my-2 flex text-center justify-center items-center w-36 p-2 gap-2 text-slate-900 shadow-xl">
              <a
                href="https://www.info.unlp.edu.ar/licenciatura-en-sistemas/"
                target="blank"
                className="w-3/4"
              >
                En curso
              </a>
              <FaUniversity />
            </button>
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-duration="1000"
          id="Coder-js"
          className=" w-full h-80 m-auto rounded-xl my-5 overflow-hidden shadow-xl bg-slate-700 p-3 md:w-64"
        >
          <div
            id="img-js"
            className="flex w-full h-1/2 text-center justify-center my-3 "
          >
            <Image width={170} height={110} src={coder} alt="" />
          </div>
          <div className="text-slate-200 flex flex-col justify-center text-center items-center">
            <p className="my-2 font-semibold">CODER HOUSE</p>
            <p>JavaScript</p>
            <button className="rounded-md bg-gradient-to-r from-purple-400 to-blue-500 h-8 my-2 flex text-center justify-center items-center w-36 p-2 gap-2 text-slate-900 shadow-xl">
              <a
                href="https://www.coderhouse.com/certificados/62f1288a70f31a002099f989?lang=es"
                target="blank"
                className="w-3/4"
              >
                Finalizado
              </a>
              <PiCertificateBold />
            </button>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="1000"
          id="Coder-react"
          className=" w-full h-80 m-auto rounded-xl my-5 overflow-hidden shadow-xl bg-slate-700 p-3 md:w-64"
        >
          <div
            id="img-react"
            className="flex w-full h-1/2 text-center justify-center my-3 "
          >
            <Image width={170} height={110} src={coder} alt="" />
          </div>
          <div className="text-slate-200 flex flex-col justify-center text-center items-center">
            <p className="my-2 font-semibold">CODER HOUSE</p>
            <p>React Js</p>
            <button className="rounded-md bg-gradient-to-r from-purple-400 to-blue-500 h-8 my-2 flex text-center justify-center items-center w-36 p-2 gap-2 text-slate-900 shadow-xl">
              <a
                href="https://www.coderhouse.com/certificados/636c587779df53000e2d7d7f?lang=es"
                target="blank"
                className="w-3/4"
              >
                Finalizado
              </a>
              <PiCertificateBold />
            </button>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="1000"
          id="Mumuki"
          className=" w-full h-80 m-auto rounded-xl my-5 overflow-hidden shadow-xl bg-slate-700 p-3 md:w-64"
        >
          <div
            id="img-react"
            className="flex w-full h-1/2 text-center justify-center my-3 "
          >
            <Image width={180} height={120} src={mumuki} alt="" />
          </div>
          <div className="text-slate-200 flex flex-col justify-center text-center items-center">
            <p className="my-2 font-semibold">MUMUKI</p>
            <p>Argentina programa</p>
            <button className="rounded-md bg-gradient-to-r from-purple-400 to-blue-500 h-8 my-2 flex text-center justify-center items-center w-36 p-2 gap-2 text-slate-900 shadow-xl">
              <a
                href="https://mumuki.io/argentina-programa/certificates/verify/eJTVETs0QOPkLVGT"
                target="blank"
                className="w-3/4"
              >
                Finalizado
              </a>
              <PiCertificateBold />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
