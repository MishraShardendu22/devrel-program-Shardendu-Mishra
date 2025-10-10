"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const WhyUs = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
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
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="services" className="s-services">
      <div className="row section-header has-bottom-sep">
        <div className="col-full">
          <h3 
            className={`subhead fade-up ${visibleElements.has('whyus-subtitle') ? 'visible' : ''}`}
            data-fade-id="whyus-subtitle"
          >
            DEVREL PROGRAM
          </h3>
          <h1 
            className={`display-2 fade-up fade-up-delay-100 ${visibleElements.has('whyus-title') ? 'visible' : ''}`}
            data-fade-id="whyus-title"
          >
            Wanna know what it is like to be a <br />
            DevRel?
          </h1>
        </div>
      </div>

      <div className="row services-list block-1-3 block-tab-full">
        {/* Learn Section */}
        <div 
          className={`col-block service-item fade-up fade-up-delay-200 ${visibleElements.has('whyus-card-1') ? 'visible' : ''}`}
          data-fade-id="whyus-card-1"
        >
          <div className="service-icon">
            <Image
              src="/learn.gif"
              alt="Learn"
              width={120}
              height={120}
              unoptimized
            />
          </div>
          <div className="service-text">
            <h3 className="h2">Learn</h3>
            <p>
              Learn the day-to-day tasks of a DevRel
            </p>
          </div>
        </div>

        {/* Make Content Section */}
        <div 
          className={`col-block service-item fade-up fade-up-delay-300 ${visibleElements.has('whyus-card-2') ? 'visible' : ''}`}
          data-fade-id="whyus-card-2"
        >
          <div className="service-icon">
            <Image
              src="/content.gif"
              alt="Make Content"
              width={120}
              height={120}
              unoptimized
            />
          </div>
          <div className="service-text">
            <h3 className="h2">Make Content</h3>
            <p>
              Learn to write and make Technical content<br />
              (2nd most important task of being a DevRel)
            </p>
          </div>
        </div>

        {/* Grow Section */}
        <div 
          className={`col-block service-item fade-up fade-up-delay-400 ${visibleElements.has('whyus-card-3') ? 'visible' : ''}`}
          data-fade-id="whyus-card-3"
        >
          <div className="service-icon">
            <Image
              src="/grow.gif"
              alt="Grow"
              width={120}
              height={120}
              unoptimized
            />
          </div>
          <div className="service-text">
            <h3 className="h2">Grow</h3>
            <p>
              If a DevRel person is an actor, the community is their stage. Learn to grow with the community
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
