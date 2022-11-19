import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import Link from 'next/link'
import Oauth from '../components/Oauth'
function Signup() {

  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })
   
  const {name,email,password}=data;

  const [showPassword, setShowPassword]=useState(false)
  function changeHandler(e){
    setData((prevState) =>({...prevState,[e.target.id]:e.target.value}))
  }
  return (
    <div>
      <Navbar/>
      <section>
        <h1 className='text-3xl text-center mt-6 font-bold'>Sign up</h1>
        <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
          <div className='md:w-[67%] lg:w-[45%] mb-12 md:mb-6'>
            <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" alt="key"
              className='w-full rounded-2xl'
            />
            
          </div>
          <div className='w-full md:w-[67%] lg:w-[50%] lg:ml-12'>
            <form>
            <input className='w-full mb-6 rounded px-4 py-2 text-xl text-gray-700 bg-white border-gray-400 transition ease-in-out' 
              type="text" 
              id="name" 
              placeholder='Full name' 
              value={name} 
              onChange={changeHandler}/>

              <input className='w-full mb-6 rounded px-4 py-2 text-xl text-gray-700 bg-white border-gray-400 transition ease-in-out' 
              type="email" 
              id="email" 
              placeholder='Email address' 
              value={email} 
              onChange={changeHandler}/>
              <div className='relative'>
              <input className='w-full mb-6 rounded px-4 py-2 text-xl text-gray-700 bg-white border-gray-400 transition ease-in-out'
                type={showPassword ? "text" : "password"} 
                id="password"
                placeholder='Password' 
                value={password} 
                onChange={changeHandler}/>
                {showPassword ?
                 <AiFillEyeInvisible 
                  onClick={()=>setShowPassword((prevState)=>!prevState)}
                  className='absolute right-4 top-4 text-xl cursor-pointer'/>
                  :
                  <AiFillEye 
                   className='absolute right-4 top-4 text-xl cursor-pointer'
                   onClick={()=>setShowPassword((prevState)=>!prevState)}/>
                }
              </div>
              <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                <p className='mb-6 '>Have an account?
                  <Link href="/Signin" className='text-red-700 font-semibold hover:text-red-800 transition duration-200 ease-in-out ml-3'>Sign in</Link>
                </p>
                <p>
                  <Link href="/Forgotpassword" className='text-blue-700 font-semibold hover:text-blue-800 transition duration-200 ease-in-out'>Forgot password?</Link>
                </p>
              </div>

              <button className='w-full bg-blue-600 text-white px-7 py-3 rounded text-sm font-medium uppercase shadow-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900' type="submit">Sign Up</button>
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

export default Signup