import React from "react";
import "./CartPay.css";
import wn from "../../Assets/Image/wn.svg";
import { Link, useNavigate } from "react-router-dom";
import dum1 from "../../Assets/Image/dum1.svg";

import ph from "../../Assets/Image/ph.svg";
import ptm from "../../Assets/Image/ptm.svg";
import goog from "../../Assets/Image/goog.svg";

import cd from "../../Assets/Image/card.svg";
import sbi from "../../Assets/Image/sbi.svg";
import vs from "../../Assets/Image/visa.svg";
import no from "../../Assets/Image/no.svg";

const item = [
  {
    price: "200",
  },
  {
    price: "",
  },
];

function CartPay() {
  const navigate = useNavigate();
  //     const handlePayCart = ()=>{
  //   navigate('/cartpay')
  //     }
  const handleOrder = () => {
    navigate("/order");
  };

  return (
    <div className="cartpay-container">
      <div className="cartpay-div1">
        <div className="cartpay-div1-box1">
          <p style={{ fontWeight: "700" }}>PAYMENT OPTIONS</p>
        </div>

        <hr
          style={{
            width: "100%",
            height: "4px",
            color: "grey",
            backgroundColor: "#8C8C8C",
          }}
        />

        <h4 className="cartpay-div1-box1-heading-first">Saved UPIs</h4>

        <div className="cartpay-item-box1">
          <input type="radio" className="cartpay-div1-box1-ipradio" />
          <img src={ph} className="cartpay-div1-box1-phonepay" alt="" />
          <p
            className="cartpay-div1-box1-ph-ptag1"
            style={{ fontSize: "18px" }}
          >
            Phonepe UPI ID
          </p>
          <p
            className="cartpay-div1-box1-ph-ptag2"
            style={{ fontSize: "18px" }}
          >
            6304897782@ybl
          </p>
        </div>

        <hr
          style={{
            width: "100%",
            height: "1px",
            color: "grey",
            marginTop: "10px",
            backgroundColor: "#8C8C8C",
          }}
        />

        <div className="cartpay-item-box1">
          <input type="radio" style={{ width: "14px", height: "14px" }} />
          <img
            src={goog}
            style={{
              width: "37px",
              height: "38px",
              borderRadius: "50%",
              border: "none",
            }}
            alt=""
          />
          <p style={{ fontSize: "18px" }}>Phonepe UPI ID</p>
          <p style={{ fontSize: "18px" }}>6304897782@ybl</p>
        </div>

        <hr
          style={{
            width: "100%",
            height: "1px",
            color: "grey",
            marginTop: "10px",
            backgroundColor: "#8C8C8C",
          }}
        />

        <div className="cartpay-item-box1">
          <input type="radio" style={{ width: "14px", height: "14px" }} />
          <img
            src={ptm}
            style={{
              width: "37px",
              height: "38px",
              borderRadius: "50%",
              border: "none",
            }}
            alt=""
          />
          <p>Phonepe UPI ID</p>
          <p>6304897782@ybl</p>
        </div>

        <hr
          style={{
            width: "100%",
            height: "4px",
            color: "grey",
            margin: "20px 0px",
            backgroundColor: "#8C8C8C",
          }}
        />

        <h4 className="cartpay-item-box1-h4-one">Saved Cards</h4>

        <div className="cartpay-card-div">
          <div className="cartpay-card-div-box2">
            <div className="cartpay-card-div-box3">
              <input className="cartpay-card-div-box3-ip" type="radio" />
            </div>

            <div className="cartpay-card-div-box4">
              <img className="cartpay-card-div-box4-cdimg" src={cd} alt="" />
              {/* <div className="cartpay-card-div-box4-planeline"></div> */}
              {/* <img className="cartpay-card-div-box4-sbi" src={sbi} alt="" /> */}

              <button className="cartpay-card-div-box4-btn">
                {" "}
                <img className="cartpay-card-div-box4-sbi" src={sbi} alt="" />
              </button>
              {/* <div className="cartpay-card-div-box4-sbi-plaine"></div> */}

              <button className="cartpay-card-div-box4-btn1">
                {" "}
                <img className="cartpay-card-div-box4-vs" src={vs} alt="" />
              </button>

              <img className="cartpay-card-div-box4-vs-im2" src={no} alt="" />
            </div>
          </div>

          <div className="cartpay-card-div-box5">
            <div className="cartpay-card-div-box5-ipbox">
              <input className="cartpay-card-div-box5-ip" type="radio" />
            </div>

            <div className="cartpay-card-div-box5-imdiv">
              <img className="cartpay-card-div-box5-imdiv-im" src={cd} alt="" />

              <button className="cartpay-card-div-box5-btn1">
                <img className="cartpay-card-div-box6-im1" src={sbi} alt="" />
              </button>

              {/* <div className="cartpay-card-div-box6-plain"></div> */}

              <button className="cartpay-card-div-box5-btn">
                <img className="cartpay-card-div-box6-im3" src={vs} alt="" />
              </button>

              <img className="cartpay-card-div-box6-im3-no" src={no} alt="" />
            </div>
          </div>
        </div>

        <hr className="cartpay-card-div-box7-htl-line" />
      </div>




      <div className="cartpay-div2">
        <h4 className="cartpay-div2-heading">PRICE DETAILS</h4>
        <div className="cartpay-div2-price-details">
          <div className="cartpay-div2-price">
            <p>Price (2)</p>
            <p>₹3999</p>
          </div>

          <div className="cartpay-div2-discount">
            <p>Discount</p>
            <p>₹999</p>
          </div>

          <div className="cartpay-div2-delivery">
            <p>Delivery Charges</p>
            <p>₹99</p>
          </div>

          <div className="cartpay-div2-amount">
            <h4>Total Amount</h4>
            <h4>₹4999</h4>
          </div>

          <p style={{ color: "#00AD3B", textAlign: "left", margin: "0px" }}>
            You’ll save 999 on this order
          </p>

          <button className="cartpay-div2-payment" onClick={handleOrder}>
            PROCEED TO PAYMENT
          </button>
        </div>

        <div className="cartpay-img-bottom">
          <div className="cartpay-img-bottom1">
            <div className="cartpay-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPay;
