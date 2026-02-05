import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {Header,Footer} from './components'
import { Outlet } from 'react-router-dom'
import { login, logout } from "./store/authSlice"
 
function App() {
  const [loading, setLoading] = useState(true)

  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
      })
      .finally(()=>
        setLoading(false)
      )      
  },[])

  return !loading? (
    <>
      <div className='w-full min-h-screen bg-gray-400'>
        <div className='flex flex-wrap justify-center items-center'>
          <Header/>
          <Outlet/>
          <Footer/>
        </div> 
      </div>
    </>
  ) :(null)
}

export default App
