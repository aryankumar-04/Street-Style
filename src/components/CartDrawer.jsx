import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ArrowRight, ShieldCheck, ShoppingBag, Check } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity, onClearCart }) {
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      setCheckoutSuccess(true);
      setTimeout(() => {
        setCheckoutSuccess(false);
        onClearCart();
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-neutral-900 border-l border-white/10 text-white flex flex-col justify-between p-6 sm:p-8 shadow-2xl"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={20} />
                  <h2 className="font-display font-medium text-xl uppercase tracking-tight">Your Shopping Bag</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Items List */}
              <div className="py-6 space-y-4 overflow-y-auto max-h-[55vh]">
                {cartItems.length === 0 ? (
                  <div className="py-16 text-center text-neutral-400 space-y-3">
                    <ShoppingBag size={36} className="mx-auto stroke-[1] text-neutral-500" />
                    <p className="font-sans text-sm font-light">Your shopping bag is empty.</p>
                  </div>
                ) : (
                  cartItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-3 bg-black/40 border border-white/10 rounded-xl"
                    >
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-contain bg-black rounded-lg p-1" />
                      <div className="flex-1">
                        <h4 className="font-sans font-medium text-sm text-white">{item.name}</h4>
                        <p className="text-xs text-neutral-400 font-mono mt-0.5">Size: {item.size || 'M'}</p>
                        <p className="text-sm font-medium text-white mt-1">{item.priceFormatted}</p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="p-2 text-neutral-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Footer / Checkout */}
            {cartItems.length > 0 && (
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-neutral-400">
                    <span>Subtotal</span>
                    <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-neutral-400">
                    <span>Shipping</span>
                    <span className="text-green-400 font-mono text-xs">FREE</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={checkingOut || checkoutSuccess}
                  className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl ${
                    checkoutSuccess
                      ? 'bg-green-600 text-white'
                      : checkingOut
                      ? 'bg-neutral-400 text-black'
                      : 'bg-white text-black hover:bg-neutral-200'
                  }`}
                >
                  {checkoutSuccess ? (
                    <>
                      <Check size={16} />
                      <span>Order Confirmed!</span>
                    </>
                  ) : checkingOut ? (
                    <span>Processing Order...</span>
                  ) : (
                    <>
                      <span>Proceed to Checkout</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500 font-mono text-center">
                  <ShieldCheck size={12} />
                  <span>Encrypted 256-bit Secure Checkout</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
