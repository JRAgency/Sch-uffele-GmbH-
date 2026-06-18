import { company } from "@/lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description:
      "Werkzeug- und Formenbau: Präzisions-Spritzgießwerkzeuge für Thermo- und Duroplaste für die Elektro-/Elektronikindustrie und Automobilzulieferer.",
    image: "https://schaeuffele-gmbh.example/img/hero-welding.jpg",
    url: "https://schaeuffele-gmbh.example",
    telephone: company.phone,
    faxNumber: company.fax,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.zip,
      addressLocality: "Brackenheim",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.lat,
      longitude: company.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "16:30",
      },
    ],
    areaServed: "DE",
    knowsAbout: ["Spritzgießwerkzeuge", "Werkzeugbau", "Formenbau", "Duroplast", "Thermoplast"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
