import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Services from '@/components/Services';
import Results from '@/components/Results';
// import CaseStudies from '@/components/CaseStudies'; //
import WhyUs from '@/components/WhyUs';
import GoogleReviews from '@/components/GoogleReviews';
import Process from '@/components/Process';
import ROICalculator from '@/components/ROICalculator';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy /> 
      <Services />
      <Results />
      {/* <CaseStudies /> */}
      <WhyUs />
      <Process />
      <ROICalculator />
       <FAQ />
       <GoogleReviews />
      <CTA />
      <Footer />
    </>
  );
}