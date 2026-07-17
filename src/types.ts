export interface Product {
  id: string;
  name: string;
  primaryImage: string;
  secondaryImage: string | null;
  description: string;
  specs: string[];
  additionalImages?: string[]; // Optional extra lookbook images for detail page
  story?: string; // Optional longer storytelling copy
  price: number;
  category: ProductCategory;
  sizes: string[];
  stock: number;
}

export type ProductCategory = "Hoodies" | "Outerwear" | "Accessories";
export interface CartItem { productId: string; size: string; quantity: number; }
export interface Customer { name: string; email: string; phone: string; address: string; city: string; postalCode: string; }
export type OrderStatus = "awaiting_payment" | "payment_submitted" | "approved" | "rejected" | "completed";
export interface Order { id: string; transactionCode: string; createdAt: string; customer: Customer; items: CartItem[]; subtotal: number; shipping: number; total: number; status: OrderStatus; }
