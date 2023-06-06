import React from "react";
import "./clients.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link, useNavigate } from "react-router-dom";

import m1 from "../../Assets/Image/m1.svg";
import m2 from "../../Assets/Image/m2.svg";
import w1 from "../../Assets/Image/w1.svg";
import w2 from "../../Assets/Image/w2.svg";
export default function Clients() {

const navigate = useNavigate()

  return (
    <div className="landingPage-clients">
      <div className="landingPage-clients-title">
        <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--main-heading)", paddingRight: "20px" }}>Meet</span>
        <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--main-heading)", paddingRight: "20px" }}>Our</span>
        <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "#fca61f" }}>Clients</span>
      </div>

      <div className="landingPage-client-swiper">
        <Swiper spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <img style={{ width: "500px", borderRadius: "40px" }} src={m1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "500px", borderRadius: "40px" }} src={m2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "500px", borderRadius: "40px" }} src={w1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "500px", borderRadius: "40px" }} src={w2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "500px", borderRadius: "40px" }} src={m2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
