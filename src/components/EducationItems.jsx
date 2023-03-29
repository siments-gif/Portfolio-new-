import React from 'react'
import Education from './Education'

const EducationItems = ({year, title, duration, details}) => {
  return (
    <ol className='flex flex-col'>
        <li className='pl-2 relative border-l border-stone-200'>
            <div className='absolute w-2 h-2 top-2 bg-rose-red rounded-md -nt-1.5 -left-1 border-smoke-dark-gray' />

            <p className='flex flex-wrap gap-4 items-center text-xs md:text-sm'>
                <a className='inline-block px-2 mb-3 py-1 font-semibold text-mellow-white bg-rose-red rounded-md'>{year}</a>
            </p>           
            <p className='flex flex-wrap gap-4 items-center justify-center text-xs md:text-sm'>
                <a className='text-lg font-semibold text-rose-red text-center'>{title}</a>
            </p>
            <p className='pb-2 pt-2 text-sm md:text-base items-center lg:text-lg font-normal leading-none text-rose-red text-center'>{duration}</p>
            <p className='my-2 pb-3 text-base font-normal text-mellow-white text-center'>{details}</p>
        </li>
    </ol>
  )
}

export default EducationItems