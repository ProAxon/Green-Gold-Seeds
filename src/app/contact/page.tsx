import type { Metadata } from "next";
import { TemplateRenderer } from "../../components/TemplateRenderer";
import { loadTemplate } from "../../lib/loadTemplate";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const markup = loadTemplate("contact");
  return <TemplateRenderer html={markup} />;
}
