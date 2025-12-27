import React,{useState,useEffect} from 'react'


function Card() {
    const [data,setData]=useState({})

    useEffect(()=>{
        const fetchData=async()=>{
          const response=await fetch('https://api.github.com/users/Satyam543p')
          const result =await response.json()
          console.log(result);
          setData(result)
        }
     fetchData();
    },[] )

  return (
    <div className='flex flex-col items-center text-center'>
        <img src={data.avatar_url} alt="Git Pic" width={200} className='  my-2 border-8 border-gray-500 rounded-full dark:border-gray-300' />
        <h2 className='text-2xl mb-5 font-extrabold text-gray-500 dark:text-gray-200'>{data.name || data.login}</h2>
        <h3 className='text-xl mb-3 font-extrabold text-gray-700 dark:text-gray-200'>Bio</h3>
        <p className='w-full text-lg font-bold text-gray-600 dark:text-gray-200' >{data.bio}</p>
    </div>
  )
}

export default Card