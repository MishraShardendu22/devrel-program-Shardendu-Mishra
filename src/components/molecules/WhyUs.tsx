"use client"

import Image from "next/image"

const WhyUs = () => {
  return (
    <section id="services" className="relative py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center pb-12 md:pb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tighter mb-4 text-(--secondary-300) dark:text-primary">
            What You'll Experience
          </h2>
          <p className="text-lg md:text-xl" style={{ color: 'var(--gray-600)' }}>
            Get hands-on experience as a DevRel professional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="rounded-lg p-8 text-center shadow-lg border-b-4 transition-all duration-300 hover:shadow-xl"
            style={{ 
              backgroundColor: 'var(--neutral-200)',
              borderBottomColor: 'var(--primary-300)'
            }}
          >
            <div className="mb-6 flex items-center justify-center">
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-500)' }}>
                <Image
                  src="/learn.gif"
                  alt="Learn"
                  width={60}
                  height={60}
                  unoptimized
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--secondary-300)' }}>
                Learn
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--gray-600)' }}>
                Learn the day-to-day tasks of a DevRel professional
              </p>
            </div>
          </div>

          <div 
            className="rounded-lg p-8 text-center shadow-lg border-b-4 transition-all duration-300 hover:shadow-xl"
            style={{ 
              backgroundColor: 'var(--neutral-200)',
              borderBottomColor: 'var(--primary-300)'
            }}
          >
            <div className="mb-6 flex items-center justify-center">
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-500)' }}>
                <Image
                  src="/content.gif"
                  alt="Make Content"
                  width={60}
                  height={60}
                  unoptimized
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--secondary-300)' }}>
                Create Content
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--gray-600)' }}>
                Learn to write and produce technical content that engages developers
              </p>
            </div>
          </div>

          <div 
            className="rounded-lg p-8 text-center shadow-lg border-b-4 transition-all duration-300 hover:shadow-xl"
            style={{ 
              backgroundColor: 'var(--neutral-200)',
              borderBottomColor: 'var(--primary-300)'
            }}
          >
            <div className="mb-6 flex items-center justify-center">
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-500)' }}>
                <Image
                  src="/grow.gif"
                  alt="Grow"
                  width={60}
                  height={60}
                  unoptimized
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--secondary-300)' }}>
                Build Community
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--gray-600)' }}>
                Learn to grow and engage with developer communities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
