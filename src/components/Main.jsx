import React from 'react'
import Image from '../assets/world.jpg'
import { TypeAnimation } from 'react-type-animation'
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-middle scale-x-[1] mix-blend-screen' src={Image} alt='/'/>
        <div className='w-full h-screen absolute top-0 left-0 bg-navy-blue/90'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>

            <h1 className='sm:text-5xl text-4xl font-bold text-mellow-white text-center'>
                Simen Tveitane Skogen
            </h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-mellow-white'> 
                I'm an
                <TypeAnimation
                        sequence={[
                            'Aspiring Developer', // Types ''
                            1000, // Waits 1s
                            'Aspiring Designer', // Deletes past and types ''
                            1000, // Waits 1s
                            'Aspiring Programmer', // Deletes past and types ''
                            1000, // Waits 1s
                            'Aspiring Coder', // Deletes past and types ''
                            1000, // Waits 1s
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />
             </h2>

             <div className='flex justify-between pt-8 max-w-[200px] w-full text-mellow-white'>
                <a href="https://www.facebook.com/simen.skogen.1" 
                target="_blank"
                rel="noreferrer">
                    <FaFacebookF classname='cursor-pointer' size={25} />
                </a>
                
                <a className='' href='https://www.instagram.com/siment4' 
                target="_blank"
                rel="noreferrer">
                    <FaInstagram classname='cursor-pointer' size={25} />
                </a>
                
                <a href="https://www.linkedin.com/in/simen-tveitane-skogen-9373aa233"
                target="_blank"
                rel="noreferrer">
                    <FaLinkedinIn classname='cursor-pointer items-center' size={25} />
                </a>
             </div>
        </div>
        </div>
    </div>
  )
}

export default Main