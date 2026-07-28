import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { contentData } from '../data/contentData';

export default function Header({ cartCount, onOpenCart, onOpenCustomizer }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collection', href: '#hero' },
    { name: 'Roots', href: '#roots' },
    { name: 'Values', href: '#values' },
    { name: 'New Arrivals', href: '#new-arrivals' },
    { name: 'Press', href: '#press' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 flex items-center justify-between w-full relative">
          {/* Mobile Left: Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:opacity-70 transition-opacity flex items-center justify-center min-w-[44px] min-h-[44px] z-10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Brand Logo (Centered on Mobile, Left-aligned on Desktop) */}
          <a
            href="#hero"
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer text-white hover:opacity-85 transition-opacity md:static absolute left-1/2 -translate-x-1/2 md:translate-x-0 z-10"
          >
            <img
              src={contentData.brand.logoImage || "/asset/images/logo.png"}
              alt="Street Style Logo"
              className="h-6 sm:h-9 w-auto object-contain"
            />
            <span className="font-sans font-medium text-base sm:text-xl tracking-tight uppercase text-white whitespace-nowrap">
              {contentData.brand.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs tracking-widest uppercase font-medium text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions (Cart Icon & Custom Studio) */}
          <div className="flex items-center gap-2 sm:gap-5 text-white z-10">
            <button
              onClick={onOpenCustomizer}
              className="hidden sm:flex lg:flex items-center gap-1.5 text-xs tracking-wider uppercase bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-2 rounded-full transition-all min-h-[40px]"
            >
              <span>Custom Studio</span>
              <ArrowUpRight size={14} />
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag size={20} className="stroke-[1.5]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-white text-black font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[70px] z-30 bg-black/95 backdrop-blur-xl md:hidden px-8 py-12 flex flex-col justify-between border-t border-white/10"
          >
            <div className="flex flex-col gap-6 text-xl tracking-wider uppercase font-display">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-300 hover:text-white py-2 border-b border-white/10 flex justify-between items-center"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={18} className="text-white/40" />
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomizer();
                }}
                className="w-full py-3.5 bg-white text-black font-bold tracking-widest text-xs uppercase rounded-full flex items-center justify-center gap-2"
              >
                <span>Launch Customizer Studio</span>
                <ArrowUpRight size={16} />
              </button>
              <p className="text-center text-xs text-neutral-500 tracking-wider">
                © {new Date().getFullYear()} {contentData.brand.name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
