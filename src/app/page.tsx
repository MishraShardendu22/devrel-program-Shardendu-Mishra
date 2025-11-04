import Hero from '@/components/Hero'
import Join from '@/components/Join'
import WhyUs from '@/components/WhyUs'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'

const page = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <WhyUs />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  )
}

export default page
