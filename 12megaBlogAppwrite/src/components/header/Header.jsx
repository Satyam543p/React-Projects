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
    <header className='w-full sticky py-3 shadow bg-[#1a252b]'>
      <Container>
        
        <nav className='flex'>
          
          
          <div className='ml-8 '>
            <Link to='/'>
               <span className='md:text-4xl text-amber-50'>📰 BlogApp</span> 
            </Link>
          </div>

          
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
              
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-bock md:text-xl px-6 py-2 text-white duration-200 hover:text-gray-300 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header