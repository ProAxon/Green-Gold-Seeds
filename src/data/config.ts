// Site configuration data
export const siteConfig = {
  name: "Farmology",
  logo: {
    light: "/assets/images/resources/logo-1.png",
    dark: "/assets/images/resources/logo-2.png",
  },
  contact: {
    email: "aurangabad@ajeetseed.co.in",
    phone: "+91-9922933999",
    address: "4124 Cimmaron Road, CA 92806",
  },
  socialLinks: [
    { name: "Twitter", icon: "fab fa-twitter", url: "/#" },
    { name: "Facebook", icon: "fab fa-facebook-f", url: "/#" },
    { name: "Pinterest", icon: "fab fa-pinterest-p", url: "/#" },
    { name: "Instagram", icon: "fab fa-instagram", url: "/#" },
  ],
  welcomeText: "Welcome to Farmology our Best Farming HTML5 Template",
  footer: {
    copyright: "Copyright@ 2025",
    links: [
      { text: "Terms of Service", url: "/about" },
      { text: "Privacy policy", url: "/about" },
      { text: "Support", url: "/about" },
    ],
  },
};

// Navigation menu items
export const navigationMenu = [
  {
    label: "Home",
    href: "/",
    hasDropdown: true,
    isMegaMenu: true,
    dropdownItems: [
      {
        title: "Home Page 01",
        image: "/assets/images/home-showcase/home-showcase-1-1.jpg",
        multiPageUrl: "/",
        onePageUrl: "/",
      },
      {
        title: "Home Page 02",
        image: "/assets/images/home-showcase/home-showcase-1-2.jpg",
        multiPageUrl: "/",
        onePageUrl: "/",
      },
      {
        title: "Home Page 03",
        image: "/assets/images/home-showcase/home-showcase-1-3.jpg",
        multiPageUrl: "/",
        onePageUrl: "/",
      },
      {
        title: "Home Page 04",
        image: "/assets/images/home-showcase/home-showcase-1-4.jpg",
        multiPageUrl: "/",
        onePageUrl: "/",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [
      { label: "About", href: "/about" },
      { label: "History", href: "history.html" },
    ],
  },
  {
    label: "Pages",
    href: "/#",
    hasDropdown: true,
    dropdownItems: [
      { label: "Team", href: "team.html" },
      { label: "Team Details", href: "team-details.html" },
      { label: "Projects", href: "projects.html" },
      { label: "Project Details", href: "project-details.html" },
      { label: "Testimonials", href: "testimonials.html" },
      { label: "Pricing", href: "pricing.html" },
      { label: "FAQs", href: "/faq" },
      { label: "404 Error", href: "404.html" },
    ],
  },
  {
    label: "services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { label: "Services", href: "/services" },
      { label: "Fresh Produce", href: "fresh-produce.html" },
      { label: "Dairy Products", href: "dairy-products.html" },
      { label: "Livestock", href: "livestock.html" },
      { label: "Poultry & Eggs", href: "poultry-eggs.html" },
      { label: "Grains & Cereals", href: "grains-cereals.html" },
      { label: "Herbs & Spices", href: "herbs-spices.html" },
    ],
  },
  {
    label: "Shop",
    href: "/products",
    hasDropdown: true,
    dropdownItems: [
      { label: "Products", href: "/products" },
      { label: "Product Details", href: "product-details.html" },
      { label: "Cart", href: "cart.html" },
      { label: "Checkout", href: "checkout.html" },
      { label: "Wishlist", href: "wishlist.html" },
      { label: "Sign Up", href: "sign-up.html" },
      { label: "Login", href: "login.html" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    hasDropdown: true,
    dropdownItems: [
      { label: "Blog", href: "/blog" },
      { label: "Blog Standard", href: "blog-standard.html" },
      { label: "Blog Left Sidebar", href: "blog-left-sidebar.html" },
      { label: "Blog Right Sidebar", href: "blog-right-sidebar.html" },
      { label: "Blog Details", href: "/blog" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

// Footer data
export const footerData = {
  about: {
    text: "Believe that great food starts with great farming. For 40 years, our farm has been committed to sustainable, eco-friendly and full of goodness.",
    paymentCards: [
      { image: "/assets/images/resources/footer-widget-payment-card-1.jpg", href: "checkout.html" },
      { image: "/assets/images/resources/footer-widget-payment-card-2.jpg", href: "checkout.html" },
      { image: "/assets/images/resources/footer-widget-payment-card-3.jpg", href: "checkout.html" },
      { image: "/assets/images/resources/footer-widget-payment-card-4.jpg", href: "checkout.html" },
    ],
  },
  quickLinks: [
    { label: "About Us", href: "/about", icon: "fas fa-wheat" },
    { label: "Meet Our Team", href: "team.html", icon: "fas fa-wheat" },
    { label: "Our Projects", href: "projects.html", icon: "fas fa-wheat" },
    { label: "Help & FAQs", href: "/faq", icon: "fas fa-wheat" },
    { label: "Contact Us", href: "/contact", icon: "fas fa-wheat" },
  ],
  pmGroup: [
    { label: "Gangamai Industries & Construction Ltd.", href: "/#" },
    { label: "Arya Hybrid Seeds Ltd.", href: "/#" },
    { label: "ASPL Nature Pure Pvt. Ltd.", href: "/#" },
    { label: "Omkara Techno Infra Pvt. Ltd.", href: "/#" },
    { label: "C.S.M.S.S", href: "/#" },
  ],
  contact: {
    address: "Gut No. 233, Chitegaon, Tq. Paithan, Dist. Chhatrapati Sambhaji Nagar (Aurangabad) - 431105 (Maharashtra)",
    phone: "+91-9922933999",
    email: "aurangabad@ajeetseed.co.in",
  },
};

// Sidebar content
export const sidebarContent = {
  about: {
    title: "About Us",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  formTitle: "Get a free quote",
  formAction: "https://dreamlayout.mnsithub.com/html/farmology/main-html/assets/inc/sendemail.php",
};

