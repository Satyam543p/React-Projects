import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [setting, setSetting] = useState({
    length: 8, 
    numbers: false,
    characters: false,
    password: "",
  })

  const passwordRef = useRef(null);

  const genratePass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (setting.numbers) str += "1234567890";
    if (setting.characters) str += "!~@#$%^&*()_:;>.<,?/|\{}[]+=";

    
    for (let i = 1; i <= setting.length; i++) {
      
      let char = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(char);
    }

    setSetting((prev) => ({ ...prev, password: pass }))
    
  }, [setting.length, setting.numbers, setting.characters]); 
  

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(setting.password);
  }, [setting.password])

  // Added genratePass to dependencies so it runs when logic updates
  useEffect(() => {
    genratePass()
  }, [setting.length, setting.numbers, setting.characters, genratePass]);

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-orange-300'> 
      {/* Centered everything properly */}
      
      <h1 className='text-3xl font-bold mb-4 text-gray-800'>Password Generator</h1>

      <div className='w-full max-w-md bg-white rounded-lg shadow-md p-4 px-4 text-orange-700'>
        
        {/* Input Box */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={setting.password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyToClipboard} 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={setting.length}
              onChange={(e) => { setSetting((prev) => ({ ...prev, length: Number(e.target.value) })) }} 
              // Added Number() to convert string "8" to number 8
            />
            <label>Length: {setting.length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
                type="checkbox" 
                checked={setting.numbers} 
                onChange={() => { setSetting((prev) => ({ ...prev, numbers: !prev.numbers })) }} 
            />
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
                type="checkbox" 
                checked={setting.characters}
                
                onChange={() => { setSetting((prev) => ({ ...prev, characters: !prev.characters })) }} 
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App