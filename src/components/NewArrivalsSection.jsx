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
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Large Heading (Ref 4: NEW ARRIVALS top left) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="font-display font-normal text-[clamp(3.5rem,10vw,11rem)] leading-[0.85] tracking-tighter text-white uppercase">
            {headline}
          </h2>
        </motion.div>

        {/* 3 Product Cards Row (Ref 4) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
              className={`group relative bg-black rounded-2xl border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden ${
                dragActive === product.id
                  ? 'border-cyan-400 bg-cyan-950/20 scale-[1.02]'
                  : 'border-white/20 hover:border-white/50 hover:bg-neutral-900/40'
              }`}
            >
              {/* Product Mockup Image Container */}
              <div className="relative w-full aspect-[4/5] flex items-center justify-center mb-6 overflow-hidden">
                
                {/* Mockup Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Ref 4 Special Badge for Product 2 (Street Smart Hoodie: Charlotte M tag & Star Sticker) */}
                {product.tag && (
                  <motion.div
                    initial={{ scale: 0.9, rotate: -6 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2 pointer-events-none"
                  >
                    {/* Star Sticker Card */}
                    <div className="bg-white text-black p-3.5 rounded-xl shadow-2xl border border-neutral-300 transform -rotate-12 w-20 h-24 flex items-center justify-center">
                      <svg className="w-12 h-12 fill-black" viewBox="0 0 100 100">
                        <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" />
                      </svg>
                    </div>

                    {/* Charlotte M Cursor Badge Tag */}
                    <div className="relative">
                      {/* Cyan/Blue Arrow */}
                      <svg className="w-4 h-4 fill-blue-500 absolute -top-3 -left-3 drop-shadow" viewBox="0 0 24 24">
                        <path d="M3 3l7 18 3-7 7-3L3 3z" />
                      </svg>
                      <div className="bg-blue-600 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-blue-400/50">
                        {product.tag.name}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Hover Overlay Action Controls */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="p-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-transform duration-200 hover:scale-110 shadow-lg"
                    title="Quick View"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="p-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-transform duration-200 hover:scale-110 shadow-lg"
                    title="Add to Bag"
                  >
                    <ShoppingBag size={18} />
                  </button>
                  <button
                    onClick={() => onOpenCustomizer(product)}
                    className="px-3.5 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-transform duration-200 hover:scale-105 flex items-center gap-1 shadow-lg"
                    title="Customize Graphic"
                  >
                    <Sparkles size={14} />
                    <span>Design</span>
                  </button>
                </div>
              </div>

              {/* Product Info & Price Row matching Ref 4 exactly */}
              <div className="w-full">
                <div className="flex items-center justify-between font-sans text-base sm:text-lg font-normal mb-3">
                  <span className="text-white font-medium">{product.name}</span>
                  <span className="text-white/90">{product.priceFormatted}</span>
                </div>
                {/* Thin Horizontal Divider Line at Bottom (Ref 4) */}
                <div className="w-full h-[1px] bg-white/30 group-hover:bg-white/60 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tip Footer Text matching Ref 4 & 5 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-sm sm:text-base text-white font-sans tracking-wide"
        >
          <p><span className="font-bold">Tip:</span> Drag and drop your image over the mockup.</p>
        </motion.div>

      </div>
    </section>
  );
}
