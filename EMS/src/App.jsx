import React, { useContext, useEffect, useState } from 'react'
import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';


const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [userData , setUserData] = useContext(AuthContext);

  console.log(userData)
  
   useEffect(() => {
   
    // localStorage.clear();
    // setLocalStorage();
    // console.log(userData.admin.admin)

    if(userData){
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        const data = JSON.parse(loggedInUser);
        console.log(data)
        setUser(data.role);
        setLoggedInUserData(data.data);
      }
    }
   
    
   }, [userData])
   

  const handleLogin = (email, password) => {
    if (userData) {
      const admin = userData.admin.find((e)=>email == e.email && password == e.password);
      console.log(admin)
      setLoggedInUserData(admin);
      setUser('admin');
      localStorage.setItem('loggedInUser' , JSON.stringify({role:'admin',data:admin}));
      // console.log('this is admin');
    }
    else if (userData) {
      const employee = userData.employees.find((e)=>email == e.email && password == e.password)
      setLoggedInUserData(employee);
      setUser('employee')
      localStorage.setItem('loggedInUser' , JSON.stringify({role:'employee',data:employee}));
      // console.log('this is employee');
    }
    else {
      alert("invalid email and password");
    }

  }

    console.log("logged in user",loggedInUserData);

  return (
    <>


      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && <AdminDashboard  changeUser = {setUser} data={loggedInUserData} />}
      {user === 'employee' && <EmployeeDashboard changeUser = {setUser} data={loggedInUserData} />}
    </>

  )
}

export default App
