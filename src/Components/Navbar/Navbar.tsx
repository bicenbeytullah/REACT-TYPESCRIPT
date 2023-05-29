import React from 'react'
import logo from './logo.jpeg'
import { NavLink } from 'react-router-dom';
import Theme from './Theme';

function Navbar() {
  return (
    <>
    <div className='w-full mt-6 p-4 rounded-full shadow-default flex flex-wrap flex-row  justify-around border-x-8 border-b-2 border-red-500'>
        <div className='w-10 my-2'>
            <img src= {logo} alt="logo" className='rounded-full'/>
        </div>
        <div className='flex flex-row '>
            <NavLink to='/Homepage' className='mx-4 p-2'>
            <svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />  
            <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            </NavLink>
            <NavLink to='/Aboutus' className='mx-4 my-2 border-transparent border-b-2 hover:border-red-500 duration-200'> About Us </NavLink>
            <NavLink to='/Offers' className='mx-4 my-2 border-transparent border-b-2 hover:border-red-500 duration-200'>Offers</NavLink>
            <NavLink to='/Consultants' className='mx-4 my-2 border-transparent border-b-2 hover:border-red-500 duration-200'> Our Consultants</NavLink>
            <div></div>
        </div>
    <div className='mt-3'>
    <Theme />
    </div>    
    </div>
    </>
  )
}

export default Navbar;