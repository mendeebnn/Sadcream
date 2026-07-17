import defaultSeoImage from "./assets/images/sadcream_ribcage_back_1784087939886.jpg";

export const BRAND_CONFIG = {
  name: "SADCREAM",
  location: "ULAANBAATAR // MONGOLIA",
  timezone: "ULAANBAATAR",
  atelierHours: "ATELIER HOURS // BY APPOINTMENT",
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/sadcream_mongolia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  contactPhone: import.meta.env.VITE_CONTACT_PHONE || "+976 9446 1766",
  siteUrl: import.meta.env.VITE_SITE_URL || window.location.origin,
  copyright: `© ${new Date().getFullYear()} SADCREAM. ALL RIGHTS RESERVED.`,
  seoDefaults: {
    title: "SADCREAM // MONGOLIA CAMPAIGN",
    description: "Explore the SADCREAM Mongolia Campaign Lookbook featuring curated oversized knits and raw styling captured under ambient twilight in Ulaanbaatar.",
    image: defaultSeoImage,
  }
};
