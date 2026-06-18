import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Container, Eyebrow, ButtonLink, ArrowRight } from "@/components/ui";
import Stats from "@/components/Stats";
import { company, vorteile } from "@/lib/site";

export const metadata: Metadata = {
  title: "Unternehmen — Über die Schäuffele GmbH",
  description:
    "Familiengeführter Werkzeug- und Formenbau aus Brackenheim. Präzisions-Spritzgießwerkzeuge für Thermo- und Duroplaste — alles aus einer Hand.",
};

export default function UnternehmenPage() {
  return (
    <>
      <PageHero
        eyebrow="Unternehmen"
        title="Werkzeugbau aus Überzeugung — am Standort Brackenheim"
        intro="Ein familiengeführter Betrieb, der Präzision nicht als Versprechen, sondern als Anspruch versteht."
      />

      <section className="section-y">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="img-zoom reveal relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src="/img/ingenieurin-pruefung.jpg" alt="Qualitätsprüfung im Werkzeugbau" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="reveal reveal-d1">
              <Eyebrow>Wer wir sind</Eyebrow>
              <h2 className="h-section mt-5">Präzision, die in Serie geht</h2>
              <p className="mt-6 text-[var(--color-steel)]">
                Die Schäuffele GmbH plant, entwickelt und fertigt technisch hochwertige Präzisions-Spritzgießwerkzeuge.
                Unsere Werkzeuge entstehen für Thermoplaste und Duroplaste — und kommen bei namhaften Unternehmen der
                Elektro- und Elektronikindustrie sowie bei Automobilzulieferern zum Einsatz.
              </p>
              <p className="mt-4 text-[var(--color-steel)]">
                Als familiengeführtes Unternehmen verbinden wir handwerkliche Sorgfalt mit moderner Fertigung. Konstruktion,
                Zerspanung, Erodieren, Montage und Bemusterung liegen in einer Hand — das hält Wege kurz, Qualität hoch und
                Termine verbindlich.
              </p>
            </div>
          </div>

          <div className="reveal mt-20 border-t border-[var(--color-line)] pt-14">
            <Stats />
          </div>
        </Container>
      </section>

      {/* Werte */}
      <section className="bg-[var(--color-mist)] section-y">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Unser Anspruch</Eyebrow>
            <h2 className="h-section mt-5">Worauf sich unsere Kunden verlassen</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {vorteile.map((v, i) => (
              <div key={v.title} className={`card reveal reveal-d${(i % 4) + 1} p-7`}>
                <span className="font-display text-2xl font-bold text-[var(--color-brand-400)]">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-[var(--color-steel)]">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Standort */}
      <section className="section-y">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <Eyebrow>Standort</Eyebrow>
              <h2 className="h-section mt-5">Im Technologie-Standort Brackenheim</h2>
              <p className="mt-6 text-[var(--color-steel)]">
                Unser Sitz in Brackenheim-Hausen liegt mitten in einem starken Cluster der Präzisions- und Maschinenbaubranche.
                Kurze Wege zu Partnern, qualifizierte Fachkräfte und die Nähe zur süddeutschen Industrie sind Teil unserer Stärke.
              </p>
              <dl className="mt-8 space-y-3 text-sm">
                <div className="flex gap-3"><dt className="w-28 shrink-0 font-semibold">Adresse</dt><dd className="text-[var(--color-steel)]">{company.address.street}, {company.address.zip} {company.address.city}</dd></div>
                <div className="flex gap-3"><dt className="w-28 shrink-0 font-semibold">Telefon</dt><dd className="text-[var(--color-steel)]">{company.phone}</dd></div>
                <div className="flex gap-3"><dt className="w-28 shrink-0 font-semibold">E-Mail</dt><dd className="text-[var(--color-steel)]">{company.email}</dd></div>
                <div className="flex gap-3"><dt className="w-28 shrink-0 font-semibold">Öffnungszeiten</dt><dd className="text-[var(--color-steel)]">{company.hours}</dd></div>
              </dl>
              <ButtonLink href="/kontakt" variant="primary" className="mt-8">Kontakt aufnehmen <ArrowRight /></ButtonLink>
            </div>
            <div className="img-zoom reveal reveal-d1 relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src="/img/branche-elektronik.jpg" alt="Präzisionsbauteile" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
