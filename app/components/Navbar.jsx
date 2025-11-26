"use client"
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { assets } from '../../assets/assets'

export default function Navbar({ isDarkMode, setIsDarkMode, language, setLanguage }) {
  const sideMenuRef = useRef(null);
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const sections = ['top', 'about', 'skills', 'projects', 'experience', 'inspiration', 'contact'];

  const openMenu = () => {
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.2,
      }
    );

    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    setIsLangMenuOpen(false);
  };

  const linkBaseClasses = 'font-Ovo transition-all duration-300 relative';
  const getLinkClasses = (section) => {
    const isActive = activeSection === section;
    if (isActive) {
      return `${linkBaseClasses} ${isDarkMode ? 'text-blue-300' : 'text-blue-600'} after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full ${isDarkMode ? 'after:bg-blue-400' : 'after:bg-blue-600'}`;
    }
    return `${linkBaseClasses} ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`;
  };
  return (
    <>
      {!isDarkMode && (
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'> 
          <Image src={assets.header_bg_color} alt='' className='w-full' />
        </div>
      )}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? (isDarkMode ? "bg-gray-900 bg-opacity-90 backdrop-blur-lg shadow-sm" : "bg-gray-50 bg-opacity-90 backdrop-blur-lg shadow-sm") : ""} ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}
      >
        <motion.a 
          href="#top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Image 
            src={isDarkMode ? assets.logo_dark : assets.logo} 
            className='w-28 cursor-pointer mr-10' 
            alt="Logo" 
          />
        </motion.a>
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : isDarkMode ? "bg-gray-800 shadow-sm bg-opacity-50" : "bg-gray-100 shadow-sm bg-opacity-50"} `}
        >
          <li><a className={getLinkClasses('top')} href="#top" aria-current={activeSection === 'top' ? 'section' : undefined}>{language === "en" ? "Home" : "Accueil"}</a></li>
          <li><a className={getLinkClasses('about')} href="#about" aria-current={activeSection === 'about' ? 'section' : undefined}>{language === "en" ? "About me" : "À propos"}</a></li>
          <li><a className={getLinkClasses('skills')} href="#skills" aria-current={activeSection === 'skills' ? 'section' : undefined}>{language === "en" ? "Skills" : "Compétences"}</a></li>
          <li><a className={getLinkClasses('projects')} href="#projects" aria-current={activeSection === 'projects' ? 'section' : undefined}>{language === "en" ? "Projects" : "Projets"}</a></li>
          <li><a className={getLinkClasses('experience')} href="#experience" aria-current={activeSection === 'experience' ? 'section' : undefined}>{language === "en" ? "Experience" : "Expérience"}</a></li>
          <li><a className={getLinkClasses('inspiration')} href="#inspiration" aria-current={activeSection === 'inspiration' ? 'section' : undefined}>{language === "en" ? "Inspiration" : "Inspiration"}</a></li>
          <li><a className={getLinkClasses('contact')} href="#contact" aria-current={activeSection === 'contact' ? 'section' : undefined}>{language === "en" ? "Contact" : "Contact"}</a></li>
        </motion.ul>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className='flex items-center gap-4'
        >
          <div className="relative">
            <button 
              className='p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300 flex items-center gap-2' 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <span className="text-xl">🌐</span>
              <span className="text-sm font-semibold hidden sm:inline">{language === "en" ? "EN" : "FR"}</span>
            </button>
            {isLangMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsLangMenuOpen(false)}
                />
                <div className={`absolute right-0 top-full mt-2 rounded-lg shadow-lg z-50 min-w-[140px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <button
                    onClick={() => toggleLanguage("en")}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg transition-colors ${language === "en" ? (isDarkMode ? 'bg-gray-700' : 'bg-gray-100') : ''} ${isDarkMode ? 'text-white' : 'text-black'}`}
                  >
                    🇬🇧 English
                  </button>
                  <button
                    onClick={() => toggleLanguage("fr")}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg transition-colors ${language === "fr" ? (isDarkMode ? 'bg-gray-700' : 'bg-gray-100') : ''} ${isDarkMode ? 'text-white' : 'text-black'}`}
                  >
                    🇫🇷 Français
                  </button>
                </div>
              </>
            )}
          </div>
          <button className='p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300' onClick={toggleDarkMode}>  
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt={isDarkMode ? 'Light Mode' : 'Dark Mode'} className='w-6' />
          </button>
          <a href="#contact" className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 font-Ovo transition-all duration-300 ${isDarkMode ? 'border-gray-400 text-white hover:bg-gray-800' : 'border-gray-500 text-black hover:bg-gray-100'}`}>
            {language === "en" ? "Contact" : "Contact"} <Image src={assets.arrow_icon} className='w-3' alt="Arrow" />
          </a>
          <button className='block md:hidden m-3 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300' onClick={openMenu}> 
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='Menu' className='w-6' /> 
          </button>
        </motion.div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          />
        )}
        
        {/* Mobile menu */}
        <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-6 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 transform shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='Close' className='w-5 cursor-pointer'/>
          </div>  
          <li><a className={getLinkClasses('top')} onClick={closeMenu} href="#top">{language === "en" ? "Home" : "Accueil"}</a></li>
          <li><a className={getLinkClasses('about')} onClick={closeMenu} href="#about">{language === "en" ? "About me" : "À propos"}</a></li>
          <li><a className={getLinkClasses('skills')} onClick={closeMenu} href="#skills">{language === "en" ? "Skills" : "Compétences"}</a></li>
          <li><a className={getLinkClasses('projects')} onClick={closeMenu} href="#projects">{language === "en" ? "Projects" : "Projets"}</a></li>
          <li><a className={getLinkClasses('experience')} onClick={closeMenu} href="#experience">{language === "en" ? "Experience" : "Expérience"}</a></li>
          <li><a className={getLinkClasses('inspiration')} onClick={closeMenu} href="#inspiration">{language === "en" ? "Inspiration" : "Inspiration"}</a></li>
          <li><a className={getLinkClasses('contact')} onClick={closeMenu} href="#contact">{language === "en" ? "Contact" : "Contact"}</a></li>
        </ul>
      </motion.nav>
    </>
  )
}
