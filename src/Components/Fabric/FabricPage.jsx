import React from "react";
import "./FabricPage.css";
import Navbar from "../Navbar/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import f1 from "../../Assets/Image/f1.svg";
import f2 from "../../Assets/Image/f2.svg";
import f3 from "../../Assets/Image/f3.png";

const data = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRE6HZhfBXgAW-RkrGDZ0yD_U4S-AameDdQA&usqp=CAU",
    desc: "BROCADE SILK",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_-fEJ11J_SCL_3at24O0g0AgLBYLQRmeSvA&usqp=CAU",
    desc: "CHINNAMON CHIFFON",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpz4SPV2EvYfeJKBwkUKlCa3Wi-rbd4C3j4d-YhzHAN1HDyRPq_EMqF0dTAXTurLpOiaA&usqp=CAU",
    desc: "CORDURY",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41NH2x7KQ4LdacXIw4jyqFDzc770XMAyzGujabx3o8zATYQDYsJ-rkwVl_OY4cNX0nQE&usqp=CAU",
    desc: "LINEN TOUGH",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlacNzcQ4-hnJnTX0zIjOeHsGN1rOsKB-02hB7RE0euK4Vtq_dZsp7R6R5nuakbicrtA&usqp=CAU",
    desc: "CHINNAMON CHIFFON",
  },
];

function FabricPage() {
  return (
    <div className="fabric-container">
      <div className="fabric-heading">
        <p>PREMIUM RANGE OF FABRICS</p>
      </div>
      <div className="fabric-div">
        <Swiper
          spaceBetween={-400}
          slidesPerView={3}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data?.map((el, i) => (
            <SwiperSlide key={i} style={{marginLeft:"65px"}}>
              <div className="fabric-slide-div">
                <div className="fabric-img">
                  <img src={el.img} alt="" />
                </div>
                <div className="fabric-details">
                  <p>{el.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
<SwiperSlide>
  <button>hj</button>
</SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}

export default FabricPage;
