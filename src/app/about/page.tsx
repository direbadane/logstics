'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Footer from '@/components/footer';

const highlights = ['End-to-end supply chain visibility', 'Dedicated account management', 'Customs brokerage & compliance', 'Temperature-controlled logistics', 'Multi-modal transport solutions', '24/7 operations & support'];

const milestones = [
  { year: '1998', title: 'Founded in Addis Ababa', description: 'Gize PLC was established with a vision to transform logistics in Ethiopia and across Africa.' },
  { year: '2005', title: 'First International Route', description: 'Expanded operations to serve corridors between East Africa and the Middle East.' },
  { year: '2012', title: 'Warehousing Expansion', description: 'Opened state-of-the-art climate-controlled warehouse facilities in three strategic locations.' },
  { year: '2018', title: '50+ Countries Served', description: 'Reached a milestone of operating across 50 countries spanning four continents.' },
  { year: '2023', title: 'Green Logistics Initiative', description: 'Launched sustainability program including electric vehicle fleet and carbon offset partnerships.' },
];

const values = [
  { title: 'Reliability', description: 'Every shipment is backed by our commitment to on-time delivery and transparent communication.', icon: '🎯' },
  { title: 'Innovation', description: 'We leverage cutting-edge technology to optimize routes, reduce costs, and improve visibility.', icon: '💡' },
  { title: 'Partnership', description: 'We treat every client relationship as a long-term partnership built on trust and mutual growth.', icon: '🤝' },
  { title: 'Excellence', description: 'From operations to customer service, we pursue excellence in every aspect of our business.', icon: '⭐' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section className="bg-gize-navy pt-24 pb-20 lg:pt-32 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 400"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6"><div className="h-[2px] w-12 bg-gize-orange" /><span className="text-gize-orange font-semibold uppercase tracking-[0.2em] text-sm">Who We Are</span><div className="h-[2px] w-12 bg-gize-orange" /></div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">About <span className="text-gize-orange">Gize PLC</span></h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Founded with a vision to transform African logistics, Gize PLC has grown into a trusted partner for businesses seeking reliable, efficient, and innovative supply chain solutions.</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6"><div className="h-[2px] w-12 bg-gize-orange" /><span className="text-gize-red font-semibold uppercase tracking-[0.2em] text-sm">Our Story</span></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gize-navy mb-6 leading-tight">Building Bridges Across Continents</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Gize PLC was born from a simple but powerful idea: Africa deserves world-class logistics infrastructure. Founded in Addis Ababa in 1998, we started with a small fleet of trucks and a big dream — to connect Ethiopian businesses to global markets.</p>
                <p>Over two decades later, we&apos;ve built an extensive network spanning major ports, warehousing hubs, and transport corridors across Africa, Asia, Europe, and the Americas.</p>
                <p>Today, Gize PLC handles over 10,000 shipments annually, serves clients in 50+ countries, and employs a dedicated team of logistics professionals.</p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">
                <div><div className="text-3xl font-bold text-gize-red">25+</div><div className="text-sm text-gray-500 mt-1">Years Experience</div></div>
                <div><div className="text-3xl font-bold text-gize-orange">50+</div><div className="text-sm text-gray-500 mt-1">Countries Served</div></div>
                <div><div className="text-3xl font-bold text-gize-navy">10K+</div><div className="text-sm text-gray-500 mt-1">Shipments/Year</div></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative rounded-2xl overflow-hidden h-[500px]">
                <div className="absolute inset-0 bg-gize-navy" />
                <Image src="/images/containers-aerial.jpg" alt="Gize PLC terminal operations" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gize-navy/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="bg-gize-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
              <div className="bg-gize-navy rounded-2xl overflow-hidden">
                <div className="relative h-80 sm:h-96">
                  <div className="absolute inset-0 bg-gize-navy" />
                  <Image src="/images/ceo-portrait.jpg" alt="Gizeshwork Tessema" fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gize-navy via-transparent to-transparent" />
                </div>
                <div className="p-8 lg:p-10">
                  <h3 className="text-white text-2xl sm:text-3xl font-bold">Gizeshwork Tessema</h3>
                  <p className="text-gize-orange font-medium text-sm uppercase tracking-wider mt-2 mb-5">CEO & Founder, Gize PLC</p>
                  <p className="text-white/60 text-sm leading-relaxed">With a passion for connecting African businesses to global markets, Gizeshwork founded Gize PLC to bridge logistics gaps and drive economic growth through trade infrastructure and innovative supply chain solutions.</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6"><div className="h-[2px] w-12 bg-gize-orange" /><span className="text-gize-red font-semibold uppercase tracking-[0.2em] text-sm">Leadership</span></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gize-navy mb-6 leading-tight">A Visionary Leader Driving Change</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>&ldquo;When I started Gize PLC, I saw an opportunity to transform how goods move across Africa and beyond. Our continent has immense potential — and logistics is the backbone that unlocks it,&rdquo; says Gizeshwork Tessema.</p>
                <p>With over 25 years in the logistics industry, Gizeshwork has built Gize PLC into a company that doesn&apos;t just move cargo — it moves economies.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="text-gize-red flex-shrink-0" size={18} /><span className="text-gray-700 text-sm font-medium">{item}</span></div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gize-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-gize-orange font-semibold uppercase tracking-[0.25em] text-sm">What Drives Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Our Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gize-red py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Join the hundreds of businesses that trust Gize PLC with their logistics needs.</p>
          <Link href="/contact"><Button className="bg-white text-gize-navy hover:bg-white/90 px-10 py-3.5 font-bold uppercase tracking-wide rounded-none h-auto text-base">Get In Touch <ArrowRight size={18} className="ml-2" /></Button></Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
