'use client';

import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ─── slide data ─── */
const slides = [
  {
    image: '/images/hero-port.jpg',
    alt: 'Gize PLC shipping port',
    tag: 'Private Limited Company',
    headline: <>Global Logistics <span className="text-gize-orange">Solutions</span></>,
    description: 'End-to-end shipping, warehousing, and supply chain management designed for businesses that demand reliability and efficiency.',
  },
  {
    image: '/images/containers-aerial.jpg',
    alt: 'Container terminal operations',
    tag: 'Warehousing & Distribution',
    headline: <>Smart <span className="text-gize-orange">Warehousing</span></>,
    description: 'State-of-the-art facilities with climate control, real-time inventory management, and strategic placement near major transport hubs.',
  },
  {
    image: '/images/ocean-shipping.jpg',
    alt: 'Ocean freight vessel',
    tag: 'Ocean & Land Freight',
    headline: <>Cross-Border <span className="text-gize-orange">Excellence</span></>,
    description: 'From ocean freight to last-mile delivery, we connect your business to markets across the globe with precision and care.',
  },
];

/* ─── count-up hook (runs once on mount) ─── */
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
      else setCount(target);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration]);

  return count;
}

/* ─── stat counter (counts up once, stays static after) ─── */
function StatCounter({ target, suffix, prefix, label }: {
  target: number; suffix?: string; prefix?: string; label: string;
}) {
  const count = useCountUp(target, 2200);

  return (
    <div>
      <div className="text-2xl sm:text-3xl font-bold text-gize-orange tabular-nums">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-white/70 uppercase tracking-wide mt-1">{label}</div>
    </div>
  );
}

/* ─── slide interval ─── */
const INTERVAL = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = slides.length;

  const goTo = useCallback((i: number) => setCurrent((i + total) % total), [total]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* auto-advance */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── backgrounds ── */}
      <div className="absolute inset-0 z-0 bg-gize-navy" />

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 z-[1]"
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* persistent overlays */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-gize-navy via-gize-navy/90 to-gize-navy/50 pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-black/10 to-black/30 pointer-events-none" />

      {/* decorative blurs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gize-orange/10 rounded-full blur-3xl z-[2] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gize-red/10 rounded-full blur-3xl z-[2] pointer-events-none" />

      {/* ── content ── */}
      <div className="relative z-10 max-w-7xl lg:mx-0 lg:pl-20 lg:pr-8 mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-2xl">
          {/* slide-specific text (animated per slide) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-gize-orange" />
                <span className="text-gize-orange font-semibold uppercase tracking-[0.2em] text-sm">
                  {slide.tag}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                {slide.headline}
              </h1>

              <p className="text-lg sm:text-xl text-white/90 max-w-xl mb-10 leading-relaxed">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTAs + stats — static, never re-render on slide change */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo('#services')}
                className="bg-gize-red hover:bg-red-700 text-white px-8 py-3.5 text-base font-bold uppercase tracking-wide rounded-none h-auto cursor-pointer"
              >
                Our Services
              </Button>
              <Button
                onClick={() => scrollTo('#contact')}
                className="bg-white text-gize-navy hover:bg-white/90 px-8 py-3.5 text-base font-bold uppercase tracking-wide rounded-none h-auto cursor-pointer"
              >
                Contact Us
              </Button>
            </div>

            <div className="flex gap-8 sm:gap-12 mt-14 pt-8 border-t border-white/20">
              <StatCounter target={25} suffix="+" label="Years Experience" />
              <StatCounter target={50} suffix="+" label="Countries Served" />
              <StatCounter target={10} suffix="K+" label="Shipments/Year" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── arrows ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
      >
        <ChevronRight size={22} />
      </button>

      {/* ── dots ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 cursor-pointer ${
              i === current
                ? 'w-8 h-2.5 bg-gize-orange'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
