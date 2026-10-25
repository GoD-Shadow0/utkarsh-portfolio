import React from 'react'
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolioData'

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400">Credentials</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800/90 relative overflow-hidden group hover:border-emerald-500/40">
            {/* Ambient emerald & cyan glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-500/10 via-cyan-500/5 to-transparent rounded-bl-full pointer-events-none blur-2xl" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 border border-emerald-500/30 text-emerald-400 shadow-inner">
                  <GraduationCap className="w-8 h-8 text-emerald-300" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {PERSONAL_INFO.education.status}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    {PERSONAL_INFO.education.institution}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-cyan-300 mt-1">
                    {PERSONAL_INFO.education.degree}
                  </p>
                </div>
              </div>

              <div className="flex md:flex-col items-start md:items-end gap-2 text-xs font-mono text-slate-400">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  Undergraduate Program
                </span>
              </div>
            </div>

            {/* Coursework & Focus Areas */}
            <div className="pt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Core Computer Science Disciplines Studied</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {PERSONAL_INFO.education.highlights.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-center gap-2.5 text-xs text-slate-300 group-hover:border-slate-700 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
