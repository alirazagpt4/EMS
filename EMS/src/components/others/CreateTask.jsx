import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskCategory, setTaskCategory] = useState('')
    const [assignTo, setAssignTo] = useState('')

    const [newtask , setNewTask] = useState({});

    const [userData , setUserData] = useContext(AuthContext)


    const submitHandler = (e)=>{
        e.preventDefault()
         setNewTask({

             taskTitle,
             taskDescription,
             taskDate,
             taskCategory,
             active:false,
                completed:false,
                failed:true,
                newTask:true
            });

            const data = userData.employees;
            // console.log(data);
  
            data.forEach((elem)=>{
                if(assignTo == elem.firstName){
                    
                    elem.tasks.push(newtask);
                    elem.taskCounts.newTask += 1;
                    console.log(elem)
                }
                
            })


            setUserData(data); 

            setAssignTo('')
            setTaskTitle('')
            setTaskDescription('')
            setTaskDate('')
            setTaskCategory('')
    }

  return (
    <div className='p-5 bg-[#29282b] mt-5 rounded-md'>
    <form
    
    onSubmit={(e)=>{  
        submitHandler(e)
    }}
    className='flex flex-wrap items-start justify-between'>

        <div className='w-1/2'>
            <div>
                <h3 className='text-sm text-gray-400 mb-0.5'>Task Title</h3>
                <input 
                    value={taskTitle}
                    onChange={(e)=>{setTaskTitle(e.target.value)}}
                    className='text-sm px-2 py-1 w-4/5 rounded-md border-[1px]  border-gray-300 mb-4 bg-transparent outline-none' 
                    type='text' 
                    placeholder='Enter Task Title' />
            </div>

            <div>
                <h3 className='text-sm text-gray-400 mb-0.5'>Date</h3>
                <input 
                     value={taskDate}
                     onChange={(e)=>{setTaskDate(e.target.value)}}
                     className='text-sm px-2 py-1 w-4/5 rounded-md border-[1px]  border-gray-300 mb-4 bg-transparent outline-none' 
                     type='date'
                     placeholder='' />
            </div>

            <div>
                <h3 className='text-sm text-gray-400 mb-0.5'>Assign To</h3>
                <input 
                    value={assignTo}
                    onChange={(e)=>{setAssignTo(e.target.value)}}
                   className='text-sm px-2 py-1 w-4/5 rounded-md border-[1px]  border-gray-300 mb-4 bg-transparent outline-none' 
                   type="text" 
                   placeholder='Enter name' />
            </div>

            <div>
                <h3 className='text-sm text-gray-400 mb-0.5'>Category</h3>
                <input
                    value={taskCategory}
                    onChange={(e)=>{setTaskCategory(e.target.value)}}
                    className='text-sm px-2 py-1 w-4/5 rounded-md border-[1px]  border-gray-300 mb-4 bg-transparent outline-none'
                    type="text" 
                    placeholder='design , dev , etc'
                  />
            </div>

        </div>

        <div className='w-1/2 flex flex-col '>
            <h3 className='text-sm text-gray-400 mb-0.5'>Description</h3>
            <textarea value={taskDescription}
                    onChange={(e)=>{setTaskDescription(e.target.value)}} className='w-full h-44 text-sm rounded-md border-[1px] border-gray-300'  ></textarea>
            <button className='bg-emerald-500 hover:bg-emerald-700 py-3 px-5 rounded-md text-sm mt-4 w-full'>Create Task</button>
        </div>

    </form>

</div>
  )
}

export default CreateTask
