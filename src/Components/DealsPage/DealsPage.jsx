import React from "react";
import "./DealsPage.css";
import m1 from "../../Assets/Image/m1.svg";
import m2 from "../../Assets/Image/m2.svg";
import w1 from "../../Assets/Image/w1.svg";
import w2 from "../../Assets/Image/w2.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Navbar from "../Navbar/Navbar";

const data = [
  {
    img: m1,
    name: "30% OFF",
    d1: "MEN'S FORMAL",
    d2: "COLLECTION",
    a: 1,
  },
  {
    img: m2,
    name: "25% OFF",
    d1: "SELECTED MEN'S",
    d2: "SUITINGS",
    a: 2,
  },
  {
    img: w1,
    name: "40% OFF",
    d1: "WOMENS OFFICE",
    d2: "COLLECTION",
    a: 3,
  },
  {
    img: w2,
    name: "30% OFF",
    d1: "WOMEN'S",
    d2: "PARTY WEAR",
  },
];

function DealsPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="deals-container">
        <h3 style={{ textAlign: "left",marginLeft:"65px" }}>DEALS OF THE DAY</h3>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {/* <SwiperSlide> */}
          {data?.map((el, i) => (
            <SwiperSlide key={i} style={{marginLeft:"65px"}}>
              <div className="deals">
                <div className="deals-img-div">
                  <img className="deals-img" style={{borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} src={el.img} alt="" />
                </div>

                <div className="deals-box">
                  <div className="deals-box-div">
                    <p
                      style={{
                        fontSize: "25px",
                        color: "white",
                        fontWeight: "700",
                       
                      }}
                    >
                      {el.name}
                    </p>
                    <p
                      style={{
                        fontSize: "20px",
                        color: "white",
                        fontWeight: "200",
                      }}
                    >
                      {el.d1}
                    </p>
                    <p
                      style={{
                        fontSize: "20px",
                        color: "white",
                        fontWeight: "200",
                       
                      }}
                    >
                      {el.d2}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default DealsPage;
