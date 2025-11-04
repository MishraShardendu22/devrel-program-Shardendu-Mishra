'use client';

import { useEffect, useRef, useState } from 'react';
import { SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [counters, setCounters] = useState({
    cohorts: 0,
    applications: 0,
    devrels: 0,
    onboarded: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      counterObserver.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        counterObserver.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const targets = {
      cohorts: 6,
      applications: 5000,
      devrels: 330,
      onboarded: 15,
    };

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        cohorts: Math.floor(progress * targets.cohorts),
        applications: Math.floor(progress * targets.applications),
        devrels: Math.floor(progress * targets.devrels),
        onboarded: Math.floor(progress * targets.onboarded),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <section
      id="about"
      className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0">
        <Image
          src="/Theme/demo-thumbnail.webp"
          alt="Keploy DevRel"
          fill
          className="object-contain opacity-12"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center pb-12 md:pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter mb-6 text-[var(--secondary-300)] dark:text-primary">
            Join the <span style={{ color: 'var(--primary-300)' }}>Keploy</span> DevRel Program
          </h1>
          <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--gray-600)' }}>
            Experience the world of Developer Relations for a month. Learn API testing, create
            content, and grow your community skills with Keploy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={SITE_CONFIG.links.apply}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 font-medium text-white rounded-lg shadow-lg transition-all duration-150 ease-in-out"
              style={{ backgroundColor: 'var(--primary-300)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-400)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-300)')}
            >
              Apply Now
            </Link>
            <Link
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 font-medium rounded-lg border-2 shadow-md transition-all duration-150 ease-in-out"
              style={{
                borderColor: 'var(--primary-300)',
                color: 'var(--primary-300)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-300)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--primary-300)';
              }}
            >
              View on GitHub
            </Link>
          </div>
        </div>

        <div className="pt-12 md:pt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[var(--secondary-300)] dark:text-primary">
            DevRel Program in Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div
              className="rounded-lg p-6 text-center shadow-lg border-b-4 transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: 'var(--neutral-200)',
                borderBottomColor: 'var(--primary-300)',
              }}
            >
              <div
                className="text-4xl md:text-5xl font-extrabold mb-2"
                style={{ color: 'var(--primary-300)' }}
              >
                {counters.cohorts}
              </div>
              <h5
                className="text-sm font-semibold uppercase tracking-wide"
                style={{ color: 'var(--gray-600)' }}
              >
                Cohorts
              </h5>
            </div>

            <div
              className="rounded-lg p-6 text-center shadow-lg border-b-4 transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: 'var(--neutral-200)',
                borderBottomColor: 'var(--primary-300)',
              }}
            >
              <div
                className="text-4xl md:text-5xl font-extrabold mb-2"
                style={{ color: 'var(--primary-300)' }}
              >
                {counters.applications}+
              </div>
              <h5
                className="text-sm font-semibold uppercase tracking-wide"
                style={{ color: 'var(--gray-600)' }}
              >
                Applications
              </h5>
            </div>

            <div
              className="rounded-lg p-6 text-center shadow-lg border-b-4 transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: 'var(--neutral-200)',
                borderBottomColor: 'var(--primary-300)',
              }}
            >
              <div
                className="text-4xl md:text-5xl font-extrabold mb-2"
                style={{ color: 'var(--primary-300)' }}
              >
                {counters.devrels}+
              </div>
              <h5
                className="text-sm font-semibold uppercase tracking-wide"
                style={{ color: 'var(--gray-600)' }}
              >
                DevRels
              </h5>
            </div>

            <div
              className="rounded-lg p-6 text-center shadow-lg border-b-4 transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: 'var(--neutral-200)',
                borderBottomColor: 'var(--primary-300)',
              }}
            >
              <div
                className="text-4xl md:text-5xl font-extrabold mb-2"
                style={{ color: 'var(--primary-300)' }}
              >
                {counters.onboarded}+
              </div>
              <h5
                className="text-sm font-semibold uppercase tracking-wide"
                style={{ color: 'var(--gray-600)' }}
              >
                Onboarded
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
