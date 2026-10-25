import React, { useState } from 'react'
import {
  Copy,
  Check,
  Send,
  Sparkles,
  MessageSquare,
  ExternalLink
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { PERSONAL_INFO } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.'
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#8b5cf6', '#06b6d4', '#ec4899']
      })
    } catch {
      // ignore
    }

    // Construct mailto link
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`)
    const mailtoBody = encodeURIComponent(
      `Hello Utkarsh,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    )
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`

    // Trigger email client dispatch
    setTimeout(() => {
      window.location.href = mailtoUrl
      setIsSubmitting(false)
      setSubmitSuccess(true)
    }, 400)
  }

  return (
    <section id="contact" className="py-24 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-950/60 border border-violet-500/30 text-violet-300 font-mono text-xs mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
            Have an Interesting Idea?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-fuchsia-400">
              Let's Build It.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-4">
            Whether you are looking to hire a full stack engineer, explore collaboration on cloud/AI projects, or just want to chat tech, my inbox is always open.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-fuchsia-500 rounded-full mt-5" />
        </div>

        {/* Ambient Glowing Contact Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-violet-500/30 relative overflow-hidden shadow-2xl shadow-violet-950/40">
          {/* Radial ambient background light */}
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Direct Links & Fast Copy */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">
                  Get in Direct Touch
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Based in Chennai, India. Open to full-time roles, internships, and engineering discussions.
                </p>

                {/* Email Copy Card */}
                <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col gap-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Direct Email Address
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs sm:text-sm text-cyan-300 truncate">
                      {PERSONAL_INFO.email}
                    </span>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 flex items-center gap-1.5 shrink-0 transition-colors"
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="mt-6 space-y-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-600/15 text-cyan-400">
                        <LinkedinIcon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-semibold">LinkedIn Profile</div>
                        <div className="text-[11px] font-mono text-slate-500">Connect professionally</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-violet-500/40 flex items-center justify-between text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-violet-600/15 text-violet-400">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-semibold">GitHub Profile</div>
                        <div className="text-[11px] font-mono text-slate-500">Review open source code</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span>
                  Responses typically sent within 24 hours. Looking forward to discussing projects, cloud solutions, and opportunities.
                </span>
              </div>
            </div>

            {/* Right Column: Contact Message Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-base font-bold text-slate-100 mb-1 flex items-center gap-2">
                  <span>Send a Direct Message</span>
                  <span className="text-[11px] font-mono text-slate-500 font-normal">(Dispatches to Mail Client)</span>
                </h4>
                <p className="text-xs text-slate-400 mb-6">
                  Fill out the form below to initiate an email directly with pre-composed fields.
                </p>

                {submitSuccess && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-emerald-300 font-semibold mb-1">
                        Dispatching to your email client!
                      </strong>
                      If your default mail application didn't open automatically, you can also send directly to{' '}
                      <span className="font-mono text-cyan-300">{PERSONAL_INFO.email}</span>.
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5" htmlFor="contact-name">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value })
                          if (errors.name) setErrors({ ...errors, name: '' })
                        }}
                        placeholder="Utkarsh Raj"
                        className={`w-full bg-slate-950/80 border ${
                          errors.name ? 'border-red-500/70' : 'border-slate-800'
                        } rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5" htmlFor="contact-email">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value })
                          if (errors.email) setErrors({ ...errors, email: '' })
                        }}
                        placeholder="name@example.com"
                        className={`w-full bg-slate-950/80 border ${
                          errors.email ? 'border-red-500/70' : 'border-slate-800'
                        } rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5" htmlFor="contact-subject">
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value })
                        if (errors.subject) setErrors({ ...errors, subject: '' })
                      }}
                      placeholder="Opportunity / Collaboration / Question"
                      className={`w-full bg-slate-950/80 border ${
                        errors.subject ? 'border-red-500/70' : 'border-slate-800'
                      } rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors`}
                    />
                    {errors.subject && <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5" htmlFor="contact-message">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value })
                        if (errors.message) setErrors({ ...errors, message: '' })
                      }}
                      placeholder="Tell me about your project, idea, or role..."
                      className={`w-full bg-slate-950/80 border ${
                        errors.message ? 'border-red-500/70' : 'border-slate-800'
                      } rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white font-medium text-xs sm:text-sm shadow-lg shadow-violet-950/60 hover:shadow-violet-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Preparing Email...' : 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
