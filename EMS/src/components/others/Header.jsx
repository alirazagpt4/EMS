import React from 'react'

const Header = (props) => {
 
  const logoutUser = () => {
    localStorage.setItem('loggedInUser' , '');
    // window.location.reload();
    props.changeUser('');
  }

  return (

      <div className='flex items-end justify-between'>
        <h1 className='text-2xl  font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.data.firstName} </span> </h1>
        <button onClick={logoutUser} className='bg-red-600 text-white px-5 py-2 rounded-lg font-medium text-lg'>Log Out</button>
      </div>
    
  )
}

export default Header
