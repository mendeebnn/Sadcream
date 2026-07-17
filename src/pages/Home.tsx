import Hero from "../components/Hero";
import FeaturedCollection from "../components/FeaturedCollection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useSEO } from "../hooks/useSEO";

export default function Home() {
  useSEO({
    title: "SADCREAM // MONGOLIA CAMPAIGN",
    description: "Explore the SADCREAM Mongolia Campaign Lookbook featuring curated oversized knits and raw styling captured under ambient twilight in Ulaanbaatar.",
  });

  return (
    <>
      <Hero />
      <FeaturedCollection />
      <Contact />
      <Footer />
    </>
  );
}
