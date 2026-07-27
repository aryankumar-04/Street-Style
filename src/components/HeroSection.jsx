import React from 'react';
import { motion } from 'framer-motion';
import { contentData } from '../data/contentData';

export default function HeroSection({ onExploreClick }) {
  const { headlines, subtitle, ctaText, mockups } = contentData.hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen max-h-[960px] bg-[#161616] text-white pt-16 lg:pt-20 pb-6 sm:pb-8 px-6 sm:px-10 lg:px-16 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1280px] mx-auto w-full flex-1 flex flex-col justify-between relative z-10 pt-2 sm:pt-4">
        

        {/* Hero Content Grid: Left Huge Text, Right Mockup Layer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center flex-1 my-auto">
          
          {/* Stacked Giant Typography (Ref 1: FIND / YOUR / VIBE) */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-0 z-20">
            {/* FIND */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display font-normal text-[clamp(3.6rem,11.5vw,11.5rem)] leading-[0.83] tracking-tighter text-white uppercase text-left">
                {headlines[0]}
              </h1>
            </motion.div>

            {/* YOUR (Offset to middle) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pl-[12%] sm:pl-[20%] md:pl-[28%]"
            >
              <h1 className="font-display font-normal text-[clamp(3.6rem,11.5vw,11.5rem)] leading-[0.83] tracking-tighter text-white uppercase">
                {headlines[1]}
              </h1>
            </motion.div>

            {/* VIBE (Offset further right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="pl-[35%] sm:pl-[48%] md:pl-[58%]"
            >
              <h1 className="font-display font-normal text-[clamp(3.6rem,11.5vw,11.5rem)] leading-[0.83] tracking-tighter text-white uppercase">
                {headlines[2]}
              </h1>
            </motion.div>
          </div>

          {/* Right Layered Mockup Visuals (Ref 1: Floating sticker card + T-shirt mockup) */}
          <div className="lg:col-span-4 relative h-[320px] sm:h-[400px] lg:h-[450px] flex items-center justify-center lg:justify-end mt-2 lg:mt-0">
            
            {/* Floating Card Mockup (Ref 1: Steph badge + Orbit Y2K symbol) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, rotate: -2, y: -8 }}
              className="absolute left-2 sm:left-4 lg:-left-10 top-2 sm:top-6 z-20 w-36 sm:w-48 p-3 sm:p-4 bg-white text-black rounded-2xl shadow-2xl border border-neutral-200 cursor-pointer group transition-shadow"
            >
              {/* Steph Badge Tag */}
              <div className="absolute -top-3 -left-3 bg-[#00E5FF] text-black text-xs sm:text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24">
                  <path d="M3 3l7 18 3-7 7-3L3 3z" />
                </svg>
                <span>{mockups.card.tag}</span>
              </div>

              {/* Card Graphic: Y2K Orbit Vector Emblem */}
              <div className="aspect-[4/5] bg-neutral-50 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-neutral-100">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="w-20 h-20 sm:w-24 sm:h-24 text-black flex items-center justify-center"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full stroke-black fill-none stroke-[2.5]">
                    <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(30 50 50)" />
                    <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(-30 50 50)" />
                    <polygon points="50,30 55,45 70,50 55,55 50,70 45,55 30,50 45,45" fill="black" />
                    <circle cx="50" cy="50" r="3" fill="white" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* White T-Shirt Mockup Image (Ref 1: rotated white shirt floating on black) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, rotate: 4 }}
              transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04, rotate: 0, y: -6 }}
              className="relative z-10 w-52 sm:w-72 lg:w-80 group cursor-pointer"
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
        <div className="mt-4 lg:mt-2 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 relative z-20">
          
          {/* Subtitle Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-xs sm:max-w-sm"
          >
            <p className="font-sans text-base sm:text-lg text-white font-medium leading-snug">
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
              className="group relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/60 flex items-center justify-center text-center p-2 transition-all duration-300 hover:border-white hover:bg-white hover:text-black cursor-pointer shadow-lg"
            >
              <div className="flex flex-col items-center justify-center leading-tight">
                <span className="font-display font-medium text-xs uppercase tracking-widest group-hover:underline decoration-1 underline-offset-4">
                  EXPLORE
                </span>
                <span className="font-display font-medium text-xs uppercase tracking-widest group-hover:underline decoration-1 underline-offset-4">
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
