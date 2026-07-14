import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="flex justify-center py-8 hidden">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />
      
    </div>);

}