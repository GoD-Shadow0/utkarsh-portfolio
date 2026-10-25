import React, { useState, useMemo } from 'react'
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Brain,
  Wrench,
  Search,
  Sparkles,
  Filter
} from 'lucide-react'
import { SKILL_CATEGORIES } from '../data/portfolioData'

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  languages: <Code2 className="w-4 h-4" />,
  frontend: <Layout className="w-4 h-4" />,
  backend: <Server className="w-4 h-4" />,
  databases: <Database className="w-4 h-4" />,
  'cloud-devops': <Cloud className="w-4 h-4" />,
  'ai-ml': <Brain className="w-4 h-4" />,
  tools: <Wrench className="w-4 h-4" />
}

const ACCENT_STYLES: Record<string, { badge: string; border: string; glow: string; text: string }> = {
  violet: {
    badge: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
    border: 'hover:border-violet-500/40',
    glow: 'from-violet-500/10',
    text: 'text-violet-400'
  },
  cyan: {
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    border: 'hover:border-cyan-500/40',
    glow: 'from-cyan-500/10',
    text: 'text-cyan-400'
  },
  magenta: {
    badge: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30',
    border: 'hover:border-fuchsia-500/40',
    glow: 'from-fuchsia-500/10',
    text: 'text-fuchsia-400'
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    border: 'hover:border-emerald-500/40',
    glow: 'from-emerald-500/10',
    text: 'text-emerald-400'
  },
  blue: {
    badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    border: 'hover:border-blue-500/40',
    glow: 'from-blue-500/10',
    text: 'text-blue-400'
  },
  amber: {
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    border: 'hover:border-amber-500/40',
    glow: 'from-amber-500/10',
    text: 'text-amber-400'
  },
  indigo: {
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    border: 'hover:border-indigo-500/40',
    glow: 'from-indigo-500/10',
    text: 'text-indigo-400'
  }
}

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((category) => {
      // Filter by category tab
      if (selectedCategory !== 'all' && category.id !== selectedCategory) {
        return null
      }

      // Filter by search query
      if (!searchQuery.trim()) {
        return category
      }

      const query = searchQuery.toLowerCase()
      const matchingSkills = category.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          (s.tag && s.tag.toLowerCase().includes(query)) ||
          category.name.toLowerCase().includes(query)
      )

      if (matchingSkills.length === 0) return null

      return {
        ...category,
        skills: matchingSkills
      }
    }).filter(Boolean) as typeof SKILL_CATEGORIES
  }, [selectedCategory, searchQuery])

  return (
    <section id="skills" className="py-24 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Structured into clear disciplines with transparent proficiency levels.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Search Bar & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl backdrop-blur-md w-full md:w-auto">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-violet-600/30 text-cyan-300 border border-violet-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {CATEGORY_ICONS[cat.id]}
                <span className="hidden sm:inline">{cat.name}</span>
                <span className="sm:hidden">{cat.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Docker, React)..."
              className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-9 pr-3.5 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        {filteredCategories.length === 0 ? (
          <div className="glass-card p-12 text-center rounded-2xl border border-slate-800">
            <Filter className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-medium text-sm">No skills found matching "{searchQuery}"</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
              }}
              className="mt-3 text-xs text-cyan-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => {
              const style = ACCENT_STYLES[category.accent] || ACCENT_STYLES.violet
              return (
                <div
                  key={category.id}
                  className={`glass-card p-5 rounded-2xl border border-slate-800/90 ${style.border} relative overflow-hidden flex flex-col justify-between`}
                >
                  {/* Background ambient corner glow */}
                  <div
                    className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${style.glow} to-transparent rounded-bl-full pointer-events-none blur-xl`}
                  />

                  <div>
                    {/* Category Title & Icon */}
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 ${style.text}`}>
                          {CATEGORY_ICONS[category.id] || <Sparkles className="w-4 h-4" />}
                        </div>
                        <h3 className="font-bold text-slate-100 text-sm">{category.name}</h3>
                      </div>
                      <span className="font-mono text-[11px] text-slate-500">
                        {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 mb-4 line-clamp-2">{category.description}</p>

                    {/* Skill Badges List */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className={`group relative px-2.5 py-1.5 rounded-lg border text-xs transition-all duration-200 hover:scale-[1.03] ${style.badge}`}
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="font-medium text-slate-200">{skill.name}</span>
                            {skill.level && (
                              <span
                                className={`text-[10px] font-mono px-1 rounded ${
                                  skill.level === 'Proficient'
                                    ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-500/30'
                                    : skill.level === 'Intermediate'
                                    ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-500/30'
                                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                                }`}
                              >
                                {skill.level}
                              </span>
                            )}
                          </div>
                          {skill.tag && (
                            <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 rounded bg-slate-900 text-[10px] text-slate-300 font-mono whitespace-nowrap border border-slate-700 shadow-lg z-20 pointer-events-none">
                              {skill.tag}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
