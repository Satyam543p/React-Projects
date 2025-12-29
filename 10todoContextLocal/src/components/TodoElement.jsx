import React, { useState } from 'react'
import { useTodo } from '../context/todocontext'


function TodoElement({ todo }) {
    const {updateTodo,deleteTodo,toggleComplete}=useTodo()

    const [todoMessage,setTodoMessage]=useState(todo.todo)
    const [isEditTodo,setIsEditTodo]=useState(false)

    const editTodo=()=>{
        updateTodo(todo.id,{ ...todo, todo: todoMessage })
        setIsEditTodo(false)
    }
    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }


  return (
    
    <div className={`w-full max-w-[700px] flex justify-around items-center gap-3 px-3 shadow-lg rounded-lg ${todo.complete?'bg-green-300':'bg-violet-300'} `}>
        <input 
            
            type="checkbox" 
            onChange={toggleCompleted}
            checked={todo.complete}
        />
        <input  
            className={`w-full ${isEditTodo?"border-black/30 px-2" : "border-transparent" } border-2 rounded-lg bg-transparent text-lg outline-none p-2 mx-4 ${todo.complete ? "line-through" : ""}`}
            type="text"
            onChange={(e)=>setTodoMessage(e.target.value)} 
            value={todoMessage}
            disabled={todo.complete}
            readOnly={!isEditTodo}

        />
        <button onClick={()=>{if(todo.complete) return;
                                
                               if(isEditTodo){
                                editTodo();
                               } 
                               else setIsEditTodo((prev)=>!prev)
        }}>
            {isEditTodo?"📁":"✏"}</button>
        <button onClick={()=>deleteTodo(todo.id)}>❌</button>
    </div>
  )
}

export default TodoElement