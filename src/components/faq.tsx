'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'How can I track my shipment?',
    answer:
      'Once your shipment is booked, you will receive a tracking number and a link to our real-time tracking portal. You can monitor your cargo\'s location, estimated arrival, and status updates 24/7 from any device.',
  },
  {
    question: 'What is your typical delivery time?',
    answer:
      'Delivery times vary depending on the origin, destination, and shipping method. Ocean freight typically takes 15–45 days for international routes, while land transport within the region is usually 2–7 days. We provide accurate ETAs at the time of booking.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes, Gize PLC operates across more than 50 countries spanning Africa, Asia, Europe, and the Americas. Our global network of partners and owned infrastructure enables seamless cross-border logistics for businesses of all sizes.',
  },
  {
    question: 'How do you calculate shipping costs?',
    answer:
      'Shipping costs depend on several factors including cargo weight and volume, origin and destination, shipping method (FCL/LCL, air, sea, or land), and any special handling requirements. Contact our sales team for a detailed, competitive quote tailored to your needs.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers (wire), letters of credit, and approved corporate credit accounts. For regular clients, we offer flexible payment terms. All transactions are processed securely and transparently.',
  },
  {
    question: 'How do I contact customer service?',
    answer:
      'You can reach our customer service team 24/7 via phone, email, or through the contact form on this website. We also provide a dedicated account manager for all contracted clients to ensure personalized support.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" className="bg-gize-light py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gize-red font-semibold uppercase tracking-[0.25em] text-sm">
            Support
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gize-navy mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mt-4">
            Find answers to common questions about our services, shipping, and logistics.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gize-red/20 transition-colors duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="text-gize-navy font-semibold text-base pr-4 group-hover:text-gize-red transition-colors duration-300">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gize-red text-white rotate-0'
                      : 'bg-gize-light text-gize-red group-hover:bg-red-50'
                  }`}
                >
                  {openIndex === index ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                      <div className="h-[1px] bg-gray-100 mb-4" />
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">Do you have more questions?</p>
          <Button
            onClick={scrollToContact}
            className="bg-gize-red hover:bg-red-700 text-white px-8 py-3 font-bold uppercase tracking-wide rounded-none h-auto text-sm"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
