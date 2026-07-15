import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ProductCard from "@/components/landing/ProductCard";

const CATEGORIES = ["All", "Baby", "Boys", "Girls", "Sarees", "New Arrivals"];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const activeCategory = searchParams.get("category") || "All";

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const all = await base44.entities.Product.list("-created_date", 100);
        setProducts(all);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    loadProducts();
  }, []);

  const filtered = products.filter((p) => {
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const setCategory = (cat) => {
    if (cat === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-beige">
      <Navbar />
      <section className="pt-32 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">Our Collection</span>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-maroon mt-4">
              Shop <span className="italic font-normal">All</span> Products
            </h1>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6 mb-10 items-center justify-between">
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-maroon/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-maroon/15 bg-white text-maroon placeholder:text-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-maroon text-white"
                      : "bg-white text-maroon/70 hover:text-maroon border border-maroon/15"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-4 border-maroon/20 border-t-maroon rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <p className="text-center text-maroon/50 py-20">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}