import React from 'react'

const My_Projects_Items = ({img, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-navy-blue rounded-xl group hover:bg-gradient-to-r from-navy-blue to-rose-red'>
        <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-mellow-white tracking-wider text-center'>
                {title}
            </h3>
            <p className='pb-4 pt-2 text-mellow-white text-center'>
                React Js
            </p>
            <a href="/">
                <p className='text-center p-3 rounded-lg bg-smoke-dark-gray text-mellow-white font-bold cursor-pointer text-lg'>
                    More info
                </p>
            </a>
        </div>
    </div>
  )
}

export default My_Projects_Items