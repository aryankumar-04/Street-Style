import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Sparkles } from 'lucide-react';
import { contentData } from '../data/contentData';

export default function NewArrivalsSection({ onSelectProduct, onAddToCart, onOpenCustomizer }) {
  const { headline, tipText, products } = contentData.newArrivals;
  const [dragActive, setDragActive] = useState(null);

  const handleDragOver = (e, productId) => {
    e.preventDefault();
    setDragActive(productId);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(null);
  };

  const handleDrop = (e, product) => {
    e.preventDefault();
    setDragActive(null);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const fileUrl = URL.createObjectURL(files[0]);
      onOpenCustomizer(product, fileUrl);
    }
  };

  return (
    <section id="new-arrivals" className="relative w-full bg-[#161616] text-white py-10 sm:py-16 select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        
        {/* Large Heading: Single line on desktop (Image 1), Stacked 2 lines on mobile (Image 2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="font-display font-normal text-[clamp(2.8rem,10vw,11rem)] leading-[0.85] tracking-tighter text-white uppercase sm:block hidden">
            {headline}
          </h2>
          <h2 className="font-display font-normal text-[clamp(2.8rem,10vw,11rem)] leading-[0.85] tracking-tighter text-white uppercase block sm:hidden">
            NEW<br />ARRIVALS
          </h2>
        </motion.div>

        {/* Product Cards Row (Horizontal cards on mobile matching Image 2, 3-column vertical grid on desktop matching Image 1) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onDragOver={(e) => handleDragOver(e, product.id)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, product)}
              className={`group relative bg-black rounded-2xl border transition-all duration-300 p-3.5 sm:p-6 md:p-8 flex flex-row md:flex-col justify-between items-center md:items-stretch overflow-hidden ${
                dragActive === product.id
                  ? 'border-cyan-400 bg-cyan-950/20 scale-[1.02]'
                  : 'border-white/20 hover:border-white/50 hover:bg-neutral-900/40'
              }`}
            >
              {/* Product Image Area: Left on Mobile (w-[40%]), Top on Desktop (w-full) */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative w-[40%] md:w-full aspect-square md:aspect-[4/5] bg-[#0c0c0c] md:bg-transparent rounded-xl md:rounded-none flex items-center justify-center p-2 md:p-0 overflow-hidden cursor-pointer flex-shrink-0"
              >
                {/* Mockup Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Special Badge for Product 2 (Charlotte M tag & Star Sticker) */}
                {product.tag && (
                  <motion.div
                    initial={{ scale: 0.9, rotate: -6 }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-1 top-1/2 -translate-y-1/2 z-20 flex items-center gap-1 pointer-events-none scale-75 sm:scale-100 origin-left"
                  >
                    {/* Star Sticker Card */}
                    <div className="bg-white text-black p-1.5 sm:p-3.5 rounded-lg sm:rounded-xl shadow-2xl border border-neutral-300 transform -rotate-12 w-10 h-13 sm:w-20 sm:h-24 flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-12 sm:h-12 fill-black" viewBox="0 0 100 100">
                        <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" />
                      </svg>
                    </div>

                    {/* Charlotte M Cursor Badge Tag */}
                    <div className="relative">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-blue-500 absolute -top-2 -left-2 drop-shadow" viewBox="0 0 24 24">
                        <path d="M3 3l7 18 3-7 7-3L3 3z" />
                      </svg>
                      <div className="bg-blue-600 text-white text-[9px] sm:text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl shadow-lg border border-blue-400/50 whitespace-nowrap">
                        {product.tag.name}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Desktop Hover Overlay Controls */}
                <div className="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-3 backdrop-blur-[2px]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="p-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-transform duration-200 hover:scale-110 shadow-lg"
                    title="Quick View"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="p-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-transform duration-200 hover:scale-110 shadow-lg"
                    title="Add to Bag"
                  >
                    <ShoppingBag size={18} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCustomizer(product);
                    }}
                    className="px-3.5 py-2.5 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-transform duration-200 hover:scale-105 flex items-center gap-1 shadow-lg"
                    title="Customize Graphic"
                  >
                    <Sparkles size={14} />
                    <span>Design</span>
                  </button>
                </div>
              </div>

              {/* Product Info & Action Controls: Right on Mobile (w-[60%]), Bottom on Desktop (w-full) */}
              <div className="w-[60%] md:w-full pl-3.5 md:pl-0 flex flex-col justify-between h-full md:h-auto py-1 md:py-0">
                <div>
                  <div className="flex items-center justify-between font-sans text-xs sm:text-base font-normal mb-2 md:mb-3">
                    <span className="text-white font-medium truncate pr-1">{product.name}</span>
                    <span className="text-white/90 font-mono text-xs sm:text-base whitespace-nowrap">{product.priceFormatted}</span>
                  </div>
                  {/* Thin Horizontal Divider Line */}
                  <div className="w-full h-[1px] bg-white/20 group-hover:bg-white/60 transition-colors mb-3 md:mb-0" />
                </div>

                {/* Mobile Circular Arrow Button (matching Image 2) */}
                <div className="flex md:hidden justify-end mt-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                    aria-label={`View ${product.name}`}
                  >
                    <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tip Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-xs sm:text-base text-white/80 font-sans tracking-wide"
        >
          <p><span className="font-bold text-white">Tip:</span> Drag and drop your image over the mockup.</p>
        </motion.div>

      </div>
    </section>
  );
}
