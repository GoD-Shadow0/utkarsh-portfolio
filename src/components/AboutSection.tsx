import React from 'react'
import {
  Code,
  Cloud,
  Brain,
  Compass,
  GraduationCap,
  Sparkles,
  Terminal
} from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolioData'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-950/60 border border-violet-500/30 text-violet-300 font-mono text-xs mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Utkarsh Raj</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Two Column Layout: Bio Story & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Education Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-violet-400" />
                <span>Engineering Mindset & Ambition</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:base leading-relaxed">
                {PERSONAL_INFO.bioParagraphs.map((para, i) => (
                  <p key={i} className="text-slate-300/90">
                    {para}
                  </p>
                ))}
              </div>

              {/* Education Banner */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-violet-600/15 border border-violet-500/30 text-violet-300 shrink-0">
                  <GraduationCap className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100 text-sm">
                    {PERSONAL_INFO.education.institution}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {PERSONAL_INFO.education.degree} • <span className="text-cyan-400 font-mono">{PERSONAL_INFO.education.status}</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Location: {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Core Engineering Pillars</span>
            </h3>

            {/* Pillar 1: Full Stack */}
            <div className="glass-card p-5 sm:p-6 rounded-xl border border-slate-800/80 group hover:border-violet-500/40">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-violet-600/15 border border-violet-500/30 text-violet-300 group-hover:bg-violet-600/25 transition-colors">
                  <Code className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-100 group-hover:text-violet-300 transition-colors">
                    Full Stack Development
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                    Building robust, responsive frontends in React paired with performant RESTful backends in Node.js/NestJS, secure auth pipelines (JWT, bcrypt), and optimized relational databases.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3 font-mono text-[11px] text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">React</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">Node.js</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">NestJS</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Cloud & DevOps */}
            <div className="glass-card p-5 sm:p-6 rounded-xl border border-slate-800/80 group hover:border-cyan-500/40">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-600/15 border border-cyan-500/30 text-cyan-300 group-hover:bg-cyan-600/25 transition-colors">
                  <Cloud className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    Cloud & DevOps Automation
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                    Exploring multi-cloud infrastructure fundamentals across AWS, GCP, and Azure, containerization with Docker & Compose, infrastructure provisioning with Terraform, and Linux administration.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3 font-mono text-[11px] text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">Docker</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">Terraform</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">AWS/GCP/Azure</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">Linux</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: AI & Machine Learning */}
            <div className="glass-card p-5 sm:p-6 rounded-xl border border-slate-800/80 group hover:border-fuchsia-500/40">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-fuchsia-600/15 border border-fuchsia-500/30 text-fuchsia-300 group-hover:bg-fuchsia-600/25 transition-colors">
                  <Brain className="w-6 h-6 text-fuchsia-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-100 group-hover:text-fuchsia-300 transition-colors">
                    AI & Machine Learning
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                    Applying data preprocessing, feature engineering, and predictive algorithms using Python, NumPy, Pandas, and Scikit-learn, with an active focus on Generative AI and intelligent systems.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3 font-mono text-[11px] text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">Python</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">Scikit-learn</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">Pandas</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">Generative AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
