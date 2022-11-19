import React from 'react'
import {FcGoogle} from 'react-icons/fc'
export default function Oauth() {
  return (
    <div>
      <button className=' rounded flex items-center  uppercase justify-center w-full bg-red-800 text-white px-7 py-3 text-sm font-medium hover:bg-red-900 shadow-md active:shadow-lg hover:shadow-lg transition duration-150 ease-in-out '>
        <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
        Continue with Google
        </button>
    </div>
  )
}
