import React, {useState} from 'react'
import { motion } from 'framer-motion';
import {AiOutlineMenu, AiOutlineHome, AiOutlinePicture, AiOutlineProject, AiOutlineSketch, AiFillAlipayCircle, AiOutlineClose,} from 'react-icons/ai'
import { MdOutlineContactMail, MdOutlineCastForEducation } from "react-icons/md";


const Sidenav = () => {
  
  const [nav, setNav] = useState(false) 
  
  const handleNav = () => {
      setNav(!nav);
  };

  if (nav) 
  { 
    return (
      <div> 
          <AiOutlineClose className='fixed top-4 text-xl font-bold right-4 z-[99] md:hidden text-mellow-white' onClick={handleNav} />
          {
              nav ? (
                  <div className='fixed w-full h-screen bg-navy-blue text-mellow-white font-medium font-serif flex flex-col justify-left items-center z-20'>

                      <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-rose-red shadow-gray-700 m-6 mt-20 p-2 cursor-pointer hover:scale-95 ease-in duration-100'>
                      <AiOutlineHome size={30} className='pr-2'/>Home</a>
                      
                      <a onClick={handleNav} href='#education' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-rose-red shadow-gray-700 m-6 p-2 cursor-pointer hover:scale-95 ease-in duration-100'>
                      <AiOutlineProject size={30} className='pr-2'/>Education</a>
                      
                      <a onClick={handleNav} href='#skills' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-rose-red shadow-gray-700 m-6 p-2 cursor-pointer hover:scale-95 ease-in duration-100'>
                      <MdOutlineCastForEducation size={30} className='pr-2'/>Skills</a>
                      
                      <a onClick={handleNav} href='#my_projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-rose-red shadow-gray-700 m-6 p-2 cursor-pointer hover:scale-95 ease-in duration-100'>
                      <AiOutlinePicture size={30} className='pr-2'/>My Projects</a>

                      <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-rose-red shadow-gray-700 m-6 p-2 cursor-pointer hover:scale-95 ease-in duration-100'>
                        <MdOutlineContactMail size={30} className='pr-2'/>Contact</a>

                  </div>
              )
              :(
                ''
              )
          }

          <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
              <a href="#main" className='rounded-full shadow-lg bg-rose-red m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineHome size={20} />
              </a>
              <a href="#education" className='rounded-full shadow-lg bg-rose-red m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <MdOutlineCastForEducation size={20} />
              </a>
              <a href="#skills" className='rounded-full shadow-lg bg-rose-red m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineSketch size={20} />
              </a>
              <a href="#my_projects" className='rounded-full shadow-lg bg-rose-red m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineProject size={20} />
              </a>
              
              <a href="#contact" className='rounded-full shadow-lg bg-rose-red m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <MdOutlineContactMail size={20} />
              </a>
            </div>
          </div>
      </div>
  )
} 
  else 
  {
    return (
      <div> 
          <AiOutlineMenu className='fixed top-4 text-xl font-bold right-4 z-[99] md:hidden text-mellow-white' onClick={handleNav} />
          {
              nav ? (
                  <div className='fixed w-full h-screen bg-navy-blue text-mellow-white font-medium font-serif flex flex-col justify-left items-center z-20'>

                      <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-rose-red shadow-gray-700 m-6 mt-20 p-2 cursor-pointer hover:scale-95 ease-in duration-100'>
                      <AiOutlineHome size={30} className='pr-2'/>Home</a>
                      
                      <a onClick={handleNav} href='#education' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-rose-red shadow-gray-700 m-6 p-2 cursor-pointer hover:scale-95 ease-in duration-100'>
                      <AiOutlineProject size={30} className='pr-2'/>Education</a>
                      
                      <a onClick={handleNav} href='#skills' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-rose-red shadow-gray-700 m-6 p-2 cursor-pointer hover:scale-95 ease-in duration-100'>
                      <MdOutlineCastForEducation size={30} className='pr-2'/>Skills</a>
                      
                      <a onClick={handleNav} href='#my_projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-rose-red shadow-gray-700 m-6 p-2 cursor-pointer hover:scale-95 ease-in duration-100'>
                      <AiOutlinePicture size={30} className='pr-2'/>My Projects</a>

                      <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-rose-red shadow-gray-700 m-6 p-2 cursor-pointer hover:scale-95 ease-in duration-100'>
                        <MdOutlineContactMail size={30} className='pr-2'/>Contact</a>

                  </div>
              )
              :(
                ''
              )
          }

          <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
              <a href="#main" className='rounded-full shadow-lg bg-rose-red m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineHome size={20} />
              </a>
              <a href="#education" className='rounded-full shadow-lg bg-rose-red m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <MdOutlineCastForEducation size={20} />
              </a>
              <a href="#skills" className='rounded-full shadow-lg bg-rose-red m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineSketch size={20} />
              </a>
              <a href="#my_projects" className='rounded-full shadow-lg bg-rose-red m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineProject size={20} />
              </a>
              
              <a href="#contact" className='rounded-full shadow-lg bg-rose-red m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <MdOutlineContactMail size={20} />
              </a>
            </div>
          </div>
      </div>
  )
}}

export default Sidenav