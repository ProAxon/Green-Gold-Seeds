import type { Metadata } from "next";
import { TemplateRenderer } from "../../components/TemplateRenderer";
import { loadTemplate } from "../../lib/loadTemplate";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  const markup = loadTemplate("faq");
  return <TemplateRenderer html={markup} />;
}
