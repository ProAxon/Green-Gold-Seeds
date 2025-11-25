import type { Metadata } from "next";
import { TemplateRenderer } from "../../components/TemplateRenderer";
import { loadTemplate } from "../../lib/loadTemplate";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const markup = loadTemplate("blog");
  return <TemplateRenderer html={markup} />;
}
