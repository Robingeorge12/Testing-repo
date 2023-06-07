import React from "react";
import "./ProductPage.css";
import ims from "../../Assets/Image/ims.svg";
import iml from "../../Assets/Image/iml.svg";
import vect from "../../Assets/Image/Vector.svg";
import gn from "../../Assets/Image/green.svg";
import co1 from "../../Assets/Image/gn.svg";
import co2 from "../../Assets/Image/co2.svg";
import co3 from "../../Assets/Image/co3.svg";
import co4 from "../../Assets/Image/co4.svg";
import co5 from "../../Assets/Image/co5.svg";
import p1 from "../../Assets/Image/pic1.svg";
import p2 from "../../Assets/Image/pic2.svg";
import p3 from "../../Assets/Image/pic3.svg";
import { Link } from "react-router-dom";

import ImageGallery from "react-image-gallery";

import { AiOutlineHeart, AiOutlineStar, AiOutlineRight } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";

const images = [
  {
    original: iml,
    thumbnail: ims,
  },
  {
    original: iml,
    thumbnail: ims,
  },
  {
    original: iml,
    thumbnail: ims,
  },
];

function ProductPage() {
  return (
    <div className="product-container">
      <div className="product-container-box1">
        <div className="product-container-box1-div1">
          <div className="product-container-img-div1">
            <ImageGallery
              items={images}
              thumbnailPosition={"left"}
              width={"100%"}
              height={"100%"}
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </div>
        </div>

        <div className="product-container-box1-div2">
          <div className="product-container-box1-div2-box1">
            <p>Plunge Floral Print Georgette Dress</p>
          </div>
          <div className="product-container-box1-div2-box2">
            <h3>$199</h3>
            <p>MRP 100</p>
            <div className="product-rating">
              <div className="product-rating-div1">
                <p>{"4.1"}</p>
                <AiOutlineStar style={{ color: "green" }} />
                <hr className="product-rating-div1-hr" />
                <p>2.6k Ratings</p>
              </div>
              <div></div>
            </div>
            <div className="product-wishicon">
              <AiOutlineHeart className="product-wishicon-one" />
            </div>
          </div>

          <div className="product-container-box1-div2-box3">
            <p style={{ color: "green", textAlign: "left" }}>
              Inclusive of all taxes
            </p>
          </div>
          <div className="product-container-box1-div2-box3-div1">
            <hr className="product-container-box1-div2-box3-div1-hr2" />
          </div>
          <div className="product-container-box1-div2-box4">
            <div className="product-container-box1-div2-box4-div1">
              <p className="product-container-box1-div2-box4-div1-ptag">SIZE</p>
              <p>check size</p>
            </div>
            <div className="product-size-button">
              <div>
                <button>xm</button>
              </div>
              <div>
                <button>S</button>
              </div>
              <div>
                <button>M</button>
              </div>
              <div>
                <button>L</button>
              </div>
              <div>
                <button>XL</button>
              </div>
              <div>
                <button>XXL</button>
              </div>
            </div>
          </div>
          <div className="product-container-box1-div2-box5">
            <div>
              <h4>Delivery Options</h4>
            </div>
            <div className="product-container-box1-div2-box5-icon">
              <TbTruckDelivery />
            </div>
          </div>
          <div className="product-container-box1-div2-box6">
            <div className="product-container-box1-div2-box6-div1">
              <input
                className="product-container-box1-div2-box6-div1-ip"
                type="text"
              />
              <div className="product-container-box1-div2-box6-div2">
                Verify
              </div>
            </div>
            <div className="product-container-box1-div2-box6-div3">
              <p className="product-container-box1-div2-box6-div3-ptag1">
                Please Enter PIN code to check delivery time & Pay on Delivery
                Available
              </p>
            </div>
          </div>
          <div className="product-container-box1-div2-box7">
            <div>
              <p className="product-container-box1-div2-box7-p1">COLOR</p>
            </div>
            <div className="product-color-button">
              <div>
                <button style={{ backgroundColor: "brown" }}></button>
              </div>
              <div>
                <button style={{ backgroundColor: "green" }}></button>
              </div>
              <div>
                <button style={{ backgroundColor: "blue" }}></button>
              </div>
              <div>
                <button style={{ backgroundColor: "white" }}></button>
              </div>
              <div>
                <button style={{ backgroundColor: "red" }}></button>
              </div>
              <div>
                <button style={{ backgroundColor: "yellow" }}></button>
              </div>
            </div>
          </div>
          <div className="product-container-box1-div2-box8">
            <label className="product-container-box1-div2-box8-label">
              Qty
              <select
                className="product-container-box1-div2-box8-sel"
                name=""
                id=""
              >
                <option value="1">1</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </label>
          </div>

          <div className="product-container-box1-div2-box9">
            <div>
              <Link to="/customize">
                {" "}
                <button className="product-container-box1-div2-box9-link1">
                  CUSTOMIZE
                </button>
              </Link>
            </div>
            <div>
              {" "}
              <button className="product-container-box1-div2-box9-btn2">
                ADD TO BAG
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="product-container-box2">
        <div className="product-container-box2-div1">
          <div className="product-container-box2-box1">
            <p className="product-container-box2-box1-ptag1">
              ABOUT THE PRODUCT
            </p>
            <div>
              <p className="product-container-box2-box1-ptag2">
                Be as specific as possible with your product copy and make sure
                you are clearly describing features and benefits. Don’t just say
                a product is high-quality; let shoppers come to that same
                conclusion through the product features and benefits.
              </p>
              <p className="product-container-box2-box1-ptag3">
                Good product descriptions should cover two main aspects:
                features and benefits. These are the bread and butter of your
                product page copy. A feature is a quality or a function of a
                product. For example, “This laptop bag is waterproof” describes
                a feature.
              </p>
            </div>

            <div className="product-explanation">
              <div className="product-exp-box1">
                <div>
                  <h5>Size & Fit</h5>
                  <p>Regular Fit</p>
                  <p>The model(height 6') is swearing a size 40</p>
                </div>
                <div>
                  <h5>Material & Care</h5>
                  <p>Material:Cotton Machine wash</p>
                </div>
              </div>
              <div className="product-exp-box2">
                <h5 style={{ textAlign: "left", margin: "0px" }}>
                  Specifications
                </h5>
                <div className="product-exp-box2-details">
                  <div className="product-exp-box2-div">
                    <div className="product-exp-box2-div2">
                      <p className="product-exp-box2-div2-ptag5">
                        Sleeve Length
                      </p>
                      <h6 className="product-exp-box2-div2-h6">Long Sleeves</h6>
                    </div>
                    <div className="product-exp-box2-div2-box1-ptag7">
                      <p className="product-exp-box2-div2-box1-ptag8">Collar</p>
                      <h6 className="product-exp-box2-div2-box1-ptag8-h6">
                        Spread Collar
                      </h6>
                    </div>
                  </div>
                  <div>
                    <div className="product-exp-box2-div2-box1-div2-p1-tag">
                      <p className="product-exp-box2-div2-box1-div2-p2-tag">
                        Fit
                      </p>
                      <h6 className="product-exp-box2-div2-box1-div2-h6-tag">
                        Regular Fit
                      </h6>
                    </div>
                    <div className="product-exp-box2-div2-box1-div2-p3-tag">
                      <p className="product-exp-box2-div2-box1-div2-p4-tag">
                        Length
                      </p>
                      <h6
                        style={{
                          textAlign: "left",
                          margin: "0px",
                          fontSize: "12px",
                        }}
                      >
                        Regular
                      </h6>
                    </div>
                  </div>
                  <div>
                    <div style={{ marginTop: "10px" }}>
                      <p
                        style={{
                          textAlign: "left",
                          margin: "0px",
                          color: "grey",
                          fontSize: "12px",
                        }}
                      >
                        Pattern Type
                      </p>
                      <h6
                        style={{
                          textAlign: "left",
                          margin: "0px",
                          fontSize: "12px",
                        }}
                      >
                        Solid
                      </h6>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <p
                        style={{
                          textAlign: "left",
                          margin: "0px",
                          color: "grey",
                          fontSize: "12px",
                        }}
                      >
                        Occation
                      </p>
                      <h6
                        style={{
                          textAlign: "left",
                          margin: "0px",
                          fontSize: "12px",
                        }}
                      >
                        Casual
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-container-box2-box2">
            {/* <hr style={{height:"370px",transform:"rotate(180deg)",marginLeft:"-58px"}} /> */}
          </div>
          <div className="product-container-box2-box3">
            <div className="product-container-box2-box3-div1">
              <h4>Ratings & Reviews</h4>
            </div>
            <div className="product-container-box2-box3-div2">
              <div className="product-container-box2-box3-div2-pdiv1">
                <p className="product-container-box2-box3-div2-pdiv1-p1">4.1</p>
              </div>
              <div className="product-container-box2-box3-div2-pdiv1-p1-div1">
                <AiOutlineStar className="product-container-box2-box3-div2-pdiv1-p1-div1-icon" />
              </div>
            </div>
            <div className="product-container-box2-box3-div3">
              <p className="product-container-box2-box3-div3-p1-tag1">
                3.1k Verified Buyers
              </p>
            </div>
            <div className="product-container-box2-box3-div4">
              <div className="product-container-box2-box3-div4-color">
                5 <img style={{ marginLeft: "4px" }} src={vect} alt="" />
                <div className="product-container-box2-box3-div4-color-div1">
                  <img
                    className="product-container-box2-box3-div4-color-div1-im1"
                    src={gn}
                    alt=""
                  />{" "}
                  <img
                    className="product-container-box2-box3-div4-color-div1-im2"
                    src={co1}
                    alt=""
                  />
                  <p className="product-container-box2-box3-div4-color-div1-im2-p1">
                    1.8k
                  </p>
                </div>
              </div>

              <div className="product-container-box2-box3-div4-color-div1-im2-div1">
                4{" "}
                <img
                  className="product-container-box2-box3-div4-color-div1-im2-div1-im1"
                  style={{ marginLeft: "4px" }}
                  src={vect}
                  alt=""
                />
                <div>
                  <img
                    className="product-container-box2-box3-div4-color-div1-im2-div1-im2"
                    src={gn}
                    alt=""
                  />{" "}
                  <img
                    className="product-container-box2-box3-div4-color-div1-im2-div1-im3"
                    src={co2}
                    alt=""
                  />
                  <p className="product-container-box2-box3-div4-color-div1-im2-div1-im3-p2">
                    1.8k
                  </p>
                </div>
              </div>

              <div className="product-container-box2-box3-div4-color-div1-im2-div1-box1">
                3{" "}
                <img
                  className="product-container-box2-box3-div4-color-div1-im2-div1-im3"
                  src={vect}
                  alt=""
                />
                <div className="product-container-box2-box3-div4-color-div1-im2-div1-div2">
                  <img
                    className="product-container-box2-box3-div4-color-div1-im2-div1-div2-im1"
                    src={gn}
                    alt=""
                  />{" "}
                  <img
                    className="product-container-box2-box3-div4-color-div1-im2-div1-div2-im2"
                    src={co3}
                    alt=""
                  />
                  <p className="product-container-box2-box3-div4-color-div1-im2-div1-div2-im2-ptag">
                    1.8k
                  </p>
                </div>
              </div>

              <div className="product-container-box2-box3-div4-star1">
                2{" "}
                <img
                  className="product-container-box2-box3-div4-star1-im1"
                  src={vect}
                  alt=""
                />
                <div className="product-container-box2-box3-div4-star2">
                  <img
                    className="product-container-box2-box3-div4-star1-im2"
                    src={gn}
                    alt=""
                  />{" "}
                  <img
                    className="product-container-box2-box3-div4-star1-im3"
                    src={co4}
                    alt=""
                  />
                  <p className="product-container-box2-box3-div4-star1-p1">
                    1.8k
                  </p>
                </div>
              </div>

              <div className="product-container-box2-box3-div4-star3">
                1{" "}
                <img
                  className="product-container-box2-box3-div4-star3-im4"
                  src={vect}
                  alt=""
                />
                <div className="product-container-box2-box3-div4-star4">
                  <img
                    className="product-container-box2-box3-div4-star4-im5"
                    src={gn}
                    alt=""
                  />{" "}
                  <img
                    className="product-container-box2-box3-div4-star4-im6"
                    src={co5}
                    alt=""
                  />
                  <p className="product-container-box2-box3-div4-star4-p2">
                    1.8k
                  </p>
                </div>
              </div>
            </div>

            <div className="product-container-box2-box3-div5">
              <div className="product-container-box2-box3-div4-star5">
                <p className="product-container-box2-box3-div4-star5-p1">
                  Customer Reviews
                </p>
              </div>
              <div className="product-container-box2-box3-div5-inner">
                <div className="inner1">
                  <div className="star">
                    <button className="product-container-box2-box3-div5-inner-btn">
                      5
                      <CiStar className="product-container-box2-box3-div5-inner-icon" />
                    </button>
                    <p style={{ fontSize: "18px", fontWeight: "500" }}>
                      L size , it's really wonderful
                    </p>
                  </div>
                  <div className="star2">
                    <p style={{ color: "grey", fontSize: "12px" }}>Rupam</p>
                    <hr className="product-container-box2-box3-div5-inner-hr" />
                    <p className="product-container-box2-box3-div5-inner-ptag">
                      JUNE 2022
                    </p>
                  </div>
                </div>
                <div className="inner2">
                  <div className="inner2-div1">
                    <img className="inner2-div1-im1" src={p1} alt="" />
                  </div>
                  <div className="inner2-div1-div2-im2">
                    <img className="inner2-div1-im2" src={p2} alt="" />
                  </div>
                  <div className="inner2-div1-div3-im3">
                    <img className="inner2-div1-im3" src={p3} alt="" />
                  </div>
                  <div className="inner2-div1-div4-im4">....</div>
                </div>
              </div>
              <div className="inner2-div1-div5-im5">
                <Link to="">
                  {" "}
                  <button className="inner2-div1-div5-im5-btn1">
                    read more <AiOutlineRight />
                  </button>
                </Link>
              </div>
            </div>
            {/* <div className="product-container-box2-box3-div6"></div>
            <div className="product-container-box2-box3-div7"></div>
            <div className="product-container-box2-box3-div8"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
