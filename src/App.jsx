import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import RootsSection from './components/RootsSection';
import ValuesSection from './components/ValuesSection';
import NewArrivalsSection from './components/NewArrivalsSection';
import PressSection from './components/PressSection';
import ContactSection from './components/ContactSection';
import ProductModal from './components/ProductModal';
import CustomizerModal from './components/CustomizerModal';
import CartDrawer from './components/CartDrawer';
import InquiryModal from './components/InquiryModal';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customizerState, setCustomizerState] = useState({ isOpen: false, product: null, image: null });
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenCustomizer = (product = null, image = null) => {
    setCustomizerState({
      isOpen: true,
      product: product,
      image: image,
    });
  };

  return (
    <div className="min-h-screen bg-[#161616] text-white selection:bg-white selection:text-black">
      {/* Top Fixed Header */}
      <Header
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCustomizer={() => handleOpenCustomizer()}
      />

      {/* 1) HERO SECTION */}
      <HeroSection onExploreClick={() => handleOpenCustomizer()} />

      {/* 2) ROOTS / STORY SECTION */}
      <RootsSection />

      {/* 3) BRAND VALUES SECTION */}
      <ValuesSection />

      {/* 4) NEW ARRIVALS SECTION */}
      <NewArrivalsSection
        onSelectProduct={(product) => setSelectedProduct(product)}
        onAddToCart={handleAddToCart}
        onOpenCustomizer={handleOpenCustomizer}
      />

      {/* 5) PRESS SECTION */}
      <PressSection />

      {/* 6) CONTACT / PARTNERSHIPS SECTION */}
      <ContactSection onOpenInquiryModal={() => setIsInquiryOpen(true)} />

      {/* FOOTER BAR */}
      <Footer />

      {/* Quick View Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onOpenCustomizer={handleOpenCustomizer}
        />
      )}

      {/* Interactive Customizer Studio Modal */}
      {customizerState.isOpen && (
        <CustomizerModal
          initialProduct={customizerState.product}
          initialImage={customizerState.image}
          onClose={() => setCustomizerState({ isOpen: false, product: null, image: null })}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Partnership & Press Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </div>
  );
}
