import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return <HomeContent />;
}
