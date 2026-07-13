import React from "react";
import { motion } from "framer-motion";
import { Gem, BadgePercent, Sparkles, HeartHandshake, Users, ShieldCheck } from "lucide-react";

const REASONS = [
  { icon: Gem, title: "Premium Quality Fabrics", desc: "Carefully sourced materials that ensure lasting comfort and durability." },
  { icon: BadgePercent, title: "Affordable Prices", desc: "Fashion-forward styles that won't break the bank for your family." },
  { icon: Sparkles, title: "Latest Fashion Trends", desc: "Stay ahead with our constantly updated seasonal collections." },
  { icon: HeartHandshake, title: "Friendly Customer Service", desc: "Warm, personalized attention from our experienced team." },
  { icon: Users, title: "Wide Variety for All Ages", desc: "From newborns to grandparents, we dress every generation." },
  { icon: ShieldCheck, title: "Trusted Local Store", desc: "A neighbourhood favourite serving families with love and care." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">Our Promise</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-maroon mt-4">
            Why Families <span className="italic font-normal">Choose</span> Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-gold/20"
            >
              <div className="w-14 h-14 rounded-xl bg-maroon/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-maroon group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-maroon mb-2">{reason.title}</h3>
              <p className="text-maroon/60 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}