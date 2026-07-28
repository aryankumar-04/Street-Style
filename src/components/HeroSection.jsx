import React from 'react';
import { motion } from 'framer-motion';
import { contentData } from '../data/contentData';

export default function HeroSection({ onExploreClick }) {
  const { headlines, subtitle, ctaText, mockups } = contentData.hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen max-h-none lg:max-h-[960px] bg-[#161616] text-white pt-20 sm:pt-24 lg:pt-20 pb-8 sm:pb-10 px-4 sm:px-10 lg:px-16 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1280px] mx-auto w-full flex-1 flex flex-col justify-between relative z-10 pt-2 sm:pt-4">
        

        {/* Hero Content Grid: Left Giant Typography, Right Layered Mockups matching Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center flex-1 my-auto">
          
          {/* Stacked Giant Typography (FIND / YOUR / VIBE matching Ref Image 2) */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-0 z-20 overflow-hidden">
            {/* FIND */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display font-normal text-[clamp(2.8rem,9.5vw,11.5rem)] leading-[0.85] sm:leading-[0.83] tracking-tighter text-white uppercase text-left">
                {headlines[0]}
              </h1>
            </motion.div>

            {/* YOUR (Offset to middle right) */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pl-[12%] sm:pl-[20%] md:pl-[28%]"
            >
              <h1 className="font-display font-normal text-[clamp(2.8rem,9.5vw,11.5rem)] leading-[0.85] sm:leading-[0.83] tracking-tighter text-white uppercase">
                {headlines[1]}
              </h1>
            </motion.div>

            {/* VIBE (Offset further right) */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="pl-[28%] sm:pl-[44%] md:pl-[58%]"
            >
              <h1 className="font-display font-normal text-[clamp(2.8rem,9.5vw,11.5rem)] leading-[0.85] sm:leading-[0.83] tracking-tighter text-white uppercase">
                {headlines[2]}
              </h1>
            </motion.div>
          </div>

          {/* Right Layered Mockup Visuals matching Ref Image 2 */}
          <div className="lg:col-span-4 relative h-[250px] sm:h-[360px] lg:h-[450px] flex items-center justify-center lg:justify-end mt-2 lg:mt-0 w-full">
            
            {/* Floating Card Mockup (Steph badge + Dress 5) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, rotate: -2, y: -6 }}
              className="absolute left-2 sm:left-8 lg:-left-10 top-2 sm:top-6 z-20 w-32 sm:w-40 lg:w-48 p-2.5 sm:p-4 bg-white text-black rounded-2xl shadow-2xl border border-neutral-200 cursor-pointer group transition-shadow"
            >
              {/* Steph Badge Tag */}
              <div className="absolute -top-2.5 -left-2.5 bg-[#00E5FF] text-black text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1 shadow-md">
                <svg className="w-3 h-3 fill-black" viewBox="0 0 24 24">
                  <path d="M3 3l7 18 3-7 7-3L3 3z" />
                </svg>
                <span>{mockups.card.tag}</span>
              </div>

              {/* Card Graphic: Dress 5 Mockup Image */}
              <div className="aspect-[4/5] bg-neutral-50 rounded-xl flex items-center justify-center p-1.5 sm:p-2 relative overflow-hidden border border-neutral-100">
                <img
                  src={mockups.card.image}
                  alt={mockups.card.alt || "Dress Mockup"}
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)]"
                />
              </div>
            </motion.div>

            {/* White T-Shirt Mockup Image (Rotated main dress 1) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, rotate: 4 }}
              transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04, rotate: 0, y: -6 }}
              className="relative z-10 w-48 sm:w-64 lg:w-80 group cursor-pointer ml-auto lg:ml-0"
            >
              <img
                src={mockups.shirt.image}
                alt={mockups.shirt.alt}
                className="w-full h-auto object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

          </div>

        </div>

        {/* Hero Bottom Row: Subtitle (Lower Left) + Circular CTA (Lower Right) */}
        <div className="mt-4 sm:mt-6 lg:mt-2 flex flex-row items-end justify-between gap-4 relative z-20">
          
          {/* Subtitle Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-[180px] sm:max-w-sm"
          >
            <p className="font-sans text-xs sm:text-lg text-white font-medium leading-snug">
              Check out our Captivating<br />Cities shirt collection
            </p>
          </motion.div>

          {/* Circular Outlined CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
          >
            <a
              href="#new-arrivals"
              onClick={(e) => {
                e.preventDefault();
                onExploreClick ? onExploreClick() : document.getElementById('new-arrivals')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-white/60 flex items-center justify-center text-center p-2 transition-all duration-300 hover:border-white hover:bg-white hover:text-black cursor-pointer shadow-lg active:scale-95"
            >
              <div className="flex flex-col items-center justify-center leading-tight">
                <span className="font-display font-medium text-[10px] sm:text-xs uppercase tracking-widest group-hover:underline decoration-1 underline-offset-4">
                  EXPLORE
                </span>
                <span className="font-display font-medium text-[10px] sm:text-xs uppercase tracking-widest group-hover:underline decoration-1 underline-offset-4">
                  HERE
                </span>
              </div>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
