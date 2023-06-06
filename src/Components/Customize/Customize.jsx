import React from "react";
import "./Customize.css";
import ims from "../../Assets/Image/ims.svg";
import { AiOutlineHeart, AiOutlineStar, AiOutlineRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function Customize() {

  const navigate = useNavigate()
  
  return (
    <div>
      <div className="customize-heading">
        <p>Customize</p>
      </div>

      <div className="customize-divide"></div>

      <div className="customize-container">
        <div className="customize-container-div1">
          <div className="customize-container-div1-box1">
            <div className="customize-container-div1-img">
              <img src={ims} alt="" />
            </div>
            <div className="customize-container-div1-details">
              <div className="customize-container-div1-details-heading">
                <p>Punge Floral Georgette Dress</p>
              </div>
              <div className="customize-container-div1-details-wish">
                <div>
                  <p style={{ fontSize: "18px", fontWeight: "700" }}>$199</p>
                </div>
                <div>
                  <p
                    style={{
                      color: "grey",
                      fontSize: "14px",
                      fontWeight: "500",
                      marginLeft: "20px",
                    }}
                  >
                    MRP 199
                  </p>
                </div>
                <div className="custom-rating">
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
                      marginLeft: "20px",
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
                </div>
              </div>

              <div className="customize-tax-head">
                <p style={{ color: "green", textAlign: "left", margin: "0px" }}>
                  Inclusive of all taxes
                </p>
              </div>

              <div className="customize-select-head">
                <div className="customize-select">
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
                <div style={{ marginTop: "20px" }}>
                  <AiOutlineHeart />
                </div>
              </div>

              <div className="customize-size-chart">
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <p
                    style={{
                      color: "black",
                      fontWeight: "300",
                      textAlign: "left",
                      fontSize: "12px",
                    }}
                  >
                    SIZE CHART
                  </p>
                  <AiOutlineRight />
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
            </div>
          </div>

          <div className="customize-container-div1-box2">
            <div className="customize-container-box2-box1">
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
                  Be as specific as possible with your product copy and make
                  sure you are clearly describing features and benefits. Don’t
                  just say a product is high-quality; let shoppers come to that
                  same conclusion through the product features and benefits.
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
                  product. For example, “This laptop bag is waterproof”
                  describes a feature.
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
          </div>
        </div>
        <div className="customize-container-div2"></div>

        <div className="customize-container-div3">
          <div>
            <p
              style={{
                color: "black",
                fontSize: "25px",
                textAlign: "left",
                fontWeight: "700",
                margin: "0px",
              }}
            >
              Customized Size and Fittings
            </p>
            <p
              style={{
                color: "grey",
                fontSize: "14px",
                textAlign: "left",
                margin: "0px",
              }}
            >
              Select from a saved size or add new size
            </p>
          </div>
          <div className="customize-container-div3-pic">
            <p
              style={{ textAlign: "left",fontSize:"22px",fontWeight:"700", }}
            >
              Saved Sizes
            </p>

            <div className="customized-pic-button">
              <div className="customized-pic-button-div1">
                <div className="customized-pic-button-img">
                  <img src={"https://i0.wp.com/ctmirror-images.s3.amazonaws.com/wp-content/uploads/2021/01/dummy-man-570x570-1.png?fit=570%2C570&ssl=1"} alt="" />
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "14%",
                    // border: "1px solid blue",
                    boxSizing: "borderBox",
                    margin: "0px",
                    padding: "0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p>Manju</p>
                </div>
              </div>

              <div className="customized-pic-button-div1">
                <div className="customized-pic-button-img">
                  <img src={"https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-woman-570x570.png"} alt="" />
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "14%",
                    // border: "1px solid blue",
                    boxSizing: "borderBox",
                    margin: "0px",
                    padding: "0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p>Anju</p>
                </div>
              </div>

              <div className="customized-pic-button-div1">
                <div className="customized-pic-button-img">
                  <img src={"https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-woman-570x570.png"} alt="" />
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "14%",
                    // border: "1px solid blue",
                    boxSizing: "borderBox",
                    margin: "0px",
                    padding: "0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p>Anjali</p>
                </div>
              </div>

              <div className="customized-pic-button-div2">
                <div className="customized-pic-button-img">
                  <button
                    style={{
                      width: "50%",
                      height: "50%",
                      borderRadius: "50%",
                      backgroundColor: "grey",
                    }}
                  >
                    +
                  </button>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "14%",
                    // border: "1px solid blue",
                    boxSizing: "borderBox",
                    margin: "0px",
                    padding: "0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p>add new size </p>
                </div>
              </div>

            </div>

<div><p style={{fontSize:"22px",fontWeight:"700",textAlign:"left"}}>Select Colors</p></div>

            <div className="customize-color-div">
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
          <div style={{display:"flex",flexDirection:"column"}}>
<div style={{float:"left",marginTop:"20px",width:"150px"}}><button style={{float:"left",width:"120px",height:"50px",backgroundColor:"black",border:"none",color:"white"}}>ADDED TO BAG</button></div>
<div style={{float:"left"}}><p style={{fontSize:"25px",fontWeight:"700",textAlign:"left"}}>Want to Customize more ?</p></div>
</div>
<div style={{display:"flex",flexDirection:"column"}}>
<div style={{float:"left",width:"300px",borderRadius:"5px"}}><button style={{backgroundImage:"radial-gradient(aqua,blue,pink)",width:"100%",fontSize:"20px",height:'100%',padding:"8px 10px 8px 10px",border:"none",borderRadius:"5px"}}>OPEN IN TAILUX STUDIO</button></div>

<div style={{float:"left"}}>
  <p style={{textAlign:"left",fontSize:"18px",fontWeight:"600",}}>What is TailUx studio?</p>
  <p style={{textAlign:"left",fontSize:"14px",fontWeight:"400",textAlign:"justify"}}>
  What is TailuX studio?
TailuX Studio is a feature that allows users to customize their fashion products online in an efficient way. It enables users to become their own fashion designer by providing tools and options to customize their clothing according to their preferences and style. With TailuX Studio,
 users can select fabrics, colors, patterns, and other design elements to create unique clothing designs. 
  </p>
  </div>
{/* <div><p>pjpih87fgotyuguiiiiiy</p></div> */}
</div>
        </div>
      </div>
    </div>
  );
}

export default Customize;
