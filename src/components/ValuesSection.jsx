import React from 'react';
import { motion } from 'framer-motion';
import { contentData } from '../data/contentData';

export default function ValuesSection() {
  const { headlines, items } = contentData.values;

  // Custom Monochrome Icons matching Reference Image 3 exactly
  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'flower':
        return (
          <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white fill-white" viewBox="0 0 100 100">
            {/* 6-petal stylized flower icon */}
            <g transform="translate(50,50)">
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <ellipse
                  key={i}
                  cx="0"
                  cy="-22"
                  rx="12"
                  ry="20"
                  transform={`rotate(${angle})`}
                  fill="white"
                />
              ))}
              <circle cx="0" cy="0" r="10" fill="black" />
            </g>
          </svg>
        );
      case 'oval-disc':
        return (
          <svg className="w-9 h-8 sm:w-14 sm:h-12 text-white fill-white" viewBox="0 0 100 100">
            {/* Tilted oval disc icon matching Ref 3 */}
            <g transform="translate(50,50) rotate(-25)">
              <ellipse cx="0" cy="0" rx="42" ry="22" fill="white" />
              <ellipse cx="0" cy="0" rx="20" ry="10" fill="black" />
              {/* Inner spokes */}
              {[0, 45, 90, 135].map((angle, i) => (
                <rect
                  key={i}
                  x="-2"
                  y="-18"
                  width="4"
                  height="36"
                  transform={`rotate(${angle})`}
                  fill="white"
                />
              ))}
              <circle cx="0" cy="0" r="6" fill="black" />
            </g>
          </svg>
        );
      case 'globe':
        return (
          <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white stroke-white fill-none stroke-[3]" viewBox="0 0 100 100">
            {/* Wireframe globe matching Ref 3 */}
            <circle cx="50" cy="50" r="38" />
            <line x1="12" y1="50" x2="88" y2="50" />
            <ellipse cx="50" cy="50" rx="20" ry="38" />
            <line x1="18" y1="30" x2="82" y2="30" />
            <line x1="18" y1="70" x2="82" y2="70" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="values" className="relative w-full bg-[#161616] text-white pt-10 sm:pt-16 pb-10 sm:pb-16 select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 flex flex-col">
        
        {/* Top Right Stacked Heading (WE'RE / PROUD OF / OUR CLOTHES) */}
        <div className="flex justify-end mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-right flex flex-col space-y-0"
          >
            {headlines.map((line, idx) => (
              <h2
                key={idx}
                className="font-display font-normal text-[clamp(2.2rem,7.5vw,9rem)] leading-[0.85] sm:leading-[0.84] tracking-tighter text-white uppercase"
              >
                {line}
              </h2>
            ))}
          </motion.div>
        </div>

        {/* Bottom Area: 3 Value Columns Horizontal & Centered on mobile */}
        <div className="grid grid-cols-3 gap-2 sm:gap-8 lg:gap-16 items-start mt-2 mb-2">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center md:items-start md:text-left gap-2 sm:gap-4 group"
            >
              {/* Icon Container */}
              <div className="transition-transform duration-300 group-hover:scale-110 mb-1 flex items-center justify-center">
                {renderIcon(item.icon)}
              </div>

              {/* Stacked Title Lines */}
              <div className="flex flex-col space-y-0 items-center text-center md:items-start md:text-left">
                {item.titleLines ? (
                  item.titleLines.map((line, lIdx) => (
                    <span
                      key={lIdx}
                      className="font-display font-normal text-[11px] sm:text-2xl lg:text-3xl leading-[0.95] sm:leading-[0.9] tracking-tighter uppercase text-white"
                    >
                      {line}
                    </span>
                  ))
                ) : (
                  <h3 className="font-display font-normal text-[11px] sm:text-2xl lg:text-3xl leading-[0.95] sm:leading-[0.9] tracking-tighter uppercase text-white">
                    {item.title}
                  </h3>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
