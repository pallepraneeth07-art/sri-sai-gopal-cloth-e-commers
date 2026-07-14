import React, { useState } from "react";
import { motion } from "framer-motion";

const CATEGORIES = [
{
  title: "Baby",
  subtitle: "Soft & Gentle",
  items: ["Soft cotton wear", "Infant clothing", "Baby accessories", "Comfortable everyday outfits"],
  image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/31e40ecd9_generated_38663ddc.png"
},
{
  title: "Boys",
  subtitle: "Smart & Trendy",
  items: ["Casual Wear", "Ethnic Wear", "Party Wear", "School Essentials"],
  image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/422b8b12b_generated_17f8f989.png"
},
{
  title: "Girls",
  subtitle: "Pretty & Playful",
  items: ["Dresses", "Party Wear", "Traditional Wear", "Casual Collection"],
  image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/1da606385_generated_1ed150b8.png"
},
{
  title: "Sarees",
  subtitle: "Grace & Elegance",
  items: ["Silk Sarees", "Cotton Sarees", "Designer Sarees", "Wedding Sarees", "Daily Wear Sarees"],
  image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/3e373f383_generated_06252c30.png"
},
{
  title: "New Arrivals",
  subtitle: "Fresh & Trendy",
  items: ["Latest Fashion", "Seasonal Picks", "Trending Styles", "Limited Edition"],
  image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/2e48a1d3a_generated_6d5ccb94.png"
}];


export default function CategoryGallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="categories" className="py-24 lg:py-32 bg-cream hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16">
          
          <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">Our Collections</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-maroon mt-4">
            Curated for <span className="italic font-normal">Every</span> Generation
          </h2>
        </motion.div>

        {/* Desktop: Expanding vertical slabs */}
        <div className="hidden lg:flex gap-3 h-[550px]">
          {CATEGORIES.map((cat, i) =>
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="relative overflow-hidden rounded-2xl cursor-pointer group"
            style={{
              flex: active === i ? 3 : active !== null ? 0.6 : 1,
              transition: "flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            }}>
            
              <img
              src={cat.image}
              alt={`${cat.title} clothing collection`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-[#7B1E2B]/90 via-[#7B1E2B]/30 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-6">
                <motion.div
                className="overflow-hidden"
                animate={{ opacity: active === i ? 1 : active !== null ? 0.7 : 1 }}>
                
                  <span className="text-gold text-xs tracking-[0.2em] uppercase">{cat.subtitle}</span>
                  <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-white mt-1">{cat.title}</h3>

                  <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: active === i ? 300 : 0,
                    opacity: active === i ? 1 : 0
                  }}>
                  
                    <ul className="mt-4 space-y-2">
                      {cat.items.map((item) =>
                    <li key={item} className="text-white/80 text-sm flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-gold" />
                          {item}
                        </li>
                    )}
                    </ul>
                    <a
                    href="#products"
                    className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-gold hover:text-white transition-colors">
                    
                      View Collection <span>→</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Mobile: Scrollable cards */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CATEGORIES.map((cat, i) =>
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative overflow-hidden rounded-2xl h-72 group">
            
              <img
              src={cat.image}
              alt={`${cat.title} clothing collection`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-[#7B1E2B]/90 via-[#7B1E2B]/30 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-5">
                <span className="text-gold text-xs tracking-[0.2em] uppercase">{cat.subtitle}</span>
                <h3 className="font-heading text-2xl font-semibold text-white mt-1">{cat.title}</h3>
                <p className="text-white/70 text-sm mt-2">{cat.items.slice(0, 3).join(" · ")}</p>
                <a
                href="#products"
                className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-gold">
                
                  View Collection →
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}