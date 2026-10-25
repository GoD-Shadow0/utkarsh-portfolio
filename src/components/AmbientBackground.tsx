import React, { useEffect, useRef, useState } from 'react'

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const targetMousePos = useRef({ x: -1000, y: -1000 })
  const currentMousePos = useRef({ x: -1000, y: -1000 })
  const rafId = useRef<number | null>(null)

  // Mouse spotlight with smooth lerp
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetMousePos.current = { x: e.clientX, y: e.clientY }
    }

    const lerpMouse = () => {
      currentMousePos.current.x += (targetMousePos.current.x - currentMousePos.current.x) * 0.08
      currentMousePos.current.y += (targetMousePos.current.y - currentMousePos.current.y) * 0.08
      setMousePos({
        x: Math.round(currentMousePos.current.x),
        y: Math.round(currentMousePos.current.y)
      })
      rafId.current = requestAnimationFrame(lerpMouse)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafId.current = requestAnimationFrame(lerpMouse)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize, { passive: true })

    // Generate lightweight subtle particles
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55)
    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      alpha: number
      color: string
    }

    const colors = ['#8b5cf6', '#06b6d4', '#a855f7', '#38bdf8']
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.3),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.3),
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        if (!prefersReducedMotion) {
          p.x += p.vx
          p.y += p.vy

          if (p.x < 0) p.x = width
          if (p.x > width) p.x = 0
          if (p.y < 0) p.y = height
          if (p.y > height) p.y = 0
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
      }

      // Draw subtle connecting lines for close particles
      ctx.globalAlpha = 0.04
      ctx.strokeStyle = '#8b5cf6'
      ctx.lineWidth = 0.6

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep dark gradient foundation */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Ambient glowing radial orbs */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full blur-[130px] opacity-20 bg-gradient-to-br from-violet-600 via-indigo-700 to-transparent animate-pulse-subtle"
        style={{ animationDuration: '14s' }}
      />
      <div
        className="absolute top-[35%] right-[-15%] w-[50vw] h-[50vw] rounded-full blur-[140px] opacity-15 bg-gradient-to-bl from-cyan-500 via-blue-600 to-transparent animate-pulse-subtle"
        style={{ animationDuration: '18s', animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full blur-[150px] opacity-15 bg-gradient-to-tr from-fuchsia-600 via-violet-800 to-transparent animate-pulse-subtle"
        style={{ animationDuration: '22s', animationDelay: '4s' }}
      />

      {/* Subtle technical grid pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 mask-radial" />

      {/* Fine grain overlay for cinematic depth */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Canvas for cosmic drifting dust */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-65" />

      {/* Desktop interactive ambient mouse spotlight */}
      {mousePos.x > -500 && (
        <div
          className="absolute rounded-full pointer-events-none transition-opacity duration-500 hidden md:block"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: '600px',
            height: '600px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.04) 40%, transparent 70%)',
            filter: 'blur(30px)'
          }}
        />
      )}
    </div>
  )
}
