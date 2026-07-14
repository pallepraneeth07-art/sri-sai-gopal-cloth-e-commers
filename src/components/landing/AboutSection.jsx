import React from "react";
import { motion } from "framer-motion";

const ABOUT_IMG = "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/48740e959_generated_86d846de.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center hidden">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative">
            
            <div className="overflow-hidden rounded-2xl">
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                src={ABOUT_IMG}
                alt="Interior of Sri Sai Gopal Cloth Store with warm inviting aisles"
                className="w-full h-auto object-cover" />
              
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            
            <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">Our Story</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-maroon mt-4 mb-6">
              About <span className="italic font-normal">Sri Sai Gopal</span>
            </h2>
            <p className="text-maroon/70 leading-[1.8] mb-6">
              At Sri Sai Gopal Cloth Store, we proudly offer stylish, high-quality clothing for every member of the family. From adorable baby wear and trendy outfits for boys and girls to elegant sarees for every occasion, our carefully selected collections combine comfort, quality, and affordability.
            </p>
            <p className="text-maroon/70 leading-[1.8] mb-8">
              We are committed to delivering exceptional customer service and helping every customer find the perfect outfit. Our store has been a trusted neighbourhood favourite, dressing families with love and care for years.
            </p>

            <div className="flex flex-wrap gap-8">
              {[
              { number: "5+", label: "Categories" },
              { number: "1000+", label: "Happy Families" },
              { number: "100%", label: "Quality Assured" }].
              map((stat) =>
              <div key={stat.label}>
                  <span className="font-heading text-3xl font-bold text-gold">{stat.number}</span>
                  <p className="text-maroon/60 text-sm mt-1">{stat.label}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}