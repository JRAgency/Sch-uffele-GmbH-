"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("schaeuffele-consent")) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const decide = (val: "accept" | "decline") => {
    try {
      localStorage.setItem("schaeuffele-consent", val);
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-[var(--color-line)] bg-white/95 p-5 shadow-[0_30px_60px_-30px_rgba(12,20,34,0.45)] backdrop-blur-md sm:p-6">
      <p className="text-sm leading-relaxed text-[var(--color-ink)]">
        Wir verwenden nur technisch notwendige Cookies. Externe Inhalte wie Karten werden erst nach Ihrer
        Zustimmung geladen. Mehr dazu in der{" "}
        <a href="/datenschutz" className="font-medium text-[var(--color-brand-600)] underline">
          Datenschutzerklärung
        </a>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button onClick={() => decide("accept")} className="btn btn--primary">
          Alle akzeptieren
        </button>
        <button onClick={() => decide("decline")} className="btn btn--outline">
          Nur notwendige
        </button>
      </div>
    </div>
  );
}
