import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: 'Phone Numbers',
      details: ['678 723 844', '655 660 340'],
      desc: 'Available Mon-Sat, 8am-6pm'
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: 'Email Address',
      details: ['info@hts-e.com', 'contact@hts-e.com'],
      desc: 'We respond within 24 hours'
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: 'Office Location',
      details: ['NEW ROAD NKWEN, BAMENDA'],
      desc: 'Mezam Division, North West Region'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      desc: 'Closed on Sundays & Public Holidays'
    }
  ];

  return (
    <div>
      <PageHeader 
        title={t('nav.contact')} 
        subtitle="Get in Touch with Our Expert Engineering Team"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2070"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you have a question about our services, need a project quote, or want to discuss a partnership, we're here to help.
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, j) => (
                        <p key={j} className="text-gray-700 font-medium">{detail}</p>
                      ))}
                      <p className="text-xs text-gray-500 mt-1">{info.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('contact.form.success')}</h3>
                    <p className="text-gray-600 mb-8">Our team will review your message and get back to you shortly.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-500 transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">{t('contact.form.name')}</label>
                        <input
                          type="text"
                          required
                          className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">{t('contact.form.email')}</label>
                        <input
                          type="email"
                          required
                          className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">{t('contact.form.phone')}</label>
                      <input
                        type="tel"
                        className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="+237 6XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">{t('contact.form.message')}</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-5 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>{t('contact.form.submit')}</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                    {status === 'error' && (
                      <p className="text-red-500 text-sm font-bold text-center">Something went wrong. Please try again.</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our services and processes.</p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What areas do you serve?",
                a: "We are primarily based in Bamenda, but we handle projects across the North West region and other parts of Cameroon depending on the project scale."
              },
              {
                q: "How do I request a quote?",
                a: "You can use the contact form above, call our office directly, or visit us at our Nkwen office. We typically provide initial estimates within 3-5 business days."
              },
              {
                q: "Are you a registered engineering firm?",
                a: "Yes, HIGH-TOP STRUCTURES ENGINEERING (HTS-E) & PARTNERS LTD is fully registered (RC/BDA/2015/B/042) and compliant with all local construction regulations."
              },
              {
                q: "Do you handle small residential renovations?",
                a: "Yes, while we handle large infrastructural projects, we also have a dedicated team for residential renovations and remodeling."
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <h4 className="font-bold text-gray-900 mb-3 text-lg">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="h-[500px] w-full bg-gray-200 relative">
        {/* Placeholder for Google Maps - Using an iframe for Bamenda location */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15886.643336822452!2d10.160000000000002!3d5.960000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f401968888889%3A0x8888888888888888!2sBamenda%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1625648000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="HTS-E Office Location"
        ></iframe>
        <div className="absolute top-8 left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs hidden md:block border border-gray-100">
          <h4 className="font-bold text-gray-900 mb-2">Our Office</h4>
          <p className="text-sm text-gray-600 mb-4">NEW ROAD NKWEN, BAMENDA, North West Region, Cameroon</p>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 text-sm font-bold hover:underline"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
