import Image from 'next/image';
import { Header, Hero, MarketingTemplate, Join, WhyUs, Testimonial } from '@/components';

const Page = () => {
  return (
    <MarketingTemplate>
      <Header />
      <Hero />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Theme/community-bunny.webp"
            alt="Community Background"
            fill
            className="object-contain opacity-5"
            priority={false}
          />
        </div>
        <WhyUs />
        <Testimonial />
      </div>

      <Join />
    </MarketingTemplate>
  );
};

export default Page;
