import React, { useState } from 'react'
import {
  Layers,
  ExternalLink,
  AlertCircle,
  CheckCircle,
  Sparkles,
  Info,
  X,
  Cloud,
  Brain,
  Cpu,
  Building2,
  Box,
  Database
} from 'lucide-react'
import { PROJECTS } from '../data/projects'
import type { Project } from '../data/projects'
import { GithubIcon } from './BrandIcons'

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  cloud: <Cloud className="w-5 h-5 text-cyan-400" />,
  building: <Building2 className="w-5 h-5 text-violet-400" />,
  database: <Database className="w-5 h-5 text-indigo-400" />,
  box: <Box className="w-5 h-5 text-cyan-400" />,
  brain: <Brain className="w-5 h-5 text-fuchsia-400" />,
  cpu: <Cpu className="w-5 h-5 text-emerald-400" />
}

const CATEGORIES = ['All Projects', 'Full Stack', 'Cloud and DevOps', 'AI and Machine Learning', 'IoT'] as const

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Projects')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'All Projects') return true
    return p.category === activeCategory
  })

  return (
    <section id="projects" className="py-24 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-950/60 border border-violet-500/30 text-violet-300 font-mono text-xs mb-3">
            <Layers className="w-3.5 h-3.5 text-violet-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-indigo-300">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Real implementations and prototype systems demonstrating full stack engineering, cloud operations, machine learning, and IoT architectures.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-900/40 border border-violet-400/40 scale-105'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim().length > 0)
            const hasDemo = Boolean(project.liveDemoUrl && project.liveDemoUrl.trim().length > 0)

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="glass-card group rounded-2xl p-6 border border-slate-800/80 hover:border-violet-500/50 flex flex-col justify-between cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 h-full"
              >
                {/* Top ambient glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-violet-500/10 via-cyan-500/5 to-transparent rounded-bl-full pointer-events-none blur-xl group-hover:from-violet-500/20 transition-all" />

                {/* Upper Card Area */}
                <div className="flex-1 flex flex-col">
                  {/* Header: Icon & Category/Status badges */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 shadow-inner shrink-0">
                      {PROJECT_ICONS[project.iconType || 'cloud'] || <Layers className="w-5 h-5 text-violet-400" />}
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-violet-950/70 text-violet-300 border border-violet-500/30 whitespace-nowrap">
                        {project.category}
                      </span>
                      <span
                        className={`font-mono text-[9px] px-2.5 py-0.5 rounded-full border whitespace-nowrap ${
                          project.status === 'Completed'
                            ? 'bg-emerald-950/70 text-emerald-400 border-emerald-500/30'
                            : project.status === 'In Development'
                            ? 'bg-cyan-950/70 text-cyan-300 border-cyan-500/30'
                            : 'bg-amber-950/70 text-amber-300 border-amber-500/30'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2.5 leading-snug">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Display Note / Disclaimers if applicable */}
                  {project.displayNote && (
                    <div className="mb-4 mt-auto p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/90 flex items-start gap-2 text-[11px] text-slate-400">
                      <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{project.displayNote}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Card Area */}
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5 min-h-[3.25rem] content-start">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500 self-center">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Footer Buttons */}
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-violet-300 group-hover:text-cyan-300 flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 rounded py-1 px-1.5"
                    >
                      <span>View Architecture</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {/* GitHub Button */}
                      {hasGithub ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="View GitHub Repository"
                          className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                          }}
                          title="Repository will be linked here once published"
                          className="p-2 rounded-lg bg-slate-900/60 text-slate-600 border border-slate-800/60 cursor-not-allowed opacity-50"
                          aria-label="Repository not yet published"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </button>
                      )}

                      {/* Live Demo Button */}
                      {hasDemo ? (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="Open Live Demo"
                          className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 hover:text-cyan-300 hover:bg-slate-700 border border-slate-700 transition-colors"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                          }}
                          title="Live demo deployment coming soon"
                          className="p-2 rounded-lg bg-slate-900/60 text-slate-600 border border-slate-800/60 cursor-not-allowed opacity-50"
                          aria-label="Live demo not currently available"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Detailed Project Deep-Dive Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div
              className="glass-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-violet-500/30 p-6 sm:p-8 relative shadow-2xl shadow-violet-950/60"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
                aria-label="Close Project Details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-xl bg-violet-600/20 border border-violet-500/30 shrink-0">
                  {PROJECT_ICONS[selectedProject.iconType || 'cloud'] || <Layers className="w-6 h-6 text-violet-400" />}
                </div>
                <div>
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Status & Category */}
              <div className="flex items-center gap-2 my-4">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  Status: <strong className="text-cyan-300">{selectedProject.status}</strong>
                </span>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-violet-950/70 text-violet-300 border border-violet-500/30">
                  {selectedProject.category}
                </span>
              </div>

              {/* Display Note */}
              {selectedProject.displayNote && (
                <div className="p-3 rounded-xl bg-slate-900/90 border border-violet-500/20 flex items-start gap-2.5 text-xs text-slate-300 mb-6">
                  <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-cyan-300 font-medium">Implementation Note: </strong>
                    {selectedProject.displayNote}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="space-y-3 text-slate-300 text-sm leading-relaxed mb-6">
                <p className="font-medium text-slate-200">{selectedProject.description}</p>
                {selectedProject.detailedDescription?.map((detail, idx) => (
                  <p key={idx} className="text-slate-400">
                    {detail}
                  </p>
                ))}
              </div>

              {/* Key Architectural Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span>Key Architectural Highlights</span>
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-violet-950/60 text-violet-200 border border-violet-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-500 font-mono">
                  {selectedProject.githubUrl
                    ? 'Repository link verified and available.'
                    : 'Repository link can be added via src/data/projects.ts.'}
                </div>
                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl ? (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 text-xs font-mono cursor-not-allowed">
                      <GithubIcon className="w-4 h-4 text-slate-600" />
                      <span>Repo Coming Soon</span>
                    </span>
                  )}

                  {selectedProject.liveDemoUrl && (
                    <a
                      href={selectedProject.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
