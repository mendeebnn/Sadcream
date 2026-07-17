import { Product } from "./types";

// Import our original campaign/product images
import campaign1 from "./assets/images/sadcream_brz_night_1784087879953.jpg";
import campaign2 from "./assets/images/sadcream_m5_fire_1784087900344.jpg";
import campaign3 from "./assets/images/sadcream_leopard_boots_1784087922282.jpg";
import campaign4 from "./assets/images/sadcream_ribcage_back_1784087939886.jpg";

export const PRODUCTS: Product[] = [
  {
    id: "LOOK-01",
    name: "SADCREAM LEOPARD ZIP-UP HOODIE (BACK EMBROIDERY)",
    primaryImage: campaign4,
    secondaryImage: campaign3,
    description: "Leopard-print zip-up hoodie featuring a white skeletal graphic of a ribcage on the back.",
    specs: [
      "All-over leopard print pattern",
      "White outline ribcage graphic on the back",
      "Front zip-up closure",
      "Dropped shoulders and relaxed fit",
      "Ribbed cuffs and hem"
    ],
    additionalImages: [campaign2, campaign1],
    story: "Presented in an evening setting, the garment features a contrasting white graphic positioned centrally across the back, standing out against the detailed leopard print.",
    price: 185000, category: "Hoodies", sizes: ["S", "M", "L", "XL"], stock: 12
  },
  {
    id: "LOOK-02",
    name: "SADCREAM BLACK RHINESTONE ZIP-UP HOODIE",
    primaryImage: campaign1,
    secondaryImage: campaign4,
    description: "Black zip-up hoodie featuring thin reflective crystal lines following the main structural seams.",
    specs: [
      "Solid black fabric base",
      "Linear reflective crystal details along the sleeve and shoulder seams",
      "Front zip-up closure",
      "Hooded collar",
      "Relaxed sleeves"
    ],
    additionalImages: [campaign3, campaign2],
    story: "Captured at night, the linear crystal accents catch ambient direct light, creating high-contrast outlines along the shoulder and arm seams.",
    price: 210000, category: "Hoodies", sizes: ["S", "M", "L", "XL"], stock: 8
  },
  {
    id: "LOOK-03",
    name: "SADCREAM LEOPARD ZIP-UP HOODIE (SLOUCHY SILHOUETTE)",
    primaryImage: campaign3,
    secondaryImage: campaign2,
    description: "Leopard-print zip-up hoodie styled with a loose, slouchy fit.",
    specs: [
      "All-over leopard print pattern",
      "Front zip-up closure with metallic zipper pull",
      "Oversized silhouette with loose-fitting sleeves",
      "Relaxed hood design",
      "Elasticated cuffs and hem"
    ],
    additionalImages: [campaign1, campaign4],
    story: "The styling illustrates a relaxed drape and loose fit, showing the stacking of the leopard-patterned sleeves around the wrists.",
    price: 185000, category: "Hoodies", sizes: ["S", "M", "L"], stock: 10
  }
];
