import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";

// Import our original campaign/product images
import campaign1 from "../assets/images/sadcream_brz_night_1784087879953.jpg";
import campaign2 from "../assets/images/sadcream_m5_fire_1784087900344.jpg";
import campaign3 from "../assets/images/sadcream_leopard_boots_1784087922282.jpg";
import campaign4 from "../assets/images/sadcream_ribcage_back_1784087939886.jpg";

interface Product {
  id: string;
  name: string;
  primaryImage: string;
  secondaryImage: string | null;
  description: string;
  specs: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "OBJECT 01",
    name: "SADCREAM LEOPARD ZIP-UP HOODIE (BACK EMBROIDERY)",
    primaryImage: campaign4,
    secondaryImage: campaign3,
    description: "Heavyweight leopard-print fleece zip-up hoodie featuring an anatomical custom chain-stitch graphic of a human heart and skeletal ribcage on the reverse.",
    specs: [
      "Heavyweight leopard-print cotton fleece",
      "Hand-guided white chain-stitch skeletal back embroidery",
      "Oversized drop-shoulder construction"
    ]
  },
  {
    id: "OBJECT 02",
    name: "SADCREAM BLACK RHINESTONE ZIP-UP HOODIE",
    primaryImage: campaign1,
    secondaryImage: null,
    description: "Premium heavy-duty black cotton fleece zip-up hoodie featuring hand-set silver rhinestone contours.",
    specs: [
      "Dense deep-black heavyweight cotton fleece",
      "Hand-placed silver rhinestone line detailing",
      "Classic full-length front zipper closure"
    ]
  },
  {
    id: "OBJECT 03",
    name: "SADCREAM LEOPARD ZIP-UP HOODIE (SLOUCHY SILHOUETTE)",
    primaryImage: campaign3,
    secondaryImage: campaign2,
    description: "Oversized leopard-print fleece zip-up hoodie designed with an elegant drop-shoulder silhouette and relaxed proportions.",
    specs: [
      "Oversized heavyweight leopard-print fleece",
      "Slouchy fit with relaxed body proportions",
      "Double-lined hood with robust ribbing"
    ]
  }
];

export default function FeaturedCollection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <section id="featured-collection" className="bg-black text-[#f4f4f4] py-24 md:py-40 px-6 md:px-12 w-full min-h-screen flex flex-col justify-between border-t border-white/[0.04]">
      
      {/* Editorial Title & Subtitle with cinematic scroll entry */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full mb-16 md:mb-28 text-left"
      >
        <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-mono mb-3 block">
          01 // LOOKBOOK OBJECTS
        </span>
        <h2 className="text-[42px] md:text-[64px] font-bold tracking-[-0.04em] font-display text-white leading-none">
          FEATURED DROP
        </h2>
      </motion.div>

      {/* 3-Column Product Grid with staggered entry effects */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-y-16 gap-x-12 items-start mb-12">
        {PRODUCTS.map((product, index) => (
          <motion.div 
            key={product.id} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer flex flex-col"
            onClick={() => handleOpenQuickView(product)}
          >
            {/* Image Container with Custom Hover Aspect Ratio & Crossfade */}
            <div className="relative aspect-[3/4] w-full bg-[#0d0d0d] overflow-hidden mb-6 border border-white/[0.03] flex items-center justify-center">
              
              {/* Main Image */}
              <img
                src={product.primaryImage}
                alt={product.name}
                className={`w-full h-full object-cover object-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025] ${
                  product.secondaryImage ? "group-hover:opacity-0" : ""
                }`}
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Secondary Hover Image (Back View) */}
              {product.secondaryImage && (
                <img
                  src={product.secondaryImage}
                  alt={`${product.name} back view`}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-[1.025]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              )}

              {/* Sophisticated Overlay Badges */}
              <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 text-[8px] tracking-[0.2em] uppercase font-mono font-medium text-white/80">
                {product.id}
              </div>
              
              {product.secondaryImage && (
                <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 text-[8px] tracking-[0.2em] uppercase font-mono font-medium text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  REVEAL // BACK VIEW
                </div>
              )}
            </div>

            {/* Product Meta Section */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-[14px] font-bold tracking-tight text-white group-hover:text-white/85 transition-colors duration-300 font-display uppercase leading-snug">
                  {product.name}
                </h3>
              </div>

              {/* View Specs Button (Minimalist, luxury styling) */}
              <div className="mt-4 pt-4 border-t border-white/[0.04] flex justify-between items-center text-[10px] tracking-[0.3em] uppercase font-semibold text-white/40 group-hover:text-white transition-all duration-300">
                <span>EXAMINE SPECIFICATIONS</span>
                <ArrowRight size={12} className="transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Premium Brutalist Drawer/Modal for Product Details */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-md p-0 md:p-6"
            onClick={() => setSelectedProduct(null)}
          >
            {/* Modal Body (Right slide-over style) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="w-full max-w-2xl h-full bg-[#080808] border-l border-white/10 flex flex-col justify-between overflow-y-auto relative p-8 md:p-12 select-none"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-3 text-white/50 hover:text-white border border-white/10 hover:border-white/30 transition-all cursor-pointer rounded-none"
              >
                <X size={16} />
              </button>

              {/* Main Detailed Content Area */}
              <div className="flex flex-col gap-10 mt-10">
                <div>
                  <span className="text-[9px] tracking-[0.4em] text-white/40 uppercase font-mono block mb-2">
                    DESIGN OBJECT // {selectedProduct.id}
                  </span>
                  <h3 className="text-[24px] md:text-[32px] font-bold tracking-tight text-white font-display uppercase leading-tight">
                    {selectedProduct.name}
                  </h3>
                </div>

                {/* Main Detailed Image and secondary thumbnail preview */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="md:col-span-3 aspect-[3/4] w-full bg-[#0d0d0d] border border-white/10 overflow-hidden relative">
                    <img 
                      src={selectedProduct.primaryImage} 
                      alt={selectedProduct.name} 
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-between gap-4">
                    {selectedProduct.secondaryImage ? (
                      <div className="aspect-[3/4] w-full bg-[#0d0d0d] border border-white/10 overflow-hidden relative">
                        <img 
                          src={selectedProduct.secondaryImage} 
                          alt={`${selectedProduct.name} back view`} 
                          className="w-full h-full object-cover object-center"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/60 text-[8px] font-mono px-2 py-1 text-white/70">
                          BACK VIEW
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[3/4] w-full bg-white/[0.02] border border-dashed border-white/10 flex flex-col justify-center items-center p-4 text-center">
                        <span className="text-[9px] tracking-widest text-white/20 uppercase font-mono">
                          NO REVERSE LOOK
                        </span>
                      </div>
                    )}
                    
                    {/* Atelier Notes */}
                    <div className="bg-white/[0.02] p-4 border border-white/5">
                      <span className="text-[8px] tracking-widest text-white/40 uppercase font-mono block mb-1">
                        LOOKBOOK SPECIFICATION
                      </span>
                      <p className="text-[11px] leading-relaxed text-white/50 italic font-light">
                        This item is part of lookbook preview 01. Complete pricing, release dates, and stock availability pending.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="border-t border-white/10 pt-6">
                  <span className="text-[9px] tracking-widest text-white/40 uppercase font-mono block mb-2">
                    DESIGN CONCEPT
                  </span>
                  <p className="text-[13px] leading-relaxed text-white/60 font-light italic">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Technical Specifications */}
                <div className="border-t border-white/10 pt-6">
                  <span className="text-[9px] tracking-widest text-white/40 uppercase font-mono block mb-4">
                    TECHNICAL DATA
                  </span>
                  <ul className="flex flex-col gap-2">
                    {selectedProduct.specs.map((spec, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-[11px] text-white/50">
                        <span className="text-white/20 font-mono mt-0.5">[{idx + 1}]</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Close Bottom Control Bar */}
              <div className="mt-12 pt-6 border-t border-white/10">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full py-5 border border-white/25 bg-white/5 hover:bg-white hover:text-black transition-all duration-500 text-center font-semibold text-[11px] tracking-[0.3em] uppercase cursor-pointer"
                >
                  CLOSE SPECIFICATION
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
