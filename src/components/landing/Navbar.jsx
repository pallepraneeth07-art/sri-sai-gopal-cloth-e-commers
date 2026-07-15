import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Baby", to: "/shop?category=Baby" },
  { label: "Boys", to: "/shop?category=Boys" },
  { label: "Girls", to: "/shop?category=Girls" },
  { label: "Sarees", to: "/shop?category=Sarees" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? "w-[95%] max-w-6xl bg-white/90 backdrop-blur-xl shadow-lg rounded-full px-6 py-3"
            : "w-[95%] max-w-7xl bg-white/20 backdrop-blur-md rounded-2xl px-8 py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-gold text-2xl font-display font-bold">✦</span>
            <span className={`font-heading font-semibold transition-all duration-300 ${scrolled ? "text-lg text-maroon" : "text-xl text-maroon"}`}>
              Sri Sai Gopal
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm font-medium tracking-wide text-maroon/80 hover:text-maroon transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/#location"
              className={`hidden lg:inline-flex items-center gap-2 font-medium text-sm tracking-wide rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-maroon text-white px-5 py-2 hover:bg-maroon/90"
                  : "bg-gold/90 text-maroon px-6 py-2.5 hover:bg-gold"
              }`}
            >
              Visit Store
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-maroon p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-cream shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-heading font-semibold text-xl text-maroon">Menu</span>
                  <button onClick={() => setMobileOpen(false)} className="text-maroon">
                    <X size={24} />
                  </button>
                </div>
                <div className="flex flex-col gap-6">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="text-lg font-heading font-semibold text-maroon hover:text-gold transition-colors"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <Link
                    to="/#location"
                    onClick={() => setMobileOpen(false)}
                    className="mt-4 inline-flex justify-center bg-maroon text-white rounded-full px-6 py-3 font-medium text-sm"
                  >
                    Visit Store
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}