import fs from "fs";
import path from "path";
import { cache } from "react";
import { load } from "cheerio";

const TEMPLATE_DIR = path.join(process.cwd(), "src/content");

const TEMPLATE_FILES = {
  home: "home.html",
  about: "about.html",
  services: "services.html",
  products: "products.html",
  blog: "blog.html",
  faq: "faq.html",
  contact: "contact.html",
} as const;

const routeMap: Record<string, string> = {
  "index.html": "/",
  "index-one-page.html": "/",
  "index2.html": "/",
  "index2-one-page.html": "/",
  "index3.html": "/",
  "index3-one-page.html": "/",
  "index4.html": "/",
  "index4-one-page.html": "/",
  "about.html": "/about",
  "services.html": "/services",
  "faq.html": "/faq",
  "contact.html": "/contact",
  "blog.html": "/blog",
  "products.html": "/products",
  "blog-details.html": "/blog",
  "shop.html": "/products",
};

const assetScriptPattern =
  /<script\b[^>]*src=["'](?:\.\/)?assets\/js\/[\s\S]*?<\/script>/gi;

export type TemplateName = keyof typeof TEMPLATE_FILES;

export const loadTemplate = cache((template: TemplateName) => {
  const fileName = TEMPLATE_FILES[template];
  const filePath = path.join(TEMPLATE_DIR, fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");

  let markup = extractBody(fileContents);
  markup = normalizeAssetPaths(markup);
  markup = normalizeInternalRoutes(markup);
  markup = stripInlineScripts(markup);

  return markup.trim();
});

function extractBody(html: string) {
  const $ = load(html);
  const bodyHtml = $("body").html();
  return bodyHtml ?? html;
}

function normalizeAssetPaths(html: string) {
  let updated = html.replace(
    /(["'(])(?:\.\/)?assets\//gi,
    (_match, prefix: string) => `${prefix}/assets/`
  );

  updated = updated.replace(
    /url\((\s*['"]?)(?:\.\/)?assets\//gi,
    (_match, prefix: string) => `url(${prefix}/assets/`
  );

  return updated;
}

function normalizeInternalRoutes(html: string) {
  let updated = html;
  Object.entries(routeMap).forEach(([legacy, nextRoute]) => {
    const escaped = legacy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(
      `href=(["'])${escaped}(#[^"']*)?\\1`,
      "gi"
    );
    updated = updated.replace(pattern, (_match, quote, hash = "") => {
      return `href=${quote}${nextRoute}${hash}${quote}`;
    });
  });

  return updated;
}

function stripInlineScripts(html: string) {
  return html.replace(assetScriptPattern, "");
}
