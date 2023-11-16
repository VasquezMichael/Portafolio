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
          <h3 className="text-3xl py-1 dark:text-white font-burtons">
            PORTAFOLIO
          </h3>
          <p className="text-md py-2 text-gray-800 dark:text-gray-300">
            Explora mis ultimos proyectos
          </p>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Jobs;
