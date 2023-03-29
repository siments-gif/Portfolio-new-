import React from 'react'
import My_Projects_Items from './My_Projects_Items'
import ProjectImg from '../assets/Project-Management-Post.jpg'
import {motion} from 'framer-motion'

const My_Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 5 }}
      transition={{ duration: 2 }}
        
        id='my_projects' className='max-w-[1024px] h-fit lg:h-fit m-auto p-5 md:pl-20 md:pr-10 py-16 bg-navy-blue'>
        <h1 className='text-4xl tracking-[10px] uppercase font-bold text-center text-mellow-white'>My 
          <span className='text-rose-red'> Projects</span>
        </h1>
        <p className='text-center py-8 text-mellow-white md:text-lg'>
            Under we have a list of projects i'm working on. 
            This is all from back-end projects like stock application too front-end websites like this portfolio
            and one of my personal websites about one of my big interest. None of the projects is completed yet, so it's
            empty for now
        </p>

    <motion.div 
        initial={{
          y: 100,
          opacity: 0,
      }}
      transition={{duration: 1.2}}
      whileInView={{opacity: 1, y:1}}
      viewport={{once: false}}

        className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <My_Projects_Items img={ProjectImg} title='Portfolio' />
            <My_Projects_Items img={ProjectImg} title='Flappy bird' />
            <My_Projects_Items img={ProjectImg} title='Valorant' />
            <My_Projects_Items img={ProjectImg} title='Stock App' />
        </motion.div>
    </motion.div>
  )
}

export default My_Projects