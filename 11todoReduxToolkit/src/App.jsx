import { useState,useEffect } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useDispatch,useSelector } from 'react-redux'
import { clearAll } from './features/todoSlice'

function App() {
    const dispatch=useDispatch()
    const todos=useSelector(state=>state.todos)

    useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

  return (
    <>
      <div className='w-full min-h-screen bg-gray-400 flex flex-col items-center '>
        <button onClick={()=>dispatch(clearAll())} className="fixed bg-red-600 text-white text-lg top-[71px] right-[350px] px-3 py-2 rounded mt-5 hover:bg-red-700 cursor-pointer">Clear All 🗑️</button>
        <h1 className='text-3xl text-gray-600 mt-4 font-bold '>My Todo </h1>
        <AddTodo/>
        <Todos/>
      </div>
      
    </>
  )
}

export default App
