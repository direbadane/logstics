'use client';

import Hero from '@/components/hero';
import Services from '@/components/services';
import About from '@/components/about';
import WeConnect from '@/components/we-connect';
import CaseStudies from '@/components/case-studies';
import FAQ from '@/components/faq';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <WeConnect />
        <CaseStudies />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
