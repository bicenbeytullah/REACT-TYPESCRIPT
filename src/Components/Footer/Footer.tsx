import React from 'react'
import logo from './logo1.jpeg'

function Footer() {
  return (
    <>
    <div className='relative w-full h-[12rem] flex flex-row justify-around shadow-default border-t-4 border-r-4 border-l-4 rounded-full border-red-500  p-8 mt-6 mb-6'>
        <div>
          <div>Adress</div>
          <div className='flex flex-row mt-5'>
          <svg className="h-8 w-8 text-red-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <p className='ml-5 border-red-700'>Alanya/TÜRKİYE</p>
          </div>
        </div>
        <div><img src={logo} alt="logo" className='w-20 rounded-full' /></div>
        <div>
          <div>Social Media</div>
          <div className='flex flex-row mt-5'>
          <svg className="h-8 w-8 text-red-500 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <svg className="h-8 w-8 text-blue-700 ml-5"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <svg className="h-8 w-8 text-blue-500 ml-5"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </div>
        </div>
        <p className='absolute bottom-0 '>©  All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer;