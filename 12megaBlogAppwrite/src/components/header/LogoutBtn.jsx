import React from 'react'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handler=()=>{
        authService.logOut().then(
            ()=>{
                dispatch(logout());
                navigate('/login');
            }
        )
        .catch(
            (err)=>(console.log(err))
        )
    }
  return (
    <button onClick={handler} className='px-4 py-2 rounded-lg bg-red-700 text-amber-50 hover:bg-red-700/70 active:bg-red-700/60'>
       Logout
    </button>
  )
}

export default LogoutBtn