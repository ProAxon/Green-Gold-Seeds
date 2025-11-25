import type { Metadata } from "next";
import { TemplateRenderer } from "../../components/TemplateRenderer";
import { loadTemplate } from "../../lib/loadTemplate";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsPage() {
  const markup = loadTemplate("products");
  return <TemplateRenderer html={markup} />;
}
