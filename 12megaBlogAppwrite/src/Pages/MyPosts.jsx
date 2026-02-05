import React, { useEffect, useState } from 'react'
import { PostCard, Container } from '../components' 
import appwriteService from '../appwrite/config'
import { Query } from 'appwrite'
import { useSelector } from 'react-redux'

function MyPosts() {
    const [posts, setPosts] = useState([])
    const userData = useSelector(state => state.auth.userData)

    useEffect(() => {
       
        if (userData?.$id) {
            appwriteService.getPosts([Query.equal("userId", userData.$id)])
                .then((posts) => {
                    if (posts) {
                        setPosts(posts.documents)
                    }
                })
                .catch((error) => {
                    console.log("appwrite :: getPosts :: error", error);
                })
        }
    }, [userData])

    
    if (!userData) return <div>Loading...</div>;

    return (
        <div className='w-full py-8'>
            <Container>
                
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default MyPosts