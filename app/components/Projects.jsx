import React from "react";
import { serviceData, assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { translations } from "../translations";

const Projects = ({ isDarkMode, language }) => {
  const t = translations[language] || translations.en;
  const featuredProject = serviceData.find((project) => project.highlight);
  const otherProjects = serviceData.filter((project) => project !== featuredProject);

  const getProjectTitle = (titleKey) => t.projects[titleKey]?.title || titleKey;

  const getProjectDescription = (titleKey) => t.projects[titleKey]?.description || '';

  const badgeTone = (status) => {
    const base = isDarkMode ? 'text-blue-200 bg-blue-500/10' : 'text-blue-700 bg-blue-500/10';
    const tones = {
      Live: isDarkMode ? 'text-emerald-200 bg-emerald-500/10' : 'text-emerald-700 bg-emerald-100',
      Research: isDarkMode ? 'text-purple-200 bg-purple-500/10' : 'text-purple-700 bg-purple-100',
      'Open source': isDarkMode ? 'text-sky-200 bg-sky-500/10' : 'text-sky-700 bg-sky-100',
      CLI: isDarkMode ? 'text-orange-200 bg-orange-500/10' : 'text-orange-700 bg-orange-100',
      Play: isDarkMode ? 'text-pink-200 bg-pink-500/10' : 'text-pink-700 bg-pink-100',
      Beta: isDarkMode ? 'text-amber-200 bg-amber-500/10' : 'text-amber-700 bg-amber-100',
      Lab: isDarkMode ? 'text-cyan-200 bg-cyan-500/10' : 'text-cyan-700 bg-cyan-100',
      Systems: isDarkMode ? 'text-indigo-200 bg-indigo-500/10' : 'text-indigo-700 bg-indigo-100',
    };
    return tones[status] || base;
  };

  const cardBg = isDarkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/90 border-gray-200';
  const categoryBadge = isDarkMode ? 'bg-white/10 text-white' : 'bg-gray-900/5 text-gray-800';
  const sublabel = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const gradientAccent = isDarkMode
    ? 'from-blue-500/20 via-indigo-500/10 to-transparent'
    : 'from-blue-500/10 via-indigo-200/30 to-transparent';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      id="projects" 
      className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h4 className="text-center mb-2 text-lg font-Ovo">
          {t.projects.subtitle}
        </h4>
        <h2 className="text-center text-5xl font-Ovo">{t.projects.title}</h2>
        <p className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo">
          {t.projects.description}
        </p>
      </motion.div>

      {featuredProject && (
        <motion.article
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className={`rounded-3xl border ${cardBg} p-6 sm:p-10 lg:p-12 mb-12 relative overflow-hidden`}
        >
          <div className={`absolute inset-0 opacity-70 pointer-events-none bg-gradient-to-br ${gradientAccent}`} />
          <div className="relative flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm uppercase tracking-[0.3em] font-semibold">{featuredProject.year}</span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeTone(featuredProject.status)}`}>
                {featuredProject.status}
              </span>
              {featuredProject.category && (
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryBadge}`}>
                  {featuredProject.category}
                </span>
              )}
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-Ovo mb-4">{getProjectTitle(featuredProject.titleKey)}</h3>
              <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {getProjectDescription(featuredProject.titleKey)}
              </p>
            </div>
            <ul className="flex flex-wrap gap-3">
              {featuredProject.stack?.map((tech) => (
                <li key={tech} className={`text-xs sm:text-sm px-4 py-1.5 rounded-full border ${isDarkMode ? 'border-gray-600 text-gray-200' : 'border-gray-300 text-gray-700'}`}>
                  {tech}
                </li>
              ))}
            </ul>
            <div className="grid gap-6">
              <div className="rounded-2xl border border-white/10 p-4 backdrop-blur bg-white/5 dark:bg-white/5">
                <p className="text-sm uppercase tracking-widest opacity-80">{language === "en" ? "Category" : "Catégorie"}</p>
                <p className="text-2xl font-semibold">{featuredProject.category || '—'}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={featuredProject.link}
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-200 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white hover:opacity-90' : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90'}`}
                target="_blank"
                rel="noreferrer"
              >
                {t.projects.viewProject}
                <Image src={assets.right_arrow} alt="" className="w-4" />
              </a>
              <span className="text-sm text-gray-400">
                {t.projects.highlighted}
              </span>
            </div>
          </div>
        </motion.article>
      )}
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {otherProjects.map(({ icon, titleKey, link, stack, status, year, category }, index) => (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={titleKey} 
            className={`border ${cardBg} rounded-3xl p-6 flex flex-col gap-5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/20 flex items-center justify-center">
                  <Image src={icon} alt="" className="w-7 h-7" />
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-widest ${sublabel}`}>{t.projects.cardLabel}</p>
                  <h3 className="text-xl font-semibold">{getProjectTitle(titleKey)}</h3>
                </div>
              </div>
              <div className="text-right space-y-1">
                <span className="block text-sm font-semibold">{year}</span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeTone(status)}`}>
                  {status}
                </span>
              </div>
            </div>
            <p className={`text-sm leading-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {getProjectDescription(titleKey)}
            </p>
            <div className="flex flex-wrap gap-3">
              {category && (
                <span className={`text-[11px] uppercase tracking-widest px-3 py-1 rounded-full ${categoryBadge}`}>
                  {category}
                </span>
              )}
            </div>
            <ul className="flex flex-wrap gap-2">
              {stack?.map((tech) => (
                <li
                  key={`${titleKey}-${tech}`}
                  className={`text-xs px-3 py-1.5 rounded-full border ${isDarkMode ? 'border-gray-700 text-gray-200' : 'border-gray-200 text-gray-700'}`}
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-dashed border-gray-600/20">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-3 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow ${isDarkMode ? 'bg-gradient-to-r from-blue-400/80 to-indigo-500/80 text-white hover:opacity-95' : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-95'}`}
              >
                {t.projects.viewRepo}
                <Image src={assets.right_arrow} alt="" className="w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
