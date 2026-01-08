import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeTodo } from '../features/todoSlice'

function Todos() {
    const todos=useSelector(state=>state.todos||[]);
    const Dispatch=useDispatch()

  return (
    <>
     <div className='w-full max-w-[800px] flex flex-col items-center justify-center my-5 py-14 bg-zinc-800 rounded-lg ring-2 ring-indigo-700'>
        { 
        todos.map((todo)=>(
        <div key={todo.id}
             className='w-full flex justify-between max-w-[700px] rounded-lg bg-gray-500 p-5 m-2 text-gray-200 text-2xl font-bold shadow-lg'>
        <input type="text" value={todo.text} />
        <button onClick={()=>Dispatch(removeTodo(todo.id))}>❌</button>
        </div>))}
     </div>
    </>
  )
}

export default Todos