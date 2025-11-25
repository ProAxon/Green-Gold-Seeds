/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { NavHighlighter } from "@/components/NavHighlighter";

const cssAssets = [
  "/assets/css/bootstrap.min.css",
  "/assets/css/animate.min.css",
  "/assets/css/custom-animate.css",
  "/assets/css/swiper.min.css",
  "/assets/css/font-awesome-all.css",
  "/assets/css/jarallax.css",
  "/assets/css/jquery.magnific-popup.css",
  "/assets/css/odometer.min.css",
  "/assets/css/flaticon.css",
  "/assets/css/owl.carousel.min.css",
  "/assets/css/owl.theme.default.min.css",
  "/assets/css/nice-select.css",
  "/assets/css/jquery-ui.css",
  "/assets/css/aos.css",
  "/assets/css/style.css",
  "/assets/css/responsive.css",
];

const scriptAssets = [
  "/assets/js/jquery-latest.js",
  "/assets/js/bootstrap.bundle.min.js",
  "/assets/js/jarallax.min.js",
  "/assets/js/jquery.ajaxchimp.min.js",
  "/assets/js/jquery.appear.min.js",
  "/assets/js/swiper.min.js",
  "/assets/js/jquery.magnific-popup.min.js",
  "/assets/js/jquery.validate.min.js",
  "/assets/js/odometer.min.js",
  "/assets/js/wNumb.min.js",
  "/assets/js/wow.js",
  "/assets/js/isotope.js",
  "/assets/js/owl.carousel.min.js",
  "/assets/js/jquery-ui.js",
  "/assets/js/jquery.circleType.js",
  "/assets/js/jquery.lettering.min.js",
  "/assets/js/jquery.fittext.js",
  "/assets/js/jquery.nice-select.min.js",
  "/assets/js/marquee.min.js",
  "/assets/js/jquery-sidebar-content.js",
  "/assets/js/jquery.event.move.js",
  "/assets/js/aos.js",
  "/assets/js/gsap/gsap.js",
  "/assets/js/gsap/ScrollTrigger.js",
  "/assets/js/gsap/SplitText.js",
  "/assets/js/script.js",
];

export const metadata: Metadata = {
  title: {
    default: "Farmology | Organic & Sustainable Farming",
    template: "%s | Farmology",
  },
  description:
    "Farmology is a modern organic farm template rebuilt on Next.js for easy routing and deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/images/favicons/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {cssAssets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body className="custom-cursor" suppressHydrationWarning>
        <NavHighlighter />
        {children}
        {scriptAssets.map((src) => (
          <Script key={src} src={src} strategy="afterInteractive" />
        ))}
      </body>
    </html>
  );
}
