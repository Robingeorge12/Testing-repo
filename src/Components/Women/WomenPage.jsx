import React from "react";
import Navbar from "../Navbar/Navbar";
import "./WomenPage.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import wo1 from "../../Assets/Image/wo1.svg";
import wo2 from "../../Assets/Image/wo2.svg";
import wo3 from "../../Assets/Image/wo3.svg";
import wo4 from "../../Assets/Image/wo4.svg";
import wo5 from "../../Assets/Image/wo5.svg";
import wo6 from "../../Assets/Image/wo6.svg";

let data = [
  {
    img: wo1,
    price: "1999",
    name: "Plunge Floral Print",
    type: "Georgettee Dress",
    dic: "1999",
  },
  {
    img: wo2,
    price: "1999",
    name: "Landscape Print",
    type: "Belted Shirtdress",
    dic: "1999",
  },
  {
    img: wo3,
    price: "1999",
    name: "Lattice Floral Print",
    type: "Cotton Linen Dress",
    dic: "1999",
  },
  {
    img: wo4,
    price: "1999",
    name: "Shadow Ombre Print",
    type: "Georgettee Skirt",
    dic: "1999",
  },
  {
    img: wo5,
    price: "1999",
    name: "Cotton Sateen",
    type: "Empire Maxi Dress",
    dic: "1999",
  },
  {
    img: wo1,
    price: "1999",
    name: "Plunge Floral Print",
    type: "Georgettee Dress",
    dic: "1999",
  },
];

function WomenPage() {
let len = data.length
console.log(len)

  return (
    <div className="women-container">
      {/* <Navbar /> */}

      <div>
        <p className="women-heading">NEW ARRIVALS - WOMEN</p>
      </div>

      <div className="women-container-div">
        <Swiper
          spaceBetween={-400}
          slidesPerView={4}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data?.map((el, i) => (
            <SwiperSlide key={i} style={{marginLeft:"65px"}}>
              <div className="women-card-div">
                    <div className="women-card-img">
                    <img src={el.img} alt="" />
                    </div>
                <div className="women-card-details">
                    <p style={{margin:"0px",padding:"0px"}}>{el.name}</p>
                    <p style={{margin:"0px",padding:"0px"}}>{el.type}</p>
                    <div style={{display:"flex"}}>
                    <p style={{margin:"0px",padding:"0px",fontWeight:700}}>${el.price}</p>
                    <p style={{margin:"0px",padding:"0px",marginLeft:"4px",color:"grey",}}>${el.dic}</p>
                    </div>
                    
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default WomenPage;
