import type { Metadata } from "next";
import { TemplateRenderer } from "../../components/TemplateRenderer";
import { loadTemplate } from "../../lib/loadTemplate";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  const markup = loadTemplate("services");
  return <TemplateRenderer html={markup} />;
}
