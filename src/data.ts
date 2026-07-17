import { Product } from "./types";

// Import our original campaign/product images
import campaign1 from "./assets/images/sadcream_brz_night_1784087879953.jpg";
import campaign2 from "./assets/images/sadcream_m5_fire_1784087900344.jpg";
import campaign3 from "./assets/images/sadcream_leopard_boots_1784087922282.jpg";
import campaign4 from "./assets/images/sadcream_ribcage_back_1784087939886.jpg";

export const PRODUCTS: Product[] = [
  {
    id: "OBJECT-01",
    name: "SADCREAM LEOPARD ZIP-UP HOODIE (BACK EMBROIDERY)",
    primaryImage: campaign4,
    secondaryImage: campaign3,
    description: "Leopard-print zip-up hoodie featuring an anatomical graphic of a human heart and skeletal ribcage on the reverse.",
    specs: [
      "Leopard-print heavy fleece pattern",
      "White skeletal anatomical embroidery on reverse",
      "Relaxed drop-shoulder silhouette with slouchy hood",
      "Brushed silver custom metal zipper",
      "Rib-knit waist hem and wrist cuffs"
    ],
    additionalImages: [campaign2, campaign1],
    story: "Conceived as an anatomical study in texture, OBJECT-01 contrasts the wild chaos of a custom-developed leopard knit against the architectural precision of skeletal embroidery. Each piece is constructed from premium heavy-weight fleece, offering an ultra-relaxed drape. The reverse features a high-density white thread embroidery outlining the spinal columns and ribcage, creating a stark visual anchor that moves organically with the wearer."
  },
  {
    id: "OBJECT-02",
    name: "SADCREAM BLACK RHINESTONE ZIP-UP HOODIE",
    primaryImage: campaign1,
    secondaryImage: campaign4, // Use campaign4 as secondary for black rhinestone to have a beautiful reverse preview!
    description: "Black zip-up hoodie featuring hand-set silver rhinestone contours designed to catch ambient twilight.",
    specs: [
      "Deep-black double-faced knit fabric",
      "Hand-placed silver rhinestone contour lines",
      "Relaxed proportional sleeve design",
      "Reinforced flat-lock seams",
      "Polished metal hardware with subtle logo etching"
    ],
    additionalImages: [campaign3, campaign2],
    story: "Exploring light in absolute darkness, OBJECT-02 features delicate rhinestone placements following the structural seams of the garment. Under ambient or direct twilight, the custom-cut silver crystals reflect high-contrast beams, mimicking starlight against black velvet. Crafted from double-faced loopback knit, it balances a structural exterior with an incredibly soft touch against the skin."
  },
  {
    id: "OBJECT-03",
    name: "SADCREAM LEOPARD ZIP-UP HOODIE (SLOUCHY SILHOUETTE)",
    primaryImage: campaign3,
    secondaryImage: campaign2,
    description: "Oversized leopard-print zip-up hoodie designed with an extreme slouchy silhouette and drop-shoulder details.",
    specs: [
      "Oversized leopard-print wool-cotton blend pattern",
      "Slouchy fit with relaxed body proportions",
      "Integrated heavy double-lined hood",
      "Exaggerated sleeve length for stacked styling",
      "Concealed side-seam pockets"
    ],
    additionalImages: [campaign1, campaign4],
    story: "A masterclass in slouchy proportions, OBJECT-03 takes a relaxed, maximalist approach to casual knitwear. Utilizing an custom wool-cotton blend with an organic leopard motif, this hoodie falls into natural heavy folds. The sleeves are elongated to allow stacking around the wrists, while the bottom band is tailored to rest loosely at the hip, evoking an effortless, lived-in luxury look."
  }
];
