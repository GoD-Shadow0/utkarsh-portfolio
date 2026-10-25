import React from 'react'
import {
  ArrowDown,
  Mail,
  FileText,
  Layers,
  Cloud,
  Brain,
  Code2
} from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Availability & Badge pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-violet-500/30 text-xs text-slate-300 mb-8 backdrop-blur-md shadow-lg shadow-violet-950/30 animate-float-slow">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-cyan-300 font-semibold">{PERSONAL_INFO.availability}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">SRM IST Chennai</span>
          </div>

          {/* Full Name with Shimmer & Ambient Glow */}
          <div className="relative mb-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
              <span className="shimmer-text">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
            </h1>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600/20 via-cyan-500/10 to-fuchsia-500/20 blur-2xl -z-10 opacity-70" />
          </div>

          {/* Profession Subtitle Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-slate-300 max-w-2xl mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/60 text-violet-300">
              <Code2 className="w-3.5 h-3.5 text-violet-400" />
              Full Stack Developer
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/60 text-cyan-300">
              <Cloud className="w-3.5 h-3.5 text-cyan-400" />
              Cloud & DevOps Enthusiast
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/60 text-fuchsia-300">
              <Brain className="w-3.5 h-3.5 text-fuchsia-400" />
              AI/ML Explorer
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-100 max-w-3xl mb-5 leading-snug">
            "{PERSONAL_INFO.tagline}"
          </h2>

          {/* Supporting Bio Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed font-normal">
            I build modern web applications, explore cloud-native infrastructure, and experiment with AI-driven solutions to solve real-world problems.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-sm shadow-xl shadow-violet-950/60 hover:shadow-violet-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Explore My Work</span>
              <Layers className="w-4 h-4 text-violet-200 transition-transform group-hover:translate-x-0.5" />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 text-slate-200 border border-slate-700/80 font-medium text-sm hover:border-violet-500/50 hover:text-white hover:bg-slate-800/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Get In Touch</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/40 text-slate-300 border border-slate-800/80 font-medium text-sm hover:border-slate-700 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-violet-400" />
              <span>View Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 text-slate-400 mb-14">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-violet-500/50 hover:bg-slate-800 transition-all duration-200 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-fuchsia-400 hover:border-fuchsia-500/50 hover:bg-slate-800 transition-all duration-200 hover:scale-110"
              aria-label="Send Direct Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Stats Bar */}
          <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center border border-slate-800/80"
              >
                <span className="font-mono font-bold text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-300 to-indigo-200">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-14 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">Scroll Down</span>
            <a href="#about" aria-label="Scroll to About section" className="animate-bounce p-1 text-slate-400 hover:text-cyan-400">
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
