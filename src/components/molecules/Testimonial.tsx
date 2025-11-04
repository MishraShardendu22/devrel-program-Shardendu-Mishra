"use client"

import Image from "next/image"

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sanskriti Harmukh",
      role: "GitHub Campus Expert",
      image: "/testimonials/sanskriti.jpg",
      text: "If you are someone looking to step into DevRel and eager to learn its goals in an open source organization, Keploy's DevRel Cohort is the perfect space to boost your learning."
    },
    {
      id: 2,
      name: "Animesh Pathak",
      role: "Gold MLSA",
      image: "/testimonials/animesh.jpg",
      text: "DevRel Cohort 1.0 was an incredible experience. I improved my skills significantly. The virtual atmosphere is uplifting and I'm enjoying working with such an impressive team!"
    },
    {
      id: 3,
      name: "Jyotirmoy Roy",
      role: "IRLamigo",
      image: "/testimonials/roy.jpg",
      text: "Participating in Keploy's DevRel Cohort enriched my knowledge about the DevRel role in open-source. The program helped me effectively communicate with stakeholders."
    },
    {
      id: 4,
      name: "Diganta Kr Banik",
      role: "Web Developer",
      image: "/testimonials/diganta.jpg",
      text: "DevRel was new to me. I had a great experience during the cohort and learned a lot during the contribution period. A really great opportunity to experience DevRel."
    },
    {
      id: 5,
      name: "Shashwat Gupta",
      role: "Backend Developer",
      image: "/testimonials/shashwat.jpg",
      text: "Keploy's DevRel Cohort has been a game-changer. I learned effective communication and the key role DevRel plays in open-source. Expert mentorship enriched the journey."
    },
    {
      id: 6,
      name: "Arindam Majumder",
      role: "DevRel @getpieces",
      image: "/testimonials/barkatul.jpg",
      text: "A great learning experience exploring many aspects of DevRel. This program is an excellent opportunity to understand the roles and responsibilities."
    }
  ]

  return (
    <section id="community" className="relative py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center pb-12 md:pb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tighter mb-4 text-[var(--secondary-300)] dark:text-primary">
            What Our Community Says
          </h2>
          <p className="text-lg md:text-xl" style={{ color: 'var(--gray-600)' }}>
            Hear from previous cohort participants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg p-6 border shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{ 
                backgroundColor: 'var(--neutral-200)',
                borderColor: 'var(--gray-300)'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base" style={{ color: 'var(--secondary-300)' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--gray-600)' }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--gray-600)' }}>
                {testimonial.text}
              </p>

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4"
                    style={{ color: 'var(--primary-300)' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
