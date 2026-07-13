import React from "react";
import { motion } from "framer-motion";

const HERO_BG = "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/d13b2b221_generated_b01b9cb9.png";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={HERO_BG}
          alt="Modern luxury clothing showroom with warm golden lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7B1E2B]/85 via-[#7B1E2B]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F2] via-transparent to-transparent opacity-40" />
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] w-32 h-32 rounded-full border border-gold/30 hidden lg:block"
      />
      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[25%] w-20 h-20 rounded-full bg-gold/10 hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[1.5px] bg-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">
              Sri Sai Gopal Cloth Store
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Discover Fashion
            <br />
            <span className="italic font-normal text-gold/90">for the Entire</span>
            <br />
            Family
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg"
          >
            Premium collections for babies, boys, girls, women, and traditional sarees—all under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#categories"
              className="inline-flex items-center justify-center gap-2 bg-gold text-maroon font-semibold text-sm tracking-wide rounded-full px-8 py-4 hover:bg-gold/90 transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              Shop Collections
              <span className="text-lg">→</span>
            </a>
            <a
              href="#location"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-medium text-sm tracking-wide rounded-full px-8 py-4 hover:bg-white/10 transition-all"
            >
              Visit Our Store
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </motion.div>
    </section>
  );
}