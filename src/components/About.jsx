import React from 'react';
import aboutImg from '../assets/Sakib.jpg';
import { ABOUT_TEXT } from '../constants/data';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-10 text-center text-4xl'>
        About
        <span className='text-neutral-500'> Me</span>
      </h1>

      <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-start'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className='w-full lg:w-1/2 p-8 flex justify-center lg:justify-center'
        >
          <CardContainer className="inter-var">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl border">
              <CardItem translateZ="100">
                <div className='flex items-center justify-center'>
                  <img className='rounded-2xl' src={aboutImg} alt='aboutImg' width={250} height={250} />
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className='w-full lg:w-1/2 flex items-center'
        >
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
