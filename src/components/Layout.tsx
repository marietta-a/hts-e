import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Phone, Mail, MapPin, Globe, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className={`relative w-12 h-12 overflow-hidden rounded-lg bg-white p-1 shadow-sm transition-transform hover:scale-105 ${isScrolled ? 'border border-gray-100' : 'border border-white/20'}`}>
              <img 
                src="/logo.png" 
                alt="HTS-E Logo" 
                className="w-full h-full object-contain"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl leading-none ${isScrolled ? 'text-blue-900' : 'text-white'}`}>HTS-E</span>
              <span className={`text-[10px] font-medium tracking-tighter ${isScrolled ? 'text-blue-700' : 'text-blue-200'}`}>& PARTNERS LTD</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${location.pathname === link.path ? 'text-blue-500' : isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className={`flex items-center space-x-1 text-xs font-bold px-2 py-1 rounded border transition-colors ${isScrolled ? 'border-gray-300 text-gray-700 hover:bg-gray-100' : 'border-white/30 text-white hover:bg-white/10'}`}
            >
              <Globe size={14} />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className={`text-xs font-bold px-2 py-1 rounded border ${isScrolled ? 'border-gray-300 text-gray-700' : 'border-white/30 text-white'}`}
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 border-b border-gray-100"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Subscribed!');
        setEmail('');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-lg">
                <img 
                  src="/logo.png" 
                  alt="HTS-E Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
              <h3 className="text-2xl font-bold">HTS-E & PARTNERS LTD</h3>
            </div>
            <p className="text-blue-200 mb-6 max-w-md">
              Leading the construction industry in Bamenda with innovative engineering solutions and sustainable development practices.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-100">
                <MapPin size={18} className="text-blue-400" />
                <span>NEW ROAD NKWEN, BAMENDA</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <Phone size={18} className="text-blue-400" />
                <span>678 723 844 / 655 660 340</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <Mail size={18} className="text-blue-400" />
                <span>info@hts-e.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-blue-200">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.newsletter')}</h4>
            <form onSubmit={handleNewsletter} className="space-y-3">
              <input
                type="email"
                required
                placeholder={t('footer.newsletterPlaceholder')}
                className="w-full px-4 py-2 rounded bg-blue-900 border border-blue-800 focus:outline-none focus:border-blue-400 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded transition-colors text-sm"
              >
                Subscribe
              </button>
              {status && <p className="text-xs text-blue-300">{status}</p>}
            </form>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300">
          <p>{t('footer.rights')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a
    href="https://wa.me/237678723844"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group"
  >
    <MessageCircle size={28} />
    <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
      Chat with us
    </span>
  </a>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
