'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Footer from '@/components/footer';

const faqs = [
  { question: 'How can I track my shipment?', answer: "Once your shipment is booked, you will receive a tracking number and a link to our real-time tracking portal. You can monitor your cargo's location, estimated arrival, and status updates 24/7 from any device." },
  { question: 'What is your typical delivery time?', answer: 'Delivery times vary depending on the origin, destination, and shipping method. Ocean freight typically takes 15–45 days for international routes, while land transport within the region is usually 2–7 days.' },
  { question: 'Do you ship internationally?', answer: 'Yes, Gize PLC operates across more than 50 countries spanning Africa, Asia, Europe, and the Americas. Our global network enables seamless cross-border logistics for businesses of all sizes.' },
  { question: 'How do you calculate shipping costs?', answer: 'Shipping costs depend on cargo weight and volume, origin and destination, shipping method (FCL/LCL, air, sea, or land), and any special handling requirements. Contact our sales team for a detailed, competitive quote.' },
  { question: 'What payment methods do you accept?', answer: 'We accept bank transfers (wire), letters of credit, and approved corporate credit accounts. For regular clients, we offer flexible payment terms including net-30 and net-60 arrangements.' },
  { question: 'How do I contact customer service?', answer: 'You can reach our customer service team 24/7 via phone at +251 11 234 5678, email at info@gizeplc.com, or through the contact form on our website.' },
  { question: 'What types of cargo do you handle?', answer: 'We handle general merchandise, perishable goods (temperature-controlled), hazardous materials (with proper certifications), oversized equipment, and bulk commodities.' },
  { question: 'Do you offer warehousing services?', answer: 'Yes, we operate multiple warehouse facilities with climate control, inventory management systems, and value-added services such as pick-and-pack, labeling, and quality inspection.' },
  { question: 'What happens if my shipment is damaged or lost?', answer: 'We offer comprehensive cargo insurance options. In the rare event of damage or loss, our dedicated claims team works quickly to investigate, document, and process your claim.' },
  { question: 'Can you handle customs clearance?', answer: 'Absolutely. Our licensed customs brokers handle all aspects of import and export clearance, ensuring compliance with local and international trade regulations.' },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section className="bg-gize-navy pt-24 pb-20 lg:pt-32 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><svg className="w-full h-full" viewBox="0 0 1200 400"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6"><div className="h-[2px] w-12 bg-gize-orange" /><span className="text-gize-orange font-semibold uppercase tracking-[0.2em] text-sm">Support Center</span><div className="h-[2px] w-12 bg-gize-orange" /></div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Frequently Asked <span className="text-gize-orange">Questions</span></h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Find answers to common questions about our services, shipping processes, payments, and more.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.04 }} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gize-red/20 transition-colors duration-300">
                <button onClick={() => toggle(index)} className="w-full flex items-center justify-between p-5 sm:p-6 text-left group" aria-expanded={openIndex === index}>
                  <span className="text-gize-navy font-semibold text-base pr-4 group-hover:text-gize-red transition-colors duration-300">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-gize-red text-white' : 'bg-gize-light text-gize-red group-hover:bg-red-50'}`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0"><div className="h-[1px] bg-gray-100 mb-4" /><p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-16 bg-gize-light rounded-2xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-gize-navy mb-3">Still have questions?</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">Our team is here to help. Reach out and we&apos;ll get back to you within 24 hours.</p>
            <Link href="/contact"><Button className="bg-gize-red hover:bg-red-700 text-white px-8 py-3 font-bold uppercase tracking-wide rounded-none h-auto text-sm">Contact Us</Button></Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
