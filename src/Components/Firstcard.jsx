import React from 'react'
import Data from './FirstData';
// import "../Components/firstcard.css";
function Firstcard() {
  return (
    <>
    <div className='row '>
    {
            Data.map((currElem)=>{
                return (
                     <div className='col-lg-3 d-none d-lg-block text-center mt-lg-5 '>
                    <div key={currElem.id} className='box'>
                    <div className=' border-0'>
                        <div className='image mt-3'>
                            <img src={currElem.image} alt="cardimage" />
                        </div>
                        <div className='title mt-4'>
                            <h5>{currElem.title}</h5>
                        </div>
                        <div className='number mt-3 fw-bold display-1'>{currElem.number}
                        </div>
                        <div className='descrip mt-3 col-6 text-center mx-auto'>{currElem.description}</div>
                    </div>
                </div>
                </div>
                  
                )
            })
        }
    </div>
        
    </>
  )
}

export default Firstcard