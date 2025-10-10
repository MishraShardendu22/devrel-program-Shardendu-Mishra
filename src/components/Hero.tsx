"use client"

import { useEffect, useRef, useState } from "react"

const Hero = () => {
  const [counters, setCounters] = useState({
    cohorts: 0,
    applications: 0,
    devrels: 0,
    onboarded: 0
  })

  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.3 }
    )

    const currentSection = sectionRef.current
    if (currentSection) {
      counterObserver.observe(currentSection)
    }

    // Fade-up animation observer
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-fade-id')
            if (id) {
              setVisibleElements(prev => new Set([...prev, id]))
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    const elements = document.querySelectorAll('.fade-up')
    elements.forEach((el) => fadeObserver.observe(el))

    return () => {
      if (currentSection) {
        counterObserver.unobserve(currentSection)
      }
      elements.forEach((el) => fadeObserver.unobserve(el))
    }
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000
    const targets = {
      cohorts: 6,
      applications: 5000,
      devrels: 330,
      onboarded: 15
    }

    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setCounters({
        cohorts: Math.floor(progress * targets.cohorts),
        applications: Math.floor(progress * targets.applications),
        devrels: Math.floor(progress * targets.devrels),
        onboarded: Math.floor(progress * targets.onboarded)
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }

  return (
    <section id="about" className="s-about target-section" ref={sectionRef}>
      <div className="row section-header has-bottom-sep">
        <div className="col-full">
          <h3 
            className={`fade-up ${visibleElements.has('hero-subtitle') ? 'visible' : ''}`}
            data-fade-id="hero-subtitle"
          >
            Hello There
          </h3>
          <h1 
            className={`display-1 fade-up fade-up-delay-100 ${visibleElements.has('hero-title') ? 'visible' : ''}`}
            data-fade-id="hero-title"
          >
            We Are Keploy
          </h1>
        </div>
      </div>

      <div className="row about-desc">
        <div className="col-full">
          <p 
            className={`fade-up fade-up-delay-200 ${visibleElements.has('hero-desc') ? 'visible' : ''}`}
            data-fade-id="hero-desc"
          >
            Keploy is a functional testing toolkit for developers. As an open source organisation, we
            believe everything should be community-driven. We want folks to come together with
            us and experience what it is like to be that DevRel and learn and grow with the
            experience they gain! Here&apos;s the DevRel Program in Numbers
          </p>
        </div>
      </div>

      <div className="row about-stats stats block-1-4 block-m-1-2 block-mob-full">
        <div 
          className={`col-block stats__col fade-up fade-up-delay-300 ${visibleElements.has('hero-stat-1') ? 'visible' : ''}`}
          data-fade-id="hero-stat-1"
        >
          <div className="stats__count">{counters.cohorts}</div>
          <h5>Cohorts</h5>
        </div>
        <div 
          className={`col-block stats__col fade-up fade-up-delay-400 ${visibleElements.has('hero-stat-2') ? 'visible' : ''}`}
          data-fade-id="hero-stat-2"
        >
          <div className="stats__count">{counters.applications}</div>
          <h5>Applications</h5>
        </div>
        <div 
          className={`col-block stats__col fade-up fade-up-delay-500 ${visibleElements.has('hero-stat-3') ? 'visible' : ''}`}
          data-fade-id="hero-stat-3"
        >
          <div className="stats__count">{counters.devrels}</div>
          <h5>DevRels</h5>
        </div>
        <div 
          className={`col-block stats__col fade-up fade-up-delay-600 ${visibleElements.has('hero-stat-4') ? 'visible' : ''}`}
          data-fade-id="hero-stat-4"
        >
          <div className="stats__count">{counters.onboarded}</div>
          <h5>Onboarded</h5>
        </div>
      </div>
    </section>
  )
}

export default Hero
