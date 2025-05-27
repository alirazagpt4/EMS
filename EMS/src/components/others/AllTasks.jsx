import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTasks = () => {
  const [userData , setUserData] = useContext(AuthContext);
  // console.log(authData)
  console.log(userData)
  return (
    <div id='allTasks' className='p-5 bg-[#29282b] mt-5 rounded-md h-57 overflow-auto'>
      <div className='bg-emerald-400 mb-2 px-4 py-2 flex justify-between rounded-md'>
        <h3 className='w-1/5' >Employee Name</h3>
        <h3 className='w-1/5' >New Task</h3>
        <h3 className='w-1/5' >Active Task</h3>
        <h3 className='w-1/5' >Completed</h3>
        <h3 className='w-1/5' >Failed</h3>
      </div>
      <div>
        {userData.employees.map((elem, idx) => {
          return <div key={idx} className='border-[0.5px] border-emerald-400 mb-2 px-4 py-2 flex justify-between rounded-md'>
            <h3 className='text-lg font-medium w-1/5 text-gray-200' >{elem.firstName}</h3>
            <h3 className='text-lg font-medium w-1/5 text-blue-400' >{elem.taskCounts.newTask}</h3>
            <h3 className='text-lg font-medium w-1/5 text-yellow-400' >{elem.taskCounts.active}</h3>
            <h3 className='text-lg font-medium w-1/5 text-green-500' >{elem.taskCounts.completed}</h3>
            <h3 className='text-lg font-medium w-1/5 text-red-500' >{elem.taskCounts.completed}</h3>
          </div>
        })}
      </div>

    </div>
  )
}

export default AllTasks 
