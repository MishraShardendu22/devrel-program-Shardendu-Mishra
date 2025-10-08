import Hero from '@/Component/Hero'
import Join from '@/Component/Join'
import WhyUs from '@/Component/WhyUs'
import Header from '@/Component/Header'
import Footer from '@/Component/Footer'
import Testimonial from '@/Component/Testimonial'

const page = () => {
  return (
    <div>
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
