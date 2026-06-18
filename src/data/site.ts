export const site = {
  name: "Holoconnects",
  tagline: "Europe's leading hologram company for interactive, life-size displays.",
  phone: "+31 (0)85 303 10 01",
  phoneHref: "+31853031001",
  email: "info@holoconnects.com",
  supportPhone: "+31 85 019 6486",
  supportEmail: "support@holoconnects.com",
  whatsapp: "+31 6 33036221",
  rating: "346 customers rate us with a 9.5/10",
};

export const stats = [
  { value: "470+", label: "Projects completed" },
  { value: "30+", label: "Active countries" },
  { value: "9.5/10", label: "Customer rating" },
  { value: "95%", label: "Satisfied customers" },
];

export const offices = [
  {
    region: "Europe Head Office",
    address: "Randweg 1, Culemborg, Netherlands",
    phone: "+31 (0)85 303 10 01",
    email: "info@holoconnects.com",
    meta: "KvK 93449755 · BTW NL866405616B01",
  },
  {
    region: "North America",
    address: "801 Travis Street, Suite 1818, Houston, TX 77002",
    phone: "+1 832 301 0701",
    email: "us@holoconnects.com",
    meta: "",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The BMW i5 embodies our commitment to innovation. The Holographic Wall provides an immersive experience and revolutionizes how we present our cars.",
    name: "Georges Pagalis",
    role: "Media & Digital Performance Manager, BMW Belux",
    image: "/images/case-bmw.jpg",
  },
  {
    quote:
      "Having a hologram at the front could be passed off as a gimmick at first, but it plays into the operator's long-term strategy of increasing efficiency while maintaining a personal touch.",
    name: "Thomas Furulund",
    role: "Operations Manager, Aiden",
    image: "/images/case-hospitality.jpg",
  },
  {
    quote:
      "It's exciting to see the initial reactions of guests. People are often surprised when they realize they're not dealing with AI or a recorded video.",
    name: "Melissa Kooke",
    role: "Manager Concept Development, D&B The Facility Group",
    image: "/images/case-host.jpg",
  },
];

export const nav = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Holobox", href: "/products/holobox" },
      { label: "Holobox Mini", href: "/products/holobox-mini" },
      { label: "The 43", href: "/products/the-43" },
      { label: "Hologrid", href: "/products/hologrid" },
    ],
  },
  { label: "Sectors", href: "/sectors" },
  { label: "Cases", href: "/cases" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  image: string;
  specs?: { label: string; value: string }[];
  features?: { title: string; body: string }[];
};

export const products: Product[] = [
  {
    slug: "holobox",
    name: "Holobox",
    tagline: "Life-size 3D holograms that feel real.",
    summary:
      "An 86\" transparent LCD screen brings people, products and presenters to life at human scale. Interactive, vivid and unforgettable.",
    image: "/images/holobox-black.jpg",
    specs: [
      { label: "Display", value: "86\" transparent LCD" },
      { label: "Touch", value: "20-point IR touch" },
      { label: "Glass", value: "Anti-glare safety glass" },
      { label: "Scale", value: "Life-size & 3D" },
    ],
    features: [
      { title: "Life-size presence", body: "Project people and products at true human scale for a face-to-face experience without the travel." },
      { title: "Interactive touch", body: "20-point infrared touch turns the hologram into a hands-on, engaging interface." },
      { title: "Crystal-clear image", body: "A transparent LCD with anti-glare glass delivers sharp, vivid holographic imagery in any light." },
      { title: "Remote & live", body: "Stream live presenters or run pre-recorded content from anywhere through Holocontrol." },
    ],
  },
  {
    slug: "holobox-mini",
    name: "Holobox Mini",
    tagline: "The desktop hologram for products in the spotlight.",
    summary:
      "A compact table model designed for product placement and showcasing smaller features with the same striking holographic depth.",
    image: "/images/holobox-mini.jpg",
    specs: [
      { label: "Format", value: "Table model" },
      { label: "Use", value: "Product placement" },
      { label: "Image", value: "3D holographic" },
      { label: "Footprint", value: "Compact" },
    ],
    features: [
      { title: "Countertop scale", body: "Bring products to life on a desk, counter or showroom table where space is limited." },
      { title: "Eye-catching depth", body: "The same floating, three-dimensional holographic effect that stops people in their tracks." },
      { title: "Plug & present", body: "Easy to place and manage, ideal for retail displays, expos and demos." },
    ],
  },
  {
    slug: "the-43",
    name: "The 43",
    tagline: "Compact holographic impact for any space.",
    summary:
      "A 43\" holographic display that delivers Holobox-quality presence in a smaller, more flexible footprint.",
    image: "/images/holobox-white.jpg",
    features: [
      { title: "Flexible footprint", body: "A smaller display that fits lobbies, booths and tighter retail environments." },
      { title: "Holographic clarity", body: "Sharp, lifelike holographic imagery in a more accessible size." },
      { title: "Easy to deploy", body: "Quick to install and manage as part of your Holoconnects fleet." },
    ],
  },
  {
    slug: "hologrid",
    name: "Hologrid",
    tagline: "Five Holobox units. One modular wall.",
    summary:
      "Place up to five Holobox units side by side to build a modular holographic wall for events, lobbies and flagship spaces.",
    image: "/images/holobox-black.png",
    features: [
      { title: "Modular by design", body: "Line up multiple Holobox units to create a dramatic, large-format holographic wall." },
      { title: "Built for events", body: "Command attention at expos, launches and live experiences." },
      { title: "Centrally managed", body: "Drive every unit together through one Holocontrol dashboard." },
    ],
  },
];

export type Sector = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
};

export const sectors: Sector[] = [
  { slug: "hospitality", name: "Hospitality & Travel", blurb: "A 24/7 virtual concierge and reception that welcomes every guest with a human touch.", image: "/images/sector-hospitality.jpg" },
  { slug: "telehealth", name: "Telehealth", blurb: "Life-size, lifelike consultations that bring care closer, wherever the specialist is.", image: "/images/sector-telehealth.jpg" },
  { slug: "retail", name: "Retail Displays", blurb: "Turn windows and showrooms into holographic stages that stop people in their tracks.", image: "/images/sector-retail.jpg" },
  { slug: "events", name: "Events", blurb: "Beam speakers and brands onto any stage in striking, large-format 3D.", image: "/images/sector-events.jpg" },
  { slug: "education", name: "Education", blurb: "Bring lessons, guest lecturers and complex ideas to life in three dimensions.", image: "/images/sector-education.jpg" },
  { slug: "advertising", name: "Advertising", blurb: "Premium holographic out-of-home that commands attention in 4K 3D.", image: "/images/case-liege.jpg" },
];

export type Case = {
  title: string;
  sector: string;
  image: string;
};

export const cases: Case[] = [
  { title: "ING official opening", sector: "Corporate", image: "/images/case-ing.jpg" },
  { title: "Sheikh Abdullah bin Zayed", sector: "Government", image: "/images/case-sheikh.jpg" },
  { title: "BMW urban media", sector: "Automotive", image: "/images/case-bmw.jpg" },
  { title: "Hospitality reception", sector: "Hospitality", image: "/images/case-hospitality.jpg" },
  { title: "Live-stream hologram host", sector: "Events", image: "/images/case-host.jpg" },
  { title: "Cristal urban media, Liège", sector: "Advertising", image: "/images/case-liege.jpg" },
];
