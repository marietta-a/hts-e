import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ExternalLink, Search, X, MapPin, Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  desc: string;
  detailedDesc: string;
  completionDate: string;
  features: string[];
}

const Portfolio = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'industrial', name: 'Industrial' }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Residential Complex',
      category: 'residential',
      location: 'Nkwen, Bamenda',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000',
      desc: 'A 12-unit luxury apartment complex featuring sustainable design and modern amenities.',
      detailedDesc: 'This project involved the complete design and construction of a high-end residential complex in the heart of Nkwen. The structure incorporates energy-efficient lighting, rainwater harvesting systems, and premium interior finishes. Our team managed everything from site preparation to final landscaping.',
      completionDate: 'December 2025',
      features: ['12 Luxury Units', 'Sustainable Design', 'Underground Parking', '24/7 Security System']
    },
    {
      id: 2,
      title: 'Commercial Plaza',
      category: 'commercial',
      location: 'Commercial Avenue, Bamenda',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      desc: 'A multi-story commercial hub with retail spaces and corporate offices.',
      detailedDesc: 'Located on the busiest street in Bamenda, this commercial plaza was designed to maximize retail visibility and provide professional office environments. The building features a modern glass facade, high-speed elevators, and a flexible floor plan to accommodate various business needs.',
      completionDate: 'August 2025',
      features: ['Retail Spaces', 'Corporate Offices', 'Glass Facade', 'Modern Elevators']
    },
    {
      id: 3,
      title: 'Bridge Reconstruction',
      category: 'infrastructure',
      location: 'Mezam Division',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000',
      desc: 'Critical infrastructure project enhancing connectivity and safety for the local community.',
      detailedDesc: 'This infrastructure project focused on replacing a deteriorating bridge with a modern, reinforced concrete structure. The new bridge was designed to withstand heavy seasonal rains and increased traffic loads, significantly improving local trade routes and community safety.',
      completionDate: 'June 2024',
      features: ['Reinforced Concrete', 'Increased Load Capacity', 'Flood Resilience', 'Pedestrian Walkways']
    },
    {
      id: 4,
      title: 'Industrial Warehouse',
      category: 'industrial',
      location: 'Industrial Zone, Bamenda',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
      desc: 'Large-scale storage facility with advanced logistics integration.',
      detailedDesc: 'Designed for a major regional distributor, this warehouse features 5,000 square meters of storage space with specialized temperature-controlled zones. The project included the installation of advanced fire suppression systems and heavy-duty flooring suitable for industrial machinery.',
      completionDate: 'January 2025',
      features: ['5,000 sqm Space', 'Temperature Control', 'Heavy-duty Flooring', 'Fire Suppression']
    },
    {
      id: 5,
      title: 'Luxury Villa',
      category: 'residential',
      location: 'Up Station, Bamenda',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
      desc: 'Custom-built private residence with premium finishes and landscaping.',
      detailedDesc: 'A bespoke architectural masterpiece tailored to the client\'s specific lifestyle. This villa combines traditional Cameroonian aesthetics with modern luxury. It features an infinity pool, smart home automation, and extensive outdoor living spaces designed for the local climate.',
      completionDate: 'November 2024',
      features: ['Infinity Pool', 'Smart Home Tech', 'Custom Landscaping', 'Outdoor Living Area']
    },
    {
      id: 6,
      title: 'Educational Center',
      category: 'commercial',
      location: 'Bambili',
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1000',
      desc: 'Modern learning facility designed for collaboration and innovation.',
      detailedDesc: 'This educational center was built to provide a state-of-the-art learning environment for students in Bambili. The design emphasizes natural light and open spaces to foster creativity. It includes specialized laboratories, a digital library, and multi-purpose lecture halls.',
      completionDate: 'September 2024',
      features: ['Specialized Labs', 'Digital Library', 'Natural Lighting', 'Flexible Classrooms']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div>
      <PageHeader 
        title={t('nav.portfolio')} 
        subtitle="Showcasing Our Commitment to Quality and Innovation"
        image="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=2070"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${filter === cat.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 cursor-pointer"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <div className="bg-white text-blue-900 p-3 rounded-full shadow-xl hover:bg-blue-50 transition-colors">
                        <Search size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex items-center text-gray-500 text-xs font-medium">
                      <ExternalLink size={14} className="mr-2" />
                      {project.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-colors"
              >
                <X size={24} />
              </button>

              {/* Modal Image */}
              <div className="lg:w-1/2 h-64 lg:h-auto relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{selectedProject.title}</h2>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="text-blue-600 mr-2" />
                    <span className="text-sm font-medium">{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CalendarIcon size={18} className="text-blue-600 mr-2" />
                    <span className="text-sm font-medium">Completed: {selectedProject.completionDate}</span>
                  </div>
                </div>

                <div className="prose prose-blue max-w-none mb-10">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Project Overview</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.detailedDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <CheckCircle2 size={18} className="text-blue-600" />
                        <span className="text-sm font-medium text-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    Close Project Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Testimonials Slider Placeholder */}

      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm flex-1 border border-gray-100 italic text-gray-600 relative">
                <div className="text-blue-200 text-6xl absolute top-4 left-4 font-serif">"</div>
                <p className="relative z-10 mb-6">
                  HTS-E delivered our commercial plaza ahead of schedule and with exceptional attention to detail. Their professionalism is unmatched in Bamenda.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                    JD
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold not-italic">John Doe</p>
                    <p className="text-xs text-gray-500 not-italic">CEO, Commercial Hub Ltd</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
