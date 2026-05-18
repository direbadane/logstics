'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 md:left-[70px] right-0 z-40 ${
        scrolled || !isHome
          ? 'bg-white shadow-md py-3'
          : 'bg-gradient-to-b from-black/30 to-transparent py-5'
      }`}
      style={{ transition: 'padding 0.3s ease, background 0.3s ease, box-shadow 0.3s ease' }}
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-[120px] sm:w-[140px] h-8 sm:h-10 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Gize PLC"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const showWhite = !scrolled && isHome;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-gize-red ${
                    isActive
                      ? 'text-gize-red'
                      : showWhite ? 'text-white' : 'text-gize-dark'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact">
              <Button className="bg-gize-red hover:bg-red-700 text-white px-6 py-2 text-sm font-bold uppercase tracking-wide rounded-none">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="text-gize-navy" size={24} />
            ) : (
              <Menu className={(!scrolled && isHome) ? 'text-white' : 'text-gize-navy'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-2xl animate-fade-in-up">
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMobile}
                    className={`font-medium text-base py-3 px-4 rounded-lg transition-colors ${
                      isActive
                        ? 'text-gize-red bg-red-50'
                        : 'text-gize-dark hover:text-gize-red hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/track" onClick={closeMobile} className="font-medium text-base py-3 px-4 rounded-lg text-gize-dark hover:text-gize-orange hover:bg-gray-50 transition-colors">
                Track & Trace
              </Link>
              <Link href="/contact" onClick={closeMobile}>
                <Button className="bg-gize-red hover:bg-red-700 text-white w-full mt-1 py-3 font-bold uppercase tracking-wide rounded-none">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
