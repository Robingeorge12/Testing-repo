import React from "react";
import "./CartAddress.css";
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

function CartAddress() {
  const navigate = useNavigate();
  const handlePayCart = () => {
    navigate("/cartpay");
  };
  return (
    <div className="cartadd-container">
      <div className="cartadd-div1">
        <div className="cartadd-div1-box1">
          <p style={{ fontWeight: "700" }}>CONFORM ADDRESS</p>
          <Link to="" style={{ color: "black" }}>
            <button
              style={{
                fontWeight: "700",
                border: "black",
                borderRadius: "4px",
                padding: "4px 6px",
              }}
            >
              Add New Address
            </button>
          </Link>
        </div>

        <hr style={{ height: "1.5px", color: "grey" }} />

        <div className="cartadd-item-box1">
          <div className="cartadd-item-box1-btndiv">
            <button style={{ border: "none" }}>HOME</button>
          </div>

          <div className="cartadd-item-box1-div1">
            <div className="cartadd-item-box1-div2">
              <div className="cartadd-item-box1-div3">
                <input type="radio" />
              </div>

              <div className="cartadd-item-box1-div4">
                <p className="cartadd-item-box1-div5-ptag">M S Nageswara Rao</p>

                <p className="cartadd-item-box1-div5-ptag2">6304897782</p>
              </div>
            </div>

            <p className="cartadd-item-box1-div5-ptag3">
              Plot no: 548 D.o : 4-8-98, Karanamgari veedhi, koretipadu, Guntur,
              Guntur, Andhra Pradesh - 522007
            </p>
          </div>
        </div>

        <hr style={{ width: "100%", height: "1.5px", color: "grey" }} />

        <div className="cartadd-item-box1">
          <div className="cartadd-item-box1-btndiv">
            <button style={{ border: "none" }}>HOME</button>
          </div>

          <div className="cartadd-item-box1-div1">
            <div className="cartadd-item-box1-div2">
              <div className="cartadd-item-box1-div3">
                <input type="radio" />
              </div>

              <div className="cartadd-item-box1-div4">
                <p className="cartadd-item-box1-div5-ptag">M S Nageswara Rao</p>

                <p className="cartadd-item-box1-div5-ptag2">6304897782</p>
              </div>
            </div>

            <p className="cartadd-item-box1-div5-ptag3">
              Plot no: 548 D.o : 4-8-98, Karanamgari veedhi, koretipadu, Guntur,
              Guntur, Andhra Pradesh - 522007
            </p>
          </div>
        </div>

        <hr style={{ width: "100%", height: "1.5px", color: "grey" }} />

        <div className="cartadd-item-box1">
          <div className="cartadd-item-box1-btndiv">
            <button style={{ border: "none" }}>HOME</button>
          </div>

          <div className="cartadd-item-box1-div1">
            <div className="cartadd-item-box1-div2">
              <div className="cartadd-item-box1-div3">
                <input type="radio" />
              </div>

              <div className="cartadd-item-box1-div4">
                <p className="cartadd-item-box1-div5-ptag">M S Nageswara Rao</p>

                <p className="cartadd-item-box1-div5-ptag2">6304897782</p>
              </div>
            </div>

            <p className="cartadd-item-box1-div5-ptag3">
              Plot no: 548 D.o : 4-8-98, Karanamgari veedhi, koretipadu, Guntur,
              Guntur, Andhra Pradesh - 522007
            </p>
          </div>
        </div>




      </div>






      <div className="cartadd-div2">
        <h4 className="cartadd-div2-head">PRICE DETAILS</h4>
        <div className="cartadd-div2-price-cont">
          <div className="cartadd-div2-price-l1">
            <p>Price (2)</p>
            <p>₹3999</p>
          </div>

          <div className="cartadd-div2-price-l2">
            <p>Discount</p>
            <p>₹999</p>
          </div>

          <div className="cartadd-div2-price-l3">
            <p>Delivery Charges</p>
            <p>₹99</p>
          </div>

          <div className="cartadd-div2-price-l4">
            <h4>Total Amount</h4>
            <h4>₹4999</h4>
          </div>

          <p style={{ color: "#00AD3B", textAlign: "left", margin: "0px" }}>
            You’ll save 999 on this order
          </p>

          <button
          className="cartadd-div2-delivery-btn"
            onClick={handlePayCart}
          >
            DELIVERE HERE
          </button>
        </div>

        <div className="cartadd-img-bottom">
          <div className="cartadd-img-bottom1">
            <div className="cartadd-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartAddress;
