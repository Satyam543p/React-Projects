import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-[#1a252b] rounded-xl p-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-700 h-full flex flex-col'>
            
            <div className='w-full justify-center mb-4 h-48 overflow-hidden rounded-lg'>
                <img 
                    src={appwriteService.getFilePreview(featuredImage)} 
                    alt={title}
                    className='rounded-lg w-full h-full object-cover' 
                />
            </div>
            
            
            <h2 className='text-xl font-bold text-amber-50 mt-auto'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard