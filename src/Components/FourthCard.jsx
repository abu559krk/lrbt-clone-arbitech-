import React from 'react'
import fourthData from './FourthCardData'
function FourthCard() {
  return (
   <>
   <div className='row'>
    <div>
    <p className='fourth-card-heading mt-5'>
    WE ORGANIZE OUR WORK AROUND THESE FOUR AREAS
    </p>
    </div>
    
    {
        
        fourthData.map((elemnt) =>{
            return (
                <div className=' col-3 justify-content-center text-center'>
                    
                    <div key={elemnt.id}>
                        <div className='fourth-card-main-css'>
                            <img src={elemnt.image} alt="img" />
                        </div>
                        <div>
                            <h4>{elemnt.title}</h4>
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

export default FourthCard