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
            {/* <div className="product-img1">
              <img
                src={
                  "data:image/jpeg;base64,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"
                }
                alt=""
              />
            </div>
            <div className="product-img2">
              <img
                src={
                  "data:image/jpeg;base64,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"
                }
                alt=""
              />
            </div>
            <div className="product-img3">
              {" "}
              <img
                src={
                  "data:image/jpeg;base64,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"
                }
                alt=""
              />
            </div> */}
          </div>

          {/* <div className="product-container-img-div2">
            <div className="product-img4">
              <img
                src={
                  "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71FwC6hZomL._UY550_.jpg"
                }
                alt=""
              />
            </div>
          </div> */}
        </div>

        <div className="product-container-box1-div2">
          <div className="product-container-box1-div2-box1">
            <p>Plunge Floral Print Georgette Dress</p>
          </div>
          <div className="product-container-box1-div2-box2">
            <h3>$199</h3>
            <p>MRP 100</p>
            <div className="product-rating">
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  border: "1px solid black",
                  borderRadius: "4px",
                  width: "100%",
                  height: "80%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "5px",
                  padding: "0px 4px",
                }}
              >
                <p>{"4.1"}</p>
                <AiOutlineStar style={{ color: "green" }} />
                <hr
                  style={{
                    transform: " rotate(180deg)",
                    height: "100%",

                    color: "black",
                  }}
                />
                <p>2.6k Ratings</p>
              </div>
              <div></div>
            </div>
            <div className="product-wishicon" style={{ marginTop: "5px" }}>
              <AiOutlineHeart style={{ marginLeft: "10px" }} />
            </div>
          </div>

          <div className="product-container-box1-div2-box3">
            <p style={{ color: "green", textAlign: "left" }}>
              Inclusive of all taxes
            </p>
          </div>
          <div style={{ diplay: "flex", alignSelf: "left" }}>
            <hr
              style={{
                width: "600px",
                color: "red",
                marginLeft: "-3px",
              }}
            />
          </div>
          <div className="product-container-box1-div2-box4">
            <div style={{ display: "flex", gap: "5px" }}>
              <p
                style={{ color: "black", fontWeight: "500", textAlign: "left" }}
              >
                SIZE
              </p>
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
            <div style={{ marginTop: "4px" }}>
              <TbTruckDelivery />
            </div>
          </div>
          <div className="product-container-box1-div2-box6">
            <div
              style={{
                width: "250px",
                height: "80%",
                display: "flex",
                border: "1px solid black",
                borderRadius: "8px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input style={{ width: "75%", border: "none" }} type="text" />
              <div style={{ width: "19%", backgroundColor: "white" }}>
                Verify
              </div>
            </div>
            <div
              style={{
                width: "70%",
                backgroundColor: "white",
                // border: "1px solid green",
                height: "99%",
                boxSizing: "content-box",
              }}
            >
              <p style={{ fontSize: "12px", fontWeight: "700" }}>
                Please Enter PIN code to check delivery time & Pay on Delivery
                Available
              </p>
            </div>
          </div>
          <div className="product-container-box1-div2-box7">
            <div>
              <p
                style={{
                  textAlign: "left",
                  margin: "0px",
                  fontSize: "20px",
                  fontWeight: "700",
                  padding: "4px 0px 4px 0px",
                }}
              >
                COLOR
              </p>
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
            <label>
              Qty
              <select
                name=""
                id=""
                style={{ border: "none", backgroundColor: "grey" }}
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
             <Link to="/customize"> <button
                style={{
                  padding: "7px 15px 7px 15px",
                  borderRadius: "5px",
                  backgroundColor: "grey",
                  border: "none",
                  color: "white",
                }}
              >
                CUSTOMIZE
              </button></Link>
            </div>
            <div>
              {" "}
              <button
                style={{
                  padding: "7px 15px 7px 15px",
                  borderRadius: "5px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                }}
              >
                ADD TO BAG
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="product-container-box2">
        <div className="product-container-box2-div1">
          <div className="product-container-box2-box1">
            <p
              style={{
                fontSize: "30px",
                fontWeight: "700",
                textAlign: "left",
                margin: "0px",
                padding: "0px",
              }}
            >
              ABOUT THE PRODUCT
            </p>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  textAlign: "justify",
                  fontWeight: "400",
                }}
              >
                Be as specific as possible with your product copy and make sure
                you are clearly describing features and benefits. Don’t just say
                a product is high-quality; let shoppers come to that same
                conclusion through the product features and benefits.
              </p>
              <p
                style={{
                  fontSize: "14px",
                  textAlign: "justify",
                  fontWeight: "400",
                }}
              >
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
                    <div style={{ marginTop: "10px" }}>
                      <p
                        style={{
                          textAlign: "left",
                          margin: "0px",
                          color: "grey",
                          fontSize: "12px",
                        }}
                      >
                        Sleeve Length
                      </p>
                      <h6
                        style={{
                          textAlign: "left",
                          margin: "0px",
                          fontSize: "12px",
                        }}
                      >
                        Long Sleeves
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
                        Collar
                      </p>
                      <h6
                        style={{
                          textAlign: "left",
                          margin: "0px",
                          fontSize: "12px",
                        }}
                      >
                        Spread Collar
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
                        Fit
                      </p>
                      <h6
                        style={{
                          textAlign: "left",
                          margin: "0px",
                          fontSize: "12px",
                        }}
                      >
                        Regular Fit
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
              <div>
                <p style={{ fontSize: "25px", fontWeight: "700" }}>4.1</p>
              </div>
              <div style={{ width: "30px", height: "30px" }}>
                <AiOutlineStar
                  style={{ width: "100%", height: "100%", color: "green" }}
                />
              </div>
            </div>
            <div className="product-container-box2-box3-div3">
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "300",
                  textAlign: "left",
                  marginTop: "-20px",
                }}
              >
                3.1k Verified Buyers
              </p>
            </div>
            <div className="product-container-box2-box3-div4">
              <div
                style={{
                  display: "flex",
                  color: "grey",
                  alignItems: "center",
                  marginTop: "-40px",
                }}
              >
                5 <img style={{ marginLeft: "4px" }} src={vect} alt="" />
                <div
                  style={{
                    width: "150px",
                    display: "flex",
                    marginLeft: "10px",
                  }}
                >
                  <img src={gn} alt="" />{" "}
                  <img
                    style={{ position: "relative", left: "-415px" }}
                    src={co1}
                    alt=""
                  />
                  <p
                    style={{
                      display: "flex",
                      color: "grey",
                      fontSize: "20px",
                      marginLeft: "-300px",
                    }}
                  >
                    1.8k
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  color: "grey",
                  alignItems: "center",
                  marginTop: "-40px",
                  padding: "0px",
                }}
              >
                4 <img style={{ marginLeft: "4px" }} src={vect} alt="" />
                <div
                  style={{
                    width: "150px",
                    display: "flex",
                    marginLeft: "10px",
                  }}
                >
                  <img src={gn} alt="" />{" "}
                  <img
                    style={{ position: "relative", left: "-415px" }}
                    src={co2}
                    alt=""
                  />
                  <p
                    style={{
                      display: "flex",
                      color: "grey",
                      fontSize: "20px",
                      marginLeft: "-228px",
                    }}
                  >
                    1.8k
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  color: "grey",
                  alignItems: "center",
                  marginTop: "-40px",
                }}
              >
                3 <img style={{ marginLeft: "4px" }} src={vect} alt="" />
                <div
                  style={{
                    width: "150px",
                    display: "flex",
                    marginLeft: "10px",
                  }}
                >
                  <img src={gn} alt="" />{" "}
                  <img
                    style={{ position: "relative", left: "-415px" }}
                    src={co3}
                    alt=""
                  />
                  <p
                    style={{
                      display: "flex",
                      color: "grey",
                      fontSize: "20px",
                      marginLeft: "-150px",
                    }}
                  >
                    1.8k
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  color: "grey",
                  alignItems: "center",
                  marginTop: "-40px",
                }}
              >
                2 <img style={{ marginLeft: "4px" }} src={vect} alt="" />
                <div
                  style={{
                    width: "150px",
                    display: "flex",
                    marginLeft: "10px",
                  }}
                >
                  <img src={gn} alt="" />{" "}
                  <img
                    style={{ position: "relative", left: "-415px" }}
                    src={co4}
                    alt=""
                  />
                  <p
                    style={{
                      display: "flex",
                      color: "grey",
                      fontSize: "20px",
                      marginLeft: "-9px",
                    }}
                  >
                    1.8k
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  color: "grey",
                  alignItems: "center",
                  marginTop: "-40px",
                }}
              >
                1 <img style={{ marginLeft: "4px" }} src={vect} alt="" />
                <div
                  style={{
                    width: "150px",
                    display: "flex",
                    marginLeft: "10px",
                  }}
                >
                  <img src={gn} alt="" />{" "}
                  <img
                    style={{ position: "relative", left: "-415px" }}
                    src={co5}
                    alt=""
                  />
                  <p
                    style={{
                      display: "flex",
                      color: "grey",
                      fontSize: "20px",
                      marginLeft: "35px",
                    }}
                  >
                    1.8k
                  </p>
                </div>
              </div>
            </div>

            <div className="product-container-box2-box3-div5">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <p
                  style={{
                    fontSize: "25px",
                    fontWeight: "700",
                    textAlign: "left",
                    marginTop: "-20px",
                    padding: "4px 0px 4px 0px",
                  }}
                >
                  Customer Reviews
                </p>
              </div>
              <div className="product-container-box2-box3-div5-inner">
                <div className="inner1">
                  <div className="star">
                    <button
                      style={{
                        backgroundColor: "#00C17C",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        width: "40px",
                        height: "60%",
                      }}
                    >
                      5
                      <CiStar style={{ width: "100%", height: "100%" }} />
                    </button>
                    <p style={{ fontSize: "18px", fontWeight: "500" }}>
                      L size , it's really wonderful
                    </p>
                  </div>
                  <div className="star2">
                    <p style={{ color: "grey", fontSize: "12px" }}>Rupam</p>
                    <hr
                      style={{
                        color: "grey",
                        fontSize: "12px",
                        width: "20px",
                        transform: "rotate(270deg)",
                      }}
                    />
                    <p
                      style={{
                        color: "grey",
                        fontSize: "12px",
                        marginLeft: "-20px",
                      }}
                    >
                      JUNE 2022
                    </p>
                  </div>
                </div>
                <div className="inner2">
                  <div>
                    <img src={p1} alt="" />
                  </div>
                  <div>
                    <img src={p2} alt="" />
                  </div>
                  <div>
                    <img src={p3} alt="" />
                  </div>
                  <div>....</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <Link to="">
                  {" "}
                  <button
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      border: "none",
                      backgroundColor: "white",
                    }}
                  >
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
