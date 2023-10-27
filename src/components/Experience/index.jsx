import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "./style";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import puro from "../../../public/adm.png";
import jami from "../../../public/tecnico.png";
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
      setStateSlider(getWindowWidth());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container className="my-24 flex flex-col items-center justify-center text-center gap-10">
      <div className="container-title flex md:flex-col ">
        <h2 className=" text-4xl py-1 dark:text-white font-burtons">
          Experiencia profesional
        </h2>
        <p className="hidden md:block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          harum commodi deserunt expedita facere, odio ipsum repellendus quia.
          Sapiente laudantium explicabo repudiandae ad omnis aperiam et
          eligendi, ab ipsum incidunt!
        </p>
      </div>
      <Swiper
        className="Swiper-Container gap-10"
        grabCursor={true}
        effect={"coverflow"}
        pagination={true}
        centeredSlides={true}
        slidesPerView={stateSlider > 800 ? "3" : 1}
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
              className="Swiper-img-container p-5 rounded-xl bg-slate-400"
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
