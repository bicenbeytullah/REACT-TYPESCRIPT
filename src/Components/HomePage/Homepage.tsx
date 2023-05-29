import React, { useState } from 'react'
import { OffersType, sales, rents } from '../offer/OffersTypes';
import Rentals from '../offer/Rentals';
import Sales from '../offer/Sales';

interface IProp {
  button: boolean;
  imageHandle: () => boolean;
};

const Homepage = ()=> {
  const [sale, setSale] = useState<OffersType['rent']>(sales);
  const [rent, setRent] = useState<OffersType['rent']>(rents);
  const [forRent, setforRent] = useState<IProp ['button']>(false)
  const [forSale, setforSale] = useState<IProp['button']>(false)

  // toggle sale & rent Categories
  const buttonForRentHandle = () => {
    setforRent(!forRent)
  };
  const buttonForSaleHandle = () => {
    setforSale(!forSale)
  };

  return (
    <>
    <div className='w-full h-auto flex flex-col items-center mt-10'>
      <div className='bg-red-500 p-2 rounded-3xl'>Whould you like to pick by categories?</div>
      <div className='flex flex-row'>
        <div className='flex flex-row mt-5 bg-red-500 hover:bg-rose-400 p-2 rounded-3xl'>
          <button>For Rent</button>
          <input onClick={buttonForRentHandle} className='ml-4' type='checkbox' />
        </div>
        <div className='flex flex-row mt-5 ml-5 bg-red-500 hover:bg-rose-400 p-2 rounded-3xl'>
          <button>For Sale</button>
          <input onClick={buttonForSaleHandle} className='ml-4' type='checkbox' />
        </div>
      </div>
    </div>

{/* --- For Rent --- */}
    <div className='flex justify-center'>
      <div className='border-b-4 border-red-500'>
        {forRent && (<Rentals />)}
      </div>
    </div>
{/* --- For Sale --- */}
    <div className='flex justify-center'>
      <div className='border-b-4 border-red-500'>
        {forSale && (<Sales />)}
      </div>
    </div>

    <div className='flex flex-wrap flex-col w-full h-auto items-center'>
      <div className='flex flex-row flex-wrap'>
        {sale.map(sales => {
          return (
            <div className='w-70 p-4 m-6 flex flex-col'>
              <img key={sales.room} className='w-full h-[10rem] rounded-3xl' src={sales.image} alt={sales.type} />
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
      <div className='flex flex-row flex-wrap'>
        {rent.map(rents => {
          return (
            <div className='w-70 p-4 m-6 flex flex-col'>
              <img key={rents.size} className='w-full h-[10rem] rounded-3xl' src={rents.image} alt={rents.type} />
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
    </div>
    </>
  )
};

export default Homepage;