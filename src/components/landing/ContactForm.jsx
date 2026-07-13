import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", mobile: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", mobile: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-beige">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">Get in Touch</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-maroon mt-4">
            We'd Love to <span className="italic font-normal">Hear</span> From You
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium text-maroon mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-maroon/15 bg-cream/50 text-maroon placeholder:text-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-maroon mb-2">Mobile Number</label>
              <input
                type="tel"
                required
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-maroon/15 bg-cream/50 text-maroon placeholder:text-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-sm"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-maroon mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-maroon/15 bg-cream/50 text-maroon placeholder:text-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-sm"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-maroon mb-2">Message</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-maroon/15 bg-cream/50 text-maroon placeholder:text-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-sm resize-none"
              placeholder="Tell us what you're looking for..."
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full flex items-center justify-center gap-2 bg-maroon text-white font-semibold text-sm rounded-full py-4 hover:bg-maroon/90 disabled:opacity-60 transition-all"
          >
            {sending ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}