import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import  {Button,Input,RTE,Select} from "../"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import appwriteService from '../../appwrite/config'


function PostForm({post}) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
    },
});

    const navigate=useNavigate();
    const userData=useSelector(state=>state.auth.userData);
    const[loading,setLoading]=useState(false)

    
    const submit = async (data) => {
        setLoading(true);
      
        if (!userData) {
            alert("Missing User Data! Please Logout and Login again.");
            return;
        }

        try {
            
            if (post) {
               
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

                
                if (file && post.featuredImage) {
                    try {
                        
                        await appwriteService.deleteFile(post.featuredImage);
                    } catch (err) {
                        console.log("Old file was missing or couldn't be deleted. Ignoring...", err);
                    }
                }

                
                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    
                    featuredImage: file ? file.$id : post.featuredImage,
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } 
            
            else {
                const file = await appwriteService.uploadFile(data.image[0]);

                if (file) {
                    const fileId = file.$id;
                    data.featuredImage = fileId;
                    
                    const dbPost = await appwriteService.createPost({ 
                        ...data, 
                        userId: userData.$id 
                    });

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                }
            }
        } catch (error) {
            console.log("❌ Form Submit Error:", error);
            alert("Something went wrong: " + error.message);
        }
        setLoading(false);
    };

    const slugTransform=useCallback((value)=>{
        if(value&& typeof(value)==='string'){
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g,"-")
            .replace(/\s/g,"-");
        }
        return "";

    },[])

    useEffect(()=>{
        const subscription=watch((value,{name})=>{
            if (name==='title'){
                setValue("slug",slugTransform(value.title),{shouldValidate:true})
            }
        });

        return ()=>subscription.unsubscribe();
    },[watch,slugTransform,setValue])

  return (
   <form onSubmit={handleSubmit(submit)} className='w-full p-2 md:flex md:flex-row gap-5'>
    <div className='w-2/3 space-y-1'>
        <Input 
        label="Title"
        placeholder="title"
        className="mb-3"
        {...register("title",{required:true})}/>

        <Input 
        label="Slug"
        placeholder="slug"
        className="mb-2"
        {...register("slug",{required:true})}
        onInput={(e)=>(
            setValue("slug",slugTransform(e.target.value),{shouldValidate:true})
        )}/>
        
        <RTE label="content :" name="content" control={control} defaultValue={getValues("content")}/>
    </div>

    <div className='w-full md:w-1/3 gap-5'>
        <Input
        label="Featured Image"
        type="file"

        className="mb-4 block w-full text-sm text-slate-500
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-green-50 file:text-green-700
                 hover:file:bg-green-100"

        accept="image/png, image/jpg, image/jpeg, image/gif"
        {...register("image", { required: !post })}/>

        {post &&(
            <div className='w-full md-3 p-1'>
                <img src={appwriteService.getFilePreview(post.featuredImage)} 
                     alt={post.title} 
                     className='rounded-lg '/>
            </div>
        )}

        <Select
            option={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
        />

        <div className='w-full flex gap-2 mb-2'>

        <Button 
                type="submit"
                className={`w-2/3 hover:bg-green-600 ${loading ? 'cursor-not-allowed' : ''}`} 
                disabled={loading}
                bgColor={ "bg-green-500"}>

                    {loading?'Submitting...':'Submit'}
              </Button>

        <Button
            bgColor="bg-gray-500 hover:bg-gray-600"
            className='w-1/3'
            onClick={()=>navigate(-1)}
            disabled={loading}    
            >
                Cancel
            </Button>
        </div>
    </div>
   </form>
  )
}

export default PostForm