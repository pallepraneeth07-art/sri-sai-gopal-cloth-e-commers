import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
{
  name: "Lakshmi Devi",
  role: "Regular Customer",
  image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/22842dfd3_generated_ded39917.png",
  rating: 5,
  text: "I've been shopping at Sri Sai Gopal for years. The saree collection is outstanding — beautiful designs at great prices. The staff always helps me find the perfect match for every occasion!"
},
{
  name: "Rajesh Kumar",
  role: "Loyal Customer",
  image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/8b7dc5891_generated_54fc2986.png",
  rating: 5,
  text: "The best store for kids' clothing in the area. My children love the variety and comfort of their outfits. The quality is always top-notch and the prices are very reasonable."
},
{
  name: "Priya Sharma",
  role: "Happy Customer",
  image: "https://media.base44.com/images/public/6a54f2960f2e4bfd13e03c5c/6deeaacfe_generated_780058b2.png",
  rating: 5,
  text: "From baby essentials to festive sarees, this store has everything! The staff is incredibly friendly and patient. It's truly a one-stop shop for the whole family."
}];


export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-cream hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16">
          
          <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">Testimonials</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-maroon mt-4">
            Loved by <span className="italic font-normal">Families</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) =>
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-500 relative">
            
              <div className="absolute top-6 right-6 font-heading text-6xl text-gold/15 leading-none">"</div>
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) =>
              <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              )}
              </div>
              <p className="text-maroon/70 text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover" />
              
                <div>
                  <p className="font-heading font-semibold text-maroon">{t.name}</p>
                  <p className="text-maroon/50 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}