import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.667%] px-4 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] flex justify-between items-center bg-zinc-900'>
       <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    
    </div>
  )
}

export default Stripe