import { PageWrapper } from "@/components/layout/PageWrapper";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductSidebar } from "@/components/products/ProductSidebar";
import { ProductFilters } from "@/components/products/ProductFilters";
import { fetchProducts } from "@/data/products";

export async function ProductsContent() {
  const products = await fetchProducts();

  return (
    <PageWrapper headerVariant="two">
      <PageHeader title="Products" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]} />

          {/*Product Start*/}
      <Section className="product">
        <Container>
              <div className="row">
                <div className="col-xl-9 col-lg-12">
                  <div className="product__items">
                    <div className="row">
                  <ProductFilters />
                          </div>
                <ProductGrid products={products} />
                            </div>
                          </div>
            <ProductSidebar />
                        </div>
        </Container>
      </Section>
          {/*Product End*/}
    </PageWrapper>
  );
}
