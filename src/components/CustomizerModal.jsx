import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Sparkles, ShoppingBag, Check, RotateCcw } from 'lucide-react';
import { contentData } from '../data/contentData';

export default function CustomizerModal({ initialProduct, initialImage, onClose, onAddToCart }) {
  const products = contentData.newArrivals.products;
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || products[0]);
  const [customGraphic, setCustomGraphic] = useState(initialImage || null);
  const [graphicScale, setGraphicScale] = useState(1);
  const [graphicPosition, setGraphicPosition] = useState({ x: 0, y: 0 });
  const [added, setAdded] = useState(false);

  // Preset streetwear graphics
  const presetGraphics = [
    {
      id: 'landscape',
      name: 'Landscape Cloud',
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect width="100" height="100" fill="#87CEEB" />
          <path d="M0,70 Q25,50 50,70 T100,60 L100,100 L0,100 Z" fill="#6B8E23" />
          <circle cx="35" cy="35" r="12" fill="white" />
          <circle cx="48" cy="35" r="16" fill="white" />
          <circle cx="62" cy="35" r="12" fill="white" />
        </svg>
      )
    },
    {
      id: 'star-burst',
      name: 'Y2K Starburst',
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
          <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" />
        </svg>
      )
    },
    {
      id: 'orbit-atom',
      name: 'Atomic Orbit',
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-black fill-none stroke-[3]">
          <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(30 50 50)" />
          <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(-30 50 50)" />
          <circle cx="50" cy="50" r="8" fill="black" />
        </svg>
      )
    }
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomGraphic(url);
    }
  };

  const handleAddCustomToBag = () => {
    onAddToCart({
      ...selectedProduct,
      name: `${selectedProduct.name} (Custom Studio Edit)`,
      customGraphic: customGraphic || 'Preset Graphic',
      price: selectedProduct.price + 5.00,
      priceFormatted: `$${(selectedProduct.price + 5.00).toFixed(2)}`
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-lg overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-5xl bg-neutral-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl text-white grid grid-cols-1 lg:grid-cols-12 max-h-[92vh] my-auto overflow-y-auto"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-30 p-2.5 text-neutral-400 hover:text-white bg-black/60 hover:bg-black/90 rounded-full border border-white/10 backdrop-blur-sm transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close customizer"
          >
            <X size={20} />
          </button>

          {/* Left Canvas Preview Area (7 Cols) */}
          <div className="lg:col-span-7 bg-black p-4 sm:p-8 flex flex-col items-center justify-center relative border-b lg:border-b-0 lg:border-r border-white/10 min-h-[340px] sm:min-h-[400px]">
            <div className="text-center mb-4">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono flex items-center justify-center gap-1">
                <Sparkles size={12} /> Live Print Customizer
              </span>
              <p className="text-xs text-neutral-400 mt-1">Drag your custom graphic to reposition</p>
            </div>

            {/* Garment Mockup Container */}
            <div className="relative w-full max-w-md aspect-[4/5] flex items-center justify-center border border-white/10 rounded-2xl bg-neutral-950 p-6 shadow-inner overflow-hidden select-none">
              {/* Base Mockup Shirt */}
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-contain pointer-events-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
              />

              {/* Graphic Print Layer inside chest print zone */}
              <motion.div
                drag
                dragConstraints={{ left: -80, right: 80, top: -80, bottom: 80 }}
                style={{ x: graphicPosition.x, y: graphicPosition.y, scale: graphicScale }}
                className="absolute w-28 h-28 sm:w-36 sm:h-36 cursor-grab active:cursor-grabbing border-2 border-dashed border-cyan-400/40 hover:border-cyan-400 p-1 rounded-lg flex items-center justify-center shadow-2xl bg-black/10"
              >
                {customGraphic ? (
                  typeof customGraphic === 'string' ? (
                    <img src={customGraphic} alt="Custom Graphic" className="w-full h-full object-contain pointer-events-none" />
                  ) : (
                    customGraphic
                  )
                ) : (
                  <div className="w-full h-full bg-sky-200 border border-sky-400 rounded flex flex-col items-center justify-center p-2 text-black font-sans text-[10px] text-center pointer-events-none">
                    <div className="w-full h-1/2 bg-sky-400 rounded-t mb-1 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white opacity-80" />
                    </div>
                    <span>GRAPHIC PRINT</span>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => {
                  setGraphicScale(1);
                  setGraphicPosition({ x: 0, y: 0 });
                }}
                className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/10 bg-white/5"
              >
                <RotateCcw size={12} /> Reset Position
              </button>
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-400">Scale:</span>
                <input
                  type="range"
                  min="0.5"
                  max="1.8"
                  step="0.1"
                  value={graphicScale}
                  onChange={(e) => setGraphicScale(parseFloat(e.target.value))}
                  className="w-24 accent-white cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Right Customization Controls (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[85vh]">
            <div>
              <h3 className="font-display font-normal text-2xl uppercase tracking-tight text-white mb-2">
                Custom Studio
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed mb-6">
                Upload your custom streetwear artwork or choose from our curated editorial graphics.
              </p>

              {/* Garment Selector */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2 font-mono">
                  1. Select Garment Base
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProduct(p)}
                      className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                        selectedProduct.id === p.id
                          ? 'border-white bg-white/10'
                          : 'border-white/10 bg-black/40 hover:border-white/30'
                      }`}
                    >
                      <img src={p.image} alt={p.name} className="w-10 h-10 object-contain" />
                      <span className="text-[10px] font-sans truncate w-full">{p.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Upload Graphic */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2 font-mono">
                  2. Upload Custom Image
                </label>
                <label className="w-full py-4 border-2 border-dashed border-white/20 hover:border-white/60 bg-white/5 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors">
                  <Upload size={20} className="text-neutral-400" />
                  <span className="text-xs text-neutral-200 font-medium">Click or Drag Image File</span>
                  <span className="text-[10px] text-neutral-400">PNG, JPG or SVG (Max 5MB)</span>
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>

              {/* Preset Graphics */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2 font-mono">
                  3. Or Pick Preset Graphic
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {presetGraphics.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => setCustomGraphic(preset.svg)}
                      className="p-3 border border-white/10 hover:border-white/40 rounded-xl bg-white/5 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform"
                    >
                      <div className="w-10 h-10">{preset.svg}</div>
                      <span className="text-[10px] text-neutral-300 font-mono truncate">{preset.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Add to Bag Action */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={handleAddCustomToBag}
                disabled={added}
                className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-black hover:bg-neutral-200'
                }`}
              >
                {added ? (
                  <>
                    <Check size={16} />
                    <span>Custom Shirt Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    <span>Add Custom Piece — ${(selectedProduct.price + 5.0).toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
