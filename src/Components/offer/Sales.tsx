import React, { useState } from 'react'
import { OffersType, sales } from './OffersTypes'

function Sales() {
    const [sale, setSale] = useState<OffersType['sale']>(sales)

  return (
    <div className='flex flex-wrap flex-row mt-10'>
        <div className='flex absolute ml-20 bg-red-500 p-2 rounded-3xl'>Sales</div>
        {sale.map(sales => {
            return (
                <div key={sales.type} className='w-70 p-4 m-6 mt-10 flex flex-col cursor-pointer'>
                    <img className='w-full h-[10rem] rounded-3xl' src={sales.image} alt={sales.type} />
                    <div className='mt-4 font-bold border-b-2 border-red-500 flex justify-around'>
                        <p>{sales.location}</p>
                        <p>{sales.price}</p>
                    </div>
                    <p className='mt-4 text-center text-lg'>{sales.type}</p>
                    <p className='text-center text-lg'>{sales.room}</p>
                    <p className='text-center text-lg'>{sales.size}</p>
                </div>
            )
        })}
    </div>
  )
};

export default Sales;