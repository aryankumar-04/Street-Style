import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';
import { contentData } from '../data/contentData';

export default function ContactSection({ onOpenInquiryModal }) {
  const { headlineTop, headlineBottom, columns } = contentData.contact;
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="relative w-full bg-white text-black py-10 sm:py-16 select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 flex flex-col justify-between min-h-[450px]">
        
        {/* Top Left Giant Stacked Black Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-0 mb-8 sm:mb-14 text-left"
        >
          {headlineTop.map((line, idx) => (
            <h2
              key={idx}
              className="font-display font-normal text-[clamp(2.2rem,7vw,9.5rem)] leading-[0.85] sm:leading-[0.84] tracking-tighter text-black uppercase whitespace-normal sm:whitespace-nowrap"
            >
              {line}
            </h2>
          ))}
        </motion.div>

        {/* Center Row: 3 Contact Columns (PHONE, EMAIL, SOCIAL) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 lg:gap-16 my-6 sm:my-14 text-left items-start max-w-4xl">
          {columns.map((col, idx) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start justify-start gap-1 group text-left"
            >
              <span className="font-display font-normal text-base sm:text-xl lg:text-2xl tracking-tighter uppercase text-black">
                {col.label}
              </span>

              {col.type === 'tel' && (
                <a
                  href={`tel:${col.value}`}
                  className="font-sans text-sm sm:text-lg font-normal text-black hover:underline underline-offset-4 decoration-1 tracking-tight min-h-[36px] flex items-center"
                >
                  {col.value}
                </a>
              )}

              {col.type === 'email' && (
                <a
                  href={`mailto:${col.value}`}
                  className="font-sans text-sm sm:text-lg font-normal text-black hover:underline underline-offset-4 decoration-1 tracking-tight min-h-[36px] flex items-center break-all sm:break-normal"
                >
                  {col.value}
                </a>
              )}

              {col.type === 'social' && (
                <div className="flex items-center gap-2 pt-1 text-black">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-black hover:opacity-70 transition-opacity min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-neutral-100"
                    aria-label="Facebook"
                  >
                    <Facebook size={22} className="fill-black stroke-none" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-black hover:opacity-70 transition-opacity min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-neutral-100"
                    aria-label="Instagram"
                  >
                    <Instagram size={22} className="stroke-[2.2]" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Right Giant Stacked Black Heading (AND PARTNERSHIPS) */}
        <div className="flex justify-end mt-8 sm:mt-14">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-right flex flex-col space-y-0"
          >
            {headlineBottom.map((line, idx) => (
              <h2
                key={idx}
                className="font-display font-normal text-[clamp(2.2rem,7vw,9.5rem)] leading-[0.85] sm:leading-[0.84] tracking-tighter text-black uppercase whitespace-normal sm:whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
                onClick={onOpenInquiryModal}
              >
                {line}
              </h2>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
