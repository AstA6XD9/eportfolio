import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { assets, infoList } from "../../assets/assets"
import { toolsData } from "../../assets/assets"
import { translations } from "../translations"

const interests = [
    { name: "Basketball", icon: "🏀" },
    { name: "Fitness", icon: "💪" },
    { name: "Music & Events", icon: "🎵" }
]

export default function About({ isDarkMode, language }) {
    const t = translations[language] || translations.en;
    return (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          id='about' 
          className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}
        >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h4 className="text-center mb-2 text-lg font-Ovo">{t.about.intro}</h4>
              <h2 className="text-center text-5xl font-Ovo">{t.about.title}</h2>
            </motion.div>
            
            <div className="flex w-full flex-col gap-12 lg:gap-16 my-12 lg:my-16">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="mb-8 max-w-2xl font-Ovo leading-relaxed text-base sm:text-lg"
                    >
                    {t.about.description}
                    </motion.p>
                    
                    <motion.ul 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {infoList.map(({ icon,iconDark, title, description }, index) => (
                            <motion.li 
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                              viewport={{ once: true }}
                              key={title + index} 
                              className="border-[0.5px] border-gray-400 rounded-xl p-6 bg-white/70 dark:bg-gray-800/50 transition-colors"
                            >
                                <Image src={icon} alt={title} className="w-7 mt-3" width={28} height={28} />
                                <div>
                                    <h3 className="my-4 font-semibold text-gray-700 dark:text-white font-Ovo">{title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm font-Ovo">{description}</p>
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                    
                    <motion.h4 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      viewport={{ once: true }}
                      className={`my-6 font-Ovo ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
                    >
                        {t.about.tools}
                    </motion.h4>
                    
                    <motion.ul 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 sm:gap-5"
                    >
                        {toolsData.map((tool,index)=>{
                            // Utiliser la version sombre de Firebase et Linux en mode sombre
                            let toolSrc = tool;
                            if (tool === assets.firebase && isDarkMode) {
                                toolSrc = assets.firebase_dark;
                            } else if (tool === assets.linux) {
                                toolSrc = isDarkMode ? assets.linux_dark : assets.linux;
                            }
                            return (
                                <motion.li 
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                                  viewport={{ once: true }}
                                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                                  key={index}
                                >
                                    <Image src={toolSrc} alt="Tool" className='w-5 sm:w-7'/>
                                </motion.li>
                            );
                        })}
                    </motion.ul>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      viewport={{ once: true }}
                      className={`mt-6 p-6 rounded-3xl border ${isDarkMode ? 'border-gray-700 bg-gray-800/40' : 'border-gray-200 bg-white/80'} backdrop-blur`}
                    >
                      <h4 className={`mb-4 font-Ovo ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{t.about.interests}</h4>
                      <div className="flex flex-wrap gap-4">
                        {interests.map(({ name, icon }) => (
                          <span
                            key={name}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-700'}`}
                          >
                            <span className="text-lg">{icon}</span>
                            {name}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                </motion.div>
            </div>
        </motion.div>
    )
}