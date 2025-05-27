import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0  h-full w-[300px] p-5 bg-red-400 rounded-xl'>
             <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 px-3 py-1 rounded-md'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
             </div>
             <h2 className='mt-7 text-2xl font-semibold' >{data.title}</h2>
             <p className='mt-2 text-sm'>{data.description}</p>
             <div className='mt-4 flex items-center justify-center'>
                <button className='py-2 px-4 bg-red-600' >Failed</button>
             </div>
      </div>
  )
}

export default FailedTask
