import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useSEO } from "../hooks/useSEO";
import Footer from "../components/Footer";
import { BRAND_CONFIG } from "../brand";

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();

  useSEO({
    title: `${BRAND_CONFIG.name} // PAGE NOT FOUND`,
    description: `The requested archival page or look does not exist. Return to the ${BRAND_CONFIG.name} Mongolia campaign lookbook.`,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-[#080808] text-[#f4f4f4] font-sans flex flex-col justify-between relative select-none"
    >

      
      {/* Editorial Grid Background Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.08]">
        <div className="w-[85%] h-full mx-auto border-x border-white/[0.03] relative">
          <div className="absolute top-[30%] left-0 w-full h-[1px] bg-white/[0.03]"></div>
          <div className="absolute top-[70%] left-0 w-full h-[1px] bg-white/[0.03]"></div>
        </div>
      </div>

      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-[#080808]/85 backdrop-blur-md border-b border-white/[0.04] px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            to="/" 
            className="text-[10px] tracking-[0.3em] font-mono hover:text-white/70 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40 px-2 py-1"
            aria-label="Back to home index"
          >
            INDEX // HOME
          </Link>
          
          <div className="flex flex-col items-end">
            <span className="text-[12px] font-bold tracking-tighter leading-none font-display text-white">{BRAND_CONFIG.name}</span>
            <span className="text-[8px] tracking-[0.3em] font-medium text-white/40 uppercase">Mongolia Campaign</span>
          </div>
        </div>
      </header>


      {/* Main 404 content */}
      <main className="relative z-10 flex-grow flex items-center justify-center max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center flex flex-col items-center gap-6 max-w-lg">
          
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-mono">
              ERROR CODE // 404
            </span>
          </div>

          <h1 className="text-[48px] md:text-[64px] font-bold tracking-tight text-white font-display uppercase leading-none">
            UNREGISTERED PATH
          </h1>

          <div className="w-12 h-[1px] bg-white/20 my-2"></div>

          <p className="text-[13px] leading-relaxed text-white/50 font-light italic">
            The requested screen, directory, or campaign sequence is not registered within this digital lookbook environment.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6"
          >
            <Link
              to="/"
              className="px-6 py-4 border border-white/10 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-bold text-[10px] tracking-[0.25em] uppercase transition-all duration-300 rounded-none flex items-center justify-center gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
              aria-label="Return to campaign index"
            >
              <ArrowLeft size={11} />
              <span>RETURN TO CAMPAIGN LOOKS</span>
            </Link>
          </motion.div>

        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
