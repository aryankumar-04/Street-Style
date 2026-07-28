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
        
        {/* Large Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="font-display font-normal text-[clamp(2.4rem,8.5vw,11rem)] leading-[0.85] tracking-tighter text-white uppercase">
            {headline}
          </h2>
        </motion.div>

        {/* Product Cards Row (1 col on mobile, 2 cols on tablet, 3 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              className={`group relative bg-black rounded-2xl border transition-all duration-300 p-5 sm:p-8 flex flex-col justify-between overflow-hidden ${
                dragActive === product.id
                  ? 'border-cyan-400 bg-cyan-950/20 scale-[1.02]'
                  : 'border-white/20 hover:border-white/50 hover:bg-neutral-900/40'
              }`}
            >
              {/* Product Mockup Image Container */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative w-full aspect-[4/5] flex items-center justify-center mb-6 overflow-hidden cursor-pointer"
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
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex items-center gap-1.5 sm:gap-2 pointer-events-none scale-90 sm:scale-100"
                  >
                    {/* Star Sticker Card */}
                    <div className="bg-white text-black p-2.5 sm:p-3.5 rounded-xl shadow-2xl border border-neutral-300 transform -rotate-12 w-16 h-20 sm:w-20 sm:h-24 flex items-center justify-center">
                      <svg className="w-9 h-9 sm:w-12 sm:h-12 fill-black" viewBox="0 0 100 100">
                        <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" />
                      </svg>
                    </div>

                    {/* Charlotte M Cursor Badge Tag */}
                    <div className="relative">
                      <svg className="w-3.5 h-3.5 fill-blue-500 absolute -top-2.5 -left-2.5 drop-shadow" viewBox="0 0 24 24">
                        <path d="M3 3l7 18 3-7 7-3L3 3z" />
                      </svg>
                      <div className="bg-blue-600 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl shadow-lg border border-blue-400/50">
                        {product.tag.name}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Hover / Touch Overlay Action Controls */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-3 backdrop-blur-[2px]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="p-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-transform duration-200 hover:scale-110 shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
                    title="Quick View"
                    aria-label="Quick View"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="p-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-transform duration-200 hover:scale-110 shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
                    title="Add to Bag"
                    aria-label="Add to Bag"
                  >
                    <ShoppingBag size={18} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCustomizer(product);
                    }}
                    className="px-3.5 py-2.5 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-transform duration-200 hover:scale-105 flex items-center gap-1 shadow-lg min-h-[44px]"
                    title="Customize Graphic"
                    aria-label="Customize Graphic"
                  >
                    <Sparkles size={14} />
                    <span>Design</span>
                  </button>
                </div>
              </div>

              {/* Product Info & Price Row */}
              <div className="w-full">
                <div className="flex items-center justify-between font-sans text-sm sm:text-lg font-normal mb-3">
                  <span className="text-white font-medium">{product.name}</span>
                  <span className="text-white/90 font-mono text-sm sm:text-base">{product.priceFormatted}</span>
                </div>
                {/* Thin Horizontal Divider Line at Bottom */}
                <div className="w-full h-[1px] bg-white/30 group-hover:bg-white/60 transition-colors" />
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
