import React from 'react'
import { HERO_CONTENT } from '../constants/data'
import profileImage from '../assets/Sakib.jpg'
import { motion } from "framer-motion"
import { CardBody, CardContainer,CardItem } from './ui/3d-card';
const container = (delay) =>({
    hidden: {x:-100,opacity:0},
    visible: {
        x:0,
        opacity:1,
        transition: {
            duration:0.5 ,delay:delay
        },
    },
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4
     lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                      className='pb-16 text-2xl font-thin tracking-tight
                     lg:mt-16 lg:text-5xl'>Mohammad Abdul Aziz Sakib</motion.h1>
                     <motion.span
                     variants={container(0.5)}
                     initial="hidden"
                     animate="visible"
                      className='bg-gradient-to-r from-pink-500
                     via-slate-500 to-purple-500 bg-clip-text
                      text-3xl tracking-tight text-transparent'>
                        Front-End Developer
                        </motion.span>
                        <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible" 
                        className='my-2 max-w-xl py-6 font-light
                         tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                </div>
            </div>
            <motion.div initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1,delay:1.2}} className='w-full lg:w-1/2 p-8'>
                <div className='flex justify-center'>
                <CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl border  ">
        <CardItem
            translateZ="100"
            >
                    <img
                     src={profileImage} alt="profile image"
                    width={350} height={350} className='object-cover rounded-lg group-hover/card:shadow-xl' />
                              
    </CardItem>
                </CardBody>
              </CardContainer>
                </div>
            </motion.div>
        </div>
     </div>
  )
}

export default Hero
