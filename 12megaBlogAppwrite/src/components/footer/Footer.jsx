import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <section className='w-full flex flex-col md:flex-row md:justify-between items-center gap-5 p-5 bg-gray-500'>
      
      <div className='w-1/4 ml-8 p-3'>
        <Link to='/'>
         <span className='text-4xl text-gray-200'>📰 BlogApp</span> 
        </Link>
      </div>
      
      <div className='flex flex-col md:flex-row items-center md:gap-14  gap-5'>
        <div >

          <h3 className='font-bold text-xl mb-9 text-gray-900 uppercase'>
            Company
          </h3>

           <ul>
            <li className='font-semibold text-gray-700 mb-3 text-base'>
              <Link to='/'>
              Features
              </Link>

            </li>
            <li className='font-semibold text-gray-700 mb-3 text-base'>
                <Link to='/'>
              Pricing
              </Link>
            </li>
            <li className='font-semibold text-gray-700 mb-3 text-base'>
               <Link to='/'>
              Affliate Program
              </Link>
            </li>
           </ul>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-9 text-gray-900 uppercase'>
            Support
          </h3>

           <ul>
            <li className='font-semibold text-gray-700 mb-3 text-base'>
              <Link to='/'>
              Account
              </Link>

            </li>
            <li className='font-semibold text-gray-700 mb-3 text-base'>
                <Link to='/'>
              Contact us
              </Link>
            </li>
            <li className='font-semibold text-gray-700 mb-3 text-base'>
               <Link to='/'>
              Help
              </Link>
            </li>
           </ul>
        </div>
        <div>
           <h3 className='font-bold text-xl mb-9 text-gray-900 uppercase'>
            Legals
          </h3>

           <ul>
            <li className='font-semibold text-gray-700 mb-3 text-base'>
              <Link to='/'>
              Terms &amp; Conditions
              </Link>

            </li>
            <li className='font-semibold text-gray-700 mb-3 text-base'>
              <Link to='/'>
              Privacy Policy
              </Link>
            </li>
            <li className='font-semibold text-gray-700 mb-3 text-base'>
               <Link to='/'>
              Licensing
              </Link>
            </li>
           </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer