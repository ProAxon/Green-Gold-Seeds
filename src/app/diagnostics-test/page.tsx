import type { Metadata } from "next";
import { DiagnosticTestContent } from "@/components/pages/DiagnosticTestContent";

export const metadata: Metadata = {
  title: "Diagnostics Test",
};

export default function DiagnosticsTestPage() {
  return <DiagnosticTestContent />;
}

