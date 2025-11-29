import Link from "next/link";
import { Container } from "./Container";

interface PageHeaderProps {
  title: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  const defaultBreadcrumbs = breadcrumbs || [
    { label: "Home", href: "/" },
    { label: title },
  ];

  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{ backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)" }}
      />
      <Container>
        <div className="page-header__inner">
          <h3>{title}</h3>
          <div className="thm-breadcrumb__inner">
            <ul className="thm-breadcrumb list-unstyled">
              {defaultBreadcrumbs.map((crumb, index) => (
                <li key={index}>
                  {crumb.href ? (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  ) : (
                    crumb.label
                  )}
                  {index < defaultBreadcrumbs.length - 1 && (
                    <li>
                      <span className="fas fa-angle-right" />
                    </li>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

