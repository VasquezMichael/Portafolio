import React from "react";
import Cards from "./cards";
const Skills = () => {
  return (
    <section className="flex flex-col text-center mb-24 ">
      <div className="Habilidades">
        <h3 className="text-4xl py-1 dark:text-white">Skills</h3>
        <p className="text-md py-2  leading-8 text-gray-800 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          assumenda voluptatibus reprehenderit, dicta debitis.
        </p>
      </div>
      <Cards />
    </section>
  );
};

export default Skills;
