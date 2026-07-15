import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product, index = 0 }) {
  const hasDiscount = product.original_price && product.original_price > product.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm mb-4">
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          {hasDiscount && (
            <span className="absolute top-3 left-3 bg-maroon text-white text-xs font-medium px-3 py-1 rounded-full">
              Sale
            </span>
          )}
        </div>
        <div className="px-1">
          <span className="text-gold text-xs tracking-[0.15em] uppercase font-medium">{product.category}</span>
          <h3 className="font-heading text-xl font-semibold text-maroon mt-1">{product.name}</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-maroon font-semibold">₹{product.price}</span>
            {hasDiscount && (
              <span className="text-maroon/40 text-sm line-through">₹{product.original_price}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}