import type { Metadata } from "next";
import { BlogContent } from "@/components/pages/BlogContent";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return <BlogContent />;
}
