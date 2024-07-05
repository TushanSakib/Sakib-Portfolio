import React from 'react'
import { EDUCATION } from '../constants/data'
import {motion} from "framer-motion"
const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
         className='my-20 text-center text-4xl'>Education</motion.h2>
        <div className=''>
            {EDUCATION.map((edu,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1.5}}
                     className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400'>{edu.year}</p>
                    </motion.div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                    <motion.h6
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1.5}}
                     className='mb-2 font-semibold'>
                        {edu.institute} - <span className='text-sm 
                        text-purple-300'> 
                        {edu.department}</span>
                    </motion.h6>
                    <motion.p
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:2.5}}
                     className='mb-4 text0-neutral-400'> {edu.description} </motion.p>
                    {edu.technologies.map((tec,i)=>(
                        <motion.span
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:3.5}}
                         key={i} className='mr-2 mt-4 rounded
                         bg-neutral-900 px-2 py-1 text-sm 
                         font-medium text-purple-800'> {tec}</motion.span>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Education
