import React from 'react'
import Rentals from './Rentals';
import Sales from './Sales';

function Offers() {
  return (
    <div className='w-full h-auto items-center flex flex-wrap flex-col'>
      <div> <Rentals /> </div>
      <div> <Sales /> </div>
    </div>
  )
};

export default Offers;