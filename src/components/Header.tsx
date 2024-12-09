import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => window.open('/cv.pdf', '_blank')}
          >
            AC
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">{t('nav.home')}</a>
            <a href="#about" className="nav-link">{t('nav.about')}</a>
            <a href="#skills" className="nav-link">{t('nav.skills')}</a>
            <a href="#projects" className="nav-link">{t('nav.projects')}</a>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              className="hidden sm:flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/cv.pdf', '_blank')}
            >
              <Download size={20} />
              <span>{t('hero.downloadCV')}</span>
            </motion.button>

            <motion.button
              className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
            >
              <img
                src={i18n.language === 'pt' 
                  ? 'https://flagcdn.com/w40/br.png'
                  : 'https://flagcdn.com/w40/us.png'
                }
                alt={i18n.language === 'pt' ? 'Português' : 'English'}
                className="w-6 h-6 rounded-sm"
              />
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;