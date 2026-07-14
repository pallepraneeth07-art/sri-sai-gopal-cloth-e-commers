import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CategoryGallery from "@/components/landing/CategoryGallery";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import AboutSection from "@/components/landing/AboutSection";
import Testimonials from "@/components/landing/Testimonials";
import StoreLocation from "@/components/landing/StoreLocation";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-beige">
      <Navbar />
      <HeroSection />
      <CategoryGallery />
      <FeaturedProducts />
      <WhyChooseUs />
      <AboutSection />
      <Testimonials />
      <StoreLocation />
      <ContactForm />
      <Footer />
    </div>
  );
}