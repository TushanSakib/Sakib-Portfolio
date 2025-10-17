import React from 'react';
import { CONTACT } from '../constants/data';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
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

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-sm animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-teal-400/40 rounded-full blur-sm animate-pulse delay-500"></div>

      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent tracking-wide"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Contact Details Card */}
        <motion.div variants={cardVariants} className="w-full lg:w-1/2">
          <div className="relative bg-neutral-950 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-xl"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/70 rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500/70 rounded-bl-xl"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500/70 rounded-br-xl"></div>
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400 text-lg" />
                <div>
                  <p className="text-sm text-neutral-400">Address</p>
                  <p className="text-base text-neutral-300">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-cyan-400 text-lg" />
                <div>
                  <p className="text-sm text-neutral-400">Phone</p>
                  <a href={`tel:${CONTACT.phoneNo}`} className="text-base text-neutral-300 hover:text-cyan-300 transition-colors duration-300">
                    {CONTACT.phoneNo}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400 text-lg" />
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <a href={`mailto:${CONTACT.email}`} className="text-base text-neutral-300 hover:text-cyan-300 transition-colors duration-300">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              {/* Uncomment and update with your social media links */}
              <div className="flex items-center gap-3">
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/abdul-aziz-sakib/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a href="https://github.com/TushanSakib" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    <FaGithub className="text-lg" />
                  </a>
                  <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    <FaTwitter className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div variants={cardVariants} className="w-full lg:w-1/2">
          <div className="relative bg-neutral-950 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-xl"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/70 rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500/70 rounded-bl-xl"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500/70 rounded-br-xl"></div>
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
              Send a Message
            </h3>
            <form action="#" className="space-y-4">
              <div>
                <label className="text-sm text-neutral-400">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full mt-1 p-2 bg-neutral-900/50 border border-neutral-800/50 rounded-md text-neutral-300 focus:outline-none focus:border-cyan-500/60"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-neutral-400">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full mt-1 p-2 bg-neutral-900/50 border border-neutral-800/50 rounded-md text-neutral-300 focus:outline-none focus:border-cyan-500/60"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-neutral-400">Message</label>
                <textarea
                  name="message"
                  className="w-full mt-1 p-2 bg-neutral-900/50 border border-neutral-800/50 rounded-md text-neutral-300 focus:outline-none focus:border-cyan-500/60 resize-none"
                  rows={4}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full p-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>

      {/* Glowing accent bar */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      ></motion.div>
    </div>
  );
};

export default Contact;