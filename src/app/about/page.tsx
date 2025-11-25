import type { Metadata } from "next";
import { TemplateRenderer } from "../../components/TemplateRenderer";
import { loadTemplate } from "../../lib/loadTemplate";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const markup = loadTemplate("about");
  return <TemplateRenderer html={markup} />;
}
