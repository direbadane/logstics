'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const connectItems = [
  { label: 'People', description: 'Our dedicated team of logistics experts' },
  { label: 'Resources', description: 'A global network of ports, warehouses & fleets' },
  { label: 'Systems', description: 'Cutting-edge technology for real-time tracking' },
];

function WireframeGlobe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        className="w-full h-full animate-rotate-slow"
        viewBox="0 0 400 400"
        fill="none"
      >
        {/* Outer rings */}
        <circle cx="200" cy="200" r="185" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <circle cx="200" cy="200" r="160" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

        {/* Globe outline */}
        <circle cx="200" cy="200" r="130" stroke="rgba(255,107,53,0.35)" strokeWidth="1.5" />

        {/* Meridians */}
        <ellipse cx="200" cy="200" rx="45" ry="130" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
        <ellipse cx="200" cy="200" rx="85" ry="130" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        <ellipse cx="200" cy="200" rx="130" ry="130" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />

        {/* Parallels */}
        <ellipse cx="200" cy="200" rx="130" ry="42" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
        <ellipse cx="200" cy="200" rx="130" ry="85" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        <line x1="70" y1="200" x2="330" y2="200" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />

        {/* Connection dots */}
        <circle cx="155" cy="120" r="4" fill="#FF6B35" />
        <circle cx="290" cy="155" r="4" fill="#E63946" />
        <circle cx="130" cy="245" r="4" fill="#0077B6" />
        <circle cx="270" cy="260" r="3.5" fill="#FF6B35" />
        <circle cx="200" cy="85" r="3.5" fill="#E63946" />
        <circle cx="240" cy="320" r="3" fill="#0077B6" />
        <circle cx="100" cy="180" r="3" fill="#FF6B35" />

        {/* Connection lines */}
        <line x1="155" y1="120" x2="290" y2="155" stroke="#FF6B35" strokeWidth="0.8" opacity="0.4" />
        <line x1="290" y1="155" x2="270" y2="260" stroke="#E63946" strokeWidth="0.8" opacity="0.4" />
        <line x1="130" y1="245" x2="155" y2="120" stroke="#0077B6" strokeWidth="0.8" opacity="0.4" />
        <line x1="200" y1="85" x2="270" y2="260" stroke="#E63946" strokeWidth="0.8" opacity="0.25" />
        <line x1="100" y1="180" x2="290" y2="155" stroke="#FF6B35" strokeWidth="0.8" opacity="0.25" />
        <line x1="240" y1="320" x2="155" y2="120" stroke="#0077B6" strokeWidth="0.8" opacity="0.25" />
      </svg>

      {/* Center pulse */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-3 h-3 bg-gize-orange rounded-full animate-ping opacity-30" />
      </div>
    </div>
  );
}

export default function WeConnect() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative bg-gize-navy py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 400">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circle */}
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-gize-blue/10 rounded-full blur-3xl" />
      <div className="absolute -left-32 -bottom-32 w-80 h-80 bg-gize-red/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-gize-orange" />
              <span className="text-gize-orange font-semibold uppercase tracking-[0.2em] text-sm">
                Our Mission
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              We{' '}
              <span className="text-gize-orange">Connect</span>
            </h2>

            <p className="text-white/70 text-lg max-w-md mb-10 leading-relaxed">
              Bridging the gap between supply and demand with seamless logistics 
              infrastructure across continents.
            </p>

            {/* Connect Items */}
            <div className="space-y-6">
              {connectItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gize-red/20 border border-gize-red/30 rounded-lg flex items-center justify-center group-hover:bg-gize-red group-hover:border-gize-red transition-colors duration-300">
                    <span className="text-gize-orange group-hover:text-white font-bold text-sm transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg uppercase tracking-wide">
                      {item.label}
                    </h3>
                    <p className="text-white/50 text-sm mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Wireframe Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 lg:w-[440px] lg:h-[440px]">
              <WireframeGlobe />
              {/* Hub label */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 pointer-events-none">
                <div className="w-2 h-2 bg-gize-red rounded-full" />
                <span className="text-white/40 text-[10px] uppercase tracking-[0.15em] font-medium whitespace-nowrap">Hub: Addis Ababa</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
