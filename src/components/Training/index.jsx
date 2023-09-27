import React from "react";
import unlp from "../../../public/UNLP.png";
import coder from "../../../public/coderhouse.png";
import Image from "next/image";
const Training = () => {
  return (
    <div className="contenedor-training flex w-full h-auto flex-col text-center justify-center p-5 md:gap-5 mb-24">
      <h3 className="text-4xl mb-5 dark:text-white">Formación</h3>
      <div className=" flex flex-col md:flex-row">
        <div
          id="UNLP"
          className=" w-full h-80 m-auto p-3 rounded-xl my-5 shadow-xl bg-slate-700 md:w-64"
        >
          <div
            id="img-unlp"
            className="flex w-full h-1/2 text-center justify-center my-3"
          >
            <Image width={110} height={110} src={unlp} alt="" />
          </div>
          <div className=" text-slate-200">
            <p className="my-2 font-semibold">
              UNIVERSIDAD NACIONAL DE LA PLATA
            </p>
            <p>Licenciatura en sistemas</p>
            <p>2020 - actualidad</p>
          </div>
        </div>

        <div
          id="Coder-js"
          className=" w-full h-80 m-auto rounded-xl my-5 overflow-hidden shadow-xl bg-slate-700 p-3 md:w-64"
        >
          <div
            id="img-js"
            className="flex w-full h-1/2 text-center justify-center my-3 "
          >
            <Image width={180} height={110} src={coder} alt="" />
          </div>
          <div className="text-slate-200">
            <p className="my-2 font-semibold">CODER HOUSE</p>
            <p>JavaScript</p>
            <p>2022</p>
          </div>
        </div>
        <div
          id="Coder-react"
          className=" w-full h-80 m-auto rounded-xl my-5 overflow-hidden shadow-xl bg-slate-700 p-3 md:w-64"
        >
          <div
            id="img-react"
            className="flex w-full h-1/2 text-center justify-center my-3 "
          >
            <Image width={180} height={110} src={coder} alt="" />
          </div>
          <div className="text-slate-200">
            <p className="my-2 font-semibold">CODER HOUSE</p>
            <p>React Js</p>
            <p>2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
