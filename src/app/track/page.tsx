'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, Truck, Ship, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Footer from '@/components/footer';

const demoTracking = {
  trackingNumber: 'GZ-2024-005847', status: 'In Transit', origin: 'Shanghai, China', destination: 'Addis Ababa, Ethiopia', estimatedDelivery: 'May 15, 2026', shipmentType: 'Ocean Freight (FCL)', weight: '12,400 kg', container: 'MSKU-2847193',
  timeline: [
    { date: 'Apr 28, 2026', time: '09:15 AM', location: 'Djibouti Port', event: 'Container loaded onto vessel', status: 'current', icon: Ship },
    { date: 'Apr 25, 2026', time: '02:30 PM', location: 'Djibouti Port', event: 'Arrived at transshipment hub', status: 'completed', icon: MapPin },
    { date: 'Apr 20, 2026', time: '11:00 AM', location: 'Shanghai, China', event: 'Container departed origin port', status: 'completed', icon: Ship },
    { date: 'Apr 18, 2026', time: '03:45 PM', location: 'Shanghai, China', event: 'Customs clearance completed', status: 'completed', icon: CheckCircle2 },
    { date: 'Apr 15, 2026', time: '10:00 AM', location: 'Shanghai, China', event: 'Shipment picked up from warehouse', status: 'completed', icon: Truck },
    { date: 'Apr 12, 2026', time: '09:00 AM', location: 'Shanghai, China', event: 'Booking confirmed', status: 'completed', icon: Package },
  ],
};

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState('');
  const [result, setResult] = useState<typeof demoTracking | null>(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setResult(demoTracking);
    setSearched(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section className="bg-gize-navy pt-24 pb-20 lg:pt-32 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><svg className="w-full h-full" viewBox="0 0 1200 400"><defs><pattern id="track-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#track-grid)" /></svg></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-3 mb-6"><div className="h-[2px] w-12 bg-gize-orange" /><span className="text-gize-orange font-semibold uppercase tracking-[0.2em] text-sm">Real-Time Visibility</span><div className="h-[2px] w-12 bg-gize-orange" /></div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Track & <span className="text-gize-orange">Trace</span></h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Enter your tracking number to get real-time updates on your shipment.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gize-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form onSubmit={handleTrack} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative"><Package className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} /><Input value={trackingId} onChange={(e) => setTrackingId(e.target.value)} placeholder="Enter tracking number (e.g. GZ-2024-005847)" className="w-full h-14 pl-12 pr-4 text-base bg-white border-gray-200 rounded-lg focus:border-gize-red" /></div>
            <Button type="submit" disabled={loading || !trackingId.trim()} className="bg-gize-red hover:bg-red-700 text-white h-14 px-8 font-bold uppercase tracking-wide rounded-lg text-sm disabled:opacity-60">
              {loading ? <span className="flex items-center gap-2"><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Tracking...</span> : <span className="flex items-center gap-2"><Search size={18} />Track</span>}
            </Button>
          </motion.form>
          <p className="text-center text-gray-400 text-sm mt-4">Try <button onClick={() => setTrackingId('GZ-2024-005847')} className="text-gize-red hover:underline font-medium">GZ-2024-005847</button> for a demo</p>
        </div>
      </section>

      {searched && result && (
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="bg-gize-navy rounded-2xl p-6 sm:p-8 mb-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div><p className="text-white/50 text-sm uppercase tracking-wider mb-1">Tracking Number</p><p className="text-white font-bold text-lg font-mono">{result.trackingNumber}</p></div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-gize-orange/20 text-gize-orange"><div className="w-2 h-2 rounded-full bg-gize-orange animate-pulse" />{result.status}</div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-xl p-4"><div className="flex items-center gap-2 mb-2"><MapPin size={14} className="text-gize-orange" /><span className="text-white/40 text-xs uppercase tracking-wider">Origin</span></div><p className="text-white font-semibold text-sm">{result.origin}</p></div>
                  <div className="bg-white/5 rounded-xl p-4"><div className="flex items-center gap-2 mb-2"><MapPin size={14} className="text-gize-red" /><span className="text-white/40 text-xs uppercase tracking-wider">Destination</span></div><p className="text-white font-semibold text-sm">{result.destination}</p></div>
                  <div className="bg-white/5 rounded-xl p-4"><div className="flex items-center gap-2 mb-2"><Clock size={14} className="text-gize-blue" /><span className="text-white/40 text-xs uppercase tracking-wider">ETA</span></div><p className="text-white font-semibold text-sm">{result.estimatedDelivery}</p></div>
                  <div className="bg-white/5 rounded-xl p-4"><div className="flex items-center gap-2 mb-2"><Ship size={14} className="text-gize-orange" /><span className="text-white/40 text-xs uppercase tracking-wider">Type</span></div><p className="text-white font-semibold text-sm">{result.shipmentType}</p></div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gize-navy mb-6">Shipment Timeline</h2>
              <div className="relative"><div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-100" />
                <div className="space-y-0">{result.timeline.map((event, index) => {
                  const Icon = event.icon; const isCurrent = event.status === 'current';
                  return (
                    <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} className="relative flex gap-4 pb-8 last:pb-0">
                      <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${isCurrent ? 'bg-gize-orange text-white shadow-lg shadow-gize-orange/30' : 'bg-white text-gize-navy border-2 border-gray-100'}`}><Icon size={18} /></div>
                      <div className="pt-1 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1"><h3 className={`font-bold text-sm ${isCurrent ? 'text-gize-orange' : 'text-gize-navy'}`}>{event.event}</h3><span className="text-gray-400 text-xs whitespace-nowrap">{event.date} · {event.time}</span></div>
                        <div className="flex items-center gap-1.5 text-gray-500 text-sm"><MapPin size={12} /><span>{event.location}</span></div>
                        {isCurrent && <span className="inline-flex items-center gap-1 mt-2 text-gize-orange text-xs font-semibold uppercase tracking-wider"><span className="w-1.5 h-1.5 bg-gize-orange rounded-full animate-pulse" />Current Location</span>}
                      </div>
                    </motion.div>);
                })}</div>
              </div>

              <div className="mt-12 bg-gize-light rounded-2xl p-6 sm:p-8 text-center">
                <h3 className="text-lg font-bold text-gize-navy mb-2">Need Help With Your Shipment?</h3>
                <p className="text-gray-500 text-sm mb-4">Our logistics team is available 24/7 to assist.</p>
                <Link href="/contact"><Button className="bg-gize-red hover:bg-red-700 text-white px-6 py-2.5 font-bold uppercase tracking-wide rounded-none h-auto text-sm">Contact Support</Button></Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}
