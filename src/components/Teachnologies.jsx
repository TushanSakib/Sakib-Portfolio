import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb";
import { SiSelenium } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import {motion} from 'framer-motion';
const iconVariants = (duration)=>({
   initial: {y:-10},
   animate:{
      y:[10,-10],
      transition: {
         duration:duration,
         ease:"linear",
         repeat:Infinity,
         repeatType:"reverse",
      },
   },
   
})
const Teachnologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
         className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
         className='flex flex-wrap items-center justify-center
         gap-4'>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <TbBrandNextjs className='text-7xl text-white'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <SiSelenium className='text-7xl text-lime-300'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <FaHtml5 className='text-7xl text-orange-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <IoLogoJavascript className='text-7xl text-yellow-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <FaPython className='text-7xl'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <RiTailwindCssFill className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800
             p-4'>
                <DiMysql className='text-7xl text-cyan-400'/>
            </motion.div>
         </motion.div>
      
    </div>
  )
}

export default Teachnologies
