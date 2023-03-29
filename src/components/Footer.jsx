import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-smoke-dark-gray text-center'>
            
        <div className='grid grid-cols-1  gap-5 pt-8 text-mellow-white pb-8'>
            <span>© 2023 Appy. All rights reserved</span>
            <span><a href='#main' className='px-2 pl-3'>Terms</a> · <a href='#main' className='pl-2'>Privacy Policy</a></span>
        </div>
        <button className='text-mellow-white border w-full p-4 font-bold rounded-lg'>
                <a href="#main">Back to top</a>
            </button>
    </footer>
  )
}

export default Footer