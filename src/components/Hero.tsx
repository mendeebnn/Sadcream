import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, Volume2, VolumeX } from "lucide-react";

// Import our custom-generated original SadCream campaign images
import campaign1 from "../assets/images/sadcream_brz_night_1784087879953.jpg";
import campaign2 from "../assets/images/sadcream_m5_fire_1784087900344.jpg";
import campaign3 from "../assets/images/sadcream_leopard_boots_1784087922282.jpg";
import campaign4 from "../assets/images/sadcream_ribcage_back_1784087939886.jpg";

const CAMPAIGN_IMAGES = [campaign1, campaign2, campaign3, campaign4];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Automatic slow loop: rotates background photography every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAMPAIGN_IMAGES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToDrop = () => {
    document.getElementById("featured-collection")?.scrollIntoView({ behavior: "smooth" });
  };

  const activeImage = CAMPAIGN_IMAGES[currentIndex];

  // Dynamic scroll parameters for premium cinematic visual blending
  const contentOpacity = Math.max(0, 1 - scrollY / 600);
  const frameOpacity = Math.max(0, 0.2 - scrollY / 400);
  const contentTranslateY = -scrollY * 0.25;
  const parallaxTranslateY = scrollY * 0.45;
  const blendOverlayOpacity = Math.min(1, scrollY / (window.innerHeight || 800));

  return (
    <div className="relative w-full h-screen bg-[#080808] text-[#f4f4f4] overflow-hidden font-sans select-none">
      
      {/* 1. Cinematic Background Slider with True Crossfade and Parallax Speed Control */}
      <div 
        className="absolute inset-0 w-full h-full z-0 overflow-hidden"
        style={{ transform: `translate3d(0, ${parallaxTranslateY}px, 0)` }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* GPU-Accelerated continuous slight Ken Burns Zoom Effect via CSS Keyframes to preserve 60 FPS under scroll state re-renders */}
            <img
              src={activeImage}
              alt="SadCream Mongolia Campaign"
              className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.08] saturate-[0.85] will-change-transform animate-ken-burns"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlays (25%) and cinematic vignette gradient to maximize editorial text contrast */}
        <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/50 z-10 pointer-events-none" />
        
        {/* Dynamic Blend Overlay to transition the hero seamlessly into solid black of Featured Drop */}
        <div 
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ 
            opacity: blendOverlayOpacity,
            zIndex: 15
          }}
        />
      </div>

      {/* 2. Editorial Frame Overlay (Grid Lines with smooth scroll-fade out) */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
        style={{ 
          opacity: frameOpacity,
          transform: `translate3d(0, ${-scrollY * 0.1}px, 0)`
        }}
      >
        <div className="w-[85%] h-[85%] border border-white/5 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5"></div>
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/5"></div>
          <div className="absolute top-6 right-6 text-[8px] text-white/20 tracking-[0.4em] uppercase font-mono">
            ULAANBAATAR // Lookbook 01
          </div>
        </div>
      </div>

      {/* 3. Transparent Navigation Header (with graceful fade on scroll) */}
      <header 
        className="absolute top-0 left-0 w-full z-30 px-6 md:px-12 py-10 flex justify-between items-end"
        style={{ 
          opacity: contentOpacity,
          transform: `translate3d(0, ${-scrollY * 0.08}px, 0)`
        }}
      >
        <div className="flex flex-col gap-1 pointer-events-auto">
          <span className="text-[14px] font-bold tracking-tighter leading-none font-display">SADCREAM</span>
          <span className="text-[9px] tracking-[0.3em] font-medium text-white/40 uppercase">MONGOLIA</span>
        </div>

        <div className="hidden md:flex gap-16 items-center text-[10px] tracking-[0.2em] font-medium uppercase text-white/60">
          <span onClick={handleScrollToDrop} className="hover:text-[#f4f4f4] cursor-pointer transition-colors duration-300">COLLECTIONS</span>
          <span onClick={handleScrollToDrop} className="hover:text-[#f4f4f4] cursor-pointer transition-colors duration-300">LOOKBOOK</span>
          <span onClick={handleScrollToDrop} className="hover:text-[#f4f4f4] cursor-pointer transition-colors duration-300">OBJECTS</span>
        </div>

        <div className="flex items-center gap-8 pointer-events-auto text-[10px] tracking-[0.2em] uppercase text-white/60">
          <span onClick={handleScrollToDrop} className="hover:text-[#f4f4f4] cursor-pointer transition-colors duration-300 text-white/40">PRE-RELEASE</span>
        </div>
      </header>

      {/* 4. Fixed Editorial Content Overlay (Never shifts, never changes layout, completely static for ultra-premium feel) */}
      <div 
        className="absolute inset-0 z-30 px-6 md:px-12 pointer-events-none"
        style={{ 
          opacity: contentOpacity,
          transform: `translate3d(0, ${contentTranslateY}px, 0)`
        }}
      >
        <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-end pb-16 md:pb-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 w-full">
            
            {/* Headline and Subtitle (Static) */}
            <div className="max-w-4xl pointer-events-auto">
              <div className="overflow-visible mb-6">
                <h1 className="text-[71px] sm:text-[129px] md:text-[209px] lg:text-[250px] xl:text-[290px] leading-[0.71] font-bold tracking-[-0.08em] font-display text-white select-none">
                  SADCREAM
                </h1>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-[1px] bg-white/30"></div>
                <p className="text-[12px] tracking-[0.15em] font-light text-white/60 uppercase italic">
                  OBJECT 01 // OVERSIZED FLEECE & ANATOMICAL EMBROIDERY
                </p>
              </div>
            </div>

            {/* Description and Fixed CTA (Static) */}
            <div className="flex flex-col gap-8 items-start lg:items-end max-w-[320px] pointer-events-auto">
              <p className="text-[13px] leading-relaxed text-white/40 font-light lg:text-right italic">
                Heavyweight drop-shoulder fleece, custom skeletal embroidery, and rhinestones. Captured in ambient twilight.
              </p>

              <div className="flex items-center gap-4 w-full justify-start lg:justify-end">
                <button 
                  onClick={handleScrollToDrop} 
                  className="group relative px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-md overflow-hidden cursor-pointer w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <span className="relative z-10 text-[11px] tracking-[0.3em] uppercase group-hover:text-black transition-colors duration-500 font-semibold">
                    EXPLORE LOOKBOOK
                  </span>
                  
                  {/* Brand Corner Accent Marks */}
                  <div className="absolute -right-1 -top-1 w-2 h-2 border-r border-t border-white/40"></div>
                  <div className="absolute -left-1 -bottom-1 w-2 h-2 border-l border-b border-white/40"></div>
                </button>
                
                <button 
                  onClick={handleScrollToDrop} 
                  className="p-5 border border-white/10 hover:border-white/40 hover:text-white text-white/40 transition-all duration-300 rounded-none cursor-pointer"
                  title="Scroll Down"
                >
                  <ArrowDown size={14} className="animate-bounce" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 5. Right-Aligned vertical-rl branding badge */}
      <div className="absolute bottom-0 right-0 p-12 hidden md:flex flex-col gap-2 items-end z-30 pointer-events-none">
        <div className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-mono writing-vertical transform rotate-180 mb-4 select-none">
          ULAANBAATAR // 2026
        </div>
      </div>
    </div>
  );
}
