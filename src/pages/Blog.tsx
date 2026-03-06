import React from 'react';
import PageHeader from '../components/PageHeader';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { t } = useLanguage();

  const posts = [
    {
      id: 1,
      title: 'The Future of Sustainable Construction in Cameroon',
      excerpt: 'Exploring how eco-friendly materials and energy-efficient designs are transforming the local building landscape.',
      date: 'March 15, 2026',
      author: 'Engr. Nfor',
      category: 'Innovation',
      image: 'https://images.unsplash.com/photo-1518005020251-582c7b975ee5?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 2,
      title: '5 Essential Tips for Home Builders in Bamenda',
      excerpt: 'A comprehensive guide on what to consider before starting your residential project in the North West region.',
      date: 'March 10, 2026',
      author: 'Arch. Tabi',
      category: 'Guides',
      image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 3,
      title: 'Modernizing Public Infrastructure: Challenges and Solutions',
      excerpt: 'Discussing the technical hurdles in large-scale public works and how HTS-E overcomes them with modern engineering.',
      date: 'March 05, 2026',
      author: 'Engr. Fru',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 4,
      title: 'The Role of Technology in Modern Project Management',
      excerpt: 'How digital tools and BIM are improving efficiency and accuracy in our construction workflows.',
      date: 'February 28, 2026',
      author: 'Admin',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div>
      <PageHeader 
        title={t('nav.blog')} 
        subtitle="Insights, News, and Expert Tips from the Construction World"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Blog Feed */}
            <div className="lg:col-span-2 space-y-16">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative h-96 overflow-hidden rounded-3xl mb-8 shadow-lg">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4 font-medium">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-blue-600" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-2 text-blue-600" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 font-extrabold hover:underline group"
                  >
                    Read Full Article
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-12">
              {/* Search */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6">Search Blog</h4>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6">Categories</h4>
                <div className="space-y-3">
                  {['Construction', 'Engineering', 'Innovation', 'Real Estate', 'Infrastructure'].map((cat) => (
                    <a key={cat} href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                      <span>{cat}</span>
                      <span className="bg-white px-2 py-1 rounded text-xs text-gray-400 border border-gray-100">12</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Sidebar */}
              <div className="bg-blue-900 p-8 rounded-3xl text-white shadow-xl">
                <h4 className="font-bold text-xl mb-4">Stay Updated</h4>
                <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                  Get the latest construction news and expert tips delivered to your inbox every month.
                </p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-5 py-3 rounded-xl bg-blue-800 border border-blue-700 focus:outline-none focus:border-blue-400 text-sm"
                  />
                  <button className="w-full bg-white text-blue-900 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
