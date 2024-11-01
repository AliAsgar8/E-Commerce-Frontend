import React, { useState } from 'react'

const Login = () => {

const [currentState, setCurrentState] = useState('Sigup')

const handleSubmit = async (e) => {
  e.preventDefault();
}

  return (
    <form onSubmit={handleSubmit}>

    <div className='flex flex-col max-w-[450px] m-auto '>
      
      <div className='flex gap-2 items-center justify-center mb-5'>
      <p className='text-3xl font-medium  para-regular'>{currentState}</p>
      <hr className='border-none h-[2px] w-10 bg-gray-400'/>
      </div>

     {currentState === 'Login' ? '' : <input type="text" placeholder='Name' className='w-full px-3 py-2 border border-gray-500 mb-5' required />}
      <input type="email" placeholder='Email' className='w-full px-3 py-2 border border-gray-500 mb-5' required />
      <input type="password" placeholder='Password' className='w-full px-3 py-2 border border-gray-500 mb-4' required />

      <div className='flex justify-between mb-5'>
        <p>Forget Password</p>
        {
          currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Signup')} className='cursor-pointer'>Create Account</p>
          ):(
            <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login</p>
          )
        }
       
      </div>

      <button className='bg-black text-white text-sm font-medium px-4 py-3 w-1/4 '>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </div>
    </form>
  )
}

export default Login
