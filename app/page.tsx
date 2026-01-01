import Hero from '@/components/home/hero';
import Services from '@/components/home/services';
import WhyChooseUs from '@/components/home/why-choose-us';
import HowItWorks from '@/components/home/how-it-works';
import WhoThisIsFor from '@/components/home/who-this-is-for';
import LatestBlog from '@/components/home/latest-blog';
import FinalCTA from '@/components/home/final-cta';

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
