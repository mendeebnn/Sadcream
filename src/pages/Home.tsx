import Hero from "../components/Hero";
import FeaturedCollection from "../components/FeaturedCollection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useSEO } from "../hooks/useSEO";
import { BRAND_CONFIG } from "../brand";
import { motion, useReducedMotion } from "motion/react";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  useSEO({
    title: BRAND_CONFIG.seoDefaults.title,
    description: BRAND_CONFIG.seoDefaults.description,
    image: BRAND_CONFIG.seoDefaults.image,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeInOut" }}
    >
      <Hero />
      <FeaturedCollection />
      <Contact />
      <Footer />
    </motion.div>
  );
}

