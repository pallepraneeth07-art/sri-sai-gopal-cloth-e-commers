import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        const p = await base44.entities.Product.get(id);
        setProduct(p);
        if (p.sizes && p.sizes.length > 0) setSelectedSize(p.sizes[0]);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    loadProduct();
  }, [id]);

  const handleBuyNow = () => {
    const params = new URLSearchParams({
      product_id: product.id,
      quantity: quantity.toString(),
    });
    if (selectedSize) params.set("size", selectedSize);
    navigate(`/checkout?${params.toString()}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-beige flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-maroon/20 border-t-maroon rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-beige">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <p className="text-maroon/60 text-lg">Product not found.</p>
          <Link to="/shop" className="text-gold mt-4 inline-block hover:underline">Back to Shop</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beige">
      <Navbar />
      <section className="pt-32 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link to="/shop" className="inline-flex items-center gap-2 text-maroon/60 hover:text-maroon mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gold text-xs tracking-[0.15em] uppercase font-medium">{product.category}</span>
              <h1 className="font-heading text-3xl md:text-4xl font-semibold text-maroon mt-2 mb-4">{product.name}</h1>

              {product.description && (
                <p className="text-maroon/60 leading-relaxed mb-6">{product.description}</p>
              )}

              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-maroon mb-3">Select Size</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                          selectedSize === size
                            ? "bg-maroon text-white border-maroon"
                            : "bg-white text-maroon/70 border-maroon/15 hover:border-maroon/40"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <label className="block text-sm font-medium text-maroon mb-3">Quantity</label>
                <div className="inline-flex items-center border border-maroon/15 rounded-full bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-maroon hover:text-gold transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-semibold text-maroon">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-maroon hover:text-gold transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full flex items-center justify-center gap-2 bg-gold text-maroon font-semibold text-sm tracking-wide rounded-full py-4 hover:bg-gold/90 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                Buy Now (Cash on Delivery)
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}