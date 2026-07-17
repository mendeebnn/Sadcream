import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

// Import our custom-generated original SadCream campaign images
import campaign1 from "../assets/images/sadcream_brz_night_1784087879953.jpg";
import campaign2 from "../assets/images/sadcream_m5_fire_1784087900344.jpg";
import campaign3 from "../assets/images/sadcream_leopard_boots_1784087922282.jpg";
import campaign4 from "../assets/images/sadcream_ribcage_back_1784087939886.jpg";

const CAMPAIGN_IMAGES = [campaign1, campaign2, campaign3, campaign4];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slow loop: rotates background photography every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAMPAIGN_IMAGES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Preload the first campaign image for maximum initial performance
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = CAMPAIGN_IMAGES[0];
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Dynamically preload the next and previous campaign images in the background
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % CAMPAIGN_IMAGES.length;
    const prevIndex = (currentIndex - 1 + CAMPAIGN_IMAGES.length) % CAMPAIGN_IMAGES.length;
    
    [CAMPAIGN_IMAGES[nextIndex], CAMPAIGN_IMAGES[prevIndex]].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [currentIndex]);

  const handleScrollToDrop = () => {
    document.getElementById("featured-collection")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const activeImage = CAMPAIGN_IMAGES[currentIndex];

  return (
    <div className="relative w-full h-screen bg-[#080808] text-[#f4f4f4] overflow-hidden font-sans select-none">
      
      {/* 1. Cinematic Background Slider with True Crossfade */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#080808]">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
            style={{ willChange: "opacity", backfaceVisibility: "hidden" }}
          >
            {/* GPU-Accelerated continuous slight Ken Burns Zoom Effect via CSS Keyframes to preserve 60 FPS */}
            <img
              src={activeImage}
              alt="SadCream Mongolia Campaign"
              className="w-full h-full object-cover object-center animate-ken-burns"
              style={{ willChange: "transform", backfaceVisibility: "hidden" }}
              loading={currentIndex === 0 ? "eager" : "lazy"}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Clean dark overlay (45%) and cinematic vignette gradient to maximize editorial text contrast (replacing expensive CSS filters) */}
        <div className="absolute inset-0 bg-black/45 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/50 z-10 pointer-events-none" />
      </div>

      {/* 2. Editorial Frame Overlay (Grid Lines) */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
        <div className="w-[85%] h-[85%] border border-white/5 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5"></div>
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/5"></div>
          <div className="absolute top-6 right-6 text-[8px] text-white/20 tracking-[0.4em] uppercase font-mono">
            ULAANBAATAR // Lookbook 01
          </div>
        </div>
      </div>

      {/* 3. Transparent Navigation Header */}
      <header className="absolute top-0 left-0 w-full z-30 px-6 md:px-12 py-10 flex justify-between items-end">
        <div className="flex flex-col gap-1 pointer-events-auto">
          <span className="text-[14px] font-bold tracking-tighter leading-none font-display">SADCREAM</span>
          <span className="text-[9px] tracking-[0.3em] font-medium text-white/40 uppercase">MONGOLIA</span>
        </div>

        <div className="hidden md:flex gap-12 items-center text-[10px] tracking-[0.2em] font-medium uppercase text-white/60 pointer-events-auto">
          <button onClick={handleScrollToDrop} className="hover:text-[#f4f4f4] cursor-pointer transition-colors duration-300 bg-transparent border-none p-0 outline-none focus-visible:ring-1 focus-visible:ring-white/40 px-1 text-left">COLLECTIONS</button>
          <button onClick={handleScrollToDrop} className="hover:text-[#f4f4f4] cursor-pointer transition-colors duration-300 bg-transparent border-none p-0 outline-none focus-visible:ring-1 focus-visible:ring-white/40 px-1 text-left">LOOKBOOK</button>
          <button onClick={handleScrollToDrop} className="hover:text-[#f4f4f4] cursor-pointer transition-colors duration-300 bg-transparent border-none p-0 outline-none focus-visible:ring-1 focus-visible:ring-white/40 px-1 text-left">OBJECTS</button>
          <button onClick={handleScrollToContact} className="hover:text-[#f4f4f4] cursor-pointer transition-colors duration-300 bg-transparent border-none p-0 outline-none focus-visible:ring-1 focus-visible:ring-white/40 px-1 text-left">CONTACT</button>
        </div>

        <div className="flex items-center gap-8 pointer-events-auto text-[10px] tracking-[0.2em] uppercase text-white/60">
          <button onClick={handleScrollToDrop} className="hover:text-[#f4f4f4] cursor-pointer transition-colors duration-300 text-white/40 bg-transparent border-none p-0 outline-none focus-visible:ring-1 focus-visible:ring-white/40 px-1 text-left">PRE-RELEASE</button>
        </div>
      </header>

      {/* 4. Fixed Editorial Content Overlay (Never shifts, never changes layout, completely static for ultra-premium feel) */}
      <div className="absolute inset-0 z-30 px-6 md:px-12 pointer-events-none">
        <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-end pb-16 md:pb-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 w-full">
            
            {/* Small location or brand identifier (Static) */}
            <div className="max-w-4xl pointer-events-auto">
              <div className="overflow-visible mb-6">
                <h1 className="text-[clamp(3.5rem,18.5vw,18rem)] leading-[0.71] font-bold tracking-[-0.08em] font-display text-white select-none whitespace-nowrap">
                  SADCREAM
                </h1>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-[1px] bg-white/30"></div>
                <p className="text-[12px] tracking-[0.15em] font-light text-white/60 uppercase italic">
                  OBJECT 01 // MONGOLIA
                </p>
              </div>
            </div>

            {/* One primary CTA (Static) */}
            <div className="flex flex-col items-start lg:items-end pointer-events-auto mt-4 lg:mt-0">
              <button 
                onClick={handleScrollToDrop} 
                className="group relative px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-md overflow-hidden cursor-pointer w-full sm:w-auto focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 text-[11px] tracking-[0.3em] uppercase group-hover:text-black transition-colors duration-500 font-semibold text-white">
                  EXPLORE LOOKBOOK
                </span>
                
                {/* Brand Corner Accent Marks */}
                <div className="absolute -right-1 -top-1 w-2 h-2 border-r border-t border-white/40"></div>
                <div className="absolute -left-1 -bottom-1 w-2 h-2 border-l border-b border-white/40"></div>
              </button>
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

      {/* 6. Editorial Hero Image Counter */}
      <div className="absolute bottom-10 right-6 md:right-12 z-30 pointer-events-none flex items-center gap-1.5 font-sans select-none text-[11px] text-white/60 font-medium">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ willChange: "opacity" }}
          >
            {String(currentIndex + 1).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
        <span className="text-white/30">/</span>
        <span className="text-white/40">
          {String(CAMPAIGN_IMAGES.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
