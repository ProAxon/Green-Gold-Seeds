"use client";

import { usePathname } from "@/i18n/routing";
import { useEffect, useState } from "react";

const normalizePath = (href: string | null) => {
  if (!href) return null;
  try {
    // Handle relative paths
    if (href.startsWith("/")) {
      return href.replace(/\/+$/, "") || "/";
    }
    // Handle full URLs only in browser
    if (typeof window !== "undefined") {
    const url = new URL(href, window.location.origin);
    return url.pathname.replace(/\/+$/, "") || "/";
    }
    // Fallback for SSR
    return href.replace(/\/+$/, "") || "/";
  } catch {
    // If it's a simple path, normalize it
    return href.replace(/\/+$/, "") || "/";
  }
};

export function NavHighlighter() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Only run on client side after mount
    if (!mounted || typeof window === "undefined") return;
    
    // Normalize current path - remove locale prefix
    const currentPath = pathname?.replace(/^\/[^\/]+/, "").replace(/\/+$/, "") || "/";
    
    // Remove all current classes first
    document.querySelectorAll(".main-menu__list li").forEach((li) => {
      li.classList.remove("current");
    });

    // Find and mark active links
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(
      ".main-menu__list a[href]"
    );

    let foundActive = false;

    navLinks.forEach((link) => {
      const parent = link.closest("li");
      if (!parent) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // Skip anchor links and dropdown togglers
      if (href.startsWith("#") || href === "/#") return;

      const normalizedHref = normalizePath(href);
      // Remove locale prefix from normalized href for comparison
      const hrefWithoutLocale = normalizedHref?.replace(/^\/[^\/]+/, "") || normalizedHref;
      const isActive = hrefWithoutLocale === currentPath;

      if (isActive) {
        parent.classList.add("current");
        foundActive = true;
        
        // Also mark parent dropdown if this is a child item
        const dropdownParent = parent.closest("li.dropdown");
        if (dropdownParent) {
          dropdownParent.classList.add("current");
        }
      }
    });

    // If no active link found and we're on home, mark home as active
    if (!foundActive && currentPath === "/") {
      const homeLink = document.querySelector(".main-menu__list > li:first-child");
      if (homeLink) {
        homeLink.classList.add("current");
      }
    }
  }, [pathname, mounted]);

  return null;
}
