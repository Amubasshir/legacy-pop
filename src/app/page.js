import ExamplesAndProof from '@/Components/ExamplesAndProof';
import FAQSection from '@/Components/FAQSection';
import FeatureGrid from '@/Components/FeatureGrid';
import FinalCTA from '@/Components/FinalCTA';
import HeroSection from '@/Components/HeroSection';
import HowItWorks from '@/Components/HowItWorks';
import NavBar from '@/Components/NavBar';
import Pricing from '@/Components/Pricing';
import WhatIsLegacyPop from '@/Components/WhatIsLegacyPop';
import WhyItMatters from '@/Components/WhyItMatters';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <WhatIsLegacyPop />
      <HowItWorks />
      <FeatureGrid />
      <ExamplesAndProof />
      <WhyItMatters />
      <Pricing />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
