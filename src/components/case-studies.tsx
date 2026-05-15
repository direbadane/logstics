'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    title: 'Multi-Modal Transport Solution for Peak Holiday Season',
    description:
      'We designed an integrated sea-and-road logistics plan that moved 3,200+ containers across 12 countries in under 6 weeks — on time and under budget.',
    image: '/images/case-study-1.jpg',
    tag: 'Seasonal Logistics',
    stat: '3,200+',
    statLabel: 'Containers Shipped',
    link: '/services/ocean-shipping',
  },
  {
    title: 'Leveraging Electric Vehicles for 5,000 km Long-Haul Transport in China',
    description:
      'A pioneering green logistics initiative using an electric truck fleet to cover 5,000 km of highway, reducing carbon emissions by 42% while maintaining delivery speed.',
    image: '/images/case-study-2.jpg',
    tag: 'Sustainable Shipping',
    stat: '42%',
    statLabel: 'CO₂ Reduction',
    link: '/services/land-transport',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-gize-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gize-red font-semibold uppercase tracking-[0.25em] text-sm">Proven Results</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gize-navy mt-3">Case Studies</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-4">
            Real challenges. Real solutions. See how Gize PLC delivers results for businesses around the world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={study.image} alt={study.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-gize-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">{study.tag}</span>
                </div>
                <div className="absolute bottom-4 right-4 text-right">
                  <div className="text-3xl font-bold text-white">{study.stat}</div>
                  <div className="text-white/70 text-xs uppercase tracking-wider">{study.statLabel}</div>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-gize-navy mb-3 group-hover:text-gize-red transition-colors duration-300 leading-snug">{study.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{study.description}</p>
                <Link href={study.link} className="inline-flex items-center text-gize-red font-semibold text-sm group-hover:gap-2 transition-all duration-300 gap-1">
                  Discover More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
