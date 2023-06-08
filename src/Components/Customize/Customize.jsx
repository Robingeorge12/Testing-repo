import React from "react";
import "./Customize.css";
import ims from "../../Assets/Image/ims.svg";
import { AiOutlineHeart, AiOutlineStar, AiOutlineRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function Customize() {
  const navigate = useNavigate();

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
                <div className="customize-container-div1-details-wish-headdiv">
                  <p className="customize-container-div1-details-wish-heading">
                    $199
                  </p>
                </div>
                <div className="customize-container-div1-details-wish-mrpdiv">
                  <p className="customize-container-div1-details-wish-mrp">
                    MRP 199
                  </p>
                </div>
                <div className="custom-rating">
                  <div className="custom-rating-div">
                    <p>{"4.1"}</p>
                    <AiOutlineStar style={{ color: "green" }} />
                    <hr className="custom-rating-div-hr" />
                    <p>2.6k Ratings</p>
                  </div>
                </div>
              </div>

              <div className="customize-tax-head">
                <p className="customize-tax-head-ptag">
                  Inclusive of all taxes
                </p>
              </div>

              <div className="customize-select-head">
                <div className="customize-select">
                  <label className="customize-select-label">
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
                <div className="customize-select-hearticon">
                  <AiOutlineHeart />
                </div>
              </div>

              <div className="customize-size-chart">
                <div className="customize-size-chart-div">
                  <p className="customize-size-chart-ptag">SIZE CHART</p>
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
              <p className="customize-container-box2-box1-ptag">
                ABOUT THE PRODUCT
              </p>
              <div className="customize-container-box2-box1-cont-div">
                <p className="customize-container-box2-box1-cont-div-ptag">
                  Be as specific as possible with your product copy and make
                  sure you are clearly describing features and benefits. Don’t
                  just say a product is high-quality; let shoppers come to that
                  same conclusion through the product features and benefits.
                </p>
                <p className="customize-container-box2-box1-cont-div-ptag2">
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
                      <div className="product-exp-box2-div-box1">
                        <p className="product-exp-box2-div-box1-sleev">
                          Sleeve Length
                        </p>
                        <h6 className="product-exp-box2-div-box1-log">
                          Long Sleeves
                        </h6>
                      </div>
                      <div className="product-exp-box2-div-box1-colardiv">
                        <p className="product-exp-box2-div-box1-collar">
                          Collar
                        </p>
                        <h6 className="product-exp-box2-div-box1-spcol">
                          Spread Collar
                        </h6>
                      </div>
                    </div>
                    <div>
                      <div className="product-exp-box2-div-box1-fitdiv">
                        <p className="product-exp-box2-div-box1-fitdiv-ptag">
                          Fit
                        </p>
                        <h6 className="product-exp-box2-div-box1-regh6">
                          Regular Fit
                        </h6>
                      </div>
                      <div className="product-exp-box2-div-box1-lendiv">
                        <p className="product-exp-box2-div-box1-lendiv-len">
                          Length
                        </p>
                        <h6 className="product-exp-box2-div-box1-regular-h6">
                          Regular
                        </h6>
                      </div>
                    </div>
                    <div>
                      <div className="product-exp-box2-div-box1-patdiv">
                        <p className="product-exp-box2-div-box1-patdiv-ptag">
                          Pattern Type
                        </p>
                        <h6 className="product-exp-box2-div-box1-solid-h6">
                          Solid
                        </h6>
                      </div>
                      <div className="product-exp-box2-div-box1-occdiv">
                        <p className="product-exp-box2-div-box1-occdiv-ptag">
                          Occation
                        </p>
                        <h6 className="product-exp-box2-div-box1-cas-h6">
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
          <div className="customize-container-div3-box1">
            <p className="customize-container-div3-box1-ptag">
              Customized Size and Fittings
            </p>
            <p className="customize-container-div3-box1-ptag-det">
              Select from a saved size or add new size
            </p>
          </div>
          <div className="customize-container-div3-pic">
            <p className="customize-container-div3-pic-sizes">Saved Sizes</p>

            <div className="customized-pic-button">
              <div className="customized-pic-button-div1">
                <div className="customized-pic-button-img">
                  <img
                    src={
                      "https://i0.wp.com/ctmirror-images.s3.amazonaws.com/wp-content/uploads/2021/01/dummy-man-570x570-1.png?fit=570%2C570&ssl=1"
                    }
                    alt=""
                  />
                </div>
                <div className="customized-pic-button-div1-name">
                  <p>Manju</p>
                </div>
              </div>

              <div className="customized-pic-button-div1">
                <div className="customized-pic-button-img">
                  <img
                    src={
                      "https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-woman-570x570.png"
                    }
                    alt=""
                  />
                </div>
                <div className="customized-pic-button-div1-box1">
                  <p>Anju</p>
                </div>
              </div>

              <div className="customized-pic-button-div1">
                <div className="customized-pic-button-img">
                  <img
                    src={
                      "https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-woman-570x570.png"
                    }
                    alt=""
                  />
                </div>
                <div className="customized-pic-button-div1-box2-namebox">
                  <p>Anjali</p>
                </div>
              </div>

              <div className="customized-pic-button-div2">
                <div className="customized-pic-button-img">
                  <button className="customized-pic-button-img-btn">+</button>
                </div>
                <div className="customized-pic-button-div2-addsize">
                  <p>add new size </p>
                </div>
              </div>
            </div>

            <div className="customized-pic-button-div2-color-div">
              <p className="customized-pic-button-div2-color-div-p1">
                Select Colors
              </p>
            </div>

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
          <div className="customized-pic-button-div2-color-div-buttons">
            <div className="customized-pic-button-div2-color-div-buttons-btn1div">
              <button className="customized-pic-button-div2-color-div-buttons-btn1">
                ADDED TO BAG
              </button>
            </div>
            <div style={{ float: "left" }}>
              <p className="customized-pic-button-div2-details-more">
                Want to Customize more ?
              </p>
            </div>
          </div>
          <div className="customized-pic-button-div2-details-last" >
            <div  className="customized-pic-button-div2-details-last-div1"  >
              <button
              className="customized-pic-button-div2-details-last-div1-stud"
         
              >
                OPEN IN TAILUX STUDIO
              </button>
            </div>

            <div className="customized-pic-button-div2-details-last-text" >
              <p
              className="customized-pic-button-div2-details-last-text-p1"
           
              >
                What is TailUx studio?
              </p>
              <p
               className="customized-pic-button-div2-details-last-text-p2"
         
              >
                What is TailuX studio? TailuX Studio is a feature that allows
                users to customize their fashion products online in an efficient
                way. It enables users to become their own fashion designer by
                providing tools and options to customize their clothing
                according to their preferences and style. With TailuX Studio,
                users can select fabrics, colors, patterns, and other design
                elements to create unique clothing designs.
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
