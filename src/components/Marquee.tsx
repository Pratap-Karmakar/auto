'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MarqueeItemProps {
  children: ReactNode
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ children }) => (
  <motion.div
    initial={{ x: '0%' }}
    animate={{ x: '-100%' }}
    transition={{
      repeat: Infinity,
      repeatType: 'loop',
      duration: 20,
      ease: 'linear',
    }}
    className="flex-shrink-0 flex items-center justify-center"
  >
    {children}
  </motion.div>
)

export default function Marquee() {
  return (
    <div className="relative w-full py-3 sm:py-5 md:py-8 lg:py-10 bg-white overflow-hidden">
      <div className="border-t-2 border-b-2 border-[#FF9C73]/20 flex whitespace-nowrap">
        <div className="flex animate-marquee">
          {[...Array(2)].map((_, index) => (
            <MarqueeItem key={index}>
              <motion.span
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[10vw] xl:text-[12vw] leading-none font-extrabold uppercase py-2 md:py-3 lg:py-4 px-4 text-transparent bg-clip-text bg-[#e0475e]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                Star Track Automation pvt ltd.
              </motion.span>
            </MarqueeItem>
          ))}
        </div>
        <div className="flex animate-marquee2" aria-hidden="true">
          {[...Array(2)].map((_, index) => (
            <MarqueeItem key={index}>
              <motion.span
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[10vw] xl:text-[12vw] leading-none font-extrabold uppercase py-2 md:py-3 lg:py-4 px-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9C73] to-[#FF4545]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
              >
                We are CodeCraft Studio pvt ltd.
              </motion.span>
            </MarqueeItem>
          ))}
        </div>
      </div>
      <div className="absolute inset-0  pointer-events-none" />
    </div>
  )
}
