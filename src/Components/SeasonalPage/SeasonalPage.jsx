import React from "react";
import "./SeasonalPage.css";
import Navbar from "../Navbar/Navbar";
import s1 from "../../Assets/Image/s1.svg"
import s2 from "../../Assets/Image/s2.svg"
import s3 from "../../Assets/Image/s3.svg"
import s4 from "../../Assets/Image/s4.svg"
import s5 from "../../Assets/Image/s5.svg"
import s7 from "../../Assets/Image/s7.svg"
import s8 from "../../Assets/Image/s8.svg";

import { HiOutlineChevronRight } from 'react-icons/hi'
// 
// import s6 from "../../Assets/Image/s6.svg"

function SeasonalPage() {
  return (
    <div className="season-div">
      {/* <Navbar /> */}
      <div className="seasonal-heading"><p style={{fontSize:"25px",fontWeight:"700"}}>SEASONAL DESIGN WEARS</p></div>
      <div className="season-container">
        <div className="season-container-div">
          <div className="season-img-div1"><img src={s7} alt="" /></div>
          <div className="season-img-div2"><img src={s8} alt="" /></div>
          <div className="season-img-div3"><img src={s4} alt="" /></div>
          <div className="season-img-div4"><img src={s3} alt="" /></div>
          <div className="season-img-div5"><img src={s5} alt="" /></div>
          <div className="season-img-div6">
            <img src="https://img.freepik.com/free-photo/gold-aesthetic-wallpaper-with-cloth-top-view_23-2149872278.jpg?size=626&ext=jpg&ga=GA1.2.794152557.1680071622&semt=robertav1_2_sidr" alt="" />
          <button><HiOutlineChevronRight style={{height:"100%",color:"white"}} /></button>
          </div>
          {/* <div></div> */}
        </div>
      </div>
    </div>
  );
}

export default SeasonalPage;
