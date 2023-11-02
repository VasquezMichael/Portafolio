import React from "react";
import Cards from "./cards";

const Skills = () => {
  return (
    <section id="Skills" className="flex flex-col text-center mb-24 ">
      <div data-aos="fade-up" data-aos-duration="1000" className="Habilidades">
        <h3 className="text-3xl py-1 dark:text-white font-burtons">SKILLS</h3>
        <p className="text-md py-2 text-gray-800 dark:text-gray-300">
          Mis herramientas de preferencia
        </p>
      </div>
      <Cards />
    </section>
  );
};

export default Skills;
