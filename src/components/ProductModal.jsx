import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Sparkles, Check, ShieldCheck, Truck } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart, onOpenCustomizer }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  const handleAdd = () => {
    onAddToCart({ ...product, size: selectedSize, quantity });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-neutral-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl text-white grid grid-cols-1 md:grid-cols-2"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-neutral-400 hover:text-white bg-black/40 hover:bg-black/80 rounded-full backdrop-blur-sm transition-colors"
          >
            <X size={20} />
          </button>

          {/* Product Image Panel */}
          <div className="p-8 bg-black flex items-center justify-center relative border-b md:border-b-0 md:border-r border-white/10">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-[380px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]"
            />
            <button
              onClick={() => {
                onClose();
                onOpenCustomizer(product);
              }}
              className="absolute bottom-4 left-4 bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 transition-all"
            >
              <Sparkles size={14} />
              <span>Customize Print</span>
            </button>
          </div>

          {/* Product Details Panel */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                {product.category || 'COLLECTION'}
              </span>
              <h2 className="font-display font-medium text-2xl sm:text-3xl text-white uppercase tracking-tight mt-1 mb-2">
                {product.name}
              </h2>
              <p className="text-xl font-sans text-neutral-200 font-light mb-4">
                {product.priceFormatted}
              </p>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2 font-mono">
                  Select Size
                </label>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 rounded-lg text-xs font-bold transition-all border ${
                        selectedSize === size
                          ? 'bg-white text-black border-white'
                          : 'bg-white/5 text-white border-white/10 hover:border-white/40'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2 font-mono">
                  Quantity
                </label>
                <div className="flex items-center border border-white/20 rounded-lg w-32 bg-black/40">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-9 text-lg flex items-center justify-center text-neutral-400 hover:text-white"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-mono text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-9 text-lg flex items-center justify-center text-neutral-400 hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions & Shipping */}
            <div className="space-y-4">
              <button
                onClick={handleAdd}
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
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    <span>Add to Bag — {product.priceFormatted}</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-2 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <Truck size={14} />
                  <span>Free Express Global Shipping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  <span>100% Organic Heavy Cotton</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
