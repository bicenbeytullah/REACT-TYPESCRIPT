import React, { useState } from 'react'
import { ConsultantsType, consultants } from './ConsultantsTypes';

function Consultants() {
  const [worker, setWorker]= useState<ConsultantsType['workerss']>(consultants)

  return (
    <>
    <div className='w-full h-[40rem] flex flex-col items-start'>
      {worker.map( workers => {
        return(
          <div className='m-6 p-8 flex flex-wrap flex-row'>
            <img src={workers.image} alt={workers.name} className=' w-40 rounded-full' />
            <div className='flex flex-col ml-16'>
            <div className='ml-16 border-b-2 border-red-500'>{workers.name} {workers.surname}</div>
            <div className='ml-16 mt-4'>{workers.mail}</div>
            <div className='ml-16 mt-4'>{workers.number}</div>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
};

export default Consultants;