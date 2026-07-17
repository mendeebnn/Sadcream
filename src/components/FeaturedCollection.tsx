import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data";
import { Heart } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function FeaturedCollection() {
  const { wishlist, toggleWishlist } = useShop();
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
          01 // CAMPAIGN INDEX
        </span>
        <h2 className="text-[42px] md:text-[64px] font-bold tracking-[-0.04em] font-display text-white leading-none">
          CAMPAIGN LOOKS
        </h2>
      </motion.div>

      {/* 3-Column Product Grid with staggered entry effects */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-y-16 gap-x-12 items-start mb-12">
        {PRODUCTS.map((product, index) => (
          <Link 
            key={product.id}
            to={`/product/${product.id}`}
            className="group flex flex-col cursor-pointer"
          >
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col w-full"
            >
              {/* Image Container with Custom Hover Aspect Ratio & Crossfade */}
              <div className="relative aspect-[3/4] w-full bg-[#0d0d0d] overflow-hidden mb-6 border border-white/[0.03] flex items-center justify-center">
                <button onClick={(event) => { event.preventDefault(); toggleWishlist(product.id); }} className="absolute z-20 top-4 right-4 p-2 bg-black/50 border border-white/10 hover:border-white/50" aria-label={`${wishlist.includes(product.id) ? "Remove" : "Add"} ${product.name} ${wishlist.includes(product.id) ? "from" : "to"} wishlist`}><Heart size={13} fill={wishlist.includes(product.id) ? "currentColor" : "none"}/></button>
                
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
                  <span className="text-[11px] text-white/60 font-mono whitespace-nowrap">₮{product.price.toLocaleString()}</span>
                </div>

                {/* View Specs Button (Minimalist, luxury styling) */}
                <div className="mt-4 pt-4 border-t border-white/[0.04] flex justify-between items-center text-[10px] tracking-[0.3em] uppercase font-semibold text-white/40 group-hover:text-white transition-all duration-300">
                  <span>VIEW LOOK DETAILS</span>
                  <ArrowRight size={12} className="transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
