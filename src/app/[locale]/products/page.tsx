import { getTranslations } from 'next-intl/server';
import type { Metadata } from "next";
import { ProductsContent } from "@/components/pages/ProductsContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('products'),
  };
}

export default async function ProductsPage() {
  return <ProductsContent />;
}
