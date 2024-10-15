import project1 from "../assets/apple-web pic-1.jpg";
import project2 from "../assets/doctor-appointment-1.jpg";
import project3 from "../assets/travel-1.png";
import project4 from "../assets/digitalecom-3.jpg";

export const HERO_CONTENT = `I am a passionate Front-End developer and Quality Tester 
with a knack for crafting robust and scalable
 web applications.
 I have honed my skills in front-end technologies like
  React and Next.js, as well as Software Quality Assurance skill on manual and automation both.
  My goal is to leverage my expertise to create innovative 
  solutions that drive business growth and deliver exceptional
   user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Front-End developer and Quality Tester with a passion for creating efficient and user-friendly web applications and it's quality testing.  I have worked with a variety of technologies, including React, Next.js, Manual and Automation testing. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career and right now I am also passionate about Qality Testing where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    year: "2019 - Present",
    institute: "American International University Bangladesh",
    department:"Bsc.CSE",
    description: `I am currently pursuing a Bachelor's degree in Computer Science and Engineering. My coursework has provided me with a strong foundation in both theoretical and practical aspects of computing, including programming, algorithms, data structures, and software engineering. I am passionate about problem-solving and continuously strive to enhance my skills through hands-on projects and collaborative learning. My experience in CSE has equipped me with the knowledge and tools necessary to tackle real-world challenges in the tech industry.`,
    technologies: ["Javascript", "React.js", "Next.js","python","C++","Java","SQA],
  }
];

export const PROJECTS = [
  {
    id:1,
    title: "Apple Wed Clone",
    image: project1,
    source:"https://github.com/TushanSakib/Apple-clone",
    description:
      "A clone web for only practice, Frontend design having some awesome animations. ",
    technologies: ["HTML", "CSS", "React", "NEXT.js", "GSAP","Three.js"],
  },
  {
    id:2,
    title: "Doctor Appointment Webapp",
    image: project2,
    source:"https://github.com/TushanSakib/Doctor-Appointment-Nextjs",
    description:
      "A website where,Users can browse through different categories of doctors,Detailed profiles of doctors,after submitting the appointment form, users receive a PDF that includes their appointment list and token for easy reference.",
    technologies: ["HTML", "NEXT.js", "Strapi","Tailwind.css"],
  },
  {
    id:3,
    title: "Travel Website",
    image: project3,
    liveLink:"https://travel-pearl-pi.vercel.app/",
    description:
      "Travel Website show-casing the awesome designs. And its also for practice",
    technologies: ["HTML", "Tailwind.css", "React","NEXT.js"],
  },
  {
    id:4,
    title: "Digital E-com Website",
    image: project4,
    source:"https://github.com/TushanSakib/digital-Ecom-Frontend/tree/main/app",
    description:
      "A fully functional digital e-commerce site,having some features like viewing the products,view the detail of a product,login,registration,and view the cart page,and also payment gate-way system",
    technologies: ["HTML", "Tailwind.css", "React","NEXT.js","Strapi"],
  },
];

export const CONTACT = {
  address: "92-Shanarpar,Demra,Dhaka-1230",
  phoneNo: "+880-1921380201 ",
  email: "azizsakib24@gmail.com",
};
