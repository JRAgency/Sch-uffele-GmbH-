"use client";

import { useEffect, useState } from "react";
import { company } from "@/lib/site";

const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${company.address.street}, ${company.address.zip} ${company.address.city}`
)}&output=embed`;

export default function ConsentMap() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("schaeuffele-consent") === "accept") setAllowed(true);
    } catch {}
  }, []);

  if (allowed) {
    return (
      <iframe
        title={`Standort ${company.name}`}
        src={mapsSrc}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 bg-[var(--color-mist)] p-8 text-center">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z" stroke="var(--color-brand-600)" strokeWidth="1.6" />
        <circle cx="12" cy="10" r="2.5" stroke="var(--color-brand-600)" strokeWidth="1.6" />
      </svg>
      <p className="max-w-sm text-sm text-[var(--color-steel)]">
        Die Karte wird von Google Maps geladen. Aus Datenschutzgründen erst nach Ihrer Zustimmung.
      </p>
      <button
        onClick={() => {
          try {
            localStorage.setItem("schaeuffele-consent", "accept");
          } catch {}
          setAllowed(true);
        }}
        className="btn btn--primary"
      >
        Karte laden
      </button>
    </div>
  );
}
