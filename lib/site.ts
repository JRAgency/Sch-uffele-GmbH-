// ============================================================
// Zentrale Inhalts- und Konfigurationsdatei
// Quelle: WEBSITE-ANALYSE.md (Recherche 18.06.2026)
// Demo der JR Agency Services — Texte z.T. branchenüblich ergänzt.
// Mit Kunde final abzustimmen sind Punkte mit "// TODO Kunde".
// ============================================================

export const company = {
  name: "Schäuffele GmbH",
  short: "Schäuffele",
  claim: "Werkzeug- und Formenbau",
  // 5-Sekunden-Value-Proposition
  tagline:
    "Präzisions-Spritzgießwerkzeuge für Thermo- und Duroplaste — entwickelt, gebaut und bemustert in Brackenheim.",
  ceo: "Jürgen Schäuffele",
  address: {
    street: "Quellenstraße 11",
    zip: "74336",
    city: "Brackenheim-Hausen",
    country: "Deutschland",
  },
  phone: "+49 7135 963600",
  phoneHref: "+497135963600",
  fax: "+49 7135 963601",
  email: "info@schaeuffele-gmbh.de",
  hours: "Mo–Fr 07:00–16:30 Uhr",
  hoursShort: "Mo–Fr 7–16:30",
  // Handelsregister (aus Recherche)
  register: "Amtsgericht Stuttgart, HRB 320615",
  vatId: "DE 244024479",
  geo: { lat: 49.0876, lng: 9.0625 }, // Näherung Brackenheim-Hausen // TODO Kunde: exakt
};

export const nav: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: "Start", href: "/" },
  {
    label: "Leistungen",
    href: "/leistungen",
    children: [], // wird unten aus services befüllt
  },
  { label: "Branchen", href: "/#branchen" },
  { label: "Unternehmen", href: "/unternehmen" },
  { label: "Kontakt", href: "/kontakt" },
];

export type Service = {
  slug: string;
  no: string;
  title: string;
  short: string;
  excerpt: string;
  image: string;
  intro: string;
  bullets: string[];
  specs?: { label: string; value: string }[];
};

export const services: Service[] = [
  {
    slug: "spritzgiesswerkzeuge",
    no: "01",
    title: "Spritzgießwerkzeuge",
    short: "Thermoplast & Duroplast",
    excerpt:
      "Unsere Kernkompetenz: technisch hochwertige Präzisions-Spritzgießwerkzeuge für anspruchsvolle Kunststoffteile.",
    image: "/img/konstruktion.jpg",
    intro:
      "Im Zentrum unserer Arbeit steht das komplette Spritzgießwerkzeug — von der ersten Machbarkeitsbewertung bis zum serienreifen, abgemusterten Werkzeug. Wir bauen Werkzeuge für Thermoplaste und Duroplaste, ausgelegt auf Maßhaltigkeit, Standzeit und reproduzierbare Serienqualität.",
    bullets: [
      "Ein- und Mehrkavitäten-Werkzeuge",
      "Thermoplast- und Duroplastwerkzeuge",
      "Heißkanal- und Kaltkanaltechnik",
      "Schieber-, Backen- und Entformungssysteme",
      "Auslegung auf Standzeit und Serienreife",
    ],
    specs: [
      { label: "Werkstoffe", value: "Thermoplast · Duroplast" },
      { label: "Kavitäten", value: "Ein- & Mehrfach" },
      { label: "Anguss", value: "Heiß- / Kaltkanal" },
      { label: "Branchen", value: "Elektro/Elektronik · Automotive" },
    ],
  },
  {
    slug: "konstruktion-entwicklung",
    no: "02",
    title: "Konstruktion & Entwicklung",
    short: "CAD/CAM & Auslegung",
    excerpt:
      "Werkzeugkonzept, 3D-Konstruktion und fertigungsgerechte Auslegung — die Basis für ein Werkzeug, das im Serienbetrieb sicher läuft.",
    image: "/img/cad-screen.jpg",
    intro:
      "Jedes Werkzeug beginnt am Bildschirm. Wir entwickeln das Werkzeugkonzept gemeinsam mit Ihnen, konstruieren in 3D und legen Trennung, Entformung, Kühlung und Anguss fertigungsgerecht aus. So entstehen Werkzeuge, die sich präzise fertigen und stabil betreiben lassen.",
    bullets: [
      "3D-Werkzeugkonstruktion (CAD)",
      "Fertigungsgerechte Auslegung von Trennung & Entformung",
      "Kühl- und Temperierkonzept",
      "Angusssystem & Fließwegbetrachtung",
      "Beratung schon in der Bauteilentwicklung",
    ],
  },
  {
    slug: "fraesen-drehen",
    no: "03",
    title: "Präzisionsfräsen & Drehen",
    short: "Zerspanung im µm-Bereich",
    excerpt:
      "Formplatten, Kerne und Einsätze entstehen durch hochpräzise Zerspanung — die Grundlage jeder maßhaltigen Kavität.",
    image: "/img/funken-schleifen.jpg",
    intro:
      "Aus gehärteten und vergüteten Werkzeugstählen fertigen wir Formplatten, Kerne, Einsätze und Funktionsbauteile. Hochpräzises Fräsen und Drehen sichert die Maßhaltigkeit, auf die es bei Spritzgießwerkzeugen ankommt.",
    bullets: [
      "Fräsen von Formplatten, Kernen und Einsätzen",
      "Drehbearbeitung rotationssymmetrischer Bauteile",
      "Bearbeitung gehärteter Werkzeugstähle",
      "Hohe Wiederholgenauigkeit für Folgewerkzeuge",
    ],
  },
  {
    slug: "erodieren",
    no: "04",
    title: "Senk- & Drahterodieren",
    short: "Konturen, die Fräsen nicht erreicht",
    excerpt:
      "Feine Konturen, scharfe Innenecken und filigrane Geometrien fertigen wir prozesssicher per Erodieren.",
    image: "/img/erodieren.jpg",
    intro:
      "Wo die Fräse an ihre Grenzen kommt, übernimmt die Funkenerosion. Mit Senk- und Drahterodieren bilden wir feinste Konturen, scharfe Innenecken und schwer zugängliche Geometrien exakt ab — reproduzierbar und mit definierter Oberfläche.",
    bullets: [
      "Senkerodieren komplexer Kavitätskonturen",
      "Drahterodieren von Durchbrüchen und Einsätzen",
      "Scharfe Innenecken & filigrane Geometrien",
      "Definierte Oberflächengüten",
    ],
  },
  {
    slug: "montage-bemusterung",
    no: "05",
    title: "Montage & Bemusterung",
    short: "Tryout bis zur Freigabe",
    excerpt:
      "Wir montieren, tuschieren und mustern das Werkzeug ab — bis die ersten Teile Ihre Anforderungen erfüllen.",
    image: "/img/ingenieurin-pruefung.jpg",
    intro:
      "Ein Werkzeug ist erst fertig, wenn das Bauteil stimmt. Wir montieren die Werkzeuge in unserem Haus, tuschieren die Trennung, optimieren die Funktion und begleiten die Bemusterung bis zur Teilefreigabe.",
    bullets: [
      "Komplettmontage im eigenen Haus",
      "Tuschieren & Funktionsprüfung",
      "Begleitung von Erstbemusterung & Tryout",
      "Optimierung bis zur Teilefreigabe",
    ],
  },
  {
    slug: "wartung-optimierung",
    no: "06",
    title: "Wartung & Optimierung",
    short: "Standzeit über Jahre",
    excerpt:
      "Reparatur, Änderung und Optimierung — auch für Werkzeuge, die nicht bei uns gebaut wurden.",
    image: "/img/werkzeuge-regal.jpg",
    intro:
      "Spritzgießwerkzeuge sind langfristige Investitionen. Wir warten, reparieren und ändern Ihre Werkzeuge, setzen Bauteile instand und optimieren bestehende Werkzeuge — damit sie über viele Serien hinweg zuverlässig produzieren. Auf Wunsch auch für fremdgebaute Werkzeuge.",
    bullets: [
      "Wartung & Instandhaltung",
      "Reparatur beschädigter Bauteile",
      "Werkzeugänderungen & -anpassungen",
      "Optimierung von Standzeit und Teilequalität",
      "Auch für fremdgebaute Werkzeuge",
    ],
  },
];

// Nav-Children aus Services ableiten
nav[1].children = services.map((s) => ({ label: s.title, href: `/leistungen/${s.slug}` }));

export type Branche = {
  slug: string;
  title: string;
  image: string;
  text: string;
  points: string[];
};

export const branchen: Branche[] = [
  {
    slug: "elektro-elektronik",
    title: "Elektro- & Elektronikindustrie",
    image: "/img/branche-elektronik.jpg",
    text:
      "Für Steckverbinder, Gehäuse und isolierende Funktionsteile bauen wir Werkzeuge mit höchster Maßhaltigkeit — inklusive Duroplast-Anwendungen für thermisch und elektrisch anspruchsvolle Bauteile.",
    points: ["Steckverbinder & Kontaktträger", "Gehäuse- und Isolierteile", "Duroplast-Funktionsteile"],
  },
  {
    slug: "automotive",
    title: "Automobilzulieferer",
    image: "/img/branche-automotive.jpg",
    text:
      "Zulieferer der Automobilindustrie vertrauen auf Werkzeuge, die Serienqualität über hohe Stückzahlen sicher halten. Wir liefern die Präzision und Standzeit, die der Automotive-Markt verlangt.",
    points: ["Technische Kunststoffteile", "Hohe Serienstabilität", "Reproduzierbare Qualität"],
  },
];

export const prozess = [
  { no: "01", title: "Anfrage & Beratung", text: "Wir bewerten Bauteil und Anforderung gemeinsam mit Ihnen — offen und technisch fundiert." },
  { no: "02", title: "Konstruktion", text: "Werkzeugkonzept und 3D-Konstruktion, fertigungsgerecht ausgelegt." },
  { no: "03", title: "Fertigung", text: "Fräsen, Drehen, Erodieren — Präzision im µm-Bereich aus eigenem Haus." },
  { no: "04", title: "Montage & Tryout", text: "Montage, Tuschieren und Bemusterung bis zur Funktion." },
  { no: "05", title: "Freigabe & Service", text: "Teilefreigabe, danach Wartung und Optimierung über die Serie." },
];

export const vorteile = [
  {
    title: "Alles aus einer Hand",
    text: "Konstruktion, Zerspanung, Erodieren, Montage und Bemusterung — die komplette Werkzeugentstehung unter einem Dach in Brackenheim.",
  },
  {
    title: "Thermo- und Duroplast",
    text: "Beide Werkstoffwelten beherrschen wir — von technischen Thermoplasten bis zu anspruchsvollen Duroplast-Anwendungen.",
  },
  {
    title: "Präzision als Standard",
    text: "Maßhaltigkeit, Standzeit und reproduzierbare Serienqualität sind nicht Option, sondern Anspruch an jedes Werkzeug.",
  },
  {
    title: "Partner auf Augenhöhe",
    text: "Als familiengeführter Betrieb sind wir direkt erreichbar und denken in langfristigen Partnerschaften statt in Einzelaufträgen.",
  },
];

// Kennzahlen — bewusst qualitativ gehalten. // TODO Kunde: echte Werte (Jahre, Werkzeuge/Jahr, Toleranzen, Zertifikate)
export const stats = [
  { value: 2, suffix: "", label: "Werkstoffwelten", sub: "Thermoplast & Duroplast" },
  { value: 100, suffix: "%", label: "Fertigungstiefe", sub: "Werkzeugbau im eigenen Haus" },
  { value: 1, suffix: "", prefix: "", custom: "µm", label: "Präzision", sub: "im Form- und Werkzeugbau" },
  { value: 0, suffix: "", custom: "Mo–Fr", label: "Persönlich erreichbar", sub: company.hoursShort },
];

export const agency = {
  name: "JR Agency Services",
  url: "https://www.jr-agency.de",
};
