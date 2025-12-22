import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <><header className='w-full py-1 flex justify-around items-center shadow-lg sticky top-0 bg-white z-50'>
        <Link to="/" className="flex items-center justify-center">
        <h1 className=' text-3xl font-extrabold font-sans italic text-orange-500'>SATYAM</h1>
        </Link>
        <div className='flex items-center justify-center '>
            <NavLink to="/" className={({isActive})=>
                `block p-2 m-1 text-base  ${isActive ? "text-orange-500" : "text-gray-700"} hover:text-orange-500 cursor-pointer `
            }>
               Home
            </NavLink>

            <NavLink to="/about" className={({isActive})=>
                `block p-2 m-2 text-base  ${isActive ? "text-orange-500" : "text-gray-700"} hover:text-orange-500 cursor-pointer `
            }>
               About
            </NavLink>

            <NavLink to="/contact" className={({isActive})=>
                `block p-2 m-2 text-base  ${isActive ? "text-orange-500" : "text-gray-700"} hover:text-orange-500 cursor-pointer `
            }>
               Contact
            </NavLink>

            <NavLink to="/github" className={({isActive})=>
                `block p-2 m-2 text-base  ${isActive ? "text-orange-500" : "text-gray-700"} hover:text-orange-500 cursor-pointer `
            }>
               Github
            </NavLink>

        </div>
        <div className='flex gap-3 items-center justify-center' >
           <Link to='#' className='block bg-orange-600 p-2 my-2  rounded-lg text-white text-sm hover:bg-orange-700 '>
           Get Started
           </Link>
           <Link to='#' className='block bg-orange-600 p-2 my-2  rounded-lg text-white text-sm hover:bg-orange-700 '>
           Log in
           </Link>
        </div>
        </header>
        </>
  )
}

export default Header