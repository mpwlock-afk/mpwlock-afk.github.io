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
  image: string; // transparent cut-out used in the hero/lineup/carousel
  // Optional studio photography (solid-background JPGs with webp/avif variants).
  // `heroImage` overrides the hero visual; `gallery` adds a framed photo strip;
  // `ogImage` is the social-card image. Localized alt text per gallery entry.
  heroImage?: string;
  ogImage?: string;
  gallery?: { src: string; alt: Loc }[];
  specs?: { label: Loc; value: Loc }[];
  features?: { title: Loc; body: Loc }[];
  faqs?: { q: Loc; a: Loc }[];
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
    faqs: [
      {
        q: { en: "What is a Holobox?", nl: "Wat is een Holobox?", de: "Was ist eine Holobox?" },
        a: {
          en: 'The Holobox is a life-size holographic display built around an 86" transparent LCD. It shows people, products and presenters as vivid 3D holograms at human scale, so they appear to stand right in front of the viewer.',
          nl: 'De Holobox is een levensgroot holografisch display met een 86"-transparant LCD-scherm. Het toont mensen, producten en presentatoren als levendige 3D-hologrammen op ware grootte, zodat ze recht voor de kijker lijken te staan.',
          de: 'Die Holobox ist ein lebensgroßes holografisches Display mit einem 86" transparenten LCD. Sie zeigt Menschen, Produkte und Moderatoren als brillante 3D Hologramme in Lebensgröße, sodass sie direkt vor dem Betrachter zu stehen scheinen.',
        },
      },
      {
        q: { en: "How does a hologram display like the Holobox work?", nl: "Hoe werkt een holografisch display zoals de Holobox?", de: "Wie funktioniert ein holografisches Display wie die Holobox?" },
        a: {
          en: "A transparent LCD panel with a dark background creates the illusion that the subject is floating in real space. Combined with depth-rich content and anti-glare safety glass, the Holobox delivers a sharp, lifelike 3D effect without any glasses or headset.",
          nl: "Een transparant LCD-paneel met een donkere achtergrond wekt de illusie dat het onderwerp in de echte ruimte zweeft. Samen met content met veel diepte en antireflecterend veiligheidsglas levert de Holobox een scherp, levensecht 3D-effect, zonder bril of headset.",
          de: "Ein transparentes LCD-Panel mit dunklem Hintergrund erzeugt die Illusion, dass das Motiv im realen Raum schwebt. Zusammen mit tiefenreichen Inhalten und entspiegeltem Sicherheitsglas liefert die Holobox einen scharfen, lebensechten 3D-Effekt, ganz ohne Brille oder Headset.",
        },
      },
      {
        q: { en: "How much does a Holobox cost?", nl: "Wat kost een Holobox?", de: "Was kostet eine Holobox?" },
        a: {
          en: "Pricing depends on configuration, content and whether you buy or rent. Request a quote and our team will put together a proposal tailored to your project.",
          nl: "De prijs hangt af van de configuratie, de content en of u koopt of huurt. Vraag een offerte aan en ons team stelt een voorstel op dat past bij uw project. Wilt u een hologram kopen, dan denken we graag mee.",
          de: "Der Preis hängt von Konfiguration, Inhalten und davon ab, ob Sie kaufen oder mieten. Fordern Sie ein Angebot an, und unser Team erstellt Ihnen einen passenden Vorschlag. Wenn Sie ein Hologramm kaufen möchten, beraten wir Sie gern.",
        },
      },
      {
        q: { en: "Can I rent a Holobox or buy it outright?", nl: "Kan ik een Holobox huren of kopen?", de: "Kann ich eine Holobox mieten oder kaufen?" },
        a: {
          en: "Both are possible. You can buy a Holobox for permanent installations or rent one for an event, campaign or pilot. Contact us to discuss the option that fits your needs.",
          nl: "Beide kan. U kunt een Holobox kopen voor een vaste opstelling of een hologram huren voor een event, campagne of pilot. Neem contact op om de optie te bespreken die bij u past.",
          de: "Beides ist möglich. Sie können eine Holobox für eine feste Installation kaufen oder ein Hologramm mieten für Event, Kampagne oder Pilotprojekt. Kontaktieren Sie uns, um die passende Option zu besprechen.",
        },
      },
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
    faqs: [
      {
        q: { en: "What is the Holobox Mini?", nl: "Wat is de Holobox Mini?", de: "Was ist die Holobox Mini?" },
        a: {
          en: "The Holobox Mini is a compact, tabletop hologram display. It brings the same striking 3D holographic depth as the larger Holobox to a desk, counter or showroom table where space is limited.",
          nl: "De Holobox Mini is een compact holografisch display voor op tafel. Het brengt dezelfde opvallende 3D-holografische diepte als de grotere Holobox naar een bureau, toonbank of showroomtafel waar de ruimte beperkt is.",
          de: "Die Holobox Mini ist ein kompaktes holografisches Tisch-Display. Sie bringt dieselbe beeindruckende 3D-Tiefe wie die größere Holobox auf Schreibtisch, Theke oder Showroom-Tisch, auch bei wenig Platz.",
        },
      },
      {
        q: { en: "Is the Holobox Mini a real 3D hologram?", nl: "Is de Holobox Mini een echt 3D-hologram?", de: "Ist die Holobox Mini ein echtes 3D Hologramm?" },
        a: {
          en: "Yes. The Holobox Mini produces a genuine floating, three-dimensional holographic effect that viewers can see without glasses or a headset, ideal for making products stand out.",
          nl: "Ja. De Holobox Mini levert een echt zwevend, driedimensionaal holografisch effect dat kijkers zien zonder bril of headset, ideaal om producten te laten opvallen.",
          de: "Ja. Die Holobox Mini erzeugt einen echten schwebenden, dreidimensionalen Hologramm-Effekt, den Betrachter ohne Brille oder Headset sehen, ideal, um Produkte hervorzuheben.",
        },
      },
      {
        q: { en: "What can I show on a tabletop hologram?", nl: "Wat kan ik tonen op een tafelhologram?", de: "Was kann ich auf einem Tisch-Hologramm zeigen?" },
        a: {
          en: "The Holobox Mini is designed for product placement and showcasing smaller items or features. It is popular for retail displays, expos, demos and reception desks where you want to draw the eye to a single product.",
          nl: "De Holobox Mini is ontworpen voor productplaatsing en het tonen van kleinere items of details. Het is populair voor retaildisplays, beurzen, demo's en receptiebalies waar u de aandacht op één product wilt vestigen.",
          de: "Die Holobox Mini ist für die Produktpräsentation und das Inszenieren kleinerer Artikel oder Details gemacht. Sie ist beliebt für Retail-Displays, Messen, Demos und Empfangstresen, wo Sie den Blick auf ein einzelnes Produkt lenken möchten.",
        },
      },
      {
        q: { en: "Can I rent or buy a Holobox Mini?", nl: "Kan ik een Holobox Mini huren of kopen?", de: "Kann ich eine Holobox Mini mieten oder kaufen?" },
        a: {
          en: "Yes, you can buy a Holobox Mini or rent one for a campaign or event. Request a quote and we will recommend the right setup; there is no fixed list price as every project differs.",
          nl: "Ja, u kunt een Holobox Mini kopen of een hologram huren voor een campagne of event. Vraag een offerte aan en wij adviseren de juiste opstelling. Er is geen vaste prijs, want elk project verschilt.",
          de: "Ja, Sie können eine Holobox Mini kaufen oder ein Hologramm mieten für Kampagne oder Event. Fordern Sie ein Angebot an, und wir empfehlen Ihnen die passende Lösung. Einen festen Listenpreis gibt es nicht, da jedes Projekt anders ist.",
        },
      },
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
    heroImage: "/images/holobox-43-black-front.jpg",
    ogImage: "/images/holobox-43-black-front.jpg",
    gallery: [
      {
        src: "/images/holobox-43-black-front.jpg",
        alt: {
          en: 'The 43" Holobox holographic display in Midnight Black, front view with the screen lit',
          nl: 'Het 43" Holobox holografisch display in Midnight Black, vooraanzicht met verlicht scherm',
          de: 'Das 43" Holobox holografische Display in Midnight Black, Frontansicht mit beleuchtetem Bildschirm',
        },
      },
      {
        src: "/images/holobox-43-white-front.jpg",
        alt: {
          en: 'The 43" Holobox holographic display in Starlight White, front view',
          nl: 'Het 43" Holobox holografisch display in Starlight White, vooraanzicht',
          de: 'Das 43" Holobox holografische Display in Starlight White, Frontansicht',
        },
      },
      {
        src: "/images/holobox-43-white-angle.jpg",
        alt: {
          en: 'The 43" Holobox holographic display in Starlight White, three-quarter angle view',
          nl: 'Het 43" Holobox holografisch display in Starlight White, driekwart zijaanzicht',
          de: 'Das 43" Holobox holografische Display in Starlight White, Dreiviertel-Seitenansicht',
        },
      },
    ],
    features: [
      { title: { en: "Flexible footprint", nl: "Flexibele voetafdruk", de: "Flexible Stellfläche" }, body: { en: "A smaller display that fits lobbies, booths and tighter retail environments.", nl: "Een kleiner display dat past in lobby's, stands en krappere retailomgevingen.", de: "Ein kleineres Display, das in Lobbys, Messestände und engere Retail-Umgebungen passt." } },
      { title: { en: "Holographic clarity", nl: "Holografische helderheid", de: "Holografische Klarheit" }, body: { en: "Sharp, lifelike holographic imagery in a more accessible size.", nl: "Scherpe, levensechte holografische beelden in een toegankelijker formaat.", de: "Scharfe, lebensechte holografische Bilder in einem zugänglicheren Format." } },
      { title: { en: "Easy to deploy", nl: "Eenvoudig uit te rollen", de: "Einfach ausrollbar" }, body: { en: "Quick to install and manage as part of your Holoconnects fleet.", nl: "Snel te installeren en te beheren als onderdeel van uw Holoconnects-vloot.", de: "Schnell zu installieren und zu verwalten als Teil Ihrer Holoconnects-Flotte." } },
    ],
    faqs: [
      {
        q: { en: "What is The 43?", nl: "Wat is The 43?", de: "Was ist The 43?" },
        a: {
          en: 'The 43 is a 43" holographic display that delivers Holobox-quality holographic presence in a smaller, more flexible footprint. It suits lobbies, booths and tighter retail environments.',
          nl: 'The 43 is een 43"-holografisch display dat Holobox-kwaliteit biedt in een kleinere, flexibelere voetafdruk. Het is geschikt voor lobby\'s, stands en krappere retailomgevingen.',
          de: 'The 43 ist ein 43" holografisches Display, das Holobox-Qualität in einer kleineren, flexibleren Stellfläche bietet. Es eignet sich für Lobbys, Messestände und engere Retail-Umgebungen.',
        },
      },
      {
        q: { en: "What size is The 43?", nl: "Welk formaat heeft The 43?", de: "Welche Größe hat The 43?" },
        a: {
          en: 'The 43 uses a 43" holographic display. It is the most compact wall-format model in the range, so it fits spaces where the 86" Holobox would be too large.',
          nl: 'The 43 gebruikt een 43"-holografisch display. Het is het meest compacte wandmodel in het gamma en past dus op plekken waar de 86"-Holobox te groot zou zijn.',
          de: 'The 43 nutzt ein 43" holografisches Display. Es ist das kompakteste Wandformat der Reihe und passt damit dorthin, wo die 86" Holobox zu groß wäre.',
        },
      },
      {
        q: { en: "Does The 43 show a real 3D hologram?", nl: "Toont The 43 een echt 3D-hologram?", de: "Zeigt The 43 ein echtes 3D Hologramm?" },
        a: {
          en: "Yes. The 43 produces the same sharp, lifelike holographic imagery as the larger Holobox, with content appearing in vivid 3D and no glasses required.",
          nl: "Ja. The 43 levert dezelfde scherpe, levensechte holografische beelden als de grotere Holobox, met content in levendig 3D en zonder bril.",
          de: "Ja. The 43 liefert dieselben scharfen, lebensechten holografischen Bilder wie die größere Holobox, mit Inhalten in lebendigem 3D und ganz ohne Brille.",
        },
      },
      {
        q: { en: "How much does The 43 cost and can I rent it?", nl: "Wat kost The 43 en kan ik het huren?", de: "Was kostet The 43 und kann ich es mieten?" },
        a: {
          en: "Pricing depends on your configuration and content, and both purchase and rental are available. Request a quote and we will tailor a proposal to your project.",
          nl: "De prijs hangt af van uw configuratie en content, en zowel kopen als een hologram huren is mogelijk. Vraag een offerte aan en wij maken een voorstel op maat.",
          de: "Der Preis hängt von Konfiguration und Inhalten ab, und sowohl Kauf als auch das Mieten eines Hologramms sind möglich. Fordern Sie ein Angebot an, und wir erstellen Ihnen einen passenden Vorschlag.",
        },
      },
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
    faqs: [
      {
        q: { en: "What is the Hologrid?", nl: "Wat is de Hologrid?", de: "Was ist das Hologrid?" },
        a: {
          en: "The Hologrid is a modular holographic wall built from multiple Holobox units placed side by side. You can combine up to five units to create a dramatic, large-format holographic display for events, lobbies and flagship spaces.",
          nl: "De Hologrid is een modulaire holografische wand opgebouwd uit meerdere Holobox-units naast elkaar. U kunt tot vijf units combineren voor een indrukwekkend, grootformaat holografisch display voor evenementen, lobby's en flagship-ruimtes.",
          de: "Das Hologrid ist eine modulare holografische Wand aus mehreren Holobox-Einheiten nebeneinander. Sie können bis zu fünf Einheiten kombinieren und so ein eindrucksvolles, großformatiges holografisches Display für Events, Lobbys und Flagship-Räume schaffen.",
        },
      },
      {
        q: { en: "How many Holobox units can a Hologrid combine?", nl: "Hoeveel Holobox-units kan een Hologrid combineren?", de: "Wie viele Holobox-Einheiten lassen sich im Hologrid kombinieren?" },
        a: {
          en: "A Hologrid combines up to five Holobox units in one wall. Every unit is driven together from a single Holocontrol dashboard, so content stays in sync across the whole display.",
          nl: "Een Hologrid combineert tot vijf Holobox-units in één wand. Elke unit wordt samen aangestuurd vanuit één Holocontrol-dashboard, zodat de content over het hele display synchroon blijft.",
          de: "Ein Hologrid kombiniert bis zu fünf Holobox-Einheiten in einer Wand. Alle Einheiten werden gemeinsam über ein einziges Holocontrol-Dashboard gesteuert, sodass die Inhalte über das gesamte Display synchron bleiben.",
        },
      },
      {
        q: { en: "Is the Hologrid a real 3D hologram wall?", nl: "Is de Hologrid een echte 3D-hologramwand?", de: "Ist das Hologrid eine echte 3D Hologramm-Wand?" },
        a: {
          en: "Yes. Each unit shows life-size 3D holographic imagery, so together they form a single large holographic wall that audiences experience without glasses or a headset.",
          nl: "Ja. Elke unit toont levensgrote 3D-holografische beelden, zodat ze samen één grote holografische wand vormen die het publiek ervaart zonder bril of headset.",
          de: "Ja. Jede Einheit zeigt lebensgroße 3D-holografische Bilder, sodass sie zusammen eine große holografische Wand bilden, die das Publikum ohne Brille oder Headset erlebt.",
        },
      },
      {
        q: { en: "Can I rent a Hologrid for an event?", nl: "Kan ik een Hologrid huren voor een event?", de: "Kann ich ein Hologrid für ein Event mieten?" },
        a: {
          en: "Yes. The Hologrid is built for events, launches and live experiences, and you can rent or buy it. Request a quote and we will scale the configuration to your venue and budget.",
          nl: "Ja. De Hologrid is gebouwd voor evenementen, lanceringen en live-ervaringen, en u kunt deze huren of kopen. Vraag een offerte aan en wij stemmen de configuratie af op uw locatie en budget.",
          de: "Ja. Das Hologrid ist für Events, Launches und Live-Erlebnisse gemacht, und Sie können es mieten oder kaufen. Fordern Sie ein Angebot an, und wir passen die Konfiguration an Ihre Location und Ihr Budget an.",
        },
      },
    ],
  },
];

export type Sector = {
  slug: string;
  name: Loc;
  blurb: Loc;
  image: string;
  faqs?: { q: Loc; a: Loc }[];
};

export const sectors: Sector[] = [
  { slug: "hospitality", name: { en: "Hospitality & Travel", nl: "Hospitality & Reizen", de: "Hospitality & Reise" }, blurb: { en: "A 24/7 virtual concierge and reception that welcomes every guest with a human touch.", nl: "Een 24/7 virtuele concierge en receptie die elke gast verwelkomt met een menselijke touch.", de: "Ein virtueller Concierge und Empfang rund um die Uhr, der jeden Gast persönlich willkommen heißt." }, image: "/images/sector-hospitality.jpg",
    faqs: [
      {
        q: { en: "Can a hologram replace a hotel receptionist?", nl: "Kan een hologram een hotelreceptionist vervangen?", de: "Kann ein Hologramm einen Hotelempfang ersetzen?" },
        a: {
          en: "A life-size hologram can handle check-in, concierge questions and wayfinding around the clock, in any language, with a genuine human presence. It works alongside your team to cover quiet hours and busy peaks without losing the personal touch.",
          nl: "Een levensgroot hologram kan check-in, conciërgevragen en routebegeleiding 24/7 afhandelen, in elke taal en met een echte menselijke aanwezigheid. Het werkt naast uw team om rustige uren en drukke pieken op te vangen, zonder de persoonlijke touch te verliezen.",
          de: "Ein lebensgroßes Hologramm kann Check-in, Concierge-Fragen und Wegeleitung rund um die Uhr übernehmen, in jeder Sprache und mit echter menschlicher Präsenz. Es arbeitet neben Ihrem Team und deckt ruhige Stunden wie Stoßzeiten ab, ohne den persönlichen Kontakt zu verlieren.",
        },
      },
      {
        q: { en: "Does the holographic concierge work in multiple languages?", nl: "Werkt de holografische concierge in meerdere talen?", de: "Funktioniert der Hologramm Concierge in mehreren Sprachen?" },
        a: {
          en: "Yes. The same hologram can welcome guests in many languages, which is ideal for international hotels, airports and travel hubs where visitors arrive from all over the world.",
          nl: "Ja. Hetzelfde hologram kan gasten in vele talen verwelkomen, ideaal voor internationale hotels, luchthavens en reishubs waar bezoekers van over de hele wereld komen.",
          de: "Ja. Dasselbe Hologramm kann Gäste in vielen Sprachen begrüßen, ideal für internationale Hotels, Flughäfen und Reise-Hubs, an denen Besucher aus aller Welt ankommen.",
        },
      },
      {
        q: { en: "What does a hologram reception cost for a hotel?", nl: "Wat kost een hologram receptie voor een hotel?", de: "Was kostet ein Hologramm Empfang fürs Hotel?" },
        a: {
          en: "It depends on the display, the content and whether you buy or rent. Request a quote and we will design a hospitality setup around your lobby and guest flow.",
          nl: "Dat hangt af van het display, de content en of u koopt of huurt. Vraag een offerte aan en wij ontwerpen een hospitality-opstelling rond uw lobby en gastenstroom.",
          de: "Das hängt vom Display, den Inhalten und davon ab, ob Sie kaufen oder mieten. Fordern Sie ein Angebot an, und wir gestalten eine Hospitality-Lösung passend zu Ihrer Lobby und Ihrem Gästefluss.",
        },
      },
      {
        q: { en: "Can I rent a hologram display for a hotel event?", nl: "Kan ik een hologram huren voor een hotelevenement?", de: "Kann ich ein Hologramm für ein Hotel-Event mieten?" },
        a: {
          en: "Yes. You can rent a hologram display for a launch, conference or seasonal campaign, or install one permanently in your lobby. Contact us to discuss the right option.",
          nl: "Ja. U kunt een hologram huren voor een lancering, congres of seizoenscampagne, of er een vast plaatsen in uw lobby. Neem contact op om de juiste optie te bespreken.",
          de: "Ja. Sie können ein Hologramm mieten für einen Launch, eine Konferenz oder eine Saisonkampagne oder es fest in Ihrer Lobby installieren. Kontaktieren Sie uns, um die passende Option zu besprechen.",
        },
      },
    ],
  },
  { slug: "telehealth", name: { en: "Telehealth", nl: "Telehealth", de: "Telehealth" }, blurb: { en: "Life-size, lifelike consultations that bring care closer, wherever the specialist is.", nl: "Levensgrote, levensechte consulten die zorg dichterbij brengen, waar de specialist ook is.", de: "Lebensgroße, lebensechte Sprechstunden, die Versorgung näher bringen, wo immer der Spezialist ist." }, image: "/images/sector-telehealth.jpg",
    faqs: [
      {
        q: { en: "How does a holographic telehealth consultation work?", nl: "Hoe werkt een holografisch consult op afstand?", de: "Wie funktioniert eine holografische Sprechstunde aus der Ferne?" },
        a: {
          en: "A specialist appears life-size as a 3D hologram in the consultation room, while the patient is present in person. It makes remote care feel like a face-to-face visit, with the presence and reassurance of being in the same room.",
          nl: "Een specialist verschijnt levensgroot als 3D-hologram in de spreekkamer, terwijl de patiënt fysiek aanwezig is. Het laat zorg op afstand voelen als een bezoek in persoon, met de aanwezigheid en geruststelling van samen in één ruimte zijn.",
          de: "Eine Fachärztin erscheint lebensgroß als 3D Hologramm im Sprechzimmer, während die Patientin persönlich anwesend ist. So fühlt sich Telemedizin wie ein Besuch von Angesicht zu Angesicht an, mit der Präsenz und dem Vertrauen, im selben Raum zu sein.",
        },
      },
      {
        q: { en: "Is a holographic consultation secure and GDPR-compliant?", nl: "Is een holografisch consult veilig en GDPR-proof?", de: "Ist eine holografische Sprechstunde sicher und GDPR-konform?" },
        a: {
          en: "Holographic telehealth uses secure, encrypted streaming and can be deployed to meet healthcare privacy requirements, including GDPR. We work with your IT and compliance teams to fit your data-protection policies.",
          nl: "Holografische telehealth gebruikt beveiligde, versleutelde streaming en kan worden ingericht volgens privacyeisen in de zorg, waaronder GDPR. We werken samen met uw IT- en compliance-teams om aan te sluiten op uw databeschermingsbeleid.",
          de: "Holografische Telemedizin nutzt sichere, verschlüsselte Übertragung und lässt sich gemäß den Datenschutzanforderungen im Gesundheitswesen einrichten, einschließlich GDPR. Wir arbeiten mit Ihren IT- und Compliance-Teams, um Ihre Datenschutzrichtlinien zu erfüllen.",
        },
      },
      {
        q: { en: "Can patients interact with the holographic specialist?", nl: "Kunnen patiënten met de holografische specialist communiceren?", de: "Können Patienten mit der holografischen Fachperson interagieren?" },
        a: {
          en: "Yes. The consultation is two-way and live, so the patient and specialist can see and speak with each other in real time, just as they would in person.",
          nl: "Ja. Het consult is tweerichtings en live, zodat patiënt en specialist elkaar in realtime kunnen zien en spreken, net als in persoon.",
          de: "Ja. Die Sprechstunde verläuft in beide Richtungen und live, sodass Patientin und Fachärztin sich in Echtzeit sehen und sprechen können, genau wie persönlich.",
        },
      },
      {
        q: { en: "What does a telehealth hologram setup cost?", nl: "Wat kost een hologram zorg-opstelling?", de: "Was kostet eine Hologramm Telemedizin-Lösung?" },
        a: {
          en: "Cost depends on the displays, the number of sites and your integration needs. Request a quote and we will design a telehealth solution for your clinics or hospital network.",
          nl: "De kosten hangen af van de displays, het aantal locaties en uw integratiewensen. Vraag een offerte aan en wij ontwerpen een hologram zorg-oplossing voor uw klinieken of ziekenhuisnetwerk.",
          de: "Die Kosten hängen von den Displays, der Zahl der Standorte und Ihren Integrationsanforderungen ab. Fordern Sie ein Angebot an, und wir gestalten eine Telemedizin-Lösung für Ihre Kliniken oder Ihr Krankenhausnetzwerk.",
        },
      },
    ],
  },
  { slug: "retail", name: { en: "Retail Displays", nl: "Retaildisplays", de: "Retail-Displays" }, blurb: { en: "Turn windows and showrooms into holographic stages that stop people in their tracks.", nl: "Verander etalages en showrooms in holografische podia die mensen doen stilstaan.", de: "Verwandeln Sie Schaufenster und Showrooms in holografische Bühnen, die Menschen innehalten lassen." }, image: "/images/sector-retail.jpg",
    faqs: [
      {
        q: { en: "Does a holographic display work in a shop window in daylight?", nl: "Werkt een holografisch display in een etalage bij daglicht?", de: "Funktioniert ein holografisches Display im Schaufenster bei Tageslicht?" },
        a: {
          en: "Yes. Our displays use bright, high-contrast panels with anti-glare glass, so the holographic image stays sharp and vivid in shop windows and showrooms, even in daylight.",
          nl: "Ja. Onze displays gebruiken heldere panelen met hoog contrast en antireflecterend glas, zodat het holografische beeld scherp en levendig blijft in etalages en showrooms, ook bij daglicht.",
          de: "Ja. Unsere Displays nutzen helle, kontraststarke Panels mit entspiegeltem Glas, sodass das holografische Bild im Schaufenster und Showroom scharf und brillant bleibt, auch bei Tageslicht.",
        },
      },
      {
        q: { en: "Can shoppers interact with the hologram?", nl: "Kunnen shoppers met het hologram interacteren?", de: "Können Kunden mit dem Hologramm interagieren?" },
        a: {
          en: "Yes. With an interactive touch display, shoppers can explore products, configurations and details themselves, turning a passing glance into hands-on engagement.",
          nl: "Ja. Met een interactief touchdisplay kunnen shoppers zelf producten, configuraties en details verkennen, waardoor een vluchtige blik verandert in echte interactie.",
          de: "Ja. Mit einem interaktiven Touch-Display können Kunden Produkte, Konfigurationen und Details selbst erkunden, sodass aus einem flüchtigen Blick echtes Interesse wird.",
        },
      },
      {
        q: { en: "What can I show on a holographic retail display?", nl: "Wat kan ik tonen op een holografisch retaildisplay?", de: "Was kann ich auf einem holografischen Retail-Display zeigen?" },
        a: {
          en: "You can present products floating in vivid 3D, brand campaigns, seasonal promotions and step-by-step product stories. It is a powerful way to make a window or showroom stand out from the street.",
          nl: "U kunt producten tonen die zweven in levendig 3D, merkcampagnes, seizoensacties en stapsgewijze productverhalen. Het is een krachtige manier om een etalage of showroom op te laten vallen vanaf de straat.",
          de: "Sie können Produkte zeigen, die in lebendigem 3D schweben, dazu Markenkampagnen, Saisonaktionen und Schritt-für-Schritt-Produktgeschichten. Das ist eine wirkungsvolle Art, ein Schaufenster oder einen Showroom von der Straße aus hervorzuheben.",
        },
      },
      {
        q: { en: "Can I rent or buy a retail hologram display?", nl: "Kan ik een retail hologram huren of kopen?", de: "Kann ich ein Retail-Hologramm mieten oder kaufen?" },
        a: {
          en: "Both are possible. Rent a display for a pop-up or seasonal campaign, or buy one for your flagship store. Request a quote and we will tailor it to your retail space.",
          nl: "Beide kan. Huur een display voor een pop-up of seizoenscampagne, of koop er een voor uw flagshipstore. Vraag een offerte aan en wij stemmen het af op uw retailruimte.",
          de: "Beides ist möglich. Mieten Sie ein Display für einen Pop-up oder eine Saisonkampagne oder kaufen Sie eines für Ihren Flagship-Store. Fordern Sie ein Angebot an, und wir passen es an Ihre Retail-Fläche an.",
        },
      },
    ],
  },
  { slug: "events", name: { en: "Events", nl: "Evenementen", de: "Events" }, blurb: { en: "Beam speakers and brands onto any stage in striking, large-format 3D.", nl: "Beam sprekers en merken naar elk podium in opvallend, grootformaat 3D.", de: "Beamen Sie Redner und Marken auf jede Bühne, in eindrucksvollem, großformatigem 3D." }, image: "/images/sector-events.jpg",
    faqs: [
      {
        q: { en: "Can I rent holograms for a single event?", nl: "Kan ik hologrammen huren voor één event?", de: "Kann ich Hologramme für ein einzelnes Event mieten?" },
        a: {
          en: "Yes. You can rent one or more holographic displays for a single conference, launch or live show, with delivery, setup and support included. Request a quote with your dates and venue.",
          nl: "Ja. U kunt een of meer holografische displays huren voor één congres, lancering of live-show, inclusief levering, opbouw en ondersteuning. Vraag een offerte aan met uw data en locatie.",
          de: "Ja. Sie können ein oder mehrere holografische Displays mieten für eine einzelne Konferenz, einen Launch oder eine Live-Show, inklusive Lieferung, Aufbau und Support. Fordern Sie ein Angebot mit Ihren Terminen und Ihrer Location an.",
        },
      },
      {
        q: { en: "Can I show a live presenter as a hologram on stage?", nl: "Kan ik een live presentator als hologram op het podium tonen?", de: "Kann ich einen Live-Moderator als Hologramm auf der Bühne zeigen?" },
        a: {
          en: "Yes. You can beam a live speaker or performer onto the stage as a life-size 3D hologram in real time, so they appear in front of the audience without travelling to the venue.",
          nl: "Ja. U kunt een live spreker of performer in realtime als levensgroot 3D-hologram op het podium beamen, zodat deze voor het publiek verschijnt zonder naar de locatie te reizen.",
          de: "Ja. Sie können einen Live-Speaker oder Künstler in Echtzeit als lebensgroßes 3D Hologramm auf die Bühne beamen, sodass er vor dem Publikum erscheint, ganz ohne Anreise zur Location.",
        },
      },
      {
        q: { en: "How large can an event hologram be?", nl: "Hoe groot kan een event-hologram zijn?", de: "Wie groß kann ein Event-Hologramm sein?" },
        a: {
          en: 'A single Holobox shows a life-size figure at 86", and with a Hologrid you can combine up to five units into a large-format holographic wall for a bigger stage presence.',
          nl: 'Eén Holobox toont een levensgrote figuur op 86", en met een Hologrid combineert u tot vijf units tot een grootformaat holografische wand voor meer podiumimpact.',
          de: 'Eine einzelne Holobox zeigt eine lebensgroße Figur auf 86", und mit einem Hologrid kombinieren Sie bis zu fünf Einheiten zu einer großformatigen holografischen Wand für mehr Bühnenpräsenz.',
        },
      },
      {
        q: { en: "How much does it cost to rent event holograms?", nl: "Wat kost het om event-hologrammen te huren?", de: "Was kostet das Mieten von Event-Hologrammen?" },
        a: {
          en: "Rental cost depends on the number of displays, the duration and the content. Request a quote and we will put together a package for your event.",
          nl: "De huurprijs hangt af van het aantal displays, de duur en de content. Vraag een offerte aan en wij stellen een pakket samen voor uw event.",
          de: "Der Mietpreis hängt von der Zahl der Displays, der Dauer und den Inhalten ab. Fordern Sie ein Angebot an, und wir stellen Ihnen ein Paket für Ihr Event zusammen.",
        },
      },
    ],
  },
  { slug: "education", name: { en: "Education", nl: "Onderwijs", de: "Bildung" }, blurb: { en: "Bring lessons, guest lecturers and complex ideas to life in three dimensions.", nl: "Breng lessen, gastdocenten en complexe ideeën tot leven in drie dimensies.", de: "Erwecken Sie Unterricht, Gastdozenten und komplexe Inhalte dreidimensional zum Leben." }, image: "/images/sector-education.jpg",
    faqs: [
      {
        q: { en: "Can students interact with the hologram?", nl: "Kunnen studenten met het hologram interacteren?", de: "Können Studierende mit dem Hologramm interagieren?" },
        a: {
          en: "Yes. With an interactive touch display, students can explore models, rotate objects and step through complex ideas themselves, which makes lessons more memorable than watching a flat screen.",
          nl: "Ja. Met een interactief touchdisplay kunnen studenten zelf modellen verkennen, objecten draaien en complexe ideeën stap voor stap doorlopen, wat lessen beter laat beklijven dan kijken naar een plat scherm.",
          de: "Ja. Mit einem interaktiven Touch-Display können Studierende Modelle selbst erkunden, Objekte drehen und komplexe Inhalte Schritt für Schritt durchgehen, was den Unterricht einprägsamer macht als ein flacher Bildschirm.",
        },
      },
      {
        q: { en: "Can a guest lecturer teach remotely as a hologram?", nl: "Kan een gastdocent op afstand lesgeven als hologram?", de: "Kann ein Gastdozent aus der Ferne als Hologramm unterrichten?" },
        a: {
          en: "Yes. A guest lecturer can appear life-size as a 3D hologram and teach a class live from anywhere, giving students access to experts who could not travel to campus.",
          nl: "Ja. Een gastdocent kan levensgroot als 3D-hologram verschijnen en een klas live lesgeven vanaf elke locatie, waardoor studenten toegang krijgen tot experts die niet naar de campus konden komen.",
          de: "Ja. Ein Gastdozent kann lebensgroß als 3D Hologramm erscheinen und eine Klasse live von überall unterrichten, sodass Studierende Zugang zu Experten erhalten, die nicht zum Campus reisen konnten.",
        },
      },
      {
        q: { en: "What subjects work well with education holograms?", nl: "Welke vakken werken goed met onderwijshologrammen?", de: "Für welche Fächer eignen sich Bildungs-Hologramme?" },
        a: {
          en: "Anything that benefits from seeing things in three dimensions: anatomy, engineering, architecture, science and design all come to life when models float at human scale in the classroom.",
          nl: "Alles wat baat heeft bij driedimensionaal kijken: anatomie, techniek, architectuur, wetenschap en design komen tot leven wanneer modellen levensgroot in de klas zweven.",
          de: "Alles, was vom dreidimensionalen Sehen profitiert: Anatomie, Technik, Architektur, Naturwissenschaften und Design werden lebendig, wenn Modelle lebensgroß im Klassenraum schweben.",
        },
      },
      {
        q: { en: "Can a school rent or buy a hologram display?", nl: "Kan een school een hologram huren of kopen?", de: "Kann eine Schule ein Hologramm mieten oder kaufen?" },
        a: {
          en: "Both are possible. Schools and universities can buy a display for ongoing use or rent one for an open day or special programme. Request a quote and we will tailor it to your budget.",
          nl: "Beide kan. Scholen en universiteiten kunnen een display kopen voor doorlopend gebruik of een hologram huren voor een open dag of speciaal programma. Vraag een offerte aan en wij stemmen het af op uw budget.",
          de: "Beides ist möglich. Schulen und Universitäten können ein Display für den dauerhaften Einsatz kaufen oder ein Hologramm mieten für einen Tag der offenen Tür oder ein Sonderprogramm. Fordern Sie ein Angebot an, und wir passen es an Ihr Budget an.",
        },
      },
    ],
  },
  { slug: "advertising", name: { en: "Advertising", nl: "Adverteren", de: "Werbung" }, blurb: { en: "Premium holographic out-of-home that commands attention in 4K 3D.", nl: "Premium holografische out-of-home die de aandacht trekt in 4K 3D.", de: "Premium holografische out-of-home Werbung, die in 4K 3D alle Blicke auf sich zieht." }, image: "/images/case-liege.jpg",
    faqs: [
      {
        q: { en: "How much attention does holographic out-of-home advertising get?", nl: "Hoeveel aandacht trekt holografische buitenreclame?", de: "Wie viel Aufmerksamkeit erzielt holografische Außenwerbung?" },
        a: {
          en: "Holographic out-of-home stands out because the image appears in vivid 4K 3D rather than on a flat screen. It stops passers-by, gets photographed and shared, and stays memorable long after a standard poster would be forgotten.",
          nl: "Holografische buitenreclame valt op doordat het beeld in levendig 4K 3D verschijnt in plaats van op een plat scherm. Het laat voorbijgangers stilstaan, wordt gefotografeerd en gedeeld, en blijft hangen lang nadat een gewone poster vergeten zou zijn.",
          de: "Holografische Außenwerbung fällt auf, weil das Bild in lebendigem 4K 3D erscheint statt auf einem flachen Bildschirm. Sie lässt Passanten innehalten, wird fotografiert und geteilt und bleibt im Gedächtnis, lange nachdem ein normales Plakat vergessen wäre.",
        },
      },
      {
        q: { en: "Is holographic advertising shown in real 3D?", nl: "Wordt holografische reclame in echt 3D getoond?", de: "Wird holografische Werbung in echtem 3D gezeigt?" },
        a: {
          en: "Yes. Campaigns play in life-size 3D at up to 4K, so products and characters appear to float in real space and can be seen without glasses or a headset.",
          nl: "Ja. Campagnes spelen in levensgroot 3D tot 4K, zodat producten en personages in de echte ruimte lijken te zweven en zichtbaar zijn zonder bril of headset.",
          de: "Ja. Kampagnen laufen in lebensgroßem 3D mit bis zu 4K, sodass Produkte und Figuren im realen Raum zu schweben scheinen und ohne Brille oder Headset sichtbar sind.",
        },
      },
      {
        q: { en: "Where can holographic advertising displays be placed?", nl: "Waar kunnen holografische reclamedisplays staan?", de: "Wo lassen sich holografische Werbedisplays platzieren?" },
        a: {
          en: "They work in shop windows, shopping centres, lobbies, airports, showrooms and high-traffic public spaces, anywhere you want a premium campaign to command attention.",
          nl: "Ze werken in etalages, winkelcentra, lobby's, luchthavens, showrooms en drukke openbare ruimtes, overal waar u een premium campagne alle aandacht wilt laten trekken.",
          de: "Sie eignen sich für Schaufenster, Einkaufszentren, Lobbys, Flughäfen, Showrooms und stark frequentierte öffentliche Räume, überall dort, wo eine Premium-Kampagne alle Blicke auf sich ziehen soll.",
        },
      },
      {
        q: { en: "Can I rent a hologram display for an advertising campaign?", nl: "Kan ik een hologram huren voor een reclamecampagne?", de: "Kann ich ein Hologramm für eine Werbekampagne mieten?" },
        a: {
          en: "Yes. You can rent displays for a fixed-term campaign or buy them for ongoing brand activations. Request a quote and we will plan placements and content around your campaign.",
          nl: "Ja. U kunt displays huren voor een campagne met een vaste looptijd of ze kopen voor doorlopende merkactivaties. Vraag een offerte aan en wij plannen plaatsingen en content rond uw campagne.",
          de: "Ja. Sie können Displays für eine befristete Kampagne mieten oder für laufende Markenaktivierungen kaufen. Fordern Sie ein Angebot an, und wir planen Standorte und Inhalte rund um Ihre Kampagne.",
        },
      },
    ],
  },
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
