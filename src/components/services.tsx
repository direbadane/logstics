'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Ship, Warehouse, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: Ship,
    title: 'Ocean Shipping',
    slug: 'ocean-shipping',
    description:
      'Reliable sea freight solutions connecting major ports worldwide. Full container load (FCL) and less-than-container load (LCL) options tailored to your needs.',
    image: '/images/ocean-shipping.jpg',
    features: ['Full & Partial Containers', 'Port-to-Port Delivery', 'Real-time Tracking'],
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    slug: 'warehousing',
    description:
      'State-of-the-art warehouse facilities with climate control, inventory management, and distribution services strategically located near major transport hubs.',
    image: '/images/warehousing.jpg',
    features: ['Climate Controlled', 'Inventory Management', 'Pick & Pack'],
  },
  {
    icon: Truck,
    title: 'Land Transport',
    slug: 'land-transport',
    description:
      'Comprehensive ground transportation network offering full truckload, less-than-truckload, and last-mile delivery solutions across multiple regions.',
    image: '/images/logistics-truck.jpg',
    features: ['Full Truckload', 'Cross-border Transport', 'Last-mile Delivery'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      {/* Section Header */}
      <div className="bg-gize-red py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-white/70 font-semibold uppercase tracking-[0.25em] text-sm">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Discover Our Services
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              End-to-end logistics solutions designed for success — from the first mile to the last.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={`/services/${service.slug}`} className="block group">
                <div className="bg-white border border-gray-100 hover:border-gize-red/20 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gize-navy/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-gize-red rounded-lg flex items-center justify-center shadow-lg">
                      <service.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gize-navy mb-3 group-hover:text-gize-red transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gize-orange rounded-full flex-shrink-0" />
                          <span className="text-gray-500 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-gize-red font-semibold text-sm group-hover:gap-3 transition-all duration-300 gap-1">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link href="/services">
            <button className="bg-gize-navy hover:bg-gize-navy/90 text-white px-10 py-3.5 font-bold uppercase tracking-wide h-auto text-sm cursor-pointer transition-colors">
              View All Services <ArrowRight size={16} className="ml-2 inline" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
