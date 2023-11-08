import React from 'react'
import SecondData from './SecondCard'
function SecondCardData() {
  return (
    <>
    <div className='row d-none d-lg-block'>
    {
        SecondData.map((card) =>{
            return (
                <div className='col-6 text-center mt-5'>
                    <div key={card.id}>
                        <div >
                            <img src={card.image} alt="img" />
                        </div >
                        <div className='mt-2 fw-bold display-1'>
                            <h5>{card.title}</h5>
                        </div>
                        <div className='mt-2 second-card-number'>
                            {card.number}
                        </div>
                        <div className='col-5 mx-auto'>
                        {card.description}
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

export default SecondCardData