import { useState, useEffect, FormEvent } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ShieldCheck, ArrowUpRight } from "lucide-react";
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

  // Find other looks for the "Related Pieces" section
  const relatedProducts = PRODUCTS.filter((p) => p.id !== activeProduct.id);

  return (
    <div className="min-h-screen bg-[#080808] text-[#f4f4f4] font-sans relative select-none">
      
      {/* Editorial Grid Background Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.12]">
        <div className="w-[85%] h-full mx-auto border-x border-white/[0.03] relative">
          <div className="absolute top-[20%] left-0 w-full h-[1px] bg-white/[0.03]"></div>
          <div className="absolute top-[45%] left-0 w-full h-[1px] bg-white/[0.03]"></div>
          <div className="absolute top-[75%] left-0 w-full h-[1px] bg-white/[0.03]"></div>
        </div>
      </div>

      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-[#080808]/85 backdrop-blur-md border-b border-white/[0.04] px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            to="/" 
            className="group flex items-center gap-3 text-[11px] tracking-[0.2em] font-semibold text-white/50 hover:text-white transition-colors duration-300 uppercase"
          >
            <ArrowLeft size={13} className="transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Return to Collection</span>
          </Link>
          
          <div className="flex flex-col items-end">
            <span className="text-[12px] font-bold tracking-tighter leading-none font-display text-white">SADCREAM</span>
            <span className="text-[8px] tracking-[0.3em] font-medium text-white/40 uppercase">Mongolia Campaign</span>
          </div>
        </div>
      </header>

      {/* Main Page Layout Container */}
      <main className="relative z-10 pb-32">
        
        {/* ================= SECTION 1: HERO IMAGE & METADATA GRID ================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* LEFT: Hero Image Viewport (Column 1-7) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Interactive Frame */}
              <div className="relative aspect-[3/4] w-full bg-[#0d0d0d] border border-white/10 overflow-hidden flex items-center justify-center">
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 z-20"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20 z-20"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20 z-20"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 z-20"></div>

                {/* Perspective Tag */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-[8px] tracking-[0.2em] uppercase font-mono font-medium text-white/80 z-20">
                  {activeProduct.id} // CAMPAIGN FRAME
                </div>

                {/* Image Crossfade Animation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full absolute inset-0"
                  >
                    <img
                      src={activeImage}
                      alt={activeProduct.name}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                      fetchPriority="high"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Atmospheric Tint */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />
              </div>

              {/* Multi-Angle Interactive Thumbnails directly aligned under Hero */}
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                {galleryImages.map((imgSrc, index) => {
                  const isActive = activeImage === imgSrc;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveImage(imgSrc)}
                      className={`relative w-20 h-24 flex-shrink-0 bg-[#0d0d0d] border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none overflow-hidden cursor-pointer ${
                        isActive 
                          ? "border-white/60 scale-[1.02]" 
                          : "border-white/10 opacity-40 hover:opacity-80"
                      }`}
                    >
                      <img 
                        src={imgSrc} 
                        alt={`Look detail view ${index + 1}`} 
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-1 right-1.5 text-[8px] font-mono text-white/30">
                        /{(index + 1).toString().padStart(2, "0")}
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* RIGHT: High-Contrast Metadata & Specs (Column 8-12) */}
            <div className="lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-28">
              
              {/* Product Name Header */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-mono">
                    {activeProduct.id}
                  </span>
                  <div className="w-8 h-[1px] bg-white/20"></div>
                  <span className="text-[8px] tracking-[0.3em] text-white/30 uppercase font-mono">
                    PREVIEW EDITION
                  </span>
                </div>
                <h1 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white font-display uppercase leading-[1.1]">
                  {activeProduct.name}
                </h1>
              </div>

              {/* Short Description Section */}
              <div className="border-t border-white/[0.06] pt-6 flex flex-col gap-3">
                <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase font-mono font-medium block">
                  Concept Synthesis
                </span>
                <p className="text-[14px] leading-relaxed text-white/70 font-light italic">
                  {activeProduct.description}
                </p>
              </div>

              {/* Neutral Visual Details */}
              <div className="border-t border-white/[0.06] pt-6 flex flex-col gap-4">
                <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase font-mono font-medium block">
                  Observed Details
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

              {/* Atelier Concierge Ticket (No pricing, no ecommerce) */}
              <div className="border-t border-white/[0.06] pt-6 flex flex-col gap-4 bg-white/[0.01] p-6 border border-white/[0.03]">
                <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase font-mono font-medium block">
                  Private Brand Inquiry
                </span>
                <p className="text-[11px] leading-relaxed text-white/40 italic font-light">
                  Complete releases and atelier access information pending. Register your interest below to receive official notifications regarding look availability.
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
                      placeholder="ENTER EMAIL FOR ACCESS DETAILS" 
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
        </section>

        {/* ================= SECTION 2: THE STORY (Atelier Storytelling Block) ================= */}
        {activeProduct.story && (
          <section className="mt-32 md:mt-48 border-t border-white/[0.04] pt-20 md:pt-28">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                
                {/* Left Side: Editorial Marker (Column 1-4) */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-mono">
                    Atelier Narrative
                  </span>
                  <div className="w-16 h-[1px] bg-white/20"></div>
                </div>

                {/* Right Side: Long Storytelling Text (Column 5-12) */}
                <div className="lg:col-span-8">
                  <p className="text-[18px] md:text-[22px] leading-relaxed text-white/85 font-light font-sans text-left tracking-wide max-w-3xl">
                    "{activeProduct.story}"
                  </p>
                  <p className="text-[11px] tracking-[0.2em] text-white/35 uppercase font-mono mt-8 block">
                    — RECORDED IN ULAANBAATAR, CAMPAIGN 01
                  </p>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* ================= SECTION 3: PERSPECTIVES GALLERY (Alternative Angles) ================= */}
        <section className="mt-32 md:mt-48 border-t border-white/[0.04] pt-20 md:pt-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-mono mb-3 block">
                02 // CAMPAIGN IMAGERY
              </span>
              <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-white font-display uppercase">
                Campaign Perspectives
              </h2>
            </div>
            
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
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 text-[9px] font-mono tracking-widest text-white/50 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 uppercase">
                    ANGLE // {(index + 1).toString().padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: RELATED PIECES (Atmospheric looks index) ================= */}
        <section className="mt-32 md:mt-48 border-t border-white/[0.04] pt-20 md:pt-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
              <div>
                <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-mono mb-3 block">
                  03 // LOOKBOOK INDEX
                </span>
                <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-white font-display uppercase">
                  Explore Campaign Looks
                </h2>
              </div>
              <Link
                to="/"
                className="text-[11px] tracking-[0.2em] uppercase font-semibold text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                <span>View Full Campaign Index</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group flex flex-col gap-6"
                >
                  <div className="relative aspect-[3/4] bg-[#0d0d0d] overflow-hidden border border-white/[0.03] flex items-center justify-center">
                    {/* Primary Image */}
                    <img 
                      src={p.primaryImage} 
                      alt={p.name} 
                      className={`w-full h-full object-cover object-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${
                        p.secondaryImage ? "group-hover:opacity-0" : ""
                      }`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Secondary Hover Image */}
                    {p.secondaryImage && (
                      <img 
                        src={p.secondaryImage} 
                        alt={`${p.name} reverse`} 
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    )}

                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-[8px] tracking-[0.2em] uppercase font-mono font-medium text-white/80">
                      {p.id}
                    </div>

                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-[8px] tracking-[0.2em] uppercase font-mono font-medium text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      VIEW LOOK
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-[14px] font-bold tracking-tight text-white group-hover:text-white/80 transition-colors duration-300 font-display uppercase">
                        {p.name}
                      </h3>
                    </div>
                    <p className="text-[12px] text-white/40 font-light italic leading-relaxed">
                      {p.description}
                    </p>
                    
                    <div className="mt-2 flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-semibold text-white/40 group-hover:text-white transition-colors duration-300">
                      <span>Explore Look Details</span>
                      <ArrowRight size={11} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

