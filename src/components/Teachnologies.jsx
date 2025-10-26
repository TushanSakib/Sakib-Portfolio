import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCodeBranch,
  FaServer,
  FaDesktop,
  FaLeaf,
  FaHtml5,
  FaPython,
} from "react-icons/fa";
import { SiPlaywright, SiSelenium } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMysql } from "react-icons/di";

const TechTree = () => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 800, height: 700 });

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize({ 
        width: Math.max(800, rect.width), 
        height: 700 
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const centerX = containerSize.width / 2;
  const trunkY = 450;

  const treeData = {
    trunk: "My Tech Stack",
    branches: [
      {
        id: "frontend",
        name: "Frontend",
        position: { x: centerX - 280, y: 260 },
        icon: <FaDesktop className="text-lg" />,
        color: "cyan",
        children: [
          { id: "react", name: "React", level: "Advanced", position: { x: -90, y: -110 } },
          { id: "nextjs", name: "Next.js", level: "Advanced", position: { x: 0, y: -130 } },
          { id: "javascript", name: "JavaScript", level: "Expert", position: { x: 90, y: -110 } },
        ],
      },
      {
        id: "backend",
        name: "Backend",
        position: { x: centerX, y: 200 },
        icon: <FaServer className="text-lg" />,
        color: "blue",
        children: [
          { id: "python", name: "Python", level: "Advanced", position: { x: -80, y: -110 } },
          { id: "mysql", name: "MySQL", level: "Intermediate", position: { x: 80, y: -110 } },
        ],
      },
      {
        id: "testing",
        name: "Testing",
        position: { x: centerX + 280, y: 260 },
        icon: <FaCodeBranch className="text-lg" />,
        color: "teal",
        children: [
          { id: "playwright", name: "Playwright", level: "Advanced", position: { x: -60, y: -110 } },
          { id: "selenium", name: "Selenium", level: "Intermediate", position: { x: 60, y: -110 } },
        ],
      },
    ],
  };

  const colorClasses = {
    cyan: {
      bg: "bg-cyan-500/20",
      border: "border-cyan-400",
      text: "text-cyan-400",
      shadow: "shadow-cyan-500/20",
      gradientFrom: "#22d3ee",
      gradientTo: "#06b6d4",
    },
    blue: {
      bg: "bg-blue-500/20",
      border: "border-blue-400",
      text: "text-blue-400",
      shadow: "shadow-blue-500/20",
      gradientFrom: "#3b82f6",
      gradientTo: "#2563eb",
    },
    teal: {
      bg: "bg-teal-500/20",
      border: "border-teal-400",
      text: "text-teal-400",
      shadow: "shadow-teal-500/20",
      gradientFrom: "#0d9488",
      gradientTo: "#14b8a6",
    },
  };

  const BRANCH_NODE_SIZE = 80;
  const LEAF_W = 112;
  const LEAF_H = 60;

  return (
    <div className="mt-16">
      {/* <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent"
      >
        Technology Tree
      </motion.h3> */}

      <div 
        ref={containerRef}
        className="relative mx-auto" 
        style={{ width: '100%', maxWidth: '1200px', height: '700px' }}
      >
        {/* Trunk */}
        <div
          style={{
            position: "absolute",
            left: `${centerX - 6}px`,
            top: `${trunkY - 100}px`,
            width: "12px",
            height: "100px",
          }}
        >
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.9 }}
            className="w-full h-full bg-gradient-to-t from-cyan-700 to-cyan-500 rounded-lg"
            style={{ transformOrigin: "bottom" }}
          />
        </div>

        {/* Trunk Node */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "absolute",
            left: `${centerX - 48}px`,
            top: `${trunkY - 48}px`,
            width: 96,
            height: 96,
            zIndex: 40,
          }}
          className="bg-gradient-to-br from-cyan-600 to-blue-500 border-2 border-cyan-300 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30"
        >
          <span className="text-white font-bold text-sm text-center px-2">
            {treeData.trunk}
          </span>
        </motion.div>

        {/* SVG for connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="gradFront" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colorClasses.cyan.gradientFrom} />
              <stop offset="100%" stopColor={colorClasses.cyan.gradientTo} />
            </linearGradient>
            <linearGradient id="gradBack" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colorClasses.blue.gradientFrom} />
              <stop offset="100%" stopColor={colorClasses.blue.gradientTo} />
            </linearGradient>
            <linearGradient id="gradTest" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colorClasses.teal.gradientFrom} />
              <stop offset="100%" stopColor={colorClasses.teal.gradientTo} />
            </linearGradient>
          </defs>

          {/* Main branch connections from trunk to branch nodes */}
          {treeData.branches.map((branch) => {
            const sx = centerX;
            const sy = trunkY - 48;
            const ex = branch.position.x;
            const ey = branch.position.y;
            const cx = (sx + ex) / 2;
            const cy = sy - Math.abs(ex - sx) * 0.3;
            
            const grad =
              branch.id === "frontend" ? "url(#gradFront)" :
              branch.id === "backend" ? "url(#gradBack)" :
              "url(#gradTest)";

            return (
              <motion.path
                key={branch.id}
                d={`M ${sx} ${sy} Q ${cx} ${cy} ${ex} ${ey}`}
                stroke={grad}
                strokeWidth={4}
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            );
          })}

          {/* Child connections from branch nodes to leaf nodes */}
          {treeData.branches.flatMap((branch) => {
            return branch.children.map((child) => {
              const sx = branch.position.x;
              const sy = branch.position.y;
              const ex = branch.position.x + child.position.x;
              const ey = branch.position.y + child.position.y;
              const cx = (sx + ex) / 2;
              const cy = sy + child.position.y * 0.4;
              
              const grad =
                branch.id === "frontend" ? "url(#gradFront)" :
                branch.id === "backend" ? "url(#gradBack)" :
                "url(#gradTest)";

              return (
                <motion.path
                  key={`${branch.id}-${child.id}`}
                  d={`M ${sx} ${sy} Q ${cx} ${cy} ${ex} ${ey}`}
                  stroke={grad}
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              );
            });
          })}
        </svg>

        {/* Branch Nodes */}
        {treeData.branches.map((branch) => {
          const colorClass = colorClasses[branch.color];
          return (
            <motion.div
              key={branch.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                position: "absolute",
                left: branch.position.x - BRANCH_NODE_SIZE / 2,
                top: branch.position.y - BRANCH_NODE_SIZE / 2,
                width: BRANCH_NODE_SIZE,
                height: BRANCH_NODE_SIZE,
                zIndex: 30,
              }}
              className={`rounded-xl flex flex-col items-center justify-center p-2 ${colorClass.bg} border-2 ${colorClass.border} ${colorClass.shadow}`}
            >
              <div className={`${colorClass.text} text-lg mb-1`}>{branch.icon}</div>
              <span className="text-white text-xs font-semibold text-center">
                {branch.name}
              </span>
            </motion.div>
          );
        })}

        {/* Leaf Nodes (children) */}
        {treeData.branches.flatMap((branch) =>
          branch.children.map((child) => {
            const colorClass = colorClasses[branch.color];
            const leafX = branch.position.x + child.position.x;
            const leafY = branch.position.y + child.position.y;
            
            return (
              <motion.div
                key={child.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                style={{
                  position: "absolute",
                  left: leafX - LEAF_W / 2,
                  top: leafY - LEAF_H / 2,
                  width: LEAF_W,
                  height: LEAF_H,
                  zIndex: 35,
                }}
                className={`rounded-2xl p-3 ${colorClass.bg} border ${colorClass.border} ${colorClass.shadow} backdrop-blur-sm`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-white text-sm font-medium">{child.name}</span>
                  <FaLeaf className={`${colorClass.text} text-xs mt-0.5`} />
                </div>
                <div className="mt-2">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      child.level === "Expert"
                        ? "bg-green-500/20 text-green-300"
                        : child.level === "Advanced"
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-yellow-500/20 text-yellow-300"
                    }`}
                  >
                    {child.level}
                  </span>
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center space-x-6 mt-8 text-sm"
      >
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500/20 border border-green-400 rounded"></div>
          <span className="text-neutral-400">Expert</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500/20 border border-blue-400 rounded"></div>
          <span className="text-neutral-400">Advanced</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-500/20 border border-yellow-400 rounded"></div>
          <span className="text-neutral-400">Intermediate</span>
        </div>
      </motion.div> */}
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Technologies = () => {
  const technologies = [
    {
      name: 'Python',
      icon: <FaPython className="text-5xl text-blue-400" aria-label="Python icon" />,
      description: 'Utilized for scripting and automation, including testing with Playwright.',
    },
    {
      name: 'Playwright',
      icon: <SiPlaywright className="text-5xl text-lime-300" aria-label="Playwright icon" />,
      description: 'Automated end-to-end testing for web applications, ensuring cross-browser compatibility.',
    },
    {
      name: 'React',
      icon: <RiReactjsLine className="text-5xl text-cyan-400" aria-label="React icon" />,
      description: 'Built dynamic, responsive UI components for web applications, enhancing user experiences.',
    },
    {
      name: 'Next.js',
      icon: <TbBrandNextjs className="text-5xl text-white" aria-label="Next.js icon" />,
      description: 'Developed server-rendered, SEO-friendly web applications with optimized performance.',
    },
    {
      name: 'Selenium',
      icon: <SiSelenium className="text-5xl text-lime-300" aria-label="Selenium icon" />,
      description: 'Automated web testing to ensure functionality and reliability across applications.',
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 className="text-5xl text-orange-500" aria-label="HTML5 icon" />,
      description: 'Structured semantic, accessible web content for robust front-end development.',
    },
    {
      name: 'JavaScript',
      icon: <IoLogoJavascript className="text-5xl text-yellow-500" aria-label="JavaScript icon" />,
      description: 'Implemented interactive features and logic for dynamic web applications.',
    },
    {
      name: 'MySQL',
      icon: <DiMysql className="text-5xl text-cyan-400" aria-label="MySQL icon" />,
      description: 'Managed relational databases for efficient data storage and retrieval.',
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-24 relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-sm animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-teal-400/40 rounded-full blur-sm animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="my-20 text-center text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent tracking-wide"
        >
          Technologies
        </motion.h2>

        <TechTree />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          role="list"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="w-full max-w-xs group"
              role="listitem"
            >
              <div className="relative bg-neutral-950 border border-neutral-800/50 rounded-xl p-4 backdrop-blur-sm flex flex-col items-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20 group-hover:scale-[1.02]">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/70 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500/70 rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500/70 rounded-br-xl"></div>
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

                {tech.icon}
                <h3 className="mt-4 text-lg font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
                  {tech.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-400 text-center leading-relaxed">
                  {tech.description}
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
          className="mt-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        ></motion.div>
      </div>
    </div>
  );
};

export default Technologies;