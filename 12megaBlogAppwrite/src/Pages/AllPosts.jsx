import React, { useEffect, useState } from 'react'
import { PostCard } from '../components'
import appwriteService from '../appwrite/config'
import Container from '../components/container/container'

function AllPosts() {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
        .catch((error) => {
             console.log("Error fetching posts:", error);
             alert(error.message); 
        })
    },[])
    
  return (
    <div className='w-full min-h-120 py-8'>
        <Container>
            <div className='p-3 flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='p-4 w-1/4'>
                        <PostCard {...post}/>
                    </div>))}
                {!posts &&(
                    <div className='p-5 items-center '>
                        No Posts are found!
                    </div>
                )}    
            </div>
        </Container>
    </div>
  )
}

export default AllPosts