import React from 'react'

function Button({
    children,
    type="button",
    bgColor="bg-blue-600",
    textCol="text-white",
    className="",
    ...prop

}) {
  return (
    <button className={`${bgColor} ${textCol} ${className} hover:${bgColor}/30 rounded-lg`} type={type} {...prop}>
        {children}
    </button>
  )
}

export default Button