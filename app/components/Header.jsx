import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import { translations } from "../translations";

export default function Header({ isDarkMode, language }) {
    const t = translations[language] || translations.en;
    const accentBlue = isDarkMode ? 'text-blue-400' : 'text-blue-600';
    const accentPurple = isDarkMode ? 'text-purple-400' : 'text-purple-600';
    return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`w-11/12 max-w-4xl text-center mx-auto min-h-screen pt-24 md:pt-28 flex flex-col items-center justify-center gap-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}
        >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex justify-center w-full"
            >
                <div className="rounded-3xl w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 overflow-hidden shadow-2xl">
                    <Image src = {assets.profile_img} alt ='' className='w-full h-full object-cover' />
                </div>
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center space-y-4"
            >
              <p className={`flex items-center justify-center gap-2 text-lg md:text-xl font-Ovo ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {t.header.greeting} <Image src = {assets.hand_icon} alt='' className = 'w-6' /> 
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold">
                Mohammed Amine{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  El Ouardini
                </span>
              </h1>
              <p className={`text-2xl md:text-3xl font-Ovo ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {t.header.title}
              </p>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t.header.specialization}
              </p>
              <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t.header.description}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-4"
            >
                <a href="#contact"
                className="px-5 py-1 border border-white rounded-full bg-black text-white items-center flex gap-2 font-Ovo" >{t.header.contactMe} <Image src = {assets.right_arrow_white} alt ='' className='rounded-full w-4'/></a>

                <a href="/sample-resume.pdf" download className ='px-5 py-1 border rounded-full border-gray-500 flex items-center gap-2 font-Ovo' >{t.header.resume} <Image src = {assets.download_icon} alt ='' className='rounded-full w-4'/></a>
            </motion.div>
        </motion.div>
    )
}