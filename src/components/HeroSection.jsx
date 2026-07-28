import React from 'react';
import { motion } from 'framer-motion';
import { contentData } from '../data/contentData';

export default function HeroSection({ onExploreClick }) {
  const { headlines, subtitle, ctaText, mockups } = contentData.hero;

  return (
    <section
      id="hero"
      className="relative h-[100vh] h-[100svh] min-h-[100vh] min-h-[100svh] bg-[#161616] text-white pt-14 sm:pt-24 lg:pt-20 pb-3 sm:pb-8 px-4 sm:px-10 lg:px-16 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1280px] mx-auto w-full flex-1 flex flex-col justify-between relative z-10 pt-1 sm:pt-4">
        

        {/* Hero Content Grid: Desktop = Text Left / Images Right; Mobile = Images Top / Text Middle (Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-6 lg:gap-4 items-center flex-1 my-auto">
          
          {/* Product Mockup Visuals Layer (Mobile = Order 1 Top centered overlapping pair; Desktop = Order 2 Right) */}
          <div className="order-1 lg:order-2 lg:col-span-4 relative h-[175px] sm:h-[280px] lg:h-[450px] flex items-center justify-center lg:justify-end my-0.5 sm:my-2 lg:my-0 w-full">
            
            {/* Centered Overlapping Pair Container */}
            <div className="relative inline-flex items-center justify-center pl-8 sm:pl-14 lg:pl-0">
              
              {/* Floating Card Mockup (Steph badge + Dress 5) overlapping shirt top-left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotate: -12 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, rotate: -2, y: -6 }}
                className="absolute -left-10 sm:-left-16 lg:-left-10 top-0 sm:top-6 z-20 w-32 sm:w-44 lg:w-48 p-2 sm:p-4 bg-white text-black rounded-xl sm:rounded-2xl shadow-2xl border border-neutral-200 cursor-pointer group transition-shadow"
              >
                {/* Steph Badge Tag */}
                <div className="absolute -top-2.5 -left-2.5 bg-[#00E5FF] text-black text-[9px] sm:text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1 shadow-md">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-black" viewBox="0 0 24 24">
                    <path d="M3 3l7 18 3-7 7-3L3 3z" />
                  </svg>
                  <span>{mockups.card.tag}</span>
                </div>

                {/* Card Graphic: Dress 5 Mockup Image */}
                <div className="aspect-[4/5] bg-neutral-50 rounded-lg sm:rounded-xl flex items-center justify-center p-1 sm:p-2 relative overflow-hidden border border-neutral-100">
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
                className="relative z-10 w-40 sm:w-64 lg:w-80 group cursor-pointer"
              >
                <img
                  src={mockups.shirt.image}
                  alt={mockups.shirt.alt}
                  className="w-full h-auto object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>

            </div>

          </div>

          {/* Stacked Giant Typography (Mobile = Order 2 Middle; Desktop = Order 1 Left) */}
          <div className="order-2 lg:order-1 lg:col-span-8 flex flex-col justify-center space-y-0 z-20 overflow-hidden">
            {/* FIND */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display font-normal text-[clamp(2.6rem,10.5vw,11.5rem)] leading-[0.85] sm:leading-[0.83] tracking-tighter text-white uppercase text-left">
                {headlines[0]}
              </h1>
            </motion.div>

            {/* YOUR (Offset to middle right) */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pl-[16%] sm:pl-[20%] md:pl-[28%]"
            >
              <h1 className="font-display font-normal text-[clamp(2.6rem,10.5vw,11.5rem)] leading-[0.85] sm:leading-[0.83] tracking-tighter text-white uppercase">
                {headlines[1]}
              </h1>
            </motion.div>

            {/* VIBE (Offset further right) */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="pl-[36%] sm:pl-[44%] md:pl-[58%]"
            >
              <h1 className="font-display font-normal text-[clamp(2.6rem,10.5vw,11.5rem)] leading-[0.85] sm:leading-[0.83] tracking-tighter text-white uppercase">
                {headlines[2]}
              </h1>
            </motion.div>
          </div>

        </div>

        {/* Hero Bottom Row: Subtitle (Lower Left) + Circular CTA Button with Arrow (Lower Right) */}
        <div className="mt-1 sm:mt-4 flex flex-row items-end justify-between gap-3 relative z-20">
          
          {/* Subtitle Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-[150px] sm:max-w-sm"
          >
            <p className="font-sans text-[10px] sm:text-lg text-white font-medium leading-snug">
              Check out our Captivating<br />Cities shirt collection
            </p>
          </motion.div>

          {/* Circular Outlined CTA Button with Arrow matching Image 1 */}
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
              className="group relative w-16 h-16 sm:w-28 sm:h-28 rounded-full border border-white/60 flex items-center justify-center text-center p-1.5 sm:p-2 transition-all duration-300 hover:border-white hover:bg-white hover:text-black cursor-pointer shadow-lg active:scale-95"
            >
              <div className="flex flex-col items-center justify-center leading-tight">
                <span className="font-display font-medium text-[8px] sm:text-xs uppercase tracking-widest group-hover:underline decoration-1 underline-offset-4">
                  EXPLORE
                </span>
                <span className="font-display font-medium text-[8px] sm:text-xs uppercase tracking-widest group-hover:underline decoration-1 underline-offset-4">
                  HERE
                </span>
                <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4 mt-0.5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
