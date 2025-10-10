"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const Testimonial = () => {
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
    <section id="community" className="s-works">
      <div className="intro-wrap">
        <div className="row section-header has-bottom-sep light-sep">
          <div className="col-full">
            <h3 
              className={`subhead fade-up ${visibleElements.has('testimonial-title') ? 'visible' : ''}`}
              data-fade-id="testimonial-title"
            >
              Community❤️
            </h3>
            <h1 
              className={`display-2 display-2--light fade-up fade-up-delay-100 ${visibleElements.has('testimonial-subtitle') ? 'visible' : ''}`}
              data-fade-id="testimonial-subtitle"
            >
              Look at what the previous folks have to say!
            </h1>
          </div>
        </div>
      </div>

      <div className="row works-content">
        <div className="outerdiv">
          <div className="innerdiv">
            {/* Testimonial 1 - Sanskriti - Top Left (Tall) */}
            <div 
              className={`eachdiv div1 fade-up fade-up-delay-200 ${visibleElements.has('testimonial-1') ? 'visible' : ''}`}
              data-fade-id="testimonial-1"
            >
              <div className="userdetails">
                <div className="imgbox">
                  <Image 
                    src="/testimonials/sanskriti.jpg" 
                    alt="Sanskriti Harmukh"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="detbox">
                  <p className="name">Sanskriti Harmukh</p>
                  <p className="designation">GitHub Campus Expert</p>
                </div>
              </div>
              <div className="review">
                <h4>
                  If you are someone who is looking forward to stepping into the domain of DevRel and is eager to learn its goals in an open source organization then we have a space created for you called Keploy&apos;s DevRel Cohort, to boost up your learning and enhance your way of approaching a solution to a problem being a DevRel.
                </h4>
              </div>
            </div>

            {/* Testimonial 2 - Animesh - Top Center (Shorter) */}
            <div 
              className={`eachdiv div2 fade-up fade-up-delay-300 ${visibleElements.has('testimonial-2') ? 'visible' : ''}`}
              data-fade-id="testimonial-2"
            >
              <div className="userdetails" style={{ marginTop: '-10px' }}>
                <div className="imgbox">
                  <Image 
                    src="/testimonials/animesh.jpg" 
                    alt="Animesh Pathak"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="detbox">
                  <p className="name" style={{ fontSize: '16px', textAlign: 'left' }}>Animesh Pathak</p>
                  <p className="designation" style={{ marginTop: '-4px' }}>Gold MLSA</p>
                </div>
              </div>
              <div className="review">
                <h5 style={{ lineHeight: '1.6' }}>
                  My experience of DevRel Cohort 1.0 will forever resonate in my heart. I am able to improve my skills. All in all, the virtual atmosphere is simply uplifting and I am enjoying this work with such a great and impressive team!
                </h5>
              </div>
            </div>

            {/* Testimonial 3 - Jyotirmoy - Top Right (Tallest) */}
            <div 
              className={`eachdiv div3 fade-up fade-up-delay-400 ${visibleElements.has('testimonial-3') ? 'visible' : ''}`}
              data-fade-id="testimonial-3"
            >
              <div className="userdetails">
                <div className="imgbox">
                  <Image 
                    src="/testimonials/roy.jpg" 
                    alt="Jyotirmoy Roy"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="detbox">
                  <p className="name" style={{ fontSize: '16px', textAlign: 'left' }}>Jyotirmoy Roy</p>
                  <p className="designation">IRLamigo</p>
                </div>
              </div>
              <div className="review">
                <h4>
                  Participating in Keploy&apos;s DevRel Cohort as a mentee was an exceptional journey that enriched my knowledge and skills about DevRel role in an open-source company. The program helped me to effectively communicate with diverse stakeholders and understand the accountability of a DevRel. I&apos;m grateful for the mentors&apos; constant support and constructive feedback that aided me in making progress.
                </h4>
              </div>
            </div>

            {/* Testimonial 4 - Diganta - Middle Left (Below Sanskriti) */}
            <div 
              className={`eachdiv div4 fade-up fade-up-delay-500 ${visibleElements.has('testimonial-4') ? 'visible' : ''}`}
              data-fade-id="testimonial-4"
            >
              <div className="userdetails">
                <div className="imgbox">
                  <Image 
                    src="/testimonials/diganta.jpg" 
                    alt="Diganta Kr Banik"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="detbox">
                  <p className="name" style={{ fontSize: '16px', textAlign: 'left' }}>Diganta Kr Banik</p>
                  <p className="designation" style={{ marginTop: '-4px' }}>Web Developer</p>
                </div>
              </div>
              <div className="review">
                <h5>
                  DevRel was something new to me. I had a great experience during the cohort as a mentee and learnt a lot during the contribution period. If you want to experience what a DevRel is, this program is a really great opportunity to understand the roles and responsibilites of a devrel.
                </h5>
              </div>
            </div>

            {/* Testimonial 5 - Shashwat - Middle Center (Below Animesh) */}
            <div 
              className={`eachdiv div5 fade-up fade-up-delay-600 ${visibleElements.has('testimonial-5') ? 'visible' : ''}`}
              data-fade-id="testimonial-5"
            >
              <div className="userdetails">
                <div className="imgbox">
                  <Image 
                    src="/testimonials/shashwat.jpg" 
                    alt="Shashwat Gupta"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="detbox">
                  <p className="name">Shashwat Gupta</p>
                  <p className="designation">Backend Developer</p>
                </div>
              </div>
              <div className="review">
                <h4>
                  Keploy&apos;s DevRel Cohort has been a game-changer. Immersed in Developer Relations within open-source, I learned effective communication and the key role DevRel plays. Expert mentorship and collaborative peers enriched the journey. For those curious about DevRel&apos;s role in open-source, this program is an ideal gateway to explore and learn.
                </h4>
              </div>
            </div>

            {/* Testimonial 6 - Arindam - Bottom Banner (Full Width) */}
            <div 
              className={`eachdiv div6 fade-up fade-up-delay-600 ${visibleElements.has('testimonial-6') ? 'visible' : ''}`}
              data-fade-id="testimonial-6"
            >
              <div className="userdetails">
                <div className="imgbox">
                  <Image 
                    src="/testimonials/barkatul.jpg" 
                    alt="Arindam Majumder"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="detbox">
                  <p className="name" style={{ fontSize: '16px', textAlign: 'left' }}>Arindam Majumder</p>
                  <p className="designation" style={{ marginTop: '-4px' }}>DevRel @getpieces</p>
                </div>
              </div>
              <div className="review">
                <h4>
                  It was a Great learning Experience and got to explore many aspects of DevRel. If you want to experience what a DevRel is, this program is a really great opportunity to understand the roles and responsibilites and how to navigate them.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
