"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const normalizePath = (href: string | null) => {
  if (!href) return null;
  try {
    if (typeof window === "undefined") {
      return href;
    }
    const url = new URL(href, window.location.origin);
    return url.pathname.replace(/\/+$/, "") || "/";
  } catch {
    return href;
  }
};

export function NavHighlighter() {
  const pathname = usePathname();

  useEffect(() => {
    const currentPath = pathname?.replace(/\/$/, "") || "/";
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(
      ".main-menu__list a[href]"
    );

    navLinks.forEach((link) => {
      const parent = link.closest("li");
      if (!parent) return;

      const href = normalizePath(link.getAttribute("href"));
      const isAnchor = link.getAttribute("href")?.startsWith("#");
      const isActive = !isAnchor && href === currentPath;

      parent.classList.toggle("current", Boolean(isActive));
    });
  }, [pathname]);

  return null;
}
