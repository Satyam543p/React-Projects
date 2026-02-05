import React, { forwardRef ,useId} from 'react'

const Input=forwardRef(function Input(
   { label='',
    type='text',
    className="",
    ...prop},
    ref

) {

    const id=useId();

  return (
    <div className='w-full'>
        {label&&(
            <label className='text-xl text-gray-900 inline-block mb-1 pl-2'
                    htmlFor={id}>
                {label}
            </label>
        )}
        <input type={type} 
               className='px-5 py-2 text-black outline-none bg-white focus:ring-blue-400 duration-200 border rounded-lg border-gray-200 w-full'
               ref={ref}
               {...prop}
               id={id}
               />
    </div>
  )
})

export default Input