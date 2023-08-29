import React from "react";
import Cards from "./cards";
const Services = () => {
  return (
    <section className="">
      <div className="servicios">
        <h3 className="text-3xl py-1">Servicios que ofrezco</h3>
        <p className="text-md py-2  leading-8 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          <span className="text-purple-600">Quibusdam</span> ab, quae, debitis
          vel nam vitae quidem expedita{" "}
          <span className="text-purple-600">repudiandae</span> odio ad placeat
          ipsam commodi delectus dolor.
        </p>
        <p className="text-md py-2  leading-8 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          assumenda voluptatibus reprehenderit, dicta debitis.
        </p>
      </div>
      <Cards />
    </section>
  );
};

export default Services;
