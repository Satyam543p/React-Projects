import React, { useState } from 'react'
import { useTodo } from '../context/todocontext'

function Todoform() {
    const {addTodo}=useTodo()

    const [todo,setTodo]=useState("")

    const add=(e)=>{
        e.preventDefault()
        if (!todo) return

        addTodo({todo,complete:false})
        setTodo("")
    }

  return (
    <div className='w-full max-w-[700px] flex justify-around items-center shadow-lg rounded-lg bg-violet-300 '>
        <form onSubmit={add} className='w-full flex justify-between  items-center '>
        <input 
            className='w-full bg-transparent text-lg outline-none p-2 mx-4'
            type="text"
            placeholder='Write Todo...'
            value={todo}
            onChange={(e)=>setTodo(e.target.value)} 
        />
        <button className='bg-blue-500 text-white text-lg fond-bold p-2 rounded-r-lg  active:bg-blue-400 ' type='submit' >
            Add
        </button>
        </form>
    </div>
  )
}

export default Todoform