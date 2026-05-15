'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { allServices } from '@/lib/services-data';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Page Header */}
      <section className="bg-gize-navy pt-24 pb-20 lg:pt-32 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 400">
            <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-gize-red/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-gize-orange" />
              <span className="text-gize-orange font-semibold uppercase tracking-[0.2em] text-sm">What We Do</span>
              <div className="h-[2px] w-12 bg-gize-orange" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Our <span className="text-gize-orange">Services</span></h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Comprehensive logistics solutions tailored to your business needs.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={`/services/${service.slug}`} className="block group">
                  <div className="bg-white border border-gray-100 hover:border-gize-red/30 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gize-navy/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 w-12 h-12 bg-gize-red rounded-lg flex items-center justify-center shadow-lg">
                        <service.icon className="text-white" size={24} />
                      </div>
                      <div className="absolute bottom-4 right-4 text-right">
                        <div className="text-2xl font-bold text-white">{service.stats.stat}</div>
                        <div className="text-white/70 text-[10px] uppercase tracking-wider">{service.stats.label}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gize-navy mb-2 group-hover:text-gize-red transition-colors duration-300">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                      <div className="flex items-center gap-1 text-gize-red text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                        View Details <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gize-red py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Every business is unique. Let our team design a tailored logistics plan.</p>
          <Link href="/contact">
            <button className="bg-white text-gize-navy hover:bg-white/90 px-10 py-3.5 font-bold uppercase tracking-wide h-auto text-base cursor-pointer transition-colors">Contact Our Team</button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
