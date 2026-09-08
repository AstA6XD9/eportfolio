import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Stage Ingénieur IA",
    company: "Siemens Digital Industry Software",
    period: "Juin 2025 – Septembre 2025",
    location: "Toulouse, France",
    description: [
      "Conception et implémentation d'une pipeline LLM (Claude API) de traduction automatique des procédures pharmaceutiques : Oracle HTML → langage naturel → JSON SOD (Smart Operation Designer), éliminant un processus 100% manuel",
      "Développement d'un système d'agents IA spécialisés (DocKnowledgeBase) opérant sur une base de connaissances structurée (OKF) via serveurs MCP — couvrant génération de backlog, analyse d'impact, documentation et optimisation qualité",
      "PoC présentée en System Demo devant les équipes R&D France et Inde, validant la faisabilité technique et transmise pour intégration future au produit Opcenter",
      "Environnement industriel SAFe 6.0 : équipes Scrum multi-sites France/Inde, Program Increments de 10 semaines, collaboration directe avec le Program Manager Innovation",
    ],
    technologies: ["Python", "Claude API (Anthropic)", "MCP", "Oracle 19c", "LLM", "RAG", "Agents IA", "SAFe 6.0"],
  },
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
  const cardBg = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
  const textSecondary = isDarkMode ? "text-gray-300" : "text-gray-600";
  const textMuted = isDarkMode ? "text-gray-400" : "text-gray-500";
  const chipBg = isDarkMode
    ? "bg-gray-900 border-gray-700 text-gray-300"
    : "bg-gray-50 border-gray-200 text-gray-600";

  return (
    <section id="experience" className={`py-20 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-Ovo">Expérience Professionnelle</h2>
          <p className={`text-xl ${textMuted}`}>
            Mon parcours professionnel en IA, image processing et computer vision
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl border p-6 hover:shadow-lg transition-shadow duration-300 ${cardBg}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-blue-500 font-semibold text-sm">{exp.company}</p>
                  {exp.location && (
                    <p className={`text-sm mt-1 ${textMuted}`}>{exp.location}</p>
                  )}
                </div>
                <span className={`text-sm shrink-0 ${textMuted}`}>{exp.period}</span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item) => (
                  <li key={item} className={`flex items-start gap-2 text-sm ${textSecondary}`}>
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {exp.technologies && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md border text-xs font-medium ${chipBg}`}
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
