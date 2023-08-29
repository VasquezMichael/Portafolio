import React from "react";
import Image from "next/image";
import desing from "../../../public/design.png";
import code from "../../../public/code.png";
import consulting from "../../../public/consulting.png";
const cards = () => {
  return (
    <section id="section-cards" className="md:flex md: gap-10">
      <div id="card" className=" shadow-xl p-10 rounded-xl my-10 ">
        <div id="img-card" className="flex justify-center">
          <Image src={desing} className="" width={100} height={100} />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-medium pt-5 pb-4">Diseños</h3>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <h4>Herramientas</h4>
          <p className=" text-gray-800 py-1">Java</p>
          <p className=" text-gray-800 py-1">Python</p>
          <p className=" text-gray-800 py-1">JavaScript</p>
        </div>
      </div>
      <div id="card" className=" shadow-xl p-10  rounded-xl my-10">
        <div id="img-card" className="flex justify-center">
          <Image src={code} className="" width={100} height={100} />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-medium pt-5 pb-4">Diseños</h3>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <h4>Herramientas</h4>
          <p className=" text-gray-800 py-1">Java</p>
          <p className=" text-gray-800 py-1">Python</p>
          <p className=" text-gray-800 py-1">JavaScript</p>
        </div>
      </div>
      <div id="card" className=" shadow-xl p-10  rounded-xl my-10">
        <div id="img-card" className="flex justify-center">
          <Image src={consulting} className="" width={100} height={100} />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-medium pt-5 pb-4">Diseños</h3>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <h4>Herramientas</h4>
          <p className=" text-gray-800 py-1">Java</p>
          <p className=" text-gray-800 py-1">Python</p>
          <p className=" text-gray-800 py-1">JavaScript</p>
        </div>
      </div>
    </section>
  );
};

export default cards;
