import type { Loc } from "../i18n/ui";

// ── Localized content model ──────────────────────────────────────────────
// Text fields are either a plain string (identical in every locale, e.g. brand
// names, proper nouns, verbatim customer quotes) or a `Loc` = { en, nl, de? }.
// Resolve with `t(field, lang)` from "../i18n/ui". Locales: en (default), nl, de.

export const site = {
  name: "Holoconnects",
  tagline: {
    en: "Europe's leading hologram company for interactive, life-size displays.",
    nl: "Hét hologrambedrijf van Europa voor interactieve, levensgrote holografische displays.",
    de: "Europas führendes Hologramm-Unternehmen für interaktive, lebensgroße holografische Displays.",
  } satisfies Loc,
  phone: "+31 (0)85 303 10 01",
  phoneHref: "+31853031001",
  email: "info@holoconnects.com",
  supportPhone: "+31 85 019 6486",
  supportEmail: "support@holoconnects.com",
  whatsapp: "+31 6 33036221",
  rating: {
    en: "346 customers rate us with a 9.5/10",
    nl: "346 klanten beoordelen ons met een 9,5/10",
    de: "346 Kunden bewerten uns mit 9,5/10",
  } satisfies Loc,
};

export type Stat = { value: string; label: Loc };
export const stats: Stat[] = [
  { value: "470+", label: { en: "Projects completed", nl: "Projecten voltooid", de: "Abgeschlossene Projekte" } },
  { value: "30+", label: { en: "Active countries", nl: "Actieve landen", de: "Aktive Länder" } },
  { value: "9.5/10", label: { en: "Customer rating", nl: "Klantbeoordeling", de: "Kundenbewertung" } },
  { value: "95%", label: { en: "Satisfied customers", nl: "Tevreden klanten", de: "Zufriedene Kunden" } },
];

export type Office = {
  region: Loc;
  address: string;
  phone: string;
  email: string;
  meta: string;
};
export const offices: Office[] = [
  {
    region: { en: "Europe Head Office", nl: "Europees hoofdkantoor", de: "Europazentrale" },
    address: "Randweg 1, Culemborg, Netherlands",
    phone: "+31 (0)85 303 10 01",
    email: "info@holoconnects.com",
    meta: "KvK 93449755 · BTW NL866405616B01",
  },
  {
    region: { en: "North America", nl: "Noord-Amerika", de: "Nordamerika" },
    address: "801 Travis Street, Suite 1818, Houston, TX 77002",
    phone: "+1 832 301 0701",
    email: "us@holoconnects.com",
    meta: "",
  },
];

export type Testimonial = {
  quote: string; // verbatim customer quote — kept in original language
  name: string;
  role: Loc;
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The BMW i5 embodies our commitment to innovation. The Holographic Wall provides an immersive experience and revolutionizes how we present our cars.",
    name: "Georges Pagalis",
    role: {
      en: "Media & Digital Performance Manager, BMW Belux",
      nl: "Media & Digital Performance Manager, BMW Belux",
      de: "Media & Digital Performance Manager, BMW Belux",
    },
    image: "/images/case-bmw.jpg",
  },
  {
    quote:
      "Having a hologram at the front could be passed off as a gimmick at first, but it plays into the operator's long-term strategy of increasing efficiency while maintaining a personal touch.",
    name: "Thomas Furulund",
    role: {
      en: "Operations Manager, Aiden",
      nl: "Operations Manager, Aiden",
      de: "Operations Manager, Aiden",
    },
    image: "/images/case-hospitality.jpg",
  },
  {
    quote:
      "It's exciting to see the initial reactions of guests. People are often surprised when they realize they're not dealing with AI or a recorded video.",
    name: "Melissa Kooke",
    role: {
      en: "Manager Concept Development, D&B The Facility Group",
      nl: "Manager Conceptontwikkeling, D&B The Facility Group",
      de: "Manager Konzeptentwicklung, D&B The Facility Group",
    },
    image: "/images/case-host.jpg",
  },
];

// ── Navigation ───────────────────────────────────────────────────────────
// `href` values are logical (language-neutral) paths. Components localize them
// with `localizePath(href, lang)`. Labels are `Loc`.
export type NavItem = {
  label: Loc;
  href: string;
  children?: { label: string; href: string }[];
};
export const nav: NavItem[] = [
  {
    label: { en: "Products", nl: "Producten", de: "Produkte" },
    href: "/products",
    children: [
      { label: "Holobox", href: "/products/holobox" },
      { label: "Holobox Mini", href: "/products/holobox-mini" },
      { label: "The 43", href: "/products/the-43" },
      { label: "Hologrid", href: "/products/hologrid" },
    ],
  },
  { label: { en: "Sectors", nl: "Sectoren", de: "Branchen" }, href: "/sectors" },
  { label: { en: "Cases", nl: "Cases", de: "Referenzen" }, href: "/cases" },
  { label: { en: "About", nl: "Over ons", de: "Über uns" }, href: "/about" },
  { label: { en: "Contact", nl: "Contact", de: "Kontakt" }, href: "/contact" },
];

export type Product = {
  slug: string;
  name: string; // brand name — identical in both languages
  tagline: Loc;
  summary: Loc;
  image: string;
  specs?: { label: Loc; value: Loc }[];
  features?: { title: Loc; body: Loc }[];
};

export const products: Product[] = [
  {
    slug: "holobox",
    name: "Holobox",
    tagline: {
      en: "Life-size 3D holograms that feel real.",
      nl: "Levensgrote 3D-hologrammen die echt aanvoelen.",
      de: "Lebensgroße 3D Hologramme, die echt wirken.",
    },
    summary: {
      en: 'An 86" transparent LCD screen brings people, products and presenters to life at human scale. Interactive, vivid and unforgettable.',
      nl: 'Een 86"-transparant LCD-scherm brengt mensen, producten en presentatoren tot leven op ware grootte. Interactief, levendig en onvergetelijk.',
      de: 'Ein 86" transparentes LCD erweckt Menschen, Produkte und Moderatoren in Lebensgröße zum Leben. Interaktiv, brillant und unvergesslich.',
    },
    image: "/images/holobox-black.png",
    specs: [
      { label: { en: "Display", nl: "Scherm", de: "Display" }, value: { en: '86" transparent LCD', nl: '86" transparant LCD', de: '86" transparentes LCD' } },
      { label: { en: "Touch", nl: "Touch", de: "Touch" }, value: { en: "20-point IR touch", nl: "20-punts IR-touch", de: "20-Punkt-IR-Touch" } },
      { label: { en: "Glass", nl: "Glas", de: "Glas" }, value: { en: "Anti-glare safety glass", nl: "Antireflecterend veiligheidsglas", de: "Entspiegeltes Sicherheitsglas" } },
      { label: { en: "Scale", nl: "Schaal", de: "Maßstab" }, value: { en: "Life-size & 3D", nl: "Levensgroot & 3D", de: "Lebensgroß & 3D" } },
    ],
    features: [
      { title: { en: "Life-size presence", nl: "Levensgrote aanwezigheid", de: "Lebensgroße Präsenz" }, body: { en: "Project people and products at true human scale for a face-to-face experience without the travel.", nl: "Projecteer mensen en producten op ware menselijke schaal voor een persoonlijke ervaring zonder te reizen.", de: "Projizieren Sie Menschen und Produkte in echter Lebensgröße für ein persönliches Erlebnis ohne Anreise." } },
      { title: { en: "Interactive touch", nl: "Interactieve touch", de: "Interaktiver Touch" }, body: { en: "20-point infrared touch turns the hologram into a hands-on, engaging interface.", nl: "20-punts infraroodtouch maakt van het hologram een interactieve, meeslepende interface.", de: "20-Punkt-IR-Touch macht das Hologramm zu einer interaktiven, fesselnden Oberfläche." } },
      { title: { en: "Crystal-clear image", nl: "Kristalhelder beeld", de: "Gestochen scharfes Bild" }, body: { en: "A transparent LCD with anti-glare glass delivers sharp, vivid holographic imagery in any light.", nl: "Een transparant LCD met antireflecterend glas levert scherpe, levendige holografische beelden bij elk licht.", de: "Ein transparentes LCD mit entspiegeltem Glas liefert scharfe, brillante holografische Bilder bei jedem Licht." } },
      { title: { en: "Remote & live", nl: "Op afstand & live", de: "Remote & live" }, body: { en: "Stream live presenters or run pre-recorded content from anywhere through Holocontrol.", nl: "Stream live presentatoren of speel vooraf opgenomen content af, overal vandaan, via Holocontrol.", de: "Streamen Sie Live-Moderatoren oder spielen Sie vorproduzierte Inhalte ab, von überall über Holocontrol." } },
    ],
  },
  {
    slug: "holobox-mini",
    name: "Holobox Mini",
    tagline: {
      en: "The desktop hologram for products in the spotlight.",
      nl: "Het desktophologram voor producten in de spotlight.",
      de: "Das Desktop-Hologramm für Produkte im Rampenlicht.",
    },
    summary: {
      en: "A compact table model designed for product placement and showcasing smaller features with the same striking holographic depth.",
      nl: "Een compact tafelmodel ontworpen voor productplaatsing en het tonen van kleinere details met dezelfde opvallende holografische diepte.",
      de: "Ein kompaktes Tischmodell für die Produktpräsentation und das Inszenieren kleinerer Details, mit derselben beeindruckenden holografischen Tiefe.",
    },
    image: "/images/holobox-mini-black.png",
    specs: [
      { label: { en: "Format", nl: "Formaat", de: "Format" }, value: { en: "Table model", nl: "Tafelmodel", de: "Tischmodell" } },
      { label: { en: "Use", nl: "Gebruik", de: "Einsatz" }, value: { en: "Product placement", nl: "Productplaatsing", de: "Produktpräsentation" } },
      { label: { en: "Image", nl: "Beeld", de: "Bild" }, value: { en: "3D holographic", nl: "3D-holografisch", de: "3D holografisch" } },
      { label: { en: "Footprint", nl: "Voetafdruk", de: "Stellfläche" }, value: { en: "Compact", nl: "Compact", de: "Kompakt" } },
    ],
    features: [
      { title: { en: "Countertop scale", nl: "Toonbankformaat", de: "Tischformat" }, body: { en: "Bring products to life on a desk, counter or showroom table where space is limited.", nl: "Breng producten tot leven op een bureau, toonbank of showroomtafel waar de ruimte beperkt is.", de: "Erwecken Sie Produkte auf dem Schreibtisch, der Theke oder dem Showroom-Tisch zum Leben, auch bei wenig Platz." } },
      { title: { en: "Eye-catching depth", nl: "Opvallende diepte", de: "Auffällige Tiefe" }, body: { en: "The same floating, three-dimensional holographic effect that stops people in their tracks.", nl: "Hetzelfde zwevende, driedimensionale holografische effect dat mensen doet stilstaan.", de: "Derselbe schwebende, dreidimensionale Hologramm-Effekt, der die Menschen innehalten lässt." } },
      { title: { en: "Plug & present", nl: "Plug & present", de: "Plug & present" }, body: { en: "Easy to place and manage, ideal for retail displays, expos and demos.", nl: "Eenvoudig te plaatsen en te beheren, ideaal voor retaildisplays, beurzen en demo's.", de: "Einfach aufzustellen und zu verwalten, ideal für Retail-Displays, Messen und Demos." } },
    ],
  },
  {
    slug: "the-43",
    name: "The 43",
    tagline: {
      en: "Compact holographic impact for any space.",
      nl: "Compacte holografische impact voor elke ruimte.",
      de: "Kompakte holografische Wirkung für jeden Raum.",
    },
    summary: {
      en: 'A 43" holographic display that delivers Holobox-quality presence in a smaller, more flexible footprint.',
      nl: 'Een 43"-holografisch display dat Holobox-kwaliteit levert in een kleinere, flexibelere voetafdruk.',
      de: 'Ein 43" holografisches Display, das Holobox-Qualität in einer kleineren, flexibleren Stellfläche bietet.',
    },
    image: "/images/holobox-43.png",
    features: [
      { title: { en: "Flexible footprint", nl: "Flexibele voetafdruk", de: "Flexible Stellfläche" }, body: { en: "A smaller display that fits lobbies, booths and tighter retail environments.", nl: "Een kleiner display dat past in lobby's, stands en krappere retailomgevingen.", de: "Ein kleineres Display, das in Lobbys, Messestände und engere Retail-Umgebungen passt." } },
      { title: { en: "Holographic clarity", nl: "Holografische helderheid", de: "Holografische Klarheit" }, body: { en: "Sharp, lifelike holographic imagery in a more accessible size.", nl: "Scherpe, levensechte holografische beelden in een toegankelijker formaat.", de: "Scharfe, lebensechte holografische Bilder in einem zugänglicheren Format." } },
      { title: { en: "Easy to deploy", nl: "Eenvoudig uit te rollen", de: "Einfach ausrollbar" }, body: { en: "Quick to install and manage as part of your Holoconnects fleet.", nl: "Snel te installeren en te beheren als onderdeel van uw Holoconnects-vloot.", de: "Schnell zu installieren und zu verwalten als Teil Ihrer Holoconnects-Flotte." } },
    ],
  },
  {
    slug: "hologrid",
    name: "Hologrid",
    tagline: {
      en: "Five Holobox units. One modular wall.",
      nl: "Vijf Holobox-units. Eén modulaire wand.",
      de: "Fünf Holobox-Einheiten. Eine modulare Wand.",
    },
    summary: {
      en: "Place up to five Holobox units side by side to build a modular holographic wall for events, lobbies and flagship spaces.",
      nl: "Plaats tot vijf Holobox-units naast elkaar voor een modulaire holografische wand voor evenementen, lobby's en flagship-ruimtes.",
      de: "Stellen Sie bis zu fünf Holobox-Einheiten nebeneinander und bauen Sie eine modulare holografische Wand für Events, Lobbys und Flagship-Räume.",
    },
    image: "/images/holobox-hologrid.png",
    features: [
      { title: { en: "Modular by design", nl: "Modulair van opzet", de: "Modular im Design" }, body: { en: "Line up multiple Holobox units to create a dramatic, large-format holographic wall.", nl: "Zet meerdere Holobox-units op een rij voor een indrukwekkende, grootformaat holografische wand.", de: "Reihen Sie mehrere Holobox-Einheiten aneinander für eine eindrucksvolle, großformatige holografische Wand." } },
      { title: { en: "Built for events", nl: "Gebouwd voor evenementen", de: "Gemacht für Events" }, body: { en: "Command attention at expos, launches and live experiences.", nl: "Trek alle aandacht op beurzen, lanceringen en live-ervaringen.", de: "Ziehen Sie alle Blicke auf sich, bei Messen, Launches und Live-Erlebnissen." } },
      { title: { en: "Centrally managed", nl: "Centraal beheerd", de: "Zentral verwaltet" }, body: { en: "Drive every unit together through one Holocontrol dashboard.", nl: "Bestuur elke unit samen via één Holocontrol-dashboard.", de: "Steuern Sie alle Einheiten gemeinsam über ein Holocontrol-Dashboard." } },
    ],
  },
];

export type Sector = {
  slug: string;
  name: Loc;
  blurb: Loc;
  image: string;
};

export const sectors: Sector[] = [
  { slug: "hospitality", name: { en: "Hospitality & Travel", nl: "Hospitality & Reizen", de: "Hospitality & Reise" }, blurb: { en: "A 24/7 virtual concierge and reception that welcomes every guest with a human touch.", nl: "Een 24/7 virtuele concierge en receptie die elke gast verwelkomt met een menselijke touch.", de: "Ein virtueller Concierge und Empfang rund um die Uhr, der jeden Gast persönlich willkommen heißt." }, image: "/images/sector-hospitality.jpg" },
  { slug: "telehealth", name: { en: "Telehealth", nl: "Telehealth", de: "Telehealth" }, blurb: { en: "Life-size, lifelike consultations that bring care closer, wherever the specialist is.", nl: "Levensgrote, levensechte consulten die zorg dichterbij brengen, waar de specialist ook is.", de: "Lebensgroße, lebensechte Sprechstunden, die Versorgung näher bringen, wo immer der Spezialist ist." }, image: "/images/sector-telehealth.jpg" },
  { slug: "retail", name: { en: "Retail Displays", nl: "Retaildisplays", de: "Retail-Displays" }, blurb: { en: "Turn windows and showrooms into holographic stages that stop people in their tracks.", nl: "Verander etalages en showrooms in holografische podia die mensen doen stilstaan.", de: "Verwandeln Sie Schaufenster und Showrooms in holografische Bühnen, die Menschen innehalten lassen." }, image: "/images/sector-retail.jpg" },
  { slug: "events", name: { en: "Events", nl: "Evenementen", de: "Events" }, blurb: { en: "Beam speakers and brands onto any stage in striking, large-format 3D.", nl: "Beam sprekers en merken naar elk podium in opvallend, grootformaat 3D.", de: "Beamen Sie Redner und Marken auf jede Bühne, in eindrucksvollem, großformatigem 3D." }, image: "/images/sector-events.jpg" },
  { slug: "education", name: { en: "Education", nl: "Onderwijs", de: "Bildung" }, blurb: { en: "Bring lessons, guest lecturers and complex ideas to life in three dimensions.", nl: "Breng lessen, gastdocenten en complexe ideeën tot leven in drie dimensies.", de: "Erwecken Sie Unterricht, Gastdozenten und komplexe Inhalte dreidimensional zum Leben." }, image: "/images/sector-education.jpg" },
  { slug: "advertising", name: { en: "Advertising", nl: "Adverteren", de: "Werbung" }, blurb: { en: "Premium holographic out-of-home that commands attention in 4K 3D.", nl: "Premium holografische out-of-home die de aandacht trekt in 4K 3D.", de: "Premium holografische out-of-home Werbung, die in 4K 3D alle Blicke auf sich zieht." }, image: "/images/case-liege.jpg" },
];

export type Case = {
  title: string; // event/proper-noun titles — kept as-is
  sector: Loc;
  image: string;
};

export const cases: Case[] = [
  { title: "ING official opening", sector: { en: "Corporate", nl: "Zakelijk", de: "Corporate" }, image: "/images/case-ing.jpg" },
  { title: "Sheikh Abdullah bin Zayed", sector: { en: "Government", nl: "Overheid", de: "Behörden" }, image: "/images/case-sheikh.jpg" },
  { title: "BMW urban media", sector: { en: "Automotive", nl: "Automotive", de: "Automotive" }, image: "/images/case-bmw.jpg" },
  { title: "Hospitality reception", sector: { en: "Hospitality", nl: "Hospitality", de: "Hospitality" }, image: "/images/case-hospitality.jpg" },
  { title: "Live-stream hologram host", sector: { en: "Events", nl: "Evenementen", de: "Events" }, image: "/images/case-host.jpg" },
  { title: "Cristal urban media, Liège", sector: { en: "Advertising", nl: "Adverteren", de: "Werbung" }, image: "/images/case-liege.jpg" },
];
