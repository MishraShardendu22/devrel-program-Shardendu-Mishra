import Hero from '@/components/Hero'
import Join from '@/components/Join'
import WhyUs from '@/components/WhyUs'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      {/* Shared background for WhyUs and Testimonial sections */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Theme/community-bunny.png"
            alt="Background"
            fill
            className="object-contain opacity-5"
          />
        </div>
        <WhyUs />
        <Testimonial />
      </div>
      <Join />
      <Footer />
    </div>
  )
}

export default page
