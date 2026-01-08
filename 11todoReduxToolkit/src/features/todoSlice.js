import { createSlice,nanoid } from "@reduxjs/toolkit";

const savedTodos=localStorage.getItem('todos')!==null?JSON.parse(localStorage.getItem("todos")):[]

const initialState={
    todos:savedTodos
}

export const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
             const todo={
                id:nanoid(),
                text:action.payload
             }
             state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },

        clearAll:(state)=>{
            state.todos=[]
        }
    }
})

export const {addTodo,removeTodo,clearAll}=todoSlice.actions;

export default todoSlice.reducer