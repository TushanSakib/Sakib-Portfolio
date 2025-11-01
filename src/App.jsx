import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Teachnologies";
import BlogSection from "./components/BlogSection";
import Experience from "./components/Experience";
import WalleComponent from "./components/WallEComponent";

export default function App() {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased
     selection:bg-cyan-300 selection:text-cyan-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen
       bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,
       rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <div id="hero"><Hero /></div>
        <div id="vision"><BlogSection /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="technologies"><Technologies /></div>
        <div id="education"><Education /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </div>
      <WalleComponent/>
    </div>
  );
}