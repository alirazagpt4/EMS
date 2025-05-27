import React, { useState } from 'react'
import { toast , ToastContainer} from 'react-toastify'

const Login = ({handleLogin}) => {
    // console.log(handleLogin)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const SubmitHandler = (e) => {
        e.preventDefault()
        if(email == '' && password == ''){
            toast.error("All fields are required")
        }
        console.log("email is : ", email)
        console.log("password is : ", password)
        handleLogin(email , password)

        setEmail("");
        setPassword("");


    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl flex flex-col items-center'>
                <h1 className='text-4xl text-gray-300 font-semibold mb-4'>Login Form</h1>
                <form className='flex flex-col items-center justify-center ' >
                    <input
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className='text-lg border-2 border-emerald-600 rounded-full py-2 px-5 m-3 placeholder:text-gray-400'
                        type="email"
                        placeholder='Enter Your Email' />
                        {/* {email} */}
                    <input
                        required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        className='text-lg border-2 border-emerald-600 rounded-full py-2 px-5 m-3 placeholder:text-gray-400'
                        type="password"
                        placeholder='Enter Your Password' />
                        {/* {password} */}
                    <button
                     className='text-lg bg-emerald-600 rounded-full py-2 px-25 m-3 hover:bg-emerald-800 font-semibold'
                     onClick={(e) => {
                        SubmitHandler(e)
                    }}>Log in</button>

                </form>

            </div>
            <ToastContainer/>
        </div>
    )
}

export default Login
