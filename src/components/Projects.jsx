import React from 'react'
import { PROJECTS } from '../constants/data'
import {motion} from "framer-motion"
const Projects = () => {
  
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
       className='my-20 text-center text-4xl'>Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-col lg:flex-row lg:justify-center'>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
             className='w-full lg:w-1/4 flex justify-center lg:justify-start'>
              <img
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className='mb-6 rounded'
              />
            </motion.div>
            <div className='w-full max-w-xl lg:w-3/4 lg:ml-4'>
              <motion.h6
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:0.8}}
               className='mb-2 font-semibold'>{project.title}
               {project.liveLink ?
                <a href={project.liveLink} className='ml-5'><span className='border-b text-purple-400'>Live Link</span></a> : <a href={project.source} className='ml-5' ><span className='border-b text-purple-400'>Code Link</span></a>}
                </motion.h6>
              <motion.p
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1.3}}
               className='mb-4 text-neutral-400'>{project.description}</motion.p>
              <div>
                {project.technologies.map((tech, i) => (
                  <motion.span
                  whileInView={{opacity:1,x:0}}
                  initial={{opacity:0,x:100}}
                  transition={{duration:1.8}}
                    key={i}
                    className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
