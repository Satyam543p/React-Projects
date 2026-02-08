import React from 'react'
import { Container, LogoutBtn } from '../'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
  ]

  return (
   <header className='w-full sticky top-0 z-50 py-3 shadow bg-[#1a252b]'>
      
      <div className='w-full px-4 md:px-10'> 
        
        <nav className='flex items-center'> 
          
          
          <div className='mr-4'> 
            <Link to='/'>
               <span className='md:text-4xl text-2xl font-bold text-amber-50'>
                  📰 BlogApp
               </span> 
            </Link>
          </div>

          
          <ul className='flex ml-auto gap-2'> 
            {navItems.map((item) => 
              
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block md:text-xl px-4 py-2 text-white duration-200 hover:text-gray-300 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            
            {authStatus && (
              <li className='ml-2'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header