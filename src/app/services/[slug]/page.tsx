'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getServiceBySlug, allServices } from '@/lib/services-data';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import { notFound } from 'next/navigation';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!service) notFound();

  const currentIndex = allServices.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? allServices[currentIndex - 1] : null;
  const nextService = currentIndex < allServices.length - 1 ? allServices[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Banner */}
      <section className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gize-navy" />
        <Image src={service.image} alt={service.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-gize-navy via-gize-navy/60 to-gize-navy/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link href="/services" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-4 transition-colors">
                <ArrowLeft size={14} /> All Services
              </Link>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gize-red rounded-lg flex items-center justify-center">
                  <service.icon className="text-white" size={20} />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{service.title}</h1>
                  <div className="flex items-center gap-2 text-white/60 text-sm mt-1">
                    <span className="text-gize-orange font-bold text-base">{service.stats.stat}</span>
                    <span>{service.stats.label}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-2">
              <h2 className="text-lg font-bold text-gize-navy mb-3 uppercase tracking-wide">Overview</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">{service.fullDescription}</p>
              <Link href="/contact">
                <button className="bg-gize-red hover:bg-red-700 text-white px-8 py-3 font-bold uppercase tracking-wide h-auto text-sm cursor-pointer transition-colors">
                  Get a Quote <ArrowRight size={16} className="ml-2 inline" />
                </button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="text-lg font-bold text-gize-navy mb-4 uppercase tracking-wide">Key Features</h2>
              <div className="space-y-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 p-3 bg-gize-light rounded-lg">
                    <div className="w-2 h-2 bg-gize-red rounded-full flex-shrink-0 mt-1.5" />
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevService ? (
              <Link href={`/services/${prevService.slug}`} className="group flex items-center gap-3 text-gray-500 hover:text-gize-navy transition-colors">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <div><span className="text-xs uppercase tracking-wider text-gray-400">Previous</span><p className="font-semibold text-sm">{prevService.title}</p></div>
              </Link>
            ) : <div />}
            {nextService ? (
              <Link href={`/services/${nextService.slug}`} className="group flex items-center gap-3 text-gray-500 hover:text-gize-navy transition-colors text-right">
                <div><span className="text-xs uppercase tracking-wider text-gray-400">Next</span><p className="font-semibold text-sm">{nextService.title}</p></div>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gize-red py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Every business is unique. Let our team design a tailored logistics plan.</p>
          <Link href="/contact"><button className="bg-white text-gize-navy hover:bg-white/90 px-10 py-3.5 font-bold uppercase tracking-wide h-auto text-base cursor-pointer">Contact Our Team</button></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
