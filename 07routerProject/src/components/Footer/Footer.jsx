import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <>
    <footer className='w-full bg-gray-200 flex justify-center items-center'>
        <div className='w-1/2 flex justify-center items-center'>
            <Link to="/" className="flex items-center justify-center">
                    <h1 className=' text-3xl font-extrabold font-sans italic text-orange-500'>SATYAM</h1>
                    </Link>
        </div>
        <div className='w-1/2 flex justify-center items-center gap-4'>
            <div className='flex flex-col gap-1 p-4 items-start justify-center'>
                <p className='font-bold text-gray-900 text-lg'>Resources</p>
                <Link to="/" className="block p-2  text-base text-gray-800 cursor-pointer hover:text-orange-700 ">
                    Home
                    </Link>
                <Link to="/about" className="block p-2  text-base text-gray-800 cursor-pointer hover:text-orange-700">
                    About
                    </Link>    
                </div>

            <div className='flex flex-col gap-1 items-start justify-center'>
                <p className='font-bold text-lg text-gray-900'>Follow Us</p>
                <Link to="/contact" className="block p-2 text-base text-gray-800 cursor-pointer hover:text-orange-700">
                    Contact
                    </Link>
                <Link to="/github" className="block p-2 text-base text-gray-800 cursor-pointer hover:text-orange-700 ">
                    Github
                    </Link>    
                </div>    
        </div>
    </footer>
    </>
  )
}

export default Footer