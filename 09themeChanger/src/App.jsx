import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/themeContext'
import Themebtn from './components/Themebtn'
import Card from './components/Card'

function App() {
  const [themeMode,setThemeMode] = useState("light");

  const darkMode=()=>(
    setThemeMode("dark")
  );

  const lightMode=()=>(
    setThemeMode("light")
  );

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <>
    <ThemeProvider value={{themeMode,darkMode,lightMode}}>
      <div className={` w-full h-screen bg-white flex flex-col gap-5 justify-center items-center dark:bg-black dark:text-gray-200 `}>
        <h1 className='text-3xl font-extrabold'>ThemeChanger</h1>
        <div className='w-full max-w-sm flex flex-col bg-gray-100  justify-center items-center p-3 rounded-lg shadow-lg shadow-gray-700 dark:bg-gray-900 text-gray-100 dark:shadow-sm dark:shadow-white '>
        <Themebtn/>
        <Card/>  
        </div>     
      </div>
    </ThemeProvider>  
    </>
  )
}

export default App
