import { AmbientBackground } from './components/AmbientBackground'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { EducationSection } from './components/EducationSection'
import { CurrentlyExploringSection } from './components/CurrentlyExploringSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-violet-500/30 selection:text-violet-200">
      {/* Living Ambient Background */}
      <AmbientBackground />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <CurrentlyExploringSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
