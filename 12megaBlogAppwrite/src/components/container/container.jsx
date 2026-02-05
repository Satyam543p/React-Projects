import React from 'react'

function container({children}) {
  return (
    <div className='w-full  max-w-7xl px-4 py-2'>
        {children}
    </div>
  )
}

export default container