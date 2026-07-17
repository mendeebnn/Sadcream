import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Copy, Check, Instagram, Mail } from "lucide-react";
import { BRAND_CONFIG } from "../brand";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = BRAND_CONFIG.contactEmail;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback
    }
  };

  return (
    <section 
      id="contact" 
      className="bg-black text-[#f4f4f4] py-32 md:py-48 px-6 md:px-12 w-full border-t border-white/[0.04] relative overflow-hidden"
    >
      {/* Subtle Structural Lines for Negative Space Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="w-[85%] h-full mx-auto border-x border-white/[0.03] relative">
          <div className="absolute top-[40%] left-0 w-full h-[1px] bg-white/[0.03]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Side: Massive Typography Title (Columns 1-7) */}
        <div className="lg:col-span-7 flex flex-col justify-between min-h-[250px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-mono mb-4 block">
              02 // DIRECT INQUIRIES
            </span>
            <h2 className="text-[44px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-bold tracking-[-0.05em] font-display text-white leading-[0.9] uppercase">
              ATELIER<br />
              CONNECTION
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13px] leading-relaxed text-white/40 font-light max-w-md mt-8 lg:mt-0 italic"
          >
            For collaborative concepts, private viewing bookings, press packages, or special commissions, connect with our Ulaanbaatar atelier.
          </motion.p>
        </div>

        {/* Right Side: Editorial Contact Channels (Columns 8-12) */}
        <div className="lg:col-span-5 flex flex-col justify-end gap-12">
          
          {/* Email Channel Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col gap-4 border-b border-white/10 pb-8"
          >
            <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase font-mono font-medium block">
              Digital Mail
            </span>
            
            <div className="flex justify-between items-center gap-4">
              <a 
                href={`mailto:${emailAddress}`}
                className="text-[18px] sm:text-[22px] font-medium tracking-tight hover:tracking-[0.05em] text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans"
              >
                {emailAddress}
              </a>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="p-3 border border-white/10 hover:border-white/40 text-white/40 hover:text-white transition-all duration-300 rounded-none cursor-pointer flex items-center justify-center"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={14} className="text-white" /> : <Copy size={14} />}
                </button>
                <a 
                  href={`mailto:${emailAddress}`}
                  className="p-3 border border-white/10 hover:border-white/40 text-white/40 hover:text-white transition-all duration-300 rounded-none flex items-center justify-center"
                  title="Send Email"
                  aria-label="Send Email"
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            
            <AnimatePresence>
              {copied && (
                <motion.span 
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-[10px] tracking-widest text-white/50 uppercase font-mono mt-1"
                >
                  COPIED TO CLIPBOARD
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Instagram Channel Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col gap-4 border-b border-white/10 pb-8"
          >
            <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase font-mono font-medium block">
              Social Axis
            </span>
            
            <div className="flex justify-between items-center gap-4">
              <a 
                href={BRAND_CONFIG.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[18px] sm:text-[22px] font-medium tracking-tight hover:tracking-[0.05em] text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans uppercase"
              >
                @sadcream_mongolia
              </a>

              <a 
                href={BRAND_CONFIG.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-white/10 hover:border-white/40 text-white/40 hover:text-white transition-all duration-300 rounded-none flex items-center justify-center"
                title="Visit Instagram"
                aria-label="Visit Instagram"
              >
                <Instagram size={14} />
              </a>
            </div>
          </motion.div>

          {/* Operational Hours / Aesthetic Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="flex justify-between items-center text-[10px] tracking-wider text-white/50 font-mono"
          >
            <span>{BRAND_CONFIG.atelierHours}</span>
            <span>{BRAND_CONFIG.timezone}</span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
