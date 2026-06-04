import React from 'react';
import PageHeader from '../components/PageHeader';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Ruler, HardHat, Briefcase, Building2, Truck, ArrowRight, Code, Smartphone, ExternalLink, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import hymnalImage from '../assets/images/cameroon_hymnal_story_1780574996382.png';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'design-build',
      icon: <Ruler className="w-12 h-12" />,
      title: t('services.designBuild'),
      desc: t('services.designBuildDesc'),
      details: [
        'Architectural Design & Planning',
        'Structural Engineering',
        'Infrastructural Development',
        'Concept to Completion Management'
      ],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=60'
    },
    {
      id: 'contractors',
      icon: <HardHat className="w-12 h-12" />,
      title: t('services.contractors'),
      desc: t('services.contractorsDesc'),
      details: [
        'Residential Construction',
        'Commercial Buildings',
        'Public Infrastructure Projects',
        'Renovation & Remodeling'
      ],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=60'
    },
    {
      id: 'consultancy',
      icon: <Briefcase className="w-12 h-12" />,
      title: t('services.consultancy'),
      desc: t('services.consultancyDesc'),
      details: [
        'Project Management',
        'Feasibility Studies',
        'Engineering Advisory',
        'Cost Estimation & Budgeting'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=60'
    },
    {
      id: 'real-estate',
      icon: <Building2 className="w-12 h-12" />,
      title: t('services.realEstate'),
      desc: t('services.realEstateDesc'),
      details: [
        'Property Development',
        'Real Estate Investment Advisory',
        'Residential Estates',
        'Commercial Space Development'
      ],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=60'
    },
    {
      id: 'procurement',
      icon: <Truck className="w-12 h-12" />,
      title: t('services.procurement'),
      desc: t('services.procurementDesc'),
      details: [
        'Construction Equipment Supply',
        'Building Materials Procurement',
        'Logistics & Distribution',
        'Assorted Engineering Tools'
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=60'
    },
    {
      id: 'software-dev',
      icon: <Code className="w-12 h-12" />,
      title: t('services.softwareDev'),
      desc: t('services.softwareDevDesc'),
      details: [
        'Custom Web & Mobile App Architecture',
        'Intuitive UI/UX Design & Prototyping',
        'Multiplatform Mobile Development (iOS & Android)',
        'Open-Source community utility apps & toolkits'
      ],
      image: hymnalImage,
      isSoftware: true,
      products: [
        {
          name: 'Cameroon Hymnal (Google Play Store)',
          url: 'https://play.google.com/store/apps/details?id=com.hymnal.cameroon',
          platform: 'Android'
        },
        {
          name: 'Cameroon Hymnal (Apple App Store)',
          url: 'https://apps.apple.com/us/app/cameroon-hymnal/id6762371454',
          platform: 'iOS'
        },
        {
          name: 'Radiant Glow (Google Play Store)',
          url: 'https://play.google.com/store/apps/details?id=com.radiantglow',
          platform: 'Android'
        }
      ],
      contact: {
        email: 'akumbom5ma@gmail.com',
        phone: '+237 671143399'
      }
    }
  ];

  return (
    <div>
      <PageHeader 
        title={t('nav.services')} 
        subtitle="Comprehensive Engineering and Construction Solutions"
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center space-x-3 text-gray-800 font-medium">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {service.isSoftware ? (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-extrabold text-blue-600 text-xs uppercase tracking-wider bg-blue-50 inline-block px-3 py-1.5 rounded-full border border-blue-100">
                          Our Published Apps & Products
                        </h4>
                        <div className="grid grid-cols-1 gap-2.5 sm:max-w-md">
                          {service.products?.map((product, pIdx) => (
                            <a
                              key={pIdx}
                              href={product.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3.5 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-xl transition-all group/prod text-sm font-semibold"
                            >
                              <div className="flex items-center space-x-2.5">
                                <Smartphone size={16} className="text-gray-400 group-hover/prod:text-blue-600 transition-colors" />
                                <span className="text-gray-800 group-hover/prod:text-gray-900">{product.name}</span>
                              </div>
                              <ExternalLink size={14} className="text-gray-400 group-hover/prod:text-blue-600 translate-x-0 group-hover/prod:translate-x-0.5 transition-all" />
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="font-extrabold text-gray-950 text-xs uppercase tracking-wider mb-2.5">
                          Direct Software Services Contact
                        </h4>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a 
                            href={`mailto:${service.contact?.email}`} 
                            className="inline-flex items-center bg-white border border-gray-200 hover:border-blue-300 px-4 py-2.5 rounded-xl font-bold text-xs text-gray-750 hover:text-blue-600 transition-all gap-2 shadow-xs"
                          >
                            <Mail size={14} className="text-blue-600" />
                            {service.contact?.email}
                          </a>
                          <a 
                            href={`tel:${service.contact?.phone}`} 
                            className="inline-flex items-center bg-white border border-gray-200 hover:border-blue-300 px-4 py-2.5 rounded-xl font-bold text-xs text-gray-750 hover:text-blue-600 transition-all gap-2 shadow-xs"
                          >
                            <Phone size={14} className="text-blue-600" />
                            {service.contact?.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all group"
                    >
                      Request a Quote
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Our expert team is ready to provide you with a detailed consultation and a competitive quote for your construction needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-5 rounded-2xl font-extrabold text-xl transition-all shadow-xl hover:shadow-2xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
