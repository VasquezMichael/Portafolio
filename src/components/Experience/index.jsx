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

  return (
    <Container className=" bg-gray-700 my-24 p-5 flex flex-col items-center justify-center text-center gap-10">
      <h2 className="text-5xl py-2 text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text font-medium font-burtons">
        Experiencia profesional
      </h2>
      <p className="hidden md:block">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci harum
        commodi deserunt expedita facere, odio ipsum repellendus quia. Sapiente
        laudantium explicabo repudiandae ad omnis aperiam et eligendi, ab ipsum
        incidunt!
      </p>
      <Swiper
        className="Swiper-Container"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="1"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
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
            <SwiperSlide key={img.key} className="Swiper-img-container">
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
