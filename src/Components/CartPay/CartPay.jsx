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
const handleOrder = ()=>{
    navigate('/order')
}

  return (
    <div className="cartpay-container">
      <div className="cartpay-div1">
        <div className="cartpay-div1-box1">
          <p style={{ fontWeight: "700" }}>PAYMENT OPTIONS</p>
        </div>

        <hr style={{ width: "100%", height: "4px", color: "grey", backgroundColor:"#8C8C8C" }} />

        <h4 style={{ textAlign: "left", marginLeft: "54px" }}>Saved UPIs</h4>

        <div className="cartpay-item-box1">
          <input
            type="radio"
            style={{ width: "14px", height: "14px", backgroundColor: "red" }}
          />
          <img
            src={ph}
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
            backgroundColor:"#8C8C8C"
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
            backgroundColor:"#8C8C8C"
          }}
        />

        <div className="cartpay-item-box1">
          <input
            type="radio"
            style={{ width: "14px", height: "14px",}}
          />
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
          <p style={{ fontSize: "18px" }}>Phonepe UPI ID</p>
          <p style={{ fontSize: "18px" }}>6304897782@ybl</p>
        </div>

        <hr
          style={{
            width: "100%",
            height: "4px",
            color: "grey",
            margin: "20px 0px",
             backgroundColor:"#8C8C8C"
          }}
        />

<h4 style={{ textAlign: "left", marginLeft: "54px",marginTop:"0px" }}>Saved Cards</h4>

        <div className="cartpay-card-div">


          <div
            style={{
              width: "40%",
              height: "60%",
            //   border: "1px solid red",
              marginTop: "5px",
              display: "flex",
            //   marginLeft: "20px",
            //   justifyContent:"left"
            }}
          >
            <div
              style={{
                width: "10%",
                height: "100%",
                // border: "1px solid green",
              }}
            >
              <input type="radio" style={{ width: "14px", height: "14px",float:"left", }} />
            </div>

            <div
              style={{
                width: "80%",
                height: "100%",
                // border: "1px solid blue",
              }}
            >
              <img style={{ width: "100%", height: "100%" }} src={cd} alt="" />
              <div
                style={{
                  width: "45px",
                  height: "27px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  position: "relative",
                  top: "-144px",
                  left: "29px",
                }}
              ></div>
              <img
                style={{
                  position: "relative",
                  top: "-171px",
                  left: "-105px",
                  width: "31px",
                  height: "28px",
                }}
                src={sbi}
                alt=""
              />

              <div
                style={{
                  width: "48px",
                  height: "26px",
                  backgroundColor: "white",
                  borderRadius: "13px",
                  position: "relative",
                  top: "-121px",
                  left: "234px",
                }}
              ></div>

              <img
                style={{
                  position: "relative",
                  top: "-150px",
                  left: "189px",
                  width: "30px",
                  height: "30px",
                }}
                src={vs}
                alt=""
              />

              <img
                style={{
                  position: "relative",
                  top: "-169px",
                  left: "-29px",
                  width: "168px",
                  height: "30px",
                }}
                src={no}
                alt=""
              />
            </div>
          </div>



          <div
            style={{
              width: "40%",
              height: "60%",
            //   border: "1px solid red",
              marginTop: "5px",
              display: "flex",
            //   marginLeft: "20px",
            //   justifyContent:"left"
            }}
          >
            <div
              style={{
                width: "10%",
                height: "100%",
                // border: "1px solid green",
              }}
            >
              <input type="radio" style={{ width: "14px", height: "14px",float:"left", }} />
            </div>

            <div
              style={{
                width: "80%",
                height: "100%",
                // border: "1px solid blue",
              }}
            >
              <img style={{ width: "100%", height: "100%" }} src={cd} alt="" />
              <div
                style={{
                  width: "45px",
                  height: "27px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  position: "relative",
                  top: "-144px",
                  left: "29px",
                }}
              ></div>
              <img
                style={{
                  position: "relative",
                  top: "-171px",
                  left: "-105px",
                  width: "31px",
                  height: "28px",
                }}
                src={sbi}
                alt=""
              />

              <div
                style={{
                  width: "48px",
                  height: "26px",
                  backgroundColor: "white",
                  borderRadius: "13px",
                  position: "relative",
                  top: "-121px",
                  left: "234px",
                }}
              ></div>

              <img
                style={{
                  position: "relative",
                  top: "-150px",
                  left: "189px",
                  width: "30px",
                  height: "30px",
                }}
                src={vs}
                alt=""
              />

              <img
                style={{
                  position: "relative",
                  top: "-169px",
                  left: "-29px",
                  width: "168px",
                  height: "30px",
                }}
                src={no}
                alt=""
              />
            </div>
          </div>
        </div>


        <hr
          style={{
            width: "100%",
            height: "4px",
            color: "grey",
            margin: "0px",
            backgroundColor:"#8C8C8C",
            marginTop:"-40px"
          }}
        />

      </div>

      <div className="cartpay-div2">
        <h4
          style={{
            width: "90%",
            height: "20px",
            // border: "1px solid black",
            margin: "auto",
            display: "flex",
            textAlign: "left",
            paddingTop: "10px",
          }}
        >
          PRICE DETAILS
        </h4>
        <div
          style={{
            width: "90%",
            height: "330px",
            // border: "1px solid black",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "10%",
              //   border: "1px solid blue",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "14px 0px",
            }}
          >
            <p>Price (2)</p>
            <p>₹3999</p>
          </div>

          <div
            style={{
              width: "100%",
              height: "10%",
              //   border: "1px solid blue",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <p>Discount</p>
            <p>₹999</p>
          </div>

          <div
            style={{
              width: "100%",
              height: "10%",
              //   border: "1px solid blue",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <p>Delivery Charges</p>
            <p>₹99</p>
          </div>

          <div
            style={{
              width: "100%",
              height: "10%",
              //   border: "1px solid blue",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "10px 0px",
            }}
          >
            <h4>Total Amount</h4>
            <h4>₹4999</h4>
          </div>

          <p style={{ color: "#00AD3B", textAlign: "left", margin: "0px" }}>
            You’ll save 999 on this order
          </p>

          <button
            style={{
              width: "100%",
              height: "40px",
              // border: "1px solid black",
              margin: "auto",
              display: "flex",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
              borderRadius: "8px",
              fontSize: "20px",
              // gap: "10px",
            }}
            onClick={handleOrder}
          >
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
