import type { Metadata } from "next";
import { TemplateRenderer } from "../components/TemplateRenderer";
import { loadTemplate } from "../lib/loadTemplate";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  const markup = loadTemplate("home");
  return <TemplateRenderer html={markup} />;
}
