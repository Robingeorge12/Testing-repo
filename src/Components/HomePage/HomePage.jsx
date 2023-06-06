import React from "react";
import "./HomePage.css";
import Carousel from "react-material-ui-carousel";

import m1 from "../../Assets/Image/m1.svg";
import m2 from "../../Assets/Image/m2.svg";
import w1 from "../../Assets/Image/w1.svg";
import w2 from "../../Assets/Image/w2.svg";
import wa from "../../Assets/Image/wa.svg";
import wa2 from "../../Assets/Image/img-caro2.png";
import wa3 from "../../Assets/Image/img-caro.png";

import { Box, Button, Paper } from "@mui/material";
import Navbar from "../Navbar/Navbar";

const data = [
  {
    img: wa,
    name:"30% OFF",
    d1:"MEN'S FORMAL",
    d2:"COLLECTION",
    a: 1,
  },
  {
    img: wa2,
    name:"25% OFF",
    d1:"SELECTED MEN'S",
    d2:"SUITINGS",
    a: 2,
  },
  {
    img: wa3,
    name:"40% OFF",
    d1:"WOMENS OFFICE",
    d2:"COLLECTION",
    a: 3,
  },

];

function HomePage({}) {
  return<Box>
  {/* <Navbar /> */}

   <Carousel>

   {
   
   data?.map((el,i)=>(

    <Paper key={i}>
        <div className="homepage-container">
    <div className="home-image-div"><img className="home-image" src={el.img}  alt="pic"/></div>
    {/* <div  className="home-box"> */}

    {/* <div>
    <p style={{fontSize:"65px",color:"white",fontWeight:"700"}}>{el.name}</p>
    <p style={{fontSize:"45px",color:"white",fontWeight:"400"}}>{el.d1}</p>
    <p style={{fontSize:"45px",color:"white",fontWeight:"400"}}>{el.d2}</p>
    </div> */}
    {/* </div> */}
    <Button className="CheckButton">
    
    </Button>
    </div>
    
</Paper>
    )) 
  
}
  </Carousel>
  </Box>
}

export default HomePage;
