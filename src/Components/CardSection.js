import React from 'react';
import Firstcard from './Firstcard';

const CardSection = () => {
  return (
    <div className='cardsection d-none d-lg-block'>
        <div className=' cardsection row mt-5'>
            <div className='col-12 mx-auto'>
                <div className='row'>
                  <Firstcard/>
                    

                </div>

            </div>

        </div>
    </div>
  )
}

export default CardSection