import { useEffect } from "react";

interface SEOMetadata {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

export function useSEO({ title, description, image, url, type = "website" }: SEOMetadata) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update or create meta tags
    const updateMetaTag = (attribute: string, attributeValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentValue);
    };

    // 2. Standard Meta Description
    updateMetaTag("name", "description", description);

    // 3. Open Graph Tags
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:type", type);
    if (image) {
      updateMetaTag("property", "og:image", image);
    }
    updateMetaTag("property", "og:url", url || window.location.href);

    // 4. Twitter Card Tags
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    if (image) {
      updateMetaTag("name", "twitter:image", image);
    }
  }, [title, description, image, url, type]);
}
