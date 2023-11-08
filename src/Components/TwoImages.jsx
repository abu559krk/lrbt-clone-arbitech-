import React from 'react'
import firstimage from "../assets/one.jpg";
import secondimage from "../assets/two.jpg";
function TwoImages() {
  return (
    <div className='row mt-4 px-3 d-none d-lg-block'>
        <div className='col-11 mx-auto'>
        <div className='row gx-5'>
            <div className='col-6 p-3'>
                <img className='img-fluid ' src={firstimage} alt="firstimage" />
            </div>
            <div className='col-6 p-3'>
                <img className='img-fluid' src={secondimage} alt="secondimage" />
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default TwoImages