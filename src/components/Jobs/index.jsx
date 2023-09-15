import React from "react";
import mkrolex from "../../../public/mkrolex.png";
import zzshop from "../../../public/zzshop.png";
import webBarber from "../../../public/barber-web.png";
import Image from "next/image";
const Jobs = () => {
  return (
    <div className="mb-10">
      <h3 className="text-3xl py-1">Portafolio</h3>
      <p className="text-md py-2  leading-8 text-gray-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <span className="text-purple-600">Quibusdam</span> ab, quae, debitis vel
        nam vitae quidem expedita{" "}
        <span className="text-purple-600">repudiandae</span> odio ad placeat
        ipsam commodi delectus dolor.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="  h-full">
          <Image src={webBarber} className="h-full" />
        </div>
        <div className="">
          <Image src={mkrolex} className="h-full" />
        </div>
        <div className=" ">
          <Image src={zzshop} className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
