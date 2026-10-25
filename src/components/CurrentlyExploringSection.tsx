import React from 'react'
import { Compass, Sparkles, Flame, Rocket, Cpu, Terminal } from 'lucide-react'
import { EXPLORING_TOPICS } from '../data/portfolioData'

const ICONS = [Sparkles, Rocket, Flame, Terminal, Cpu]

export const CurrentlyExploringSection: React.FC = () => {
  return (
    <section id="exploring" className="py-24 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>CONTINUOUS GROWTH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Currently <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Exploring</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Technologies and architectural patterns I am actively studying, prototyping, and integrating into my engineering practice.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full mt-4" />
        </div>

        {/* Exploring Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPLORING_TOPICS.map((topic, idx) => {
            const Icon = ICONS[idx % ICONS.length]
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 relative overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top ambient glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-cyan-500/10 via-fuchsia-500/5 to-transparent rounded-bl-full pointer-events-none blur-xl group-hover:from-cyan-500/20 transition-all" />

                <div>
                  {/* Category and Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">
                      {topic.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full font-mono text-[9px] bg-slate-800/80 text-fuchsia-300 border border-fuchsia-500/30">
                      {topic.status}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-cyan-400 group-hover:bg-cyan-950/60 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {topic.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {topic.description}
                  </p>
                </div>

                {/* Focus Items */}
                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                    Key Topics
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {topic.focusItems.map((item, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-slate-500">
            * Topics represent active learning trajectories, practical experiments, and technical curiosities.
          </p>
        </div>
      </div>
    </section>
  )
}
