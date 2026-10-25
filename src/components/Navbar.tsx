import React, { useState, useEffect } from 'react'
import { Menu, X, FileText, ExternalLink, ChevronRight } from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolioData'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Exploring', href: '#exploring' },
  { label: 'Contact', href: '#contact' }
]

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercent = totalScroll / windowHeight
      setScrollProgress(Math.min(100, Math.max(0, scrollPercent * 100)))

      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Detect active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-fuchsia-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-3.5 glass-nav shadow-lg shadow-black/40 backdrop-blur-xl' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-lg p-1"
              aria-label="Utkarsh Raj Home"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 p-[1px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-[#070b19] rounded-[11px] flex items-center justify-center font-mono font-bold text-base tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">
                  UR
                </div>
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-40 blur transition-opacity duration-300 -z-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-100 text-sm tracking-wide group-hover:text-white transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[11px] font-mono text-cyan-400/90 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {PERSONAL_INFO.availability}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-600/20 border border-violet-500/40 -z-10" />
                    )}
                    {item.label}
                  </a>
                )
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-950/50 hover:shadow-violet-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <FileText className="w-3.5 h-3.5 text-violet-200 transition-transform group-hover:-translate-y-0.5" />
                <span>Resume</span>
                <ExternalLink className="w-3 h-3 text-violet-300 opacity-70 group-hover:opacity-100" />
              </a>

              <a
                href="#contact"
                className="px-3.5 py-2 text-xs font-medium rounded-lg text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-900/70 transition-all duration-200"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-violet-600/20 border border-violet-500/40 text-violet-300"
                aria-label="View Resume"
              >
                <FileText className="w-3 h-3" />
                <span>CV</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-b border-violet-500/20 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? 'bg-violet-600/20 text-violet-300 font-semibold border border-violet-500/30'
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                )
              })}

              <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-sm shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume / CV</span>
                  <ExternalLink className="w-3.5 h-3.5 text-violet-200" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
