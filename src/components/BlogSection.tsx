import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -100, rotateY: -15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const visions = [
  {
    title: 'Streamlined Business Solutions',
    description:
      'I envision building a business that delivers innovative solutions to complex business problems, creating streamlined system workflows for industries like supply chain, food chain, and oil chain management. By leveraging advanced IT applications, I aim to optimize business flows, enhance efficiency, and drive sustainable growth.',
  },
  {
    title: 'AI-Driven Operational Excellence',
    description:
      'My goal is to develop scalable, AI-driven platforms that integrate predictive analytics and automation to optimize business operations. These platforms will empower data-driven decision-making, streamline processes, and foster innovation across diverse industries, ensuring adaptability in a dynamic market.',
  },
];

const Approach = () => {
  return (
    <section className="w-full py-20 border-b border-neutral-900 pb-24 relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-sm animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-teal-400/40 rounded-full blur-sm animate-pulse delay-500"></div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent tracking-wide"
      >
        My Vision
      </motion.h1>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {visions.map((vision, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="w-full lg:w-1/2"
          >
            <div className="relative bg-neutral-950 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/70 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500/70 rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500/70 rounded-br-xl"></div>
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                {vision.title}
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {vision.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Glowing accent bar */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      ></motion.div>
    </section>
  );
};

export default Approach;