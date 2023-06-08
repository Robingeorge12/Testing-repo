import React from 'react'
import "./Footer.css"

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import {GrTwitter } from 'react-icons/gr';
import { FaPinterestP } from 'react-icons/fa';

import ap from "../../Assets/Image/ap.svg";
import pla from "../../Assets/Image/pla.svg";

function Footer() {
  return (
    <div className='footer-container'>
<div className='footer-div'>

<div className='footer-box1'>
    <div className='footer-head1'><h3>Contact Us</h3></div>
    <div>
        <p>+91 00045430</p>
        <p>Write to:tailux@gmail.com</p>
        <p>Help</p>
        <p></p>
    </div>
</div>
<div className='footer-box2'>
<div className='footer-head2'><h3>Orders</h3></div>
    <div>
        <p>Customized Products</p>
        <p>Payments & Shipping</p>
        <p>Returns & Refunds</p>
        <p>Privacy Policy</p>
    </div>
</div>
<div className='footer-box3'>
<div  className='footer-head3'><h3>About</h3></div>
    <div>
        <p>How customization works</p>
        <p>Size Charts</p>
        <p>How to measure</p>
        <p>Customer Reviews</p>
    </div>
</div>
<div className='footer-box4'>
    <div className='footer-inner-box1'>
        <div><div><FaFacebookF /></div></div>
        <div><div><AiOutlineInstagram /></div></div>
        <div><div><GrTwitter /></div></div>
        <div><div><FaPinterestP /></div></div>
    </div>
    <div className='footer-inner-box2'>
        <div><img src={ap} alt="" /></div>
        <div><img src={pla} alt="" /></div>
    </div>
</div>

</div>

    </div>
  )
}

export default Footer