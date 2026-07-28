import React from 'react';
import { motion } from 'framer-motion';
import { contentData } from '../data/contentData';

export default function PressSection() {
  const { headline, quotes } = contentData.press;

  return (
    <section id="press" className="relative w-full bg-[#161616] text-white py-10 sm:py-16 select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Side Huge Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center"
          >
            <h2 className="font-display font-normal text-[clamp(2.2rem,7vw,7.5rem)] leading-[0.85] tracking-tighter text-white uppercase">
              {headline}
            </h2>
          </motion.div>

          {/* Right Side 3 Editorial Quotes with Thin Dividers */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
            {quotes.map((quoteItem, idx) => (
              <motion.div
                key={quoteItem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col"
              >
                {/* Editorial Quote Text */}
                <p className="font-sans text-sm sm:text-base lg:text-lg text-neutral-200 font-light leading-relaxed tracking-wide mb-3">
                  "{quoteItem.quote}"
                </p>

                {/* Publication Name in Uppercase */}
                <h3 className="font-display font-normal text-base sm:text-xl tracking-tight uppercase text-white group-hover:text-neutral-300 transition-colors">
                  {quoteItem.publication}
                </h3>

                {/* Thin Line Divider */}
                {idx < quotes.length - 1 && (
                  <div className="w-full h-[1px] bg-white/30 mt-6 sm:mt-8" />
                )}
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
