import React, { useId } from 'react'
import { forwardRef } from 'react';

function Select({
    label,
    option,
    className,
    ...prop
},ref) {

    const id=useId();
  return (
    <div className='px-4 py-6 w-full'>
        {label&&(
            <label className='inline-block mb-4 ' htmlFor={id}>
                {label}
            </label>
        )}

        <select 
                id={id} 
               className='px-2 py-1 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full '
               ref={ref}
               {...prop}>
            {option?.map((option)=>(
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default forwardRef(Select)