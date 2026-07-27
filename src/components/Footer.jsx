import React from 'react';
import { contentData } from '../data/contentData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#161616] text-white border-t border-white/10 py-6 px-6 sm:px-10 font-sans select-none">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
        
        {/* Left Side: Logo + STREET STYLE + © 2026 All Rights Reserved. */}
        <div className="flex items-center gap-3">
          <img
            src={contentData.brand.logoImage || "/asset/images/logo.png"}
            alt="Street Style Logo"
            className="h-6 w-auto object-contain"
          />
          <span className="font-sans font-medium text-sm text-white tracking-tight uppercase">
            {contentData.brand.name}
          </span>
          <span className="text-neutral-600">|</span>
          <span className="text-neutral-400 text-xs sm:text-sm">© 2026 All Rights Reserved.</span>
        </div>

        {/* Right Side Links */}
        <div className="flex items-center gap-6 font-sans text-xs uppercase tracking-wider text-neutral-400">
          <a href="#contact" className="hover:text-white transition-colors">Terms & Support</a>
          <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors uppercase cursor-pointer"
          >
            Back to Top
          </button>
        </div>

      </div>
    </footer>
  );
}
