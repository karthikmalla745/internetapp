import React, { useState } from 'react'
import Navbar from '../components/Navbar'

import Link from 'next/link'
import Oauth from '../components/Oauth'
function Forgotpassword() {

  const [email,setEmail] = useState("")
  function changeHandler(e){
    setEmail(e.target.value)
  }
  return (
    <div>
      <Navbar/>
      <section>
        <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
        <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
          <div className='md:w-[67%] lg:w-[45%] mb-12 md:mb-6'>
            <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" alt="key"
              className='w-full rounded-2xl'
            />
            
          </div>
          <div className='w-full md:w-[67%] lg:w-[50%] lg:ml-12'>
            <form>
              <input className='w-full mb-8 rounded px-4 py-2 text-xl text-gray-700 bg-white border-gray-400 transition ease-in-out' 
              type="email" 
              id="email" 
              placeholder='Email address' 
              value={email} 
              onChange={changeHandler}/>
              
              <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                <p className='mb-8 '>Don't have an account?
                  <Link href="/Signup" className='text-red-700 font-semibold hover:text-red-800 transition duration-200 ease-in-out ml-3'>Register</Link>
                </p>
                <p>
                  <Link href="/Signin" className='text-blue-700 font-semibold hover:text-blue-800 transition duration-200 ease-in-out'>Sign in instead</Link>
                </p>
              </div>

              <button className='w-full bg-blue-600 text-white px-7 py-3 rounded text-sm font-medium uppercase shadow-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900' type="submit">Send Reset Password</button>
              <div className='my-4 flex items-center before:border-t  before:flex-1  before:border-gray-400 after:border-t after:flex-1  after:border-gray-400'>
                <p className='text-center font-semibold mx-4'>OR</p>
              </div>
              <Oauth/>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Forgotpassword