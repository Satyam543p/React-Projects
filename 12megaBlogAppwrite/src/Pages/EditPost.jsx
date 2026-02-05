import React,{useEffect,useState} from 'react'
import {useNavigate,useParams}from "react-router-dom"
import appwriteService from '../appwrite/config'
import Container from '../components/container/container'
import { PostCard } from '../components'


function EditPost() {
    const [post,setPost]=useState(null)
    const slug=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        if (slug) {
            appwriteService.getPost(slug).then(
                (post)=>{
                    if(post){
                        setPost(post)
                    }
                
                }
            )}
        else{
            navigate('/')
            }    
    },[slug,])
  return post? (
    <div className='py-8'>
        <Container>
        <PostCard post={post}/>
        </Container>
        </div>
  ):null
}

export default EditPost