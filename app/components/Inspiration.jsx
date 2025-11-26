import React from "react";
import { motion } from "framer-motion";
import { translations } from "../translations";

const inspiringQuotes = [
  {
    quote:
      "Computer vision is one of the most exciting fields in machine learning. We're teaching computers to see and understand the visual world.",
    author: "Fei-Fei Li",
    role: "Stanford Professor, AI Pioneer",
    icon: "👁️",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    role: "Computer Science Pioneer",
    icon: "🚀",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    quote:
      "AI is the new electricity. Just as electricity transformed every major industry 100 years ago, AI will now do the same.",
    author: "Andrew Ng",
    role: "AI Researcher, Co-founder of Coursera",
    icon: "⚡",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    quote:
      "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.",
    author: "Edsger Dijkstra",
    role: "Computer Scientist",
    icon: "💭",
    gradient: "from-green-500 to-teal-500",
  },
];

const Inspiration = ({ isDarkMode, language }) => {
  const t = translations[language] || translations.en;
  return (
    <motion.section
      id="inspiration"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-[12%] scroll-mt-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.inspiration.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.inspiration.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {inspiringQuotes.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${item.gradient} text-3xl mb-6 shadow-lg`}
                >
                  {item.icon}
                </div>

                <blockquote className="relative">
                  <span
                    className={`text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} absolute -top-4 -left-2 opacity-20`}
                  >
                    "
                  </span>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 italic leading-relaxed mb-6 relative z-10">
                    {item.quote}
                  </p>
                </blockquote>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className={`font-bold text-lg bg-gradient-to-r ${item.gradient} text-transparent bg-clip-text`}>
                    — {item.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl max-w-3xl text-white">
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              &quot;{t.inspiration.personalQuote}&quot;
            </p>
            <p className="text-blue-100 mt-4 font-semibold">— {t.inspiration.author}</p>
            <p className="text-blue-200 text-sm">{t.inspiration.role}</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Inspiration;
