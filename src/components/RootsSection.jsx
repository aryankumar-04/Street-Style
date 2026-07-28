import React from 'react';
import { motion } from 'framer-motion';
import { contentData } from '../data/contentData';

export default function RootsSection() {
  const { headlines, bodyText, bgImage } = contentData.story;

  return (
    <section id="roots" className="relative w-full bg-[#161616] text-white overflow-hidden select-none">
      {/* Full-bleed Grayscale Editorial Image Container */}
      <div className="relative w-full min-h-[520px] h-[580px] sm:h-[700px] lg:h-[800px] overflow-hidden group">
        
        {/* Background Grayscale Image */}
        <img
          src={bgImage}
          alt="We're Proud of Our Roots Streetwear Editorial"
          className="w-full h-full object-cover object-center grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Editorial Gradient Overlay for Text Readability on Mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

        {/* Foreground Text Content Layout */}
        <div className="absolute inset-0 max-w-[1280px] mx-auto px-4 sm:px-10 p-6 sm:p-10 flex flex-col justify-end">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end">
            
            {/* Stacked Huge Heading (WE'RE / PROUD OF / OUR ROOTS) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col space-y-0"
            >
              {headlines.map((line, idx) => (
                <h2
                  key={idx}
                  className="font-display font-normal text-[clamp(2.4rem,7.5vw,9rem)] leading-[0.85] sm:leading-[0.84] tracking-tighter text-white uppercase"
                >
                  {line}
                </h2>
              ))}
            </motion.div>

            {/* Right Side Paragraph Block directly over photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 max-w-lg lg:ml-auto"
            >
              <p className="font-sans text-xs sm:text-base lg:text-lg text-white/90 font-normal leading-relaxed tracking-wide drop-shadow-md">
                {bodyText}
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
