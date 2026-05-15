'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Head Office',
    details: ['Addis Ababa, Ethiopia', 'Bole Road, Atlas Building'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+251 11 234 5678', '+251 91 234 5678'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@gizeplc.com', 'sales@gizeplc.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon–Fri: 8:00 AM – 6:00 PM', 'Sat: 9:00 AM – 1:00 PM'],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. Our team will get back to you within 24 hours.',
    });

    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setSubmitting(false);
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gize-red font-semibold uppercase tracking-[0.25em] text-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gize-navy mt-3">
            Contact Us
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-4">
            Ready to streamline your logistics? Get in touch with our team for a 
            free consultation and custom quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gize-red/10 rounded-xl flex items-center justify-center">
                    <item.icon className="text-gize-red" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gize-navy text-sm uppercase tracking-wide">
                      {item.title}
                    </h4>
                    {item.details.map((detail) => (
                      <p key={detail} className="text-gray-500 text-sm mt-0.5">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map placeholder / Decorative */}
            <div className="mt-10 bg-gize-navy rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <defs>
                    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="text-gize-orange" size={18} />
                  <span className="text-white font-semibold text-sm">Our Location</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Bole Road, Atlas Building<br />
                  Addis Ababa, Ethiopia
                </p>
                <div className="mt-4 h-[1px] bg-white/10" />
                <p className="text-white/40 text-xs mt-3">
                  Serving clients across Africa, Asia, Europe & the Americas
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-gize-light rounded-2xl p-6 sm:p-8 lg:p-10">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-gize-navy font-semibold text-sm mb-2">
                    Full Name <span className="text-gize-red">*</span>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-white border-gray-200 focus:border-gize-red rounded-lg h-11 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gize-navy font-semibold text-sm mb-2">
                    Email <span className="text-gize-red">*</span>
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="bg-white border-gray-200 focus:border-gize-red rounded-lg h-11 text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-gize-navy font-semibold text-sm mb-2">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+251 91 234 5678"
                    className="bg-white border-gray-200 focus:border-gize-red rounded-lg h-11 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gize-navy font-semibold text-sm mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-lg h-11 px-3 text-sm text-gray-700 focus:border-gize-red focus:outline-none focus:ring-1 focus:ring-gize-red/20 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="ocean">Ocean Shipping</option>
                    <option value="warehousing">Warehousing</option>
                    <option value="land">Land Transport</option>
                    <option value="customs">Customs Brokerage</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gize-navy font-semibold text-sm mb-2">
                  Message <span className="text-gize-red">*</span>
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your shipping needs..."
                  required
                  rows={5}
                  className="bg-white border-gray-200 focus:border-gize-red rounded-lg text-sm resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="bg-gize-red hover:bg-red-700 text-white w-full sm:w-auto px-10 py-3 font-bold uppercase tracking-wide rounded-none h-auto text-sm disabled:opacity-60"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
