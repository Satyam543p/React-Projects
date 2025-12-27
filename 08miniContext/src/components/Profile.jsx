import React,{useContext} from 'react'
import userContext from '../context/userContext'

function Profile() {
    const {user}=useContext(userContext);
    if(!user.userName||!user.password){
        return <div>Please enter Username and Password to Login</div>
    }

   return (
    <div>Hi {user.userName} you are successfully Logged in</div>
  )
}

export default Profile