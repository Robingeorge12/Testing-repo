import React, { useEffect } from "react";
import "./LandingPage.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

import m1 from "../../Assets/Image/m1.svg";
import m2 from "../../Assets/Image/m2.svg";
import w1 from "../../Assets/Image/w1.svg";
import w2 from "../../Assets/Image/w2.svg";
import wa from "../../Assets/Image/wa.svg";

const data = [
  {
    img: m1,
    a: 1,
  },
  {
    img: m2,
    a: 2,
  },
  {
    img:w1 ,
    a: 3,
  },
  {
    img:w2 ,
    a: 3,
  },
  {
    img:wa ,
    a: 3,
  },
];

function LandingPage() {
  const [index, setIndex] = useState(0);
  const delay = 3000;
  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  //   42
  return (
    <div className="landing-div">
      {/* <Navbar /> */}
      <div className="landing-comtainer">
        <div className="slideshowSlider">
          {data.map((el, i) => {
            return (
              <div
                key={i}
                className="slide"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                <div style={{ width: "1500px", height: "100%" }}>
                  <div className="landing-slide-box">
                    <img className="images" src={el.img} alt="" />
                    <div className="landind-box-details">
                    <button
                      style={{
                        display: "flex",
                        alignItems:"center",
                        justifyContent:"center",
                        color:"red",
                        width:"50px",
                        height:"50px"
                      }}
                    >
                      BUY{el.a}
                    </button>
                    <p>oiehgeior</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="slideshowDots">
        {data.map((_, i) => (
          <div
            key={i}
            className={`slideshowDot${index === i ? " active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
