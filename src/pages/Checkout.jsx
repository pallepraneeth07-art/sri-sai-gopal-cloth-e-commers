import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Truck, MapPin } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [placing, setPlacing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [locating, setLocating] = useState(false);
  const [coordinates, setCoordinates] = useState(null);
  const [form, setForm] = useState({ customer_name: "", phone: "", email: "", address: "" });

  const productId = searchParams.get("product_id");
  const quantity = parseInt(searchParams.get("quantity") || "1");
  const size = searchParams.get("size") || "";

  useEffect(() => {
    const loadProduct = async () => {
      if (!productId) { setLoading(false); return; }
      try {
        const p = await base44.entities.Product.get(productId);
        setProduct(p);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    loadProduct();
  }, [productId]);

  const total = product ? product.price * quantity : 0;

  const captureLocation = () => {
    if (!navigator.geolocation) {
      toast({ title: "Not supported", description: "Geolocation is not supported by your browser.", variant: "destructive" });
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setCoordinates({ latitude, longitude });
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          if (data.display_name) {
            setForm((prev) => ({ ...prev, address: data.display_name }));
            toast({ title: "Location captured!", description: "Your address has been auto-filled." });
          }
        } catch (err) {
          toast({ title: "Coordinates captured", description: "Could not fetch address. Please enter manually." });
        }
        setLocating(false);
      },
      () => {
        toast({ title: "Location denied", description: "Please allow location access or enter address manually.", variant: "destructive" });
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPlacing(true);
    try {
      await base44.entities.Order.create({
        customer_name: form.customer_name,
        phone: form.phone,
        email: form.email,
        address: form.address,
        product_id: product.id,
        product_name: product.name,
        product_image: product.image,
        quantity,
        size,
        total,
        location: coordinates ? `${coordinates.latitude},${coordinates.longitude}` : "",
        payment_method: "Cash on Delivery",
        status: "pending",
      });
      const message = `*New Order - Sri Sai Gopal Cloth Store*\n\n` +
        `*Name:* ${form.customer_name}\n` +
        `*Phone:* ${form.phone}\n` +
        (form.email ? `*Email:* ${form.email}\n` : "") +
        `*Address:* ${form.address}\n\n` +
        `*Product:* ${product.name}\n` +
        (size ? `*Size:* ${size}\n` : "") +
        `*Quantity:* ${quantity}\n` +
        `*Total:* ₹${total}\n` +
        `*Payment:* Cash on Delivery`;
      window.open(`https://wa.me/916300782241?text=${encodeURIComponent(message)}`, "_blank");
      setSuccess(true);
      toast({ title: "Order Placed!", description: "Order details sent to WhatsApp." });
    } catch (err) {
      toast({ title: "Error", description: "Could not place order. Please try again.", variant: "destructive" });
    }
    setPlacing(false);
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
          <p className="text-maroon/60 text-lg">No product selected for checkout.</p>
          <Link to="/shop" className="text-gold mt-4 inline-block hover:underline">Browse Products</Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-beige">
        <Navbar />
        <div className="pt-32 pb-24">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-green-600" />
            </motion.div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-maroon mb-3">Order Placed Successfully!</h1>
            <p className="text-maroon/60 mb-8">
              Thank you for your order. We'll call you shortly to confirm. Please keep{" "}
              <span className="font-semibold text-maroon">₹{total}</span> ready for cash on delivery.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-maroon text-white font-semibold text-sm rounded-full px-8 py-4 hover:bg-maroon/90 transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beige">
      <Navbar />
      <section className="pt-32 pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Link to={`/product/${product.id}`} className="inline-flex items-center gap-2 text-maroon/60 hover:text-maroon mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Product
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm h-fit"
            >
              <h2 className="font-heading text-xl font-semibold text-maroon mb-6">Order Summary</h2>
              <div className="flex gap-4 mb-6">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-xl" />
                <div>
                  <span className="text-gold text-xs tracking-[0.15em] uppercase font-medium">{product.category}</span>
                  <h3 className="font-heading text-lg font-semibold text-maroon">{product.name}</h3>
                  {size && <p className="text-maroon/50 text-sm">Size: {size}</p>}
                  <p className="text-maroon/50 text-sm">Qty: {quantity}</p>
                </div>
              </div>
              <div className="border-t border-maroon/10 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-maroon/60">
                  <span>Subtotal</span>
                  <span>₹{product.price * quantity}</span>
                </div>
                <div className="flex justify-between text-sm text-maroon/60">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between font-semibold text-maroon text-lg pt-2 border-t border-maroon/10">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3 bg-green-50 rounded-xl p-4">
                <Truck className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-green-700">Cash on Delivery</p>
                  <p className="text-xs text-green-600/70">Pay when you receive your order</p>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <h2 className="font-heading text-xl font-semibold text-maroon mb-6">Delivery Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-maroon mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.customer_name}
                    onChange={(e) => setForm({ ...form, customer_name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-maroon/15 bg-cream/50 text-maroon placeholder:text-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-maroon mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-maroon/15 bg-cream/50 text-maroon placeholder:text-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-maroon mb-2">Email (optional)</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-maroon/15 bg-cream/50 text-maroon placeholder:text-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-maroon">Delivery Address</label>
                    <button
                      type="button"
                      onClick={captureLocation}
                      disabled={locating}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-gold hover:text-gold/80 transition-colors disabled:opacity-60"
                    >
                      {locating ? (
                        <>
                          <div className="w-3 h-3 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                          Locating...
                        </>
                      ) : (
                        <>
                          <MapPin className="w-3.5 h-3.5" />
                          Use My Location
                        </>
                      )}
                    </button>
                  </div>
                  <textarea
                    required
                    rows={3}
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-maroon/15 bg-cream/50 text-maroon placeholder:text-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-sm resize-none"
                    placeholder="House no, street, area, city, pincode"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={placing}
                className="w-full mt-6 flex items-center justify-center gap-2 bg-maroon text-white font-semibold text-sm rounded-full py-4 hover:bg-maroon/90 disabled:opacity-60 transition-all"
              >
                {placing ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Place Order (COD) • ₹{total}</>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}