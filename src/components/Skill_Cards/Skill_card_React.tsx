import React from 'react'
import { motion } from 'framer-motion'
import handleNav from '../Sidenav'
import react_logo from '../../assets/Skills_Logo/react-hexagon.png'

const skill = [
    {
      points: [
        "Comfortable with creating components",
        "Familiar with state management using hooks",
        "Familiar with React Router for navigation",
        "Comfortable with component refrencing"
      ],
    },
]

type Props = {}

const Skill_card_React = (props: Props) => {

  return (
    <article className='flex flex-col max-w-[1240px] rounded-lg items-center space-y-7 flex-shrink-0 w-screen
                        snap-start bg-navy-blue p-8 hover:opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden'> 
        <motion.img onClick={handleNav}
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y:1}}
            viewport={{once: false}}
                className='w-32 h-32 mt-16 md:mt-8 lg:mt-10 rounded-full md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] object-cover' 
                src={react_logo} alt="/" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl pb-2 font-light font-serif tracking-wider'>React</h4>
            <p className='font-bold text-2xl lg:text-3xl mt-1 lg:mt-4'>Average advancement</p>


            {skill.map((skill) => (
            
            <ul className='list-disc space-y-5 lg:space-y-10 mt-2 p-5 text-lg lg:text-xl'>
                {skill.points.map((point) => (
                <li key={point}>{point}</li>
                 ))}
            </ul>
        ))}
            
        </div>
    </article>
  )
}

export default Skill_card_React