import React from 'react'
import { IoMdReturnRight } from "react-icons/io";


const Button = ({title = "Get Started"}) => {
  return (
    <div>
        <button className='min-w-40 px-4 py-2 bg-zinc-50 text-black rounded-full flex items-center justify-between'>
            <span className='text-sm font-medium'>{title}</span>
            <IoMdReturnRight />
        </button>
    </div>
  )
}

export default Button