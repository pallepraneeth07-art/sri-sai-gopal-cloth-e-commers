import React from "react";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    name: "Baby Cotton Romper",
    category: "Baby Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/2ce694397_generated_ccc99999.png",
  },
  {
    name: "Boys Kurta Pajama Set",
    category: "Boys Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/1a58656ce_generated_17bf2bc3.png",
  },
  {
    name: "Girls Party Dress",
    category: "Girls Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/50f3d9dc9_generated_fc69bbbf.png",
  },
  {
    name: "Banarasi Silk Saree",
    category: "Sarees Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/04f125073_generated_3c483e90.png",
  },
  {
    name: "Designer Kurti",
    category: "New Arrivals",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/b612f9231_generated_37fe58ef.png",
  },
  {
    name: "Boys Casual Set",
    category: "Boys Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/5404d66c8_generated_b8410dad.png",
  },
  {
    name: "Floral Summer Frock",
    category: "Girls Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/7e3c9e577_generated_image.png",
  },
  {
    name: "Mysore Silk Saree",
    category: "Sarees Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/8c6d50040_generated_image.png",
  },
  {
    name: "Anarkali Kurti",
    category: "New Arrivals",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/a6643f03e_generated_image.png",
  },
  {
    name: "Girls Lehenga Choli",
    category: "Girls Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/6e87b540b_generated_image.png",
  },
  {
    name: "Baby Essentials Set",
    category: "Baby Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/a24c7baa9_generated_image.png",
  },
  {
    name: "Boys Ethnic Sherwani",
    category: "Boys Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/9394c7987_generated_image.png",
  },
  {
    name: "Kanjivaram Silk Saree",
    category: "Sarees Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/e17719b87_generated_image.png",
  },
  {
    name: "Floral Block Print Kurti",
    category: "New Arrivals",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/c40fc4b2a_generated_image.png",
  },
  {
    name: "Baby Sleeping Gown",
    category: "Baby Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/d72611133_generated_image.png",
  },
  {
    name: "Boys Denim Jacket",
    category: "Boys Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/8eabac5fa_generated_image.png",
  },
  {
    name: "Girls Salwar Kameez",
    category: "Girls Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/e3c31c227_generated_image.png",
  },
  {
    name: "Tissue Silk Saree",
    category: "Sarees Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/e0609cc04_generated_image.png",
  },
  {
    name: "Embroidered A-Line Kurti",
    category: "New Arrivals",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/3e77c1001_generated_image.png",
  },
  {
    name: "Boys Formal Shirt",
    category: "Boys Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/d0d0ed8b5_generated_image.png",
  },
  {
    name: "Tulle Party Frock",
    category: "Girls Collection",
    image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/25d86663a_generated_image.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">Featured</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-maroon mt-4">
            Handpicked <span className="italic font-normal">for You</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm mb-4">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/20 transition-all duration-500 flex items-center justify-center">
                  <a
                    href="#contact"
                    className="bg-gold text-maroon font-semibold text-sm px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400 hover:bg-gold/90"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
              <div className="px-1">
                <span className="text-gold text-xs tracking-[0.15em] uppercase font-medium">{product.category}</span>
                <h3 className="font-heading text-xl font-semibold text-maroon mt-1">{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}