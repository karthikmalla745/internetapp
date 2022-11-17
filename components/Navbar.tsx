import React from 'react'
import Link from 'next/link'
function Navbar() {

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
            <Link href="/Home">
            <img src="https://images.squarespace-cdn.com/content/v1/5ce304b9a9a21100012789be/1558837359901-4407L4X7PRX0MRZQ1X6V/OP+Internet+Cafe+new+new+WHBG-01+%281%29.png" alt="logo"
             className='h-12 cursor-pointer'
             
            />
            </Link>
        </div>
        <div>
            <ui className="flex space-x-10 list-none">
                <Link href="/Home"><li className={`py-3 text-sm font-semibold cursor-pointer text-grey-400 border-b-[3px] border-b-transparent hover:text-red-900 hover:font-bold `}>Home</li></Link>
                <Link href="/profile"><li className={`py-3 text-sm font-semibold cursor-pointer text-grey-400 border-b-[3px] border-b-transparent hover:text-red-900 hover:font-bold `}>Services</li></Link>
                <Link href="/Signin"><li className={`py-3 text-sm font-semibold cursor-pointer text-grey-400 border-b-[3px] border-b-transparent hover:text-red-900 hover:font-bold`}>Signin</li></Link>
            </ui>
        </div>
      </header>
    </div>
  )
}

export default Navbar
