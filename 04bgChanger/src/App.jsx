import { useState } from 'react'

function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
      <div className='w-full flex justify-center  h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap h-20  rounded-full bottom-12 bg-white p-2 m-10 justify-center items-centre shadow-xl'>
          <button onClick={()=>setColor("red")} className="w-20 px-4 py-1  rounded-full text-white shadow-lg mx-5"
          style={{backgroundColor: "red"}}>
            red
          </button>
          <button onClick={()=>setColor("green")} className=" w-20 px-4 py-1  rounded-full text-white shadow-lg mx-5"
          style={{backgroundColor: "green"}}>
            green
          </button>
          <button onClick={()=>setColor("yellow")} className=" w-20 px-4 py-1  rounded-full text-white shadow-lg mx-5"
          style={{backgroundColor: "yellow"}}>
            yellow
          </button>
          <button onClick={()=>setColor("blue")} className="w-20 px-4 py-1  rounded-full text-white shadow-lg mx-5"
          style={{backgroundColor: "blue"}}>
            blue
          </button>
          <button onClick={()=>setColor("Grey")} className="w-20 px-4 py-1  rounded-full text-white shadow-lg mx-5"
          style={{backgroundColor: "Grey"}}>
            Grey
          </button>
          <button onClick={()=>setColor("aqua")} className="w-20 px-4 py-1  rounded-full text-white shadow-lg mx-5"
          style={{backgroundColor: "aqua"}}>
            Aqua
          </button>
        </div>
      </div>
    </>
  )
}

export default App
