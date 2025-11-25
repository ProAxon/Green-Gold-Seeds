import type { Metadata } from "next";
import { ServicesContent } from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
