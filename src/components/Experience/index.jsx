import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "./style";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import puro from "../../../public/Administracion.png";
import jami from "../../../public/Btc.png";
import { useState, useEffect } from "react";

const Experience = () => {
  const imagenes = [
    {
      img: puro,
      key: "1",
    },
    {
      img: jami,
      key: "2",
    },
  ];

  const [stateSlider, setStateSlider] = useState(0);
  useEffect(() => {
    const getWindowWidth = () => {
      return window.screen.width;
    };

    const handleResize = () => {
      console.log(window.screen.width);
      setStateSlider(getWindowWidth());
    };

    window.addEventListener("resize", handleResize);
    setStateSlider(getWindowWidth());
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container className="my-24 flex flex-col items-center justify-center text-center gap-10">
      <div className="container-title flex md:flex-col ">
        <h2 className=" text-3xl py-1 dark:text-white font-burtons">
          EXPERIENCIA PROFESIONAL
        </h2>
        <p className="hidden md:block dark:text-gray-300">
          Un breve resumen de mis experiencias profesionales en las areas que
          logré desempeñarme
        </p>
      </div>
      <Swiper
        className="Swiper-Container gap-10"
        grabCursor={true}
        effect={"coverflow"}
        pagination={true}
        centeredSlides={true}
        slidesPerView={stateSlider > 770 ? "3" : 1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {imagenes.map((img) => {
          return (
            <SwiperSlide
              key={img.key}
              className="Swiper-img-container p-5 rounded-xl bg-slate-700"
            >
              <Image className="image" src={img.img} />
            </SwiperSlide>
          );
        })}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow "></div>
          <div className="swiper-button-next slider-arrow"></div>
        </div>
      </Swiper>
    </Container>
  );
};

export default Experience;
