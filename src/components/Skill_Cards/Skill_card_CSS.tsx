import React from 'react'
import { motion } from 'framer-motion'
import handleNav from '../Sidenav'
import CSS_logo from '../../assets/Skills_Logo/CSS_icon.png'

const skill = [
    {
        points: [
          "Experienced in writing semantic HTML",
          "Experienced in building responsive layouts",
          "Familiar with HTML5 APIs",
          "Making structures that makes everybody more comfortable"
        ],
    }
]
type Props = {}

const Skill_card_CSS = (props: Props) => {
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
                src={CSS_logo} alt="/" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light font-serif tracking-wider'>CSS</h4>
            <p className='font-bold text-2xl lg:text-3xl mt-1 lg:mt-4'>Intermidate advancement</p>

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

export default Skill_card_CSS