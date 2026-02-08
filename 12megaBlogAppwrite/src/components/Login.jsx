import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {Button,Input} from './'
import authService from '../appwrite/auth'
import {login as authLogin}from '../store/authSlice'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'

function Login() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const{register,handleSubmit}=useForm()
    const[error,setError]=useState("")

    const login=async(data)=>{
        setError('')

        try {
            const session=await authService.login(data) 
              if (session){
                const userData=await authService.getCurrentUser()
                if(userData) dispatch(authLogin({userData}));
                navigate('/')

              }
            
        } catch (error) {
            setError(error.message)
        }
         
    }

  return (
    <div className='p-4 bg-white shadow rounded-lg max-w-md mx-auto my-10'>
        <div className='text-center my-4 text-4xl'>
            📰
        </div>
        <h2 className='text-center text-2xl font-bold '>
            Sign in your Account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error&&(<p>
            {error}
        </p>)}

        <form onSubmit={handleSubmit(login)}>
            <div className='space-y-5 mb-15'>
             <Input 
                 label='Email'
                 type="email" 
                 placeholder="Enter Your Email" 
                {...register("email", {
                    required: true,
                    validate: {
                       matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                    }} )}/>
                <Input
                    label='Password'
                    type='password'
                    placeholder='Enter Password'
                    {...register('password',{
                        required:true,
                    })}    
                />    
                <Button type='submit' className='w-full mb-3'>
                    Sign in
                </Button>
             </div>
        </form>
    </div>
  )
}

export default Login