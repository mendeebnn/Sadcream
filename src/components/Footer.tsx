import { motion } from "motion/react";
import { ArrowUp, Instagram, Mail } from "lucide-react";
import { BRAND_CONFIG } from "../brand";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-black text-[#f4f4f4] border-t border-white/[0.04] py-16 px-6 md:px-12 relative overflow-hidden">
      
      {/* Subtle bottom grid borders */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/[0.02]"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top Segment of Footer: Brand Name & Navigation/Back-to-Top */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 pb-12 border-b border-white/[0.04]">
          
          {/* Logo & Meta block */}
          <div className="flex flex-col gap-2">
            <span className="text-[18px] font-bold tracking-tighter leading-none font-display text-white">
              {BRAND_CONFIG.name}
            </span>
            <span className="text-[9px] tracking-[0.35em] font-medium text-white/40 uppercase">
              {BRAND_CONFIG.location}
            </span>
          </div>

          {/* Social Channels / Quick Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <a 
              href={`mailto:${BRAND_CONFIG.contactEmail}`}
              className="text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-white/20 px-2 py-1"
            >
              <Mail size={12} className="opacity-60" />
              <span>Email</span>
            </a>
            
            <a 
              href={BRAND_CONFIG.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-white/20 px-2 py-1"
            >
              <Instagram size={12} className="opacity-60" />
              <span>Instagram</span>
            </a>

            {/* Back to Top */}
            <button
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/20 px-2 py-1"
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              <span>Back to Top</span>
              <div className="p-1 border border-white/10 group-hover:border-white/30 group-hover:-translate-y-0.5 transition-all duration-300 rounded-none flex items-center justify-center">
                <ArrowUp size={11} />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom Segment of Footer: Concept Note, Copyright, Meta details */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6 text-[10px] tracking-wider text-white/30 font-sans">
          
          <div className="flex flex-col gap-1.5">
            <p className="text-white/40 font-medium">
              Designed as a concept website.
            </p>
            <p className="max-w-md leading-relaxed">
              All photographic rights and apparel concepts remain intellectual property. Crafted to exhibit high-fidelity, smooth interactive user experience paradigms.
            </p>
          </div>

          <div className="flex flex-col md:items-end justify-end gap-1 font-mono">
            <span>{BRAND_CONFIG.copyright}</span>
          </div>

        </div>

      </div>
    </footer>
  );
}

