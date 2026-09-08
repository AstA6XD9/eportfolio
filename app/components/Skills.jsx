import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { translations } from "../translations";

const skillCategories = (language) => [
  {
    title: language === "en" ? "Programming Languages" : "Langages de Programmation",
    skills: ["Python", "Java", "C", "Ada", "OCaml"],
  },
  {
    title: "ML & Computer Vision",
    skills: ["NumPy", "OpenCV", "Deep Learning", "YOLOv8", "Scikit-learn", "PyTorch"],
  },
  {
    title: language === "en" ? "Tools & Technologies" : "Outils & Technologies",
    skills: ["VS Code", "Linux", "Git", "MATLAB", "Eclipse"],
  },
  {
    title: language === "en" ? "AI & Dev Tools" : "Outils IA & Développement",
    skills: ["Claude API", "MCP", "Cursor", "Claude Code", "Optuna"],
  },
];

const getLanguages = (language) => [
  {
    name: language === "en" ? "Arabic" : "Arabe",
    level: language === "en" ? "Native" : "Maternelle",
    flag: "https://flagcdn.com/w80/ma.png",
  },
  {
    name: language === "en" ? "French" : "Français",
    level: language === "en" ? "Bilingual" : "Bilingue",
    flag: "https://flagcdn.com/w80/fr.png",
  },
  {
    name: language === "en" ? "English" : "Anglais",
    level: language === "en" ? "Fluent" : "Courant",
    flag: "https://flagcdn.com/w80/gb.png",
  },
  {
    name: language === "en" ? "Spanish" : "Espagnol",
    level: language === "en" ? "Beginner" : "Débutant",
    flag: "https://flagcdn.com/w80/es.png",
  },
];

const getTransversalSkills = (language) =>
  language === "en"
    ? ["Critical thinking", "Flexibility", "Effective communication", "Negotiation"]
    : ["Esprit critique", "Flexibilité", "Communication effective", "Négociation"];

export default function Skills({ isDarkMode, language }) {
  const t = translations[language] || translations.en;
  const categories = skillCategories(language);
  const langList = getLanguages(language);
  const transversal = getTransversalSkills(language);

  const sectionBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const cardBg = isDarkMode ? "bg-gray-900" : "bg-gray-50";
  const textPrimary = isDarkMode ? "text-white" : "text-gray-900";
  const textSecondary = isDarkMode ? "text-gray-300" : "text-gray-600";
  const chipBg = isDarkMode
    ? "bg-gray-800 border-gray-700 text-gray-200"
    : "bg-white border-gray-200 text-gray-700";

  return (
    <section id="skills" className={`py-20 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 font-Ovo ${textPrimary}`}>
            {t.skills.title}
          </h2>
          <p className={`text-xl ${textSecondary}`}>{t.skills.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${cardBg} rounded-xl p-6 hover:shadow-lg transition-shadow duration-300`}
            >
              <h3 className={`text-sm font-semibold uppercase tracking-widest mb-4 ${textSecondary}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg border text-sm font-medium ${chipBg}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className={`text-2xl font-bold mb-6 text-center ${textPrimary}`}>
            {t.skills.languages}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {langList.map((lang) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className={`${cardBg} text-center p-4 rounded-xl hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex justify-center mb-3">
                  <Image
                    src={lang.flag}
                    alt={`${lang.name} flag`}
                    width={64}
                    height={48}
                    className="rounded shadow-md object-cover"
                    style={{ width: "64px", height: "48px" }}
                  />
                </div>
                <h4 className={`font-bold ${textPrimary} mb-1`}>{lang.name}</h4>
                <p className={`text-sm ${textSecondary}`}>{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className={`text-2xl font-bold mb-6 ${textPrimary}`}>
            {t.skills.transversal}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {transversal.map((skill) => (
              <span
                key={skill}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border ${chipBg}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
