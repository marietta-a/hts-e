import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string) => {
    const keys = key.split('.');
    let current: any = translations[language];
    for (const k of keys) {
      if (current[k] === undefined) return key;
      current = current[k];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

const translations: Record<Language, any> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      blog: 'Blog'
    },
    hero: {
      title: 'Building the Future with Excellence',
      subtitle: 'HIGH-TOP STRUCTURES ENGINEERING (HTS-E) & PARTNERS LTD',
      cta: 'Get a Quote',
      secondaryCta: 'Our Projects'
    },
    services: {
      title: 'Our Expertise',
      designBuild: 'Design and Build',
      designBuildDesc: 'Complete architectural design and infrastructural development from concept to completion.',
      contractors: 'General Contractors',
      contractorsDesc: 'Reliable execution of construction projects with the highest quality standards.',
      consultancy: 'Consultancy Services',
      consultancyDesc: 'Expert advice and project management for complex engineering challenges.',
      realEstate: 'Real Estate Developer',
      realEstateDesc: 'Developing modern residential and commercial spaces for a better tomorrow.',
      procurement: 'Procurement & Supply',
      procurementDesc: 'Supply of assorted high-quality construction equipment and materials.'
    },
    contact: {
      title: 'Contact Us',
      address: 'NEW ROAD NKWEN, BAMENDA',
      phone: '678 723 844 / 655 660 340',
      email: 'info@hts-e.com',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Thank you! Your message has been sent.'
      }
    },
    footer: {
      rights: '© 2026 HTS-E & Partners Ltd. All rights reserved.',
      newsletter: 'Subscribe to our Newsletter',
      newsletterPlaceholder: 'Enter your email'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      blog: 'Blog'
    },
    hero: {
      title: 'Construire l\'Avenir avec Excellence',
      subtitle: 'HIGH-TOP STRUCTURES ENGINEERING (HTS-E) & PARTNERS LTD',
      cta: 'Obtenir un Devis',
      secondaryCta: 'Nos Projets'
    },
    services: {
      title: 'Notre Expertise',
      designBuild: 'Conception et Construction',
      designBuildDesc: 'Conception architecturale complète et développement infrastructurel du concept à la réalisation.',
      contractors: 'Entrepreneurs Généraux',
      contractorsDesc: 'Exécution fiable de projets de construction avec les normes de qualité les plus élevées.',
      consultancy: 'Services de Conseil',
      consultancyDesc: 'Conseils d\'experts et gestion de projet pour des défis d\'ingénierie complexes.',
      realEstate: 'Promoteur Immobilier',
      realEstateDesc: 'Développement d\'espaces résidentiels et commerciaux modernes pour un avenir meilleur.',
      procurement: 'Approvisionnement et Fourniture',
      procurementDesc: 'Fourniture d\'équipements et de matériaux de construction de haute qualité assortis.'
    },
    contact: {
      title: 'Contactez-nous',
      address: 'NEW ROAD NKWEN, BAMENDA',
      phone: '678 723 844 / 655 660 340',
      email: 'info@hts-e.com',
      form: {
        name: 'Nom Complet',
        email: 'Adresse Email',
        phone: 'Numéro de Téléphone',
        message: 'Votre Message',
        submit: 'Envoyer le Message',
        success: 'Merci ! Votre message a été envoyé.'
      }
    },
    footer: {
      rights: '© 2026 HTS-E & Partners Ltd. Tous droits réservés.',
      newsletter: 'Abonnez-vous à notre Newsletter',
      newsletterPlaceholder: 'Entrez votre email'
    }
  }
};
