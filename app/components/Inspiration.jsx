import React from "react";
import { motion } from "framer-motion";
import { translations } from "../translations";

const inspiringQuotes = [
  {
    quote: "Computer vision is one of the most exciting fields in machine learning. We're teaching computers to see and understand the visual world.",
    author: "Fei-Fei Li",
    role: "Stanford Professor, AI Pioneer",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    role: "Computer Science Pioneer",
  },
  {
    quote: "AI is the new electricity. Just as electricity transformed every major industry 100 years ago, AI will now do the same.",
    author: "Andrew Ng",
    role: "AI Researcher, Co-founder of Coursera",
  },
  {
    quote: "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.",
    author: "Edsger Dijkstra",
    role: "Computer Scientist",
  },
];

const Inspiration = ({ isDarkMode, language }) => {
  const t = translations[language] || translations.en;

  const cardBg = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-100";
  const textPrimary = isDarkMode ? "text-white" : "text-gray-900";
  const textSecondary = isDarkMode ? "text-gray-300" : "text-gray-700";
  const textMuted = isDarkMode ? "text-gray-400" : "text-gray-500";
  const sectionBg = isDarkMode ? "bg-gray-900" : "bg-gray-50";

  return (
    <motion.section
      id="inspiration"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`py-20 px-[12%] scroll-mt-20 ${sectionBg}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 font-Ovo ${textPrimary}`}>
            {t.inspiration.title}
          </h2>
          <p className={`text-xl ${textMuted}`}>{t.inspiration.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {inspiringQuotes.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 border transition-shadow duration-300 hover:shadow-lg ${cardBg}`}
            >
              <p className={`text-lg leading-relaxed mb-6 ${textSecondary}`}>
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className={`border-t pt-4 ${isDarkMode ? "border-gray-700" : "border-gray-100"}`}>
                <p className={`font-semibold ${textPrimary}`}>— {item.author}</p>
                <p className={`text-sm mt-1 ${textMuted}`}>{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className={`rounded-2xl p-8 border ${cardBg}`}>
            <p className={`text-xl leading-relaxed ${textSecondary}`}>
              &ldquo;{t.inspiration.personalQuote}&rdquo;
            </p>
            <div className={`border-t mt-6 pt-4 ${isDarkMode ? "border-gray-700" : "border-gray-100"}`}>
              <p className={`font-semibold ${textPrimary}`}>— {t.inspiration.author}</p>
              <p className={`text-sm mt-1 ${textMuted}`}>{t.inspiration.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Inspiration;
