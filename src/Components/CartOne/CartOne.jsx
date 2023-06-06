import React from "react";
import "./CartOne.css";
import wn from "../../Assets/Image/wn.svg";
import { Link, useNavigate } from "react-router-dom";
import dum1 from "../../Assets/Image/dum1.svg";

const item = [
  {
    price: "200",
  },
  {
    price: "",
  },
];



function CartOne() {

  const navigate = useNavigate();


  const handleOrder = ()=>{
    navigate("/order")
    }


    const handleProfile = ()=>{
      navigate("/profile")
      }
  
const handlemanage = ()=>{
navigate("/manageadd")
}

const handleSize = ()=>{
  navigate("/mysize")
  }
  
  const handleUpi = ()=>{
    navigate("/paymentpage")
  }

  const handleCard = ()=>{
    navigate("/saved")
  }

  
  const handleWish = ()=>{
    navigate("/mywish")
  }

  
  const handleRate = ()=>{
    navigate("/rating")
  }


  const handleNote = ()=>{
    navigate("/notification")
  }

const handleCart = ()=>{
  navigate("/cartadd")
}

  return (
    <div className="cartone-container">
      <div className="cartone-div1">
        <div className="cartone-div1-box1">
          <p style={{ fontWeight: "700" }}>{"Deliver to Guntur-522007"}</p>
          <button
            style={{
              fontWeight: "700",
              border: "black",
              borderRadius: "4px",
              padding: "4px 6px",
            }}
          >
            Change
          </button>
        </div>

        <hr style={{ height: "1.5px", color: "grey" }} />

        <div className="cartone-item-box1">
          <div
            style={{
              width: "100%",
              height: "89%",
              //   border: "1px solid blue",
              display: "flex",
              justifyContent: "left",
            }}
          >
            <img
              style={{ height: "100%", paddingRight: "20px" }}
              src={wn}
              alt=""
            />
            <div
              style={{
                width: "50%",
                height: "100%",
                // border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                textAlign: "left",
                gap: "4px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  margin: "0px",
                }}
              >
                Party Wear Dress for Women
              </p>

              <div
                style={{
                  width: "auto",
                  height: "30px",
                  display: "flex",
                  gap: "10px",
                  justifyContent: "left",
                  textAlign: "center",
                  alignItems: "center",
                  margin: "6px 0px -7px 0px",
                  //   border:"1px solid blue",
                }}
              >
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "15px",
                    color: "#878787",
                  }}
                >
                  Pack of 1
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#FF0000",
                  }}
                >
                 Out of Stock
                </p>
              </div>

              <div
                style={{
                  width: "200px",
                  height: "30px",
                  display: "flex",
                  gap: "12px",
                  justifyContent: "left",
                  //   textAlign: "center",
                  alignItems: "center",
                  margin: "-11px 0px 0px 0px",
                }}
              >
                <Link to="" style={{color:"black"}}>
                  <buttton
                    style={{
                      fontWeight: "12px",
                      color: "black",
                      // fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    Add to Wishlist
                  </buttton>
                </Link>

                <Link to="" style={{color:"black"}}>
                  {" "}
                  <buttton style={{ fontWeight: "12px", color: "black" }}>
                    Remove
                  </buttton>
                </Link>
              </div>
            </div>
            <div
              style={{
                width: "36%",
                height: "50%",
                // border: "1px solid green",
                display: "flex",
                textAlign: "justify",
              }}
            >
              {" "}
              <p>{""}</p>{" "}
            </div>
          </div>
        </div>

        <hr style={{ width: "100%", height: "1.5px", color: "grey" }} />

        <div className="cartone-item-box1">
          <div
            style={{
              width: "100%",
              height: "89%",
              //   border: "1px solid blue",
              display: "flex",
              justifyContent: "left",
            }}
          >
            <img
              style={{ height: "100%", paddingRight: "20px" }}
              src={wn}
              alt=""
            />
            <div
              style={{
                width: "50%",
                height: "100%",
                // border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                textAlign: "left",
                gap: "4px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  margin: "0px",
                }}
              >
                Party Wear Dress for Women
              </p>

              <div
                style={{
                  width: "auto",
                  height: "30px",
                  display: "flex",
                  gap: "10px",
                  justifyContent: "left",
                  textAlign: "center",
                  alignItems: "center",
                  margin: "6px 0px -7px 0px",
                  //   border:"1px solid blue",
                }}
              >
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "15px",
                    color: "#878787",
                  }}
                >
                  Pack of 1
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "black",
                  }}
                >
                  $2999
                </p>
              </div>

              <div
                style={{
                  width: "200px",
                  height: "30px",
                  display: "flex",
                  gap: "12px",
                  justifyContent: "left",
                  //   textAlign: "center",
                  alignItems: "center",
                  margin: "-11px 0px 0px 0px",
                }}
              >
                <Link to="" style={{color:"black"}}>
                  <buttton
                    style={{
                      fontWeight: "12px",
                      color: "black",
                      // fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    Add to Wishlist
                  </buttton>
                </Link>

                <Link>
                  {" "}
                  <buttton style={{ fontWeight: "12px", color: "black" }}>
                    Remove
                  </buttton>
                </Link>
              </div>
            </div>
            <div
              style={{
                width: "36%",
                height: "50%",
                // border: "1px solid green",
                display: "flex",
                textAlign: "justify",
              }}
            >
              {" "}
              <p style={{ fontWeight: "600" }}>
                Delivery Expected by 30th March, 2023
              </p>{" "}
            </div>
          </div>
        </div>

        <hr style={{ height: "1.5px", color: "grey" }} />

        <div className="cartone-item-box1">
          <div
            style={{
              width: "100%",
              height: "89%",
              //   border: "1px solid blue",
              display: "flex",
              justifyContent: "left",
            }}
          >
            <img
              style={{ height: "100%", paddingRight: "20px" }}
              src={wn}
              alt=""
            />
            <div
              style={{
                width: "50%",
                height: "100%",
                // border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                textAlign: "left",
                gap: "4px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  margin: "0px",
                }}
              >
                Party Wear Dress for Women
              </p>

              <div
                style={{
                  width: "auto",
                  height: "30px",
                  display: "flex",
                  gap: "10px",
                  justifyContent: "left",
                  textAlign: "center",
                  alignItems: "center",
                  margin: "6px 0px -7px 0px",
                  //   border:"1px solid blue",
                }}
              >
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "15px",
                    color: "#878787",
                  }}
                >
                  Pack of 1
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "black",
                  }}
                >
                  $2999
                </p>
              </div>

              <div
                style={{
                  width: "200px",
                  height: "30px",
                  display: "flex",
                  gap: "12px",
                  justifyContent: "left",
                  //   textAlign: "center",
                  alignItems: "center",
                  margin: "-11px 0px 0px 0px",
                }}
              >
                <Link to="" style={{color:"black"}}>
                  <buttton
                    style={{
                      fontWeight: "12px",
                      color: "black",
                      // fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    Add to Wishlist
                  </buttton>
                </Link>

                <Link to="" style={{color:"black"}}>
                  {" "}
                  <buttton style={{ fontWeight: "12px", color: "black" }}>
                    Remove
                  </buttton>
                </Link>
              </div>
            </div>
            <div
              style={{
                width: "36%",
                height: "50%",
                // border: "1px solid green",
                display: "flex",
                textAlign: "justify",
              }}
            >
              {" "}
              <p style={{ fontWeight: "600" }}>
                Delivery Expected by 30th March, 2023
              </p>{" "}
            </div>
          </div>
        </div>

        <hr style={{ width: "100%", height: "1.5px", color: "grey" }} />
      </div>

      <div className="cartone-div2">
        <h4
        className="cartone-div2-price-head"
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
          className="cartone-div2-head"
    
          >
            <p>Price (2)</p>
            <p>₹3999</p>
          </div>

          <div
           className="cartone-div2-discount"

          >
            <p>Discount</p>
            <p>₹999</p>
          </div>

          <div
          className="cartone-div2-delivery"
          >
            <p>Delivery Charges</p>
            <p>₹99</p>
          </div>

          <div
          className="cartone-div2-total"
   
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
            onClick={handleCart}
          >
            PLACE ORDER
          </button>
        </div>


        <div className="cartone-img-bottom">
          <div className="cartone-img-bottom1">
            <div className="cartone-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default CartOne;
