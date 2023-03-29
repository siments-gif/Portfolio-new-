import React from 'react'
import JSLogo from '../../assets/Skills_Logo/JavaScript-logo.png'
import {motion} from 'framer-motion'
import handleNav from '../Sidenav'

const skill = [
    {
        points: [
            "Proficient in modern JavaScript (ES6+)",
            "Experienced with creating functions",
            "Familiar with JavaScript frameworks and libraries such as React",
            "Familar with different methods like array.map etc",
    ],
    }
]


type Props = {}

export default function Skill_card_JS({}: Props) {
  return (
    <article className='flex flex-col mt-3 md:-mt-5 max-w-[1240px] rounded-lg items-center space-y-6 flex-shrink-0 w-screen
                        snap-start bg-navy-blue p-8 hover:opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden'> 
        <motion.img onClick={handleNav}
            initial={{
                y: -100,
                opacity: 1,
            }}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y:1}}
            viewport={{once: false}}
                className='w-32 h-32 mt-16 md:mt-8 lg:mt-10 rounded-full md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] object-cover' 
                src={JSLogo} alt="/" />
                

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light font-serif tracking-wider'>JavaScript</h4>
            <p className='font-bold text-2xl lg:text-3xl mt-1 lg:mt-4'>Average advancement</p>

            {skill.map((skill) => (
            
            <ul className='list-disc w-fixed space-y-5 lg:space-y-10 mt-2 p-5 text-lg lg:text-xl'>
                {skill.points.map((point) => (
                <li key={point}>{point}</li>
                 ))}
            </ul>
        ))}
            
        </div>
    </article>
  )
}