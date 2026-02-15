
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Experience from './components/Experience';
import Education from './components/Education';
import Achivement from './components/Achivement';
import Mail from './components/Mail';
import Sidebar from './components/Sidebar';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <>
      <Sidebar />
      <div className="bg-transparent text-[var(--text-100)] flex justify-center items-start min-h-screen w-screen">
        <div className="flex flex-col justify-between items-stretch w-full max-w-[700px] mx-auto px-6 py-8 gap-2">

          <AnimatedSection id="header" variant="fade">
            <Header />
          </AnimatedSection>

          <AnimatedSection id="about" variant="fadeUp" delay={0.1}>
            <About />
          </AnimatedSection>

          <AnimatedSection id="experience" variant="fadeUp" delay={0.1}>
            <Experience />
          </AnimatedSection>

          <AnimatedSection id="skills" variant="fadeUp" delay={0.1}>
            <Skill />
          </AnimatedSection>

          <AnimatedSection id="projects" variant="fadeUp" delay={0.1}>
            <Project />
          </AnimatedSection>

          <AnimatedSection id="achievements" variant="fadeUp" delay={0.1}>
            <Achivement />
          </AnimatedSection>

          <AnimatedSection id="contact" variant="fadeUp" delay={0.1}>
            <Mail />
          </AnimatedSection>

          <AnimatedSection id="education" variant="fadeUp" delay={0.1}>
            <Education />
          </AnimatedSection>

          {/* Footer */}
          <div className="text-center py-6 mt-4 border-t border-[rgba(175,255,255,0.08)]">
            <p className="text-sm text-[var(--text-200)] opacity-50">
              © 2025 Aryan Kesharwani. Crafted with ❤️
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
