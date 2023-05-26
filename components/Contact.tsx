import React from 'react'

const Contact = () => {
  return (
    <section 
    id='contact'
    className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4
    items-center justify-center'>
        <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
            04. What's Next?
        </p>
        <h2 className='font-titleFont text-5xl font-semibold'>Get In Touch</h2>
        <p className='max-w-[600px] text-center text-textDark'>
            Although I'm not currently looking for any oppourtunties, my inbox
            is always open. Whether you have a question or just want to say hi, I'll
            try my best to get get back to you!
        </p>
        <a href='mailto:ramangupta1602@gmail.com'>
            <button className="w-40 h-14 text-sm font-titleFont border border-textGreen mt-6
            rounded-md text-textGreen tracking-wider hover:bg-hoverColor duration-300">Say Hello</button>
        </a>
    </section>
  )
}

export default Contact