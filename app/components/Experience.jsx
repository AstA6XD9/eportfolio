import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Stage Image Processing",
    company: "Velours3D",
    period: "Juin 2025 – Août 2025",
    location: "Maroc",
    description: [
      "Étude quantitative et qualitative des images générées par utilisateurs pour intégration 3D",
      "Prétraitement et standardisation d'images avec Python, OpenCV et NumPy",
      "Développement de pipelines automatisés pour amélioration d'images et suppression d'ombres",
      "Collaboration avec équipes design et développement pour intégration dans workflow 3D",
      "Exploration de réseaux neuronaux pour améliorer la suppression de fond",
    ],
    technologies: ["Python", "OpenCV", "NumPy", "Deep Learning", "Image Processing"],
  },
  {
    title: "Tuteur",
    company: "Indépendant",
    period: "Présent",
    description: [
      "Accompagnement de collégiens dans leur parcours scolaire et leur orientation",
      "Enseignement personnalisé et méthodologie de travail",
    ],
  },
];

export default function Experience({ isDarkMode, language }) {
  const sectionBg = isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900";
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const textSecondary = isDarkMode ? "text-gray-300" : "text-gray-600";
  const textMuted = isDarkMode ? "text-gray-400" : "text-gray-500";
  const dotColor = isDarkMode ? "text-blue-400" : "text-blue-600";
  const chipBg = isDarkMode ? "bg-blue-500/10 text-blue-200" : "bg-blue-100 text-blue-800";

  return (
    <section id="experience" className={`py-20 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-Ovo">Expérience Professionnelle</h2>
          <p className={`text-xl ${textSecondary}`}>
            Mon parcours professionnel en image processing et computer vision
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${cardBg}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-blue-500 font-semibold">
                    <Briefcase className="w-5 h-5" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className={`flex items-center gap-2 ${textMuted} mt-2 md:mt-0`}>
                  <Calendar className="w-5 h-5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {exp.location && (
                <p className={`${textMuted} mb-4`}>
                  📍 {exp.location}
                </p>
              )}

              <ul className="space-y-2 mb-4">
                {exp.description.map((item) => (
                  <li key={item} className={`flex items-start gap-2 ${textSecondary}`}>
                    <span className={`${dotColor} mt-1`}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${chipBg}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

