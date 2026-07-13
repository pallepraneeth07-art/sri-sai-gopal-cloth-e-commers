import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SectionDivider from "@/components/landing/SectionDivider";
import CategoryGallery from "@/components/landing/CategoryGallery";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
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
      <SectionDivider />
      <CategoryGallery />
      <SectionDivider />
      <WhyChooseUs />
      <SectionDivider />
      <FeaturedProducts />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <Testimonials />
      <StoreLocation />
      <ContactForm />
      <Footer />
    </div>
  );
}