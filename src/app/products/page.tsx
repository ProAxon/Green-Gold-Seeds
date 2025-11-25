import type { Metadata } from "next";
import { ProductsContent } from "@/components/pages/ProductsContent";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return <ProductsContent />;
}
