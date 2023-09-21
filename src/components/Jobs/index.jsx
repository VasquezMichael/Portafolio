import React from "react";
import mkrolex from "../../../public/mkrolex.png";
import zzshop from "../../../public/zzshop.png";
import webBarber from "../../../public/barber-web.png";
import visitSite from "../../../public/visit-site.png";
import Image from "next/image";
import "./style.css";

const Jobs = () => {
  return (
    <div className="mb-10">
      <div className="mb-5">
        <h3 className="text-3xl py-1 dark:text-white">Portafolio</h3>
        <p className="text-md py-2  leading-8 text-gray-800 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          <span className="text-purple-600">Quibusdam</span> ab, quae, debitis
          vel nam vitae quidem expedita{" "}
          <span className="text-purple-600">repudiandae</span> odio ad placeat
          ipsam commodi delectus dolor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="card-job m-auto mb-10">
          <a
            href="https://barberzz.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-front">
              <Image
                alt="image job"
                src={webBarber}
                className=" front-img face "
              />
            </div>
            <div className="card-back">
              <Image
                alt="image job"
                src={visitSite}
                className=" back-img face"
              />
            </div>
          </a>
        </div>

        <div className="card-job m-auto mb-10">
          <a
            href="https://mkrolex.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-front">
              <Image
                alt="image job"
                src={mkrolex}
                className=" front-img face "
              />
            </div>
            <div className="card-back">
              <Image
                alt="image job"
                src={visitSite}
                className=" back-img face"
              />
            </div>
          </a>
        </div>

        <div className="card-job m-auto mb-10">
          <a
            href="https://zz-shop.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-front">
              <Image
                alt="image job"
                src={zzshop}
                className=" front-img face "
              />
            </div>
            <div className="card-back">
              <Image
                alt="image job"
                src={visitSite}
                className=" back-img face"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
