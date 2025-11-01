import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WalleComponent = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isBlinking, setIsBlinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechTimeoutRef = useRef(null);

  // Define messages and positions for each section
  const sectionConfig = {
    hero: {
      text: "Hi there! I’m Sakib, a passionate learner with an unwavering will to dive deep into the endless possibilities of the tech universe.",
      position: 'left',
      emotion: 'excited'
    },
    vision: {
      text: "With a curious mind and strong will, even the smallest spark of an idea can ignite something extraordinary in the world of technology.",
      position: 'right',
      emotion: 'amazed'
    },
    about: {
      text: "I may have a small pool of knowledge, but an ocean of curiosity — and that’s what drives me to build something big from simple beginnings",
      position: 'left',
      emotion: 'curious'
    },
    experience: {
      text: "Not much experience yet, but a strong will to learn, explore, and create something big keeps me moving forward.",
      position: 'right',
      emotion: 'impressed'
    },
    technologies: {
      text: "I’ve dabbled with these tools and I’m eager to keep exploring, experimenting, and improving every day.",
      position: 'left',
      emotion: 'excited'
    },
    education: {
      text: "Education fuels curiosity; curiosity drives progress",
      position: 'right',
      emotion: 'thoughtful'
    },
    projects: {
      text: "Two projects done, but my journey of learning and growth is just beginning",
      position: 'left',
      emotion: 'excited'
    },
    contact: {
      text: "Let's connect! 📧 Ready to build something great together?",
      position: 'right',
      emotion: 'friendly'
    }
  };

  // Text-to-speech function - Auto speak
  const speak = (text) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.1;
      utterance.pitch = 1.3;
      utterance.volume = 0.9;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      // Auto speak
      window.speechSynthesis.speak(utterance);
    }
  };

  // Scroll detection with voice - Auto speak on section change
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'vision', 'about', 'experience', 'technologies', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (currentSection !== sectionId) {
              setCurrentSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  // Auto-speak when section changes
  useEffect(() => {
    // Clear existing timeout
    if (speechTimeoutRef.current) {
      clearTimeout(speechTimeoutRef.current);
    }
    
    // Delay speech slightly for smooth transition
    speechTimeoutRef.current = setTimeout(() => {
      speak(sectionConfig[currentSection].text);
    }, 500);

    return () => {
      if (speechTimeoutRef.current) {
        clearTimeout(speechTimeoutRef.current);
      }
    };
  }, [currentSection]);

  // Random blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(blinkInterval);
  }, []);

  const config = sectionConfig[currentSection] || sectionConfig.hero;
  const isLeft = config.position === 'left';

  // Calculate position based on section
  const getPosition = () => {
    if (isLeft) {
      return { left: '2rem', right: 'auto' };
    } else {
      return { right: '2rem', left: 'auto' };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        ...getPosition()
      }}
      transition={{ 
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        left: { duration: 0.8, ease: 'easeInOut' },
        right: { duration: 0.8, ease: 'easeInOut' }
      }}
      className="fixed top-1/2 transform -translate-y-1/2 z-50 flex items-center gap-4"
      style={{ flexDirection: isLeft ? 'row' : 'row-reverse' }}
    >
      {/* WALL-E Character - Cute Design */}
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          rotate: config.emotion === 'curious' ? [0, -5, 5, 0] : 0
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="relative cursor-default"
      >
        {/* Main Body Container - Smaller Size */}
        <div className="relative w-24 h-28 scale-90">
          
          {/* HEAD - Cute & Round */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-16 bg-gradient-to-b from-neutral-800/95 via-neutral-850/95 to-neutral-900/95 rounded-2xl border-3 border-cyan-500/40 shadow-2xl relative overflow-hidden">
            
            {/* Head shine effect */}
            <div className="absolute top-1 left-4 right-4 h-2 bg-gradient-to-b from-white/20 to-transparent rounded-full blur-sm"></div>
            
            {/* Eyes - Big and Cute */}
            <div className="flex justify-center gap-3 mt-5">
              {/* Left Eye */}
              <div className="relative">
                <motion.div
                  animate={{ 
                    scaleY: isBlinking ? 0.1 : 1,
                    width: config.emotion === 'amazed' ? '36px' : '28px',
                    height: config.emotion === 'amazed' ? '36px' : '28px'
                  }}
                  transition={{ duration: 0.1 }}
                  className="relative w-7 h-7 bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-500 rounded-full border-2 border-cyan-600/50 shadow-lg"
                >
                  {/* Pupil */}
                  <motion.div 
                    animate={{ 
                      scale: isSpeaking ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.3, repeat: isSpeaking ? Infinity : 0 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-neutral-900 rounded-full"
                  ></motion.div>
                  
                  {/* Shine */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-white rounded-full opacity-90"></div>
                  
                  {/* Glow */}
                  <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-50 -z-10"></div>
                </motion.div>
              </div>
              
              {/* Right Eye */}
              <div className="relative">
                <motion.div
                  animate={{ 
                    scaleY: isBlinking ? 0.1 : 1,
                    width: config.emotion === 'amazed' ? '36px' : '28px',
                    height: config.emotion === 'amazed' ? '36px' : '28px'
                  }}
                  transition={{ duration: 0.1 }}
                  className="relative w-7 h-7 bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-500 rounded-full border-2 border-cyan-600/50 shadow-lg"
                >
                  <motion.div 
                    animate={{ 
                      scale: isSpeaking ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.3, repeat: isSpeaking ? Infinity : 0 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-neutral-900 rounded-full"
                  ></motion.div>
                  
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-white rounded-full opacity-90"></div>
                  <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-50 -z-10"></div>
                </motion.div>
              </div>
            </div>
            
            {/* Cute Antenna */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-1.5 h-4 bg-neutral-700 rounded-full border border-cyan-500/30"></div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/80"
              >
                <div className="absolute inset-1 bg-white rounded-full"></div>
              </motion.div>
            </div>
            
            {/* Cute mouth (when speaking) */}
            <AnimatePresence>
              {isSpeaking && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: [0, 1, 0.5, 1] }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-neutral-800 rounded-full"
                ></motion.div>
              )}
            </AnimatePresence>
            
            {/* Facial Expressions */}
            {!isSpeaking && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
              >
                {/* Happy/Excited - Big smile */}
                {(config.emotion === 'excited' || config.emotion === 'friendly') && (
                  <div className="relative w-8 h-3">
                    <div className="absolute inset-0 border-b-2 border-neutral-300 rounded-b-full"></div>
                  </div>
                )}
                
                {/* Curious - Small smile */}
                {config.emotion === 'curious' && (
                  <div className="relative w-6 h-2">
                    <div className="absolute inset-0 border-b-2 border-neutral-400 rounded-b-lg"></div>
                  </div>
                )}
                
                {/* Amazed - Open mouth */}
                {config.emotion === 'amazed' && (
                  <div className="w-4 h-4 bg-neutral-800 rounded-full border border-neutral-600"></div>
                )}
                
                {/* Impressed - Gentle smile */}
                {config.emotion === 'impressed' && (
                  <div className="relative w-7 h-2.5">
                    <div className="absolute inset-0 border-b-2 border-neutral-300 rounded-b-full"></div>
                  </div>
                )}
                
                {/* Thoughtful - Neutral line */}
                {config.emotion === 'thoughtful' && (
                  <div className="w-6 h-0.5 bg-neutral-400 rounded-full"></div>
                )}
              </motion.div>
            )}
          </div>

          {/* NECK - Small and cute */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-gradient-to-b from-neutral-800 to-neutral-900 border-x-2 border-cyan-500/30 rounded-sm"></div>

          {/* BODY - Cube-like and adorable */}
          <div className="absolute top-19 left-1/2 transform -translate-x-1/2 w-28 h-14 bg-gradient-to-b from-neutral-800/95 via-neutral-900/95 to-black/95 rounded-xl border-3 border-cyan-500/40 shadow-2xl overflow-hidden">
            
            {/* Body panels */}
            <div className="absolute inset-2 border border-cyan-500/20 rounded-lg"></div>
            
            {/* Cute display screen */}
            <motion.div
              animate={{ 
                opacity: isSpeaking ? [0.5, 1, 0.5] : 0.7
              }}
              transition={{ duration: 0.5, repeat: isSpeaking ? Infinity : 0 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-lg border border-cyan-500/40"
            >
              {/* Sound wave when speaking */}
              {isSpeaking && (
                <div className="absolute inset-0 flex items-center justify-center gap-0.5">
                  <motion.div animate={{ height: ['4px', '12px', '4px'] }} transition={{ duration: 0.3, repeat: Infinity }} className="w-1 bg-cyan-400 rounded-full"></motion.div>
                  <motion.div animate={{ height: ['8px', '16px', '8px'] }} transition={{ duration: 0.3, repeat: Infinity, delay: 0.1 }} className="w-1 bg-cyan-400 rounded-full"></motion.div>
                  <motion.div animate={{ height: ['4px', '12px', '4px'] }} transition={{ duration: 0.3, repeat: Infinity, delay: 0.2 }} className="w-1 bg-cyan-400 rounded-full"></motion.div>
                </div>
              )}
            </motion.div>
            
            {/* Corner details */}
            <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-400/50 rounded-tl"></div>
            <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-cyan-400/50 rounded-tr"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-blue-400/50 rounded-bl"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-blue-400/50 rounded-br"></div>
          </div>

          {/* CUTE ARMS */}
          <motion.div
            animate={{ 
              rotate: config.emotion === 'excited' ? [-25, 15, -25] : [-15, 5, -15]
            }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-22 -left-3 w-8 h-2.5 bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-l-full border-2 border-cyan-500/40 shadow-md"
          >
            <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400/60 rounded-full"></div>
          </motion.div>
          
          <motion.div
            animate={{ 
              rotate: config.emotion === 'excited' ? [25, -15, 25] : [15, -5, 15]
            }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-22 -right-3 w-8 h-2.5 bg-gradient-to-l from-neutral-800 to-neutral-900 rounded-r-full border-2 border-cyan-500/40 shadow-md"
          >
            <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400/60 rounded-full"></div>
          </motion.div>

          {/* TRACKS - Cute treads */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg border-2 border-neutral-700 shadow-xl">
            <div className="flex justify-around items-center h-full px-2">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-3 h-3 bg-neutral-700 rounded-full border-2 border-neutral-600"
              ></motion.div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-3 h-3 bg-neutral-700 rounded-full border-2 border-neutral-600"
              ></motion.div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-3 h-3 bg-neutral-700 rounded-full border-2 border-neutral-600"
              ></motion.div>
            </div>
          </div>
        </div>

        {/* Warm glow effect */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-blue-500/10 to-transparent blur-2xl -z-10"
        ></motion.div>
      </motion.div>

      {/* Speech Bubble - Removed, WALL-E speaks only */}
      {/* Visual indicator that WALL-E is speaking */}
      <AnimatePresence>
        {isSpeaking && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: isLeft ? -20 : 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: isLeft ? 20 : -20 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Sound wave indicator */}
            <div className="flex gap-1 items-end">
              <motion.div 
                animate={{ height: ['8px', '20px', '8px'] }} 
                transition={{ duration: 0.4, repeat: Infinity }} 
                className="w-1.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
              ></motion.div>
              <motion.div 
                animate={{ height: ['12px', '24px', '12px'] }} 
                transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }} 
                className="w-1.5 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
              ></motion.div>
              <motion.div 
                animate={{ height: ['8px', '20px', '8px'] }} 
                transition={{ duration: 0.4, repeat: Infinity, delay: 0.2 }} 
                className="w-1.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
              ></motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WalleComponent;