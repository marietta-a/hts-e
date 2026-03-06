import React from 'react';
import PageHeader from '../components/PageHeader';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Ruler, HardHat, Briefcase, Building2, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      image: 'https://picsum.photos/seed/design/1000/600'
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
      image: 'https://picsum.photos/seed/construction/1000/600'
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
      image: 'https://picsum.photos/seed/consult/1000/600'
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
      image: 'https://picsum.photos/seed/realestate/1000/600'
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
      image: 'https://picsum.photos/seed/logistics/1000/600'
    }
  ];

  return (
    <div>
      <PageHeader 
        title={t('nav.services')} 
        subtitle="Comprehensive Engineering and Construction Solutions"
        image="https://picsum.photos/seed/services-header/1920/1080"
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
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all group"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
