import React, { useState } from 'react'

const Contact = () => {

    const [value, setValue] = useState()

  return (
    <div id='contact' className='max-w-[1040px] h-screen m-auto md:pl-20 md:pr-10 py-16 bg-navy-blue'>
        <h1 className='py-4 text-4xl tracking-[10px] uppercase font-bold text-center text-mellow-white'>
            Con<span className='text-rose-red'>tact</span>
        </h1>
        <form action="https://getform.io/f/fa92d753-c9dd-4649-8bc3-096cfeda3896" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-3'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm font-semibold py-2 text-mellow-white'>
                        Name
                    </label>
                    <input className=' text-smoke-dark-gray border-2 rounded-lg p-3 flex border-rose-red hover:border-navy-blue' type="text" name='Name' />
                </div>
                <div className='flex flex-col'>
                <label className='uppercase text-sm py-2 font-semibold text-mellow-white'>
                        Phone Number
                    </label>
                    <input className=' text-smoke-dark-gray border-2 rounded-lg p-3 flex border-rose-red hover:border-navy-blue' type="tele" name='phone'/>
                </div>
                <div className='flex flex-col py-2 md:col-span-2 text-mellow-white'>
                    <label className='uppercase text-sm py-2 font-semibold'>
                        Email
                    </label>
                    <input className='text-smoke-dark-gray border-2 rounded-lg p-3 flex border-rose-red hover:border-navy-blue' type="email" name='Email' />
                </div>
                <div className='flex flex-col py-2 md:col-span-2'>
                    <label className='uppercase text-sm py-2 font-semibold text-mellow-white'>
                        Subject
                    </label>
                    <input className='text-smoke-dark-gray border-2 rounded-lg p-3 flex border-rose-red hover:border-navy-blue' type="text" name='Subject' />
                </div>
                <div className='flex flex-col py-2 md:col-span-2'>
                    <label className='uppercase text-sm py-2 font-semibold text-mellow-white'>
                        Message
                    </label>
                    <textarea  rows={10} name='Message' className='text-smoke-dark-gray border-2 rounded-lg p-3 border-rose-red hover:border-navy-blue md:col-span-2'></textarea>
                </div>
                <button className='bg-rose-red text-smoke-dark-gray w-full p-4 rounded-lg font-bold'>
                    Send Message
                </button>
            </div>
        </form>
    </div>
  )
}

export default Contact