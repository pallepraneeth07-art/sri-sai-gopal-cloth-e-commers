import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import ProductCard from "@/components/landing/ProductCard";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const all = await base44.entities.Product.list("-created_date", 6);
        setProducts(all);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    load();
  }, []);

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

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-4 border-maroon/20 border-t-maroon rounded-full animate-spin" />
          </div>
        ) : products.length === 0 ? (
          <p className="text-center text-maroon/50 py-12">No products yet.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 bg-maroon text-white font-semibold text-sm tracking-wide rounded-full px-8 py-4 hover:bg-maroon/90 transition-all"
              >
                View All Products
                <span>→</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}