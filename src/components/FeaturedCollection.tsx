import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Check, ShoppingBag, ChevronRight } from "lucide-react";

// Import our original campaign/product images
import campaign1 from "../assets/images/sadcream_brz_night_1784087879953.jpg";
import campaign2 from "../assets/images/sadcream_m5_fire_1784087900344.jpg";
import campaign3 from "../assets/images/sadcream_leopard_boots_1784087922282.jpg";
import campaign4 from "../assets/images/sadcream_ribcage_back_1784087939886.jpg";

interface Product {
  id: string;
  name: string;
  price: string;
  mntPrice: string;
  primaryImage: string;
  secondaryImage: string | null;
  sizes: string[];
  description: string;
  specs: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "OBJECT 01",
    name: "SADCREAM LEOPARD ZIP-UP HOODIE (BACK EMBROIDERY)",
    price: "Price Pending",
    mntPrice: "₮ TBD",
    primaryImage: campaign4,
    secondaryImage: campaign3,
    sizes: ["PENDING RELEASE"],
    description: "Heavyweight leopard-print streetwear zip-up hoodie featuring a white embroidered graphic of a human heart and ribcage skeleton on the back.",
    specs: [
      "Leopard-print streetwear heavy-duty fleece",
      "White custom chest & back skeletal embroidery",
      "Sizing, fabric details, and full specifications pending official collection release"
    ]
  },
  {
    id: "OBJECT 02",
    name: "SADCREAM BLACK RHINESTONE ZIP-UP HOODIE",
    price: "Price Pending",
    mntPrice: "₮ TBD",
    primaryImage: campaign1,
    secondaryImage: null,
    sizes: ["PENDING RELEASE"],
    description: "High-end black streetwear zip-up hoodie detailed with silver rhinestone embellishments reflecting ambient street lighting.",
    specs: [
      "Dense deep-black streetwear fleece",
      "Silver rhinestone line embellishments",
      "Sizing, fabric details, and full specifications pending official collection release"
    ]
  },
  {
    id: "OBJECT 03",
    name: "SADCREAM LEOPARD ZIP-UP HOODIE (LOOKBOOK SHOT)",
    price: "Price Pending",
    mntPrice: "₮ TBD",
    primaryImage: campaign3,
    secondaryImage: campaign2,
    sizes: ["PENDING RELEASE"],
    description: "Heavyweight leopard-print streetwear zip-up hoodie styled in a loose drop-shoulder fit with comfortable slouchy proportions.",
    specs: [
      "Oversized heavy-duty leopard fleece",
      "Classic full zip closure and ribbed cuffs",
      "Sizing, fabric details, and full specifications pending official collection release"
    ]
  }
];

export default function FeaturedCollection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isAdded, setIsAdded] = useState(false);

  const handleOpenQuickView = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[1] || product.sizes[0]);
    setIsAdded(false);
  };

  const handleAddToBag = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
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
          01 // NEW DROP
        </span>
        <h2 className="text-[42px] md:text-[64px] font-bold tracking-[-0.04em] font-display text-white leading-none">
          FEATURED DROP
        </h2>
        <p className="text-[13px] tracking-wider text-white/50 font-light mt-3 italic">
          Latest collection from SadCream.
        </p>
      </motion.div>

      {/* 3-Column Product Grid with staggered entry effects */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-y-16 gap-x-12 items-start mb-20 md:mb-32">
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
                <h3 className="text-[15px] font-bold tracking-tight text-white group-hover:text-white/80 transition-colors duration-300 font-display">
                  {product.name}
                </h3>
                <div className="text-right">
                  <span className="text-[14px] font-semibold text-white block">
                    {product.price}
                  </span>
                  <span className="text-[10px] text-white/40 font-mono">
                    {product.mntPrice}
                  </span>
                </div>
              </div>

              {/* Sizes Available Row */}
              <div className="flex gap-2 items-center flex-wrap">
                <span className="text-[9px] tracking-widest text-white/30 uppercase font-mono mr-1">SIZES:</span>
                {product.sizes.map((sz) => (
                  <span 
                    key={sz} 
                    className="text-[10px] font-mono font-medium text-white/50 border border-white/5 px-2 py-0.5"
                  >
                    {sz}
                  </span>
                ))}
              </div>

              {/* View Product Button (Minimalist, luxury styling) */}
              <div className="mt-4 pt-4 border-t border-white/[0.04] flex justify-between items-center text-[10px] tracking-[0.3em] uppercase font-semibold text-white/40 group-hover:text-white transition-all duration-300">
                <span>VIEW PRODUCT</span>
                <ArrowRight size={12} className="transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VIEW ALL Button at bottom of section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full flex justify-center"
      >
        <button className="group relative px-16 py-5 border border-white/10 hover:border-white/40 transition-colors duration-500 bg-transparent overflow-hidden cursor-pointer max-w-sm w-full">
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <span className="relative z-10 text-[11px] tracking-[0.3em] uppercase text-white/60 group-hover:text-black transition-colors duration-500 font-semibold">
            VIEW ALL COLLECTIONS
          </span>
          <div className="absolute -right-1 -top-1 w-2 h-2 border-r border-t border-white/20"></div>
          <div className="absolute -left-1 -bottom-1 w-2 h-2 border-l border-b border-white/20"></div>
        </button>
      </motion.div>

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
                    PRODUCT OBJECT // {selectedProduct.id}
                  </span>
                  <h3 className="text-[24px] md:text-[32px] font-bold tracking-tight text-white font-display uppercase">
                    {selectedProduct.name}
                  </h3>
                  <div className="flex items-baseline gap-4 mt-2">
                    <span className="text-[20px] font-bold text-white font-display">
                      {selectedProduct.price}
                    </span>
                    <span className="text-[12px] text-white/40 font-mono">
                      {selectedProduct.mntPrice}
                    </span>
                  </div>
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
                          NO REVERSE OBJECT
                        </span>
                      </div>
                    )}
                    
                    {/* Atelier Notes */}
                    <div className="bg-white/[0.02] p-4 border border-white/5">
                      <span className="text-[8px] tracking-widest text-white/40 uppercase font-mono block mb-1">
                        RELEASE STATUS
                      </span>
                      <p className="text-[11px] leading-relaxed text-white/50 italic font-light">
                        Lookbook preview only. Stock, pricing, and launch details pending official release.
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

                {/* Size Selector */}
                <div className="border-t border-white/10 pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[9px] tracking-widest text-white/40 uppercase font-mono">
                      SELECT SIZE
                    </span>
                    <span className="text-[9px] text-white/30 hover:text-white/70 cursor-pointer underline font-mono">
                      SIZE GUIDE
                    </span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {selectedProduct.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-5 py-3 text-[11px] font-mono border transition-all cursor-pointer ${
                          selectedSize === size
                            ? "bg-white text-black border-white"
                            : "bg-transparent text-white border-white/10 hover:border-white/40"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Add To Bag bottom control bar */}
              <div className="mt-12 pt-6 border-t border-white/10 flex gap-4">
                <button
                  onClick={handleAddToBag}
                  className="flex-1 group relative py-5 bg-white text-black text-center font-semibold text-[11px] tracking-[0.3em] uppercase overflow-hidden cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    {isAdded ? (
                      <motion.span 
                        key="added" 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <Check size={12} /> REGISTRATION COMPLETED
                      </motion.span>
                    ) : (
                      <motion.span 
                        key="add" 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <ShoppingBag size={12} /> PRE-REGISTER INTEREST
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
