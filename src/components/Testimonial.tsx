import Image from "next/image"

const Testimonial = () => {
  return (
    <section id="community" className="s-works">
      <div className="intro-wrap">
        <div className="row section-header has-bottom-sep light-sep">
          <div className="col-full">
            <h3 className="subhead">Community❤️</h3>
            <h1 className="display-2 display-2--light">Look at what the previous folks have to say!</h1>
          </div>
        </div>
      </div>

      <div className="row works-content">
        <div className="outerdiv">
          <div className="innerdiv">
            {/* Testimonial 1 - Sanskriti - Top Left (Large) */}
            <div className="eachdiv div1">
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
                <p>
                  If you are someone who is looking forward to stepping into the domain of DevRel and is eager to learn its goals in an open source organization then we have a space created for you called Keploy&apos;s DevRel Cohort, to boost up your learning and enhance your way of approaching a solution to a problem being a DevRel.
                </p>
              </div>
            </div>

            {/* Testimonial 2 - Diganta - Top Middle */}
            <div className="eachdiv div2">
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
                  <p className="name">Diganta Kr Banik</p>
                  <p className="designation">Web Developer</p>
                </div>
              </div>
              <div className="review">
                <p>
                  DevRel was something new to me. I had a great experience during the cohort as a mentee and learnt a lot during the contribution period. If you want to experience what a DevRel is, this program is a really great opportunity to understand the roles and responsibilites of a devrel.
                </p>
              </div>
            </div>

            {/* Testimonial 3 - Jyotirmoy - Top Right (Large) */}
            <div className="eachdiv div3">
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
                  <p className="name">Jyotirmoy Roy</p>
                  <p className="designation">IRLamigo</p>
                </div>
              </div>
              <div className="review">
                <p>
                  Participating in Keploy&apos;s DevRel Cohort as a mentee was an exceptional journey that enriched my knowledge and skills about DevRel role in an open-source company. The program helped me to effectively communicate with diverse stakeholders and understand the accountability of a DevRel. I&apos;m grateful for the mentors&apos; constant support and constructive feedback that aided me in making progress.
                </p>
              </div>
            </div>

            {/* Testimonial 4 - Animesh - Middle Center */}
            <div className="eachdiv div4">
              <div className="userdetails">
                <div className="imgbox">
                  <Image 
                    src="/testimonials/animesh.jpg" 
                    alt="Animesh Pathak"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="detbox">
                  <p className="name">Animesh Pathak</p>
                  <p className="designation">Gold MLSA</p>
                </div>
              </div>
              <div className="review">
                <p>
                  My experience of DevRel Cohort 1.0 will forever resonate in my heart. I am able to improve my skills. All in all, the virtual atmosphere is simply uplifting and I am enjoying this work with such a great and impressive team!
                </p>
              </div>
            </div>

            {/* Testimonial 5 - Shashwat - Bottom Left */}
            <div className="eachdiv div5">
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
                <p>
                  Keploy&apos;s DevRel Cohort has been a game-changer. Immersed in Developer Relations within open-source, I learned effective communication and the key role DevRel plays. Expert mentorship and collaborative peers enriched the journey. For those curious about DevRel&apos;s role in open-source, this program is an ideal gateway to explore and learn.
                </p>
              </div>
            </div>

            {/* Testimonial 6 - Arindam - Bottom Right (Wide) */}
            <div className="eachdiv div6">
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
                  <p className="name">Arindam Majumder</p>
                  <p className="designation">DevRel @getpieces</p>
                </div>
              </div>
              <div className="review">
                <p>
                  It was a Great learning Experience and got to explore many aspects of DevRel. If you want to experience what a DevRel is, this program is a really great opportunity to understand the roles and responsibilites and how to navigate them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
