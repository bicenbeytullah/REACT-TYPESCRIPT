import React, { useState } from 'react';  
import { ConsultantsType, consultants } from '../Consultant/ConsultantsTypes';

function Aboutus() {
  const [workers, setWorker] = useState<ConsultantsType['workerss']>(consultants)
  
  return (
    <>
    <div className='w-full h-[40rem] p-8 flex flex-col items-center justify-around mb-6 mt-6'>
        <div className='w-10/12 p-11 border-b-2  border-red-500'> 
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Alias consequatur quisquam non architecto corrupti? 
        Natus placeat dolor dignissimos, repudiandae quas deleniti laudantium, 
        accusantium eveniet asperiores, quod distinctio corporis! 
        Laudantium, maxime.
        </div>
        <div className='mb-20 flex flex-row flex-wrap'>
          {workers.map( workers => {
            return (
              <div className='m-6 p-8 '>
                <img src={workers.image} alt={workers.name} className='w-40 rounded-full' />
                <div className='mt-4 border-b-2 border-red-500'>{workers.name} {workers.surname}</div>
                <div className='mt-2'>{workers.mail}</div>
                <div className='mt-2'>{workers.number}</div>
              </div>
            );
          })}
        </div>
    </div>
    </>
  )
}
export default Aboutus;