import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0  h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
             <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 px-3 py-1 rounded-md'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
             </div>
             <h2 className='mt-7 text-2xl font-semibold' >{data.title}</h2>
             <p className='mt-2 text-sm'>{data.description}</p>
             <div className='mt-6 flex  items-center justify-center gap-2 '>
                <button className='px-4 text-xs py-2 bg-green-600'>Marked as Completed</button>
                <button className='px-4 text-xs py-2 bg-red-600'>Marked as failed</button>
             </div>
      </div>
  )
}

export default AcceptTask
