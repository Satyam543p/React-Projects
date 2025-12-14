import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0)

  const addValue=()=>{if (counter<20){
                        setCounter(counter+1)}}
  const removeValue=()=>{if (counter>0){setCounter(counter-1)}}

  return (
    <>
    <h1>COUNTER {counter}</h1>
      <button onClick={addValue}>Add Count  </button>
      <button onClick={removeValue}>Remove Count</button>
    </>
  )
}

export default App

