import React,{useState,useContext} from 'react'
import userContext from '../context/userContext';


function Login() {
   const [userName,setUserName]=useState("");
   const [password,setPassword]=useState("");

   const {setUser}=useContext(userContext);

   const Handlebtn=(e)=>{
    e.preventDefault();
    setUser({userName,password})
   }
  return (
    <div>
        <h1>Login</h1>
        <input 
            type="text"
            value={userName}
            placeholder='Username'
            onChange={(e)=>(setUserName(e.target.value))}
         />
         {"  "}

         <input 
            type="text"
            value={password}
            placeholder='Username'
            onChange={(e)=>(setPassword(e.target.value))}
         />
         {"  "}
         <button onClick={Handlebtn}>
            Log in
         </button>
    </div>
  )
}

export default Login