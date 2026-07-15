import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, Volume2, VolumeX } from "lucide-react";

// Import our custom-generated original SadCream campaign images
import campaign1 from "../assets/images/sadcream_brz_night_1784087879953.jpg";
import campaign2 from "../assets/images/sadcream_m5_fire_1784087900344.jpg";
import campaign3 from "../assets/images/sadcream_leopard_boots_1784087922282.jpg";
import campaign4 from "../assets/images/sadcream_ribcage_back_1784087939886.jpg";

const CAMPAIGN_IMAGES = [
  {
    id: "campaign_01",
    subtitle: "OBJECT 01 // COUPE NIGHT LOOK",
    description: "Black heavy-duty zip-up hoodie featuring detailed silver rhinestone line embellishments, captured in ambient street lighting.",
    image: campaign1,
  },
  {
    id: "campaign_02",
    subtitle: "OBJECT 02 // KINETIC FIRE LOOK",
    description: "Heavyweight leopard-print streetwear zip-up hoodie styled against cinematic asphalt sparks and ambient orange night reflections.",
    image: campaign2,
  },
  {
    id: "campaign_03",
    subtitle: "OBJECT 03 // LEOPARD & BOOTS LOOK",
    description: "Heavyweight oversized leopard-print zip-up hoodie styled in a relaxed slouchy fit with knee-high black leather boots.",
    image: campaign3,
  },
  {
    id: "campaign_04",
    subtitle: "OBJECT 04 // BACK EMBROIDERY DETAILED LOOK",
    description: "Detailed view of the custom white chest & back skeletal ribcage and human heart embroidery design on leopard-print fleece.",
    image: campaign4,
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Automatic slow loop: rotates one by one every 7 seconds (within the requested 6-8s range)
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

  const activeCampaign = CAMPAIGN_IMAGES[currentIndex];

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
              src={activeCampaign.image}
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
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-1 pointer-events-auto"
        >
          <span className="text-[14px] font-bold tracking-tighter leading-none font-display">SADCREAM</span>
          <span className="text-[9px] tracking-[0.3em] font-medium text-white/40 uppercase">MONGOLIA</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:flex gap-16 items-center text-[10px] tracking-[0.2em] font-medium uppercase text-white/60"
        >
          <span onClick={handleScrollToDrop} className="hover:text-[#f4f4f4] cursor-pointer transition-colors duration-300">COLLECTIONS</span>
          <span onClick={handleScrollToDrop} className="hover:text-[#f4f4f4] cursor-pointer transition-colors duration-300">LOOKBOOK</span>
          <span onClick={handleScrollToDrop} className="hover:text-[#f4f4f4] cursor-pointer transition-colors duration-300">OBJECTS</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-8 pointer-events-auto text-[10px] tracking-[0.2em] uppercase text-white/60"
        >
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="hover:text-[#f4f4f4] text-white/40 transition-colors duration-300 focus:outline-none cursor-pointer"
            title="Toggle Audio Track"
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
          <span className="hover:text-[#f4f4f4] cursor-pointer transition-colors duration-300 text-white/40">BAG (0)</span>
        </motion.div>
      </header>

      {/* 4. Editorial Content Overlay (Asymmetric arrangement with graceful scroll fade & lift) */}
      <div 
        className="absolute inset-0 z-30 flex flex-col justify-end px-6 md:px-12 pb-16 pointer-events-none"
        style={{ 
          opacity: contentOpacity,
          transform: `translate3d(0, ${contentTranslateY}px, 0)`
        }}
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          
          {/* Headline and Subtitle Area */}
          <div className="max-w-4xl w-full pointer-events-auto flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-start"
            >
              {/* Massive Bold Headline with elegant spacing */}
              <div className="overflow-visible mb-6 flex justify-start w-full">
                <h1 className="text-[71px] sm:text-[129px] md:text-[209px] lg:text-[250px] xl:text-[290px] leading-[0.71] font-bold tracking-[-0.08em] font-display text-white select-none text-left w-full -ml-1 sm:-ml-2 md:-ml-4 lg:-ml-8 xl:-ml-12">
                  SADCREAM
                </h1>
              </div>

              {/* Subtitle accompanied by editorial rule line */}
              <div className="flex items-center gap-6 justify-start w-full">
                <div className="w-12 h-[1px] bg-white/30"></div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="text-[12px] tracking-[0.15em] font-light text-white/60 uppercase italic"
                  >
                    {activeCampaign.subtitle}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Description and CTA button block */}
          <div className="flex flex-col gap-10 items-start lg:items-end max-w-[320px] pointer-events-auto">
            
            {/* Dynamic, fading text description */}
            <div className="h-16 flex items-end">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="text-[13px] leading-relaxed text-white/40 font-light lg:text-right italic"
                >
                  {activeCampaign.description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Custom high-end "Sophisticated Dark" interactive button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center gap-4 w-full justify-start lg:justify-end"
            >
              <button onClick={handleScrollToDrop} className="group relative px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-md overflow-hidden cursor-pointer w-full sm:w-auto">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 text-[11px] tracking-[0.3em] uppercase group-hover:text-black transition-colors duration-500">
                  EXPLORE LOOKBOOK
                </span>
                
                {/* Brand Corner Accent Marks */}
                <div className="absolute -right-1 -top-1 w-2 h-2 border-r border-t border-white/40"></div>
                <div className="absolute -left-1 -bottom-1 w-2 h-2 border-l border-b border-white/40"></div>
              </button>
              
              <button onClick={handleScrollToDrop} className="p-5 border border-white/10 hover:border-white/40 hover:text-white text-white/40 transition-all duration-300 rounded-none cursor-pointer">
                <ArrowDown size={14} className="animate-bounce" />
              </button>
            </motion.div>

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
