const items = [
  "Spritzgießwerkzeuge",
  "Thermoplast",
  "Duroplast",
  "Konstruktion & CAD",
  "Senk- & Drahterodieren",
  "Präzisionsfräsen",
  "Werkzeugmontage",
  "Bemusterung & Tryout",
  "Made in Brackenheim",
];

export default function Marquee() {
  return (
    <div className="marquee border-y border-[var(--color-line)] bg-[var(--color-mist)] py-5">
      <div className="marquee__track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {items.map((it) => (
              <span key={it} className="flex items-center">
                <span className="px-7 font-display text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-700)]">
                  {it}
                </span>
                <span className="text-[var(--color-brand-400)]">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
