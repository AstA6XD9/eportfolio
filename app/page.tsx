'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Inspiration from "./components/Inspiration";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const storedLang = typeof window !== "undefined" ? localStorage.getItem("language") : null;
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    } else {
      localStorage.setItem("theme", "dark");
    }
    if (storedLang) {
      setLanguage(storedLang);
    } else {
      localStorage.setItem("language", "en");
    }
  }, []);
  
  useEffect(() => {
    // Appliquer le style directement au body
    const body = document.body;
    if (isDarkMode) {
      body.style.backgroundColor = '#111827'; // gray-900
      body.style.color = 'white';
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      body.style.backgroundColor = '#f9fafb'; // gray-50 au lieu de blanc pur
      body.style.color = 'black';
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    // Forcer la couleur du texte et background sur tous les éléments
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      if (isDarkMode) {
        htmlElement.style.color = 'white';
        // Forcer le background sur tous les éléments
        if (element.tagName === 'DIV' || element.tagName === 'SECTION' || element.tagName === 'MAIN') {
          htmlElement.style.backgroundColor = '#111827';
        }
        // Changer tous les blancs en gris
        if (htmlElement.style.backgroundColor === 'white' || htmlElement.style.backgroundColor === 'rgb(255, 255, 255)') {
          htmlElement.style.backgroundColor = '#374151'; // gray-700
        }
      } else {
        htmlElement.style.color = 'black';
        // Forcer le background sur tous les éléments
        if (element.tagName === 'DIV' || element.tagName === 'SECTION' || element.tagName === 'MAIN') {
          htmlElement.style.backgroundColor = '#f9fafb'; // gray-50 au lieu de blanc pur
        }
      }
    });
    
    // Forcer le style de la navbar
    const navbar = document.querySelector('nav') as HTMLElement;
    if (navbar) {
      if (isDarkMode) {
        navbar.style.backgroundColor = '#111827';
        navbar.style.color = 'white';
      } else {
        navbar.style.backgroundColor = 'white';
        navbar.style.color = 'black';
      }
    }
  }, [isDarkMode]);
  return (
    <>
      <div id="top" />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} language={language} setLanguage={setLanguage} />
      <Header isDarkMode={isDarkMode} language={language} />
      <About isDarkMode={isDarkMode} language={language} />
      <Skills isDarkMode={isDarkMode} language={language} />
      <Projects isDarkMode={isDarkMode} language={language} />
      <Experience isDarkMode={isDarkMode} language={language} />
      <Inspiration isDarkMode={isDarkMode} language={language} />
      <Contact isDarkMode={isDarkMode} language={language} />
      <Footer isDarkMode={isDarkMode} language={language} />
    </>
  );
}
