import React from 'react'

const TaskListNumbers = ({data}) => {
      console.log(data);
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
       <div className='rounded-xl px-9 py-6 w-[45%] bg-blue-500'>
             <h1 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h1>
             <h3 className='text-xl font-medium'>New Task</h3>
       </div>

       <div className='rounded-xl px-9 py-6 w-[45%] bg-green-500'>
             <h1 className='text-3xl font-semibold'>{data.taskCounts.completed}</h1>
             <h3 className='text-xl font-medium'>Completed</h3>
       </div>

       <div className='rounded-xl px-9 py-6 w-[45%] bg-yellow-500'>
             <h1 className='text-3xl font-semibold'>{data.taskCounts.active}</h1>
             <h3 className='text-xl font-medium'>Accepted</h3>
       </div>

       <div className='rounded-xl px-9 py-6 w-[45%] bg-red-500'>
             <h1 className='text-3xl font-semibold'>{data.taskCounts.failed}</h1>
             <h3 className='text-xl font-medium'>Failed</h3>
       </div>
    </div>
  )
}

export default TaskListNumbers
