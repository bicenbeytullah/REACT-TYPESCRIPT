import React, { ReactNode, useState } from 'react'
import { OffersType, rents } from './OffersTypes'

function Rentals() {
    const [rent, setRent] = useState<OffersType['rent']>(rents);
    
  return (
    <div className='flex flex-wrap flex-row mt-10'>
        <div  className='flex absolute ml-20 bg-red-500 p-2 rounded-3xl'>Rentals</div>
        {rent.map(rents => {
            return (
                <div  key={rents.location} className='w-70 p-4 m-6 mt-10 flex flex-col cursor-pointer'>
                    <img className='w-full h-[10rem] rounded-3xl' src={rents.image} alt={rents.type} />
                    <div className='mt-4 font-bold border-b-2 border-red-500 flex justify-around'>
                        <p>{rents.location}</p>
                        <p>{rents.price}</p>
                    </div>
                    <p className='mt-4 text-center text-lg'>{rents.type}</p>
                    <p className='text-center text-lg'>{rents.room}</p>
                    <p className='text-center text-lg'>{rents.size}</p>
                </div>
            )
        })}
    </div>
  )
};

export default Rentals;