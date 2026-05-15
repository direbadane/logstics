'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Search } from 'lucide-react';

const sidebarLinks = [
  { href: '/contact', label: 'Contact Us', icon: Mail },
  { href: '/track', label: 'Track & Trace', icon: Search },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar - fixed left */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 z-50 w-[70px] bg-gize-navy flex-col items-center py-4 border-r border-white/10">
        {/* Nav Icons - centered vertically */}
        <div className="flex-1 flex flex-col items-center justify-center gap-3">
          {sidebarLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                title={link.label}
                className={`relative w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 group ${
                  isActive
                    ? 'bg-gize-red text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <link.icon size={20} />
                {/* Tooltip */}
                <span className="absolute left-full ml-3 px-2 py-1 bg-gize-navy text-white text-xs font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  {link.label}
                </span>
                {/* Active indicator */}
                {isActive && (
                  <span className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-[3px] h-6 bg-gize-orange rounded-r-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Decorative bottom line */}


      </aside>

      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gize-navy/95 backdrop-blur-md border-t border-white/10">
        <div className="flex items-center justify-around py-2 px-4">
          {sidebarLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'text-gize-orange'
                    : 'text-white/50 active:text-white'
                }`}
              >
                <link.icon size={20} />
                <span className="text-[10px] font-medium uppercase tracking-wider">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
