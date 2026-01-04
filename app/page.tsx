import Hero from '@/components/hero';
import Services from '@/components/services';
import WhyChooseUs from '@/components/why-choose-us';
import HowItWorks from '@/components/how-it-works';
import WhoThisIsFor from '@/components/who-this-is-for';
import LatestBlog from '@/components/latest-blog';
import FinalCTA from '@/components/final-cta';

export default function Home() {
  return (
    <main className="bg-[#111113]">
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <WhoThisIsFor />
      <Services />
      <LatestBlog />
      <FinalCTA />
    </main>
  );
}
