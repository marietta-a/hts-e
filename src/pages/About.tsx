import React from 'react';
import PageHeader from '../components/PageHeader';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Target className="w-10 h-10 text-blue-600" />,
      title: 'Our Mission',
      desc: 'To provide high-quality, innovative, and sustainable engineering solutions that exceed client expectations and contribute to the development of our community.'
    },
    {
      icon: <Eye className="w-10 h-10 text-blue-600" />,
      title: 'Our Vision',
      desc: 'To be the leading construction and engineering firm in Central Africa, recognized for excellence, integrity, and transformative infrastructure.'
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: 'Our Values',
      desc: 'Integrity, Quality, Safety, and Innovation are the pillars of our operations. We believe in building lasting relationships through transparency.'
    }
  ];

  return (
    <div>
      <PageHeader 
        title={t('nav.about')} 
        subtitle="Excellence in Engineering and Construction since 2015"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Profile</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                HIGH-TOP STRUCTURES ENGINEERING (HTS-E) & PARTNERS LTD is a premier construction and engineering firm based in Bamenda, Cameroon. Registered under RC/BDA/2015/B/042, we have established ourselves as a reliable partner for both public and private sector projects.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our multi-disciplinary team of engineers, architects, and project managers work in synergy to deliver complex infrastructural developments, from modern residential complexes to critical public infrastructure.
              </p>
              <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600">
                <p className="text-blue-900 font-medium italic">
                  "We don't just build structures; we build trust and lasting legacies for the next generation."
                </p>
                <p className="text-blue-700 mt-2 font-bold">— Management Team</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" 
                alt="Engineering" 
                className="rounded-2xl shadow-lg h-64 w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1000" 
                alt="Construction" 
                className="rounded-2xl shadow-lg h-64 w-full object-cover mt-8"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Driven by passion and expertise, our team is committed to delivering excellence in every project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]">
                  <img 
                    src={`https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000`} 
                    alt="Team member" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Executive Member {i}</h4>
                <p className="text-blue-600 font-medium">Senior Engineer</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
