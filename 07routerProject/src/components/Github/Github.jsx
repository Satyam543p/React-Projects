import React,{useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
 

function Github() {

    // const [data,setData]=useState([])
    // const [repo,setRepo]=useState([])
    // useEffect(()=>{
    //     const fetchData=async()=>{
    //       const response=await fetch('https://api.github.com/users/Satyam543p')
    //       const result =await response.json()
    //       console.log(result);
    //       setData(result)

    //       const repoResponse = await fetch(result.repos_url)
    //       const repoData = await repoResponse.json()
    //       setRepo(repoData)
    //     }
    //  fetchData();
    // },[] )

    const { data, repo } = useLoaderData()
  return (
    
    <div className='w-full bg-white'>
        <h1 className='text-3xl text-center my-10 font-extrabold text-orange-500'>Github</h1>
        
        <div className='w-full flex flex-col md:flex-row my-5'>
            
            <div className='w-full md:w-1/2 flex flex-col items-center justify-center'>
                <img src={data.avatar_url} alt="Git Pic" width={200} className='  my-2 border-8 border-gray-500 rounded-full ' />
                <h2 className='text-2xl mb-5 font-extrabold text-gray-500'>{data.name || data.login}</h2>
                 <h3 className='text-xl mb-3 font-extrabold text-gray-700'>Bio</h3>
                 <p className='w-2/3 my-3 text-lg mb-3 font-bold text-gray-600'>{data.bio}</p>
            </div >

            <div className='w-full md:w-1/2 md:border-l-2 border-orange-500 flex flex-col items-center justify-center' >
               <h2 className='text-2xl mb-5 font-extrabold text-gray-500'> My Repositories  <span className='mx-1 text-2xl font-bold text-gray-600'>{"("+data.public_repos+")"}</span></h2>
              
               <div>{repo.map((repo)=>(
                        <div key={repo.id} className='bg-white p-5 mr-10'>

                            <span className='text-xs text-gray-400 mx-5'>
                                    ⭐ {repo.stargazers_count}
                                </span>
                            <span className='text-xl font-bold text-gray-600 hover:underline'>
                                {repo.name}
                            </span>
                            </div>
                        
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Github
export const githubInfoData=async()=>{
          const response=await fetch('https://api.github.com/users/Satyam543p')
          const result =await response.json()

          const repoResponse = await fetch(result.repos_url)
          const repoData = await repoResponse.json()
          return { data: result, repo: repoData }
        }