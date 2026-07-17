export interface Product {
  id: string;
  name: string;
  primaryImage: string;
  secondaryImage: string | null;
  description: string;
  specs: string[];
  additionalImages?: string[]; // Optional extra lookbook images for detail page
  story?: string; // Optional longer storytelling copy
}
