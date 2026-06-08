import Hero from '@/components/Hero';
import LogoBar from '@/components/LogoBar';
import Services from '@/components/Services';
import Results from '@/components/Results';
import CaseStudies from '@/components/CaseStudies';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Services />
      <Results />
      <CaseStudies />
      <WhyUs />
      <Testimonials />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}