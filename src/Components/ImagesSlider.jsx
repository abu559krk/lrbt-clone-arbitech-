import React from "react";
import Home from "../assets/Home-1.jpg";
import HomeTwo from "../assets/Home2.jpg";
import Homeslide from "../assets/homeslide.jpg";
// import "../Components/imag"
function ImagesSlider() {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-6 mx-auto">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active carousel-image">
         <div className="image-slider-para">
         <img className="image-one-slider" src={Home} alt="img" />
         {/* <div className="para-slider-dive">
         <p className="para-slider">
              At LRBT eye treatment, syrgery and medicines are absolutely free of charge for the poors<span>Private Hospital charges are beyond the capacity of 2 out of every 3 Pakistanis.</span>
            </p>
         </div> */}
         </div>
          </div>

          <div className="carousel-item carousel-image">
            <img className="image-two-slider" src={HomeTwo} alt="img" />
          </div>
          <div className="carousel-item carousel-image">
            <img className="image-three-slider" src={Homeslide} alt="img" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
     
    </div>
  );
}

export default ImagesSlider;
