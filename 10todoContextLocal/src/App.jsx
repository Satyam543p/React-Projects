import { useEffect, useState } from 'react'
import Todoform from './components/Todoform'
import { TodoProvider } from './context/todocontext'
import TodoElement from './components/TodoElement'

function App() {

  const [todos,setTodos]=useState([])
  const [isTodoLoaded,setIsTodoLoaded]=useState(false)

  const addTodo=(todo)=>{
       setTodos((prev)=>([{id:Date.now(),...todo},...prev]))
  }

  const updateTodo=(id,todo)=>{
       setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo=(id)=>{
        setTodos((prevTodo)=>prevTodo.filter((Todo)=>Todo.id!==id))
  }

  const toggleComplete=(id)=>{
      setTodos((prevTodo)=>
        prevTodo.map((todo)=>
          todo.id==id?{...todo,complete:!todo.complete}:todo))
  }

  useEffect(()=>{
     const saveTodos=JSON.parse(localStorage.getItem("todos"))

     if(saveTodos && saveTodos.length>0){
      setTodos(saveTodos)
     }
     setIsTodoLoaded(true)
  },[])

  useEffect(()=>{
    if(!isTodoLoaded) return
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  
  return (
    <>
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className='w-full h-screen bg-gray-900 flex flex-col items-center p-5 gap-5'>
        <h1 className='text-2xl text-white font-bold'>Todo List </h1>
        <Todoform/>

        <div className='w-full max-w-[700px] flex flex-col items-center justify-center gap-3 bg-gray-800 py-10 px-5 rounded-lg'>
         {todos.map((todo)=>(
          <TodoElement todo={todo} key={todo.id}/>
         ))}
        </div>

      </div>
    </TodoProvider>  
    </>
  )
}

export default App
