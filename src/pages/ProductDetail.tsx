import { useState, useEffect, FormEvent } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "../data";
import Footer from "../components/Footer";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  
  // Find product by matching slug/id (case insensitive, hyphens or spaces)
  const product = PRODUCTS.find(
    (p) => 
      p.id.toLowerCase() === id?.toLowerCase() ||
      p.id.replace("-", " ").toLowerCase() === id?.toLowerCase()
  );

  // Fallback to first product if none matched
  const activeProduct = product || PRODUCTS[0];

  // Group all available images into a single gallery
  const galleryImages: string[] = [
    activeProduct.primaryImage,
    ...(activeProduct.secondaryImage ? [activeProduct.secondaryImage] : []),
    ...(activeProduct.additionalImages || [])
  ];

  const [activeImage, setActiveImage] = useState(galleryImages[0]);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync active image when product changes or component mounts
  useEffect(() => {
    setActiveImage(galleryImages[0]);
    setIsSubmitted(false);
    setEmail("");
  }, [id]);

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#f4f4f4] font-sans pb-24 relative select-none">
      
      {/* Editorial Grid Background Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
        <div className="w-[85%] h-full mx-auto border-x border-white/[0.03] relative">
          <div className="absolute top-[25%] left-0 w-full h-[1px] bg-white/[0.03]"></div>
          <div className="absolute top-[60%] left-0 w-full h-[1px] bg-white/[0.03]"></div>
        </div>
      </div>

      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-[#080808]/80 backdrop-blur-md border-b border-white/[0.04] px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            to="/" 
            className="group flex items-center gap-3 text-[11px] tracking-[0.2em] font-semibold text-white/50 hover:text-white transition-colors duration-300 uppercase"
          >
            <ArrowLeft size={13} className="transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Return to Collection</span>
          </Link>
          
          <div className="flex flex-col items-end">
            <span className="text-[12px] font-bold tracking-tighter leading-none font-display">SADCREAM</span>
            <span className="text-[8px] tracking-[0.3em] font-medium text-white/40 uppercase">Mongolia Campaign</span>
          </div>
        </div>
      </header>

      {/* Main Page Layout Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-10 md:mt-16 relative z-10">
        
        {/* Top Product Hero Block (Asymmetrical 2-Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Premium Editorial Image Section (Column 1-7) */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6">
            
            {/* Gallery Thumbnails List (Vertical Left) */}
            <div className="flex md:flex-col gap-3 order-2 md:order-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-none">
              {galleryImages.map((imgSrc, index) => {
                const isActive = activeImage === imgSrc;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveImage(imgSrc)}
                    className={`relative w-16 h-20 md:w-20 md:h-28 flex-shrink-0 bg-[#0d0d0d] border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none overflow-hidden cursor-pointer ${
                      isActive 
                        ? "border-white/50 scale-[1.02]" 
                        : "border-white/10 opacity-40 hover:opacity-80"
                    }`}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`Product perspective ${index + 1}`} 
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-1 right-1.5 text-[8px] font-mono text-white/40">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main Primary Interactive Image Frame */}
            <div className="flex-grow order-1 md:order-2 aspect-[3/4] bg-[#0d0d0d] border border-white/10 relative overflow-hidden group flex items-center justify-center">
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 z-20"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20 z-20"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20 z-20"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 z-20"></div>

              {/* Object Tag */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-[8px] tracking-[0.2em] uppercase font-mono font-medium text-white/80 z-20">
                {activeProduct.id}
              </div>

              {/* Seamless AnimatePresence Crossfade Viewer */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full absolute inset-0"
                  style={{ willChange: "opacity" }}
                >
                  <img
                    src={activeImage}
                    alt={activeProduct.name}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dark Ambient Overlay (replacing expensive CSS filter rendering) */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />
            </div>

          </div>

          {/* RIGHT: Editorial Brand Copy, Specifications & Concierge Inquiry (Column 8-12) */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-28">
            
            {/* Header: Product ID & Large Editorial Wordmark */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-mono block">
                Atelier Object // {activeProduct.id}
              </span>
              <h1 className="text-[28px] md:text-[36px] font-bold tracking-tight text-white font-display uppercase leading-tight">
                {activeProduct.name}
              </h1>
            </div>

            {/* Design Concept Paragraph */}
            <div className="border-t border-white/[0.06] pt-6 flex flex-col gap-3">
              <span className="text-[9px] tracking-widest text-white/30 uppercase font-mono font-medium block">
                Design Concept
              </span>
              <p className="text-[13px] leading-relaxed text-white/60 font-light italic">
                {activeProduct.description}
              </p>
            </div>

            {/* Atelier Narrative Story Block */}
            {activeProduct.story && (
              <div className="border-t border-white/[0.06] pt-6 flex flex-col gap-3">
                <span className="text-[9px] tracking-widest text-white/30 uppercase font-mono font-medium block">
                  Atelier Storytelling
                </span>
                <p className="text-[12px] leading-relaxed text-white/40 font-light font-sans text-justify">
                  {activeProduct.story}
                </p>
              </div>
            )}

            {/* Observable Design Details List */}
            <div className="border-t border-white/[0.06] pt-6 flex flex-col gap-4">
              <span className="text-[9px] tracking-widest text-white/30 uppercase font-mono font-medium block">
                Observable Design Details
              </span>
              <ul className="flex flex-col gap-3">
                {activeProduct.specs.map((spec, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-[11px] text-white/50">
                    <span className="text-white/20 font-mono text-[9px] mt-0.5">[{String(idx + 1).padStart(2, "0")}]</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inquire/Concierge Form (No ecommerce buttons) */}
            <div className="border-t border-white/[0.06] pt-6 flex flex-col gap-4 bg-white/[0.01] p-6 border border-white/[0.03]">
              <span className="text-[9px] tracking-widest text-white/30 uppercase font-mono font-medium block">
                Private Brand Inquiry
              </span>
              <p className="text-[11px] leading-relaxed text-white/40 italic font-light">
                This item belongs to lookbook preview 01. Complete pricing, release dates, and stock availability pending. Inquire to receive prioritized notifications and private atelier access.
              </p>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/[0.02] border border-white/10 p-4 flex flex-col gap-2 items-center justify-center text-center mt-2"
                >
                  <ShieldCheck size={20} className="text-white/60 mb-1" />
                  <p className="text-[11px] tracking-[0.1em] text-white/80 font-medium uppercase">
                    Concierge Ticket Logged
                  </p>
                  <p className="text-[10px] text-white/40 uppercase font-mono">
                    We will notify {email}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="flex flex-col gap-2 mt-2">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER EMAIL FOR ATELIER PRIVILEGES" 
                    className="w-full bg-black border border-white/10 px-4 py-3.5 text-[10px] tracking-widest uppercase font-mono text-white placeholder-white/25 focus:outline-none focus:border-white/40 transition-colors rounded-none"
                    required
                  />
                  <button 
                    type="submit"
                    className="w-full py-4 bg-white text-black font-bold text-[10px] tracking-[0.25em] uppercase hover:bg-white/90 transition-colors cursor-pointer rounded-none flex items-center justify-center gap-2"
                  >
                    <span>Request Access Details</span>
                    <ArrowRight size={11} />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* LOOKBOOK PERSPECTIVES GALLERY (Editorial Bottom Block) */}
        <div className="mt-28 pt-16 border-t border-white/[0.04]">
          <span className="text-[9px] tracking-[0.4em] text-white/40 uppercase font-mono mb-12 block">
            02 // PERSPECTIVES GALLERY
          </span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((imgSrc, index) => (
              <div 
                key={index}
                className="group relative aspect-[3/4] bg-[#0d0d0d] overflow-hidden border border-white/[0.03]"
              >
                <img 
                  src={imgSrc} 
                  alt={`Lookbook angle ${index + 1}`} 
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 text-[9px] font-mono tracking-widest text-white/50 bg-black/50 backdrop-blur-md border border-white/5 px-2.5 py-1 uppercase">
                  ANGLE // {(index + 1).toString().padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
