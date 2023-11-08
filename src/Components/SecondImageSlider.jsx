import React from 'react'
import testmonone from "../assets/testimonone.jpg";
import testmontwo from "../assets/testimontwo.jpg";
import testmonthree from "../assets/testimonthree.jpg";
function SecondImageSlider() {
  return (
    <div className='container-fluid '>
     <div className='row'>
    <div className='col-11'>
      <div className=' col-lg-12'>
      <div className=''>
        <div>
            <p className='text-center testimonials-heading'>
            TESTIMONIALS
            </p>
            <div className='row'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-interval="10" data-bs-ride="false">
  <div className="carousel-inner innerimagecss text-center second-img-slider-css">
    <div className="carousel-item active ">
      <img className="mt-5" src={testmonone} alt='testmone' />
    </div>
    <div className="carousel-item">
    <img  className="mt-5" src={testmontwo} alt='testmone'/>
    </div>
    <div className="carousel-item">
    <img  className="mt-5" src={testmonthree} alt='testmone'/>
    </div>
  </div>
  <button className=" carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="btn-one visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className=" btn-one visually-hidden">Next</span>
  </button>
</div>
            </div>
        </div>
    </div>
      </div>
    </div>
   </div>
    </div>
  )
}

export default SecondImageSlider