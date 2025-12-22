import React from 'react'

function About() {
  return (
    <div><div className='w-full py-16 bg-white flex flex-col items-center justify-center'>
        
        {/* Title Section */}
        <h1 className='text-3xl text-orange-700 font-extrabold mb-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]'>
            About Me
        </h1>

        {/* Content Box */}
        <div className='w-3/4 md:w-1/2 bg-gray-50 rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col gap-4'>
            <p className='text-lg text-gray-700 leading-relaxed'>
                Hello! I am <span className='font-bold text-orange-600'>Satyam</span>, Engineering student passionately building my way through the world of web development. 
                I believe in writing clean, efficient code and solving real-world problems
            </p>
            
            <p className='text-lg text-gray-700 leading-relaxed'>
               I build websites with <span className='font-bold text-fuchsia-600'>React</span>.This project helps me master Routing and Tailwind CSS.
               </p>

            <p className='text-lg text-gray-700 leading-relaxed'>
                My goal is to build applications that are not just functional, but beautiful and user-friendly.
            </p>
        </div>
    </div>
    </div>
  )
}

export default About