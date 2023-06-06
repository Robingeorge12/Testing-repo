import React from "react";
import "./CoppyRight.css";
import { HiAtSymbol } from 'react-icons/hi';
import cp from "../../Assets/Image/coppy.svg";

function CoppyRight() {

  return (
    <div className="coppy-container">
   
      <div className="coppy-container-img">
        {/* <HiAtSymbol /> */}
        <img src={cp} alt="" />
      </div>
     
    </div>
  );
}

export default CoppyRight;
