import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";

export default function StoreLocation() {
  return (
    <section id="location" className="py-24 lg:py-32 bg-maroon text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">Find Us</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mt-4">
            Visit Our <span className="italic font-normal text-gold/90">Store</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden h-80 lg:h-96"
          >
            <iframe
              title="Sri Sai Gopal Cloth Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d78.57!3d17.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMxJzQ4LjAiTiA3OMKwMzQnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-2">Sri Sai Gopal Cloth Store</h3>
                <p className="text-white/70 leading-relaxed">
                  Aliabad, Shamirpet, Medchal,<br />
                  Hyderabad – 500078
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=17.53,78.57"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold text-maroon font-semibold text-sm rounded-full px-6 py-3.5 hover:bg-gold/90 transition-all group"
              >
                <Navigation className="w-4 h-4 group-hover:animate-pulse" />
                Get Directions
              </a>
              <a
                href="tel:+916300782241"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium text-sm rounded-full px-6 py-3.5 hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/916300782241"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-medium text-sm rounded-full px-6 py-3.5 hover:bg-green-700 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}