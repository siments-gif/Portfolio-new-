import React from 'react'
import EducationItems from './EducationItems'

const data = [
    {
        year: '2022',
        title: 'Bachelor in IT & Informationssystems',
        duration: '3 years',
        details: 
        ['Wanted to start a study where i could focus on everything i love. Came up with IT since i have always been a creative person that love see physical changes which made me think of IT studies.',
            ' After starting my bachelor i almost found out instantely that Front-End development was the thing for me.']
    },
    {
        year: '2019',
        title: 'Extension course for general study ',
        duration: '1 year',
        details: 
        ['Since i wanted to start going IT, i needed to get something called general studies because i went vocational subjects in high school.',
            'This was one year study that focuses on things i missed from going vocational subjects.'    
    ]
    },
    {
        year: '2018',
        title: '3. Year of High school - Automation',
        duration: '1 year',
        details: 
        'Continue my Automation study. This year was more heavly focused on prosess industry. After finishing the study i found out that prosess industry was not optimal for me. '
    },
    {
        year: '2017',
        title: '2. Year of High school - Automation',
        duration: '1 year',
        details: 
        'Starting Automation study. After electronics i wanted to work with programming and creation of robots. I always had more fun working with small components and computer driven machines.'
    },
    {
        year: '2016',
        title: '1. Year of High school - Electronics',
        duration: '1 year',
        details: 
        'As a main reason i always loved techonolgy since i was a little kid so this was my focus going forward. Secondary reason was because i was sick of normal school'
    },
    {
        year: '2015',
    }
        
]
const Education = () => {
  return (
    <div id='education' className='h-fit max-w-[1040px] m-auto md:pl-20 md:pr-10 p-4 pt-8 py-12 bg-navy-blue'>
        <h1 className='text-3xl tracking-[10px] uppercase font-bold text-center justify-center text-mellow-white pb-8'>
            Educ<span className='text-rose-red'>ation</span>
        </h1>
        
            <h2 className='text-3xl font-bold text-rose-red pb-2'>{data.map((item, idx)=> (
                <EducationItems 
                    key={idx} 
                    year={item.year}   
                    title={item.title} 
                    duration={item.duration} 
                    details={item.details} />
            ))}
            </h2>
        
    </div>
  )
}

export default Education