import React from 'react'


const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[11rem] leading-none  font-semibold '>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500'>socials</h4>
                    {["Instagram", "twitter (x?)", "LinkedIn"].map((item,index) => <a key={index} className='block mt-3 text-zinc-500 capitalize'>{item}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500'>socials</h4>
                    {["Instagram", "twitter (x?)", "LinkedIn"].map((item,index) => <a key={index} className='block mt-3 text-zinc-500 capitalize'>{item}</a>)}
                </div>
                
                <div className='basis-1/2 flex flex-col items-end '>
                    <p className='text-right'> Refokus is a pioneering digital agency driven by design and empowered by technology</p>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;