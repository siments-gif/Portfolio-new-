import React from 'react'
import { motion } from 'framer-motion'
import handleNav from '../Sidenav'
import Figma_logo from '../../assets/Skills_Logo/figma_logo.png'

const skill = [
    {
        points: [
          "Creating mobile, tablet and desktop designs",
          "Familiar with using design animations",
          "Using layout grid to it's full potential",
          "Familiar with structuring components for easy access"
        ],
    }
]
type Props = {}

const Skill_card_Figma = (props: Props) => {
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
                className='w-32 h-32 mt-10 md:mt-8 lg:mt-10 md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] object-cover' 
                src={Figma_logo} alt="/" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light font-serif tracking-wider'>Figma</h4>
            <p className='font-bold text-2xl lg:text-3xl mt-1 lg:mt-4'>Beginner advancement</p>

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

export default Skill_card_Figma