import React from "react";
import { Cards } from "./cards";

const Jobs = () => {
  return (
    <div id="Jobs">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="text-center"
      >
        <div className="mb-5">
          <h3 className="text-4xl py-1 dark:text-white">Portafolio</h3>
          <p className="text-md py-2  leading-8 text-gray-800 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <span className="text-purple-600">Quibusdam</span> ab, quae, debitis
            vel nam vitae quidem expedita{" "}
            <span className="text-purple-600">repudiandae</span> odio ad placeat
            ipsam commodi delectus dolor.
          </p>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Jobs;
