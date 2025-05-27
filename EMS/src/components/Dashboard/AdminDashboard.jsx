import React, { useContext } from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../others/AllTasks'
import { AuthContext } from '../../context/AuthProvider'

const AdminDashboard = (props) => {
    console.log("admin dashboard" ,props.data)

    // const data = useContext(AuthContext)
    return (
        <div className='h-screen w-screen p-10 bg-[#1C1C1C]'>
            {/* <h1>{data}</h1> */}
            <Header data={props.data}  changeUser = {props.changeUser} />
            <CreateTask/>
            <AllTasks/>

        </div>
    )
}

export default AdminDashboard
