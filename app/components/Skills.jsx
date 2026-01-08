import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { translations } from "../translations";

const skillCategories = (language) => {
  const t = translations[language] || translations.en;
  return [
  {
    title: language === "en" ? "Programming Languages" : "Langages de Programmation",
    icon: "💻",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C", level: 80 },
      { name: "Ada", level: 75 },
      { name: "OCaml", level: 70 },
    ],
  },
  {
    title: "ML & Computer Vision",
    icon: "🤖",
    skills: [
      { name: "NumPy", level: 85 },
      { name: "OpenCV", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "YOLOv8", level: 80 },
      { name: "Scikit-learn", level: 75 },
    ],
  },
  {
    title: language === "en" ? "Tools & Technologies" : "Outils & Technologies",
    icon: "🛠️",
    skills: [
      { name: "VS Code", level: 90 },
      { name: "Linux", level: 85 },
      { name: "Eclipse", level: 75 },
      { name: "Git/GitHub", level: 70 },
      { name: "MATLAB", level: 70 },
    ],
  },
  {
    title: language === "en" ? "AI & Development Tools" : "Outils IA & Développement",
    icon: "🤖",
    skills: [
      { name: "Cursor", level: 95 },
      { name: "Claude Code", level: 85 },
      { name: "Git Copilot", level: 80 },
    ],
  },
];
};

const getLanguages = (language) => {
  return [
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
};

const getTransversalSkills = (language) => {
  return language === "en" 
    ? ["Critical thinking", "Flexibility", "Effective communication", "Negotiation"]
    : ["Esprit critique", "Flexibilité", "Communication effective", "Négociation"];
};

export default function Skills({ isDarkMode, language }) {
  const t = translations[language] || translations.en;
  const categories = skillCategories(language);
  const langList = getLanguages(language);
  const transversal = getTransversalSkills(language);
  const sectionBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const cardBg = isDarkMode ? "bg-gray-900" : "bg-gray-50";
  const textPrimary = isDarkMode ? "text-white" : "text-gray-900";
  const textSecondary = isDarkMode ? "text-gray-300" : "text-gray-600";

  return (
    <section id="skills" className={`py-20 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 font-Ovo ${textPrimary}`}>{t.skills.title}</h2>
          <p className={`text-xl ${textSecondary}`}>
            {t.skills.subtitle}
          </p>
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
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className={`text-2xl font-bold ${textPrimary}`}>{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className={`${textSecondary} font-medium`}>{skill.name}</span>
                      <span className={textSecondary}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className={`text-2xl font-bold mb-6 text-center ${textPrimary}`}>{t.skills.languages}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {langList.map((lang) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className={`${cardBg} text-center p-4 rounded-lg hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex justify-center mb-3">
                  {lang.name === "Anglais" || lang.name === "English" ? (
                    <div className="text-5xl">🌍</div>
                  ) : (
                    <Image
                      src={lang.flag}
                      alt={`${lang.name} flag`}
                      width={64}
                      height={48}
                      className="rounded shadow-md object-cover"
                      style={{ width: '64px', height: '48px' }}
                    />
                  )}
                </div>
                <h4 className={`font-bold ${textPrimary} mb-1`}>{lang.name}</h4>
                <p className={`text-sm ${textSecondary}`}>{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className={`text-2xl font-bold mb-6 ${textPrimary}`}>{t.skills.transversal}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {transversal.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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

