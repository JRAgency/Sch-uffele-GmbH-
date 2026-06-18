import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, ButtonLink, ArrowRight } from "@/components/ui";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import { services, branchen, prozess, vorteile, company, family } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[94svh] items-center overflow-hidden bg-[var(--color-ink)]">
        <div className="absolute inset-0">
          <Image
            src="/img/hero-welding.jpg"
            alt="Präzisionsbearbeitung im Werkzeug- und Formenbau"
            fill
            priority
            sizes="100vw"
            className="ken-burns object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/55 to-[var(--color-brand-950)]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-950)]/85 via-[var(--color-ink)]/40 to-transparent" />
        </div>

        <Container className="relative z-10 pt-32 pb-16 lg:pb-20">
          <div className="grid items-center gap-12 xl:grid-cols-[1.55fr_0.95fr]">
            {/* Text */}
            <div className="max-w-2xl">
              <div className="reveal">
                <Eyebrow onDark>Familiengeführter Werkzeug- und Formenbau · Brackenheim</Eyebrow>
              </div>
              <h1 className="h-hero reveal reveal-d1 mt-6 text-white">
                Werkzeuge, die{" "}
                <span className="text-[var(--color-brand-300)]">Präzision</span> in Serie bringen.
              </h1>
              <p className="reveal reveal-d2 mt-7 max-w-xl text-lg leading-relaxed text-white/75">
                {company.tagline}
              </p>
              <div className="reveal reveal-d3 mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/kontakt" variant="on-dark">
                  Anfrage stellen <ArrowRight />
                </ButtonLink>
                <ButtonLink href="/leistungen" variant="ghost-dark">
                  Unsere Leistungen
                </ButtonLink>
              </div>

              {/* Quick facts */}
              <div className="reveal reveal-d4 mt-12 grid max-w-2xl gap-x-10 gap-y-4 border-t border-white/10 pt-7 text-sm text-white/70 sm:grid-cols-3">
                <span><span className="block font-semibold text-white">Thermo- & Duroplast</span>beide Werkstoffwelten</span>
                <span><span className="block font-semibold text-white">Elektronik & Automotive</span>unsere Branchen</span>
                <span><span className="block font-semibold text-white">Alles aus einer Hand</span>von CAD bis Bemusterung</span>
              </div>
            </div>

            {/* Persönliche Karte — füllt Ultrawide, macht es nahbar */}
            <aside className="reveal reveal-d3 hidden xl:block">
              <div className="rounded-[1.75rem] border border-white/15 bg-white/[0.06] p-8 backdrop-blur-md">
                <span className="signature text-[2.6rem] text-[var(--color-brand-300)]">{family.heroBadge}</span>
                <p className="mt-3 text-lg leading-relaxed text-white/85">{family.heroNote}</p>
                <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                  <a href={`tel:${company.phoneHref}`} className="flex items-center gap-3 text-white transition-colors hover:text-[var(--color-brand-300)]">
                    <PhoneIcon /> <span className="font-semibold">{company.phone}</span>
                  </a>
                  <p className="flex items-center gap-3 text-sm text-white/60">
                    <ClockIcon /> {company.hours}
                  </p>
                  <p className="flex items-center gap-3 text-sm text-white/60">
                    <PinIcon /> {company.address.zip} {company.address.city}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Marquee />

      {/* ============ LEISTUNGEN ============ */}
      <section className="section-y" id="leistungen">
        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div className="reveal">
              <Eyebrow>Leistungen</Eyebrow>
              <h2 className="h-section mt-5 max-w-2xl text-balance">
                Die komplette Werkzeugentstehung unter einem Dach
              </h2>
            </div>
            <p className="reveal reveal-d1 text-[var(--color-steel)] lg:pb-2">
              Von der ersten Bauteilbewertung bis zum abgemusterten Serienwerkzeug — wir liefern jeden Schritt
              in eigener Hand und behalten Maßhaltigkeit, Standzeit und Termine im Blick.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/leistungen/${s.slug}`}
                className={`card reveal reveal-d${(i % 3) + 1} group flex flex-col overflow-hidden`}
              >
                <div className="img-zoom relative aspect-[16/10] w-full">
                  <Image src={s.image} alt={s.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-display text-xs font-bold tracking-wider text-[var(--color-brand-700)]">
                    {s.no}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-500)]">
                    {s.short}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-steel)]">{s.excerpt}</p>
                  <span className="link-arrow mt-5">
                    Mehr erfahren <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ ÜBER UNS + STATS ============ */}
      <section className="bg-[var(--color-mist)] section-y">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="img-zoom reveal relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src="/img/konstruktion.jpg" alt="Konstruktion und Messen im Werkzeugbau" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="reveal reveal-d1">
              <Eyebrow>Unternehmen</Eyebrow>
              <h2 className="h-section mt-5">Wir bauen jedes Werkzeug, als wäre es unseres</h2>
              <p className="mt-6 text-[var(--color-steel)]">
                Die Schäuffele GmbH plant, entwickelt und fertigt Präzisions-Spritzgießwerkzeuge am Standort
                Brackenheim — Konstruktion, Zerspanung, Erodieren, Montage und Bemusterung unter einem Dach.
                Als familiengeführter Betrieb stehen wir mit unserem Namen für jedes Werkzeug gerade.
              </p>
              <p className="mt-4 text-[var(--color-steel)]">
                Vom Steckverbinder für die Elektronik bis zum Bauteil für die Automobilzulieferer: Unsere Kunden
                bekommen kurze Wege, ehrliche Beratung und Werkzeuge, die über viele Serien zuverlässig laufen —
                bei Thermoplast wie bei Duroplast.
              </p>
              <ButtonLink href="/unternehmen" variant="outline" className="mt-8">
                Mehr über uns <ArrowRight />
              </ButtonLink>
            </div>
          </div>

          <div className="reveal mt-20 border-t border-[var(--color-line)] pt-14">
            <Stats />
          </div>
        </Container>
      </section>

      {/* ============ PROZESS ============ */}
      <section className="section-y">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Ablauf</Eyebrow>
            <h2 className="h-section mt-5">In fünf Schritten zum Serienwerkzeug</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {prozess.map((p, i) => (
              <div key={p.no} className={`reveal reveal-d${(i % 5) + 1} group rounded-2xl border border-[var(--color-line)] p-6 transition-colors duration-500 hover:border-transparent hover:bg-[var(--color-brand-700)]`}>
                <span className="font-display text-3xl font-bold text-[var(--color-brand-300)] transition-colors group-hover:text-white/50">
                  {p.no}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold transition-colors group-hover:text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-steel)] transition-colors group-hover:text-white/75">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ BRANCHEN (dark) ============ */}
      <section id="branchen" className="relative overflow-hidden bg-[var(--color-ink)] section-y text-white">
        <div aria-hidden className="glow-blob" style={{ width: 420, height: 420, top: -120, right: -80, background: "var(--color-brand-600)" }} />
        <div aria-hidden className="glow-blob" style={{ width: 360, height: 360, bottom: -120, left: -100, background: "var(--color-brand-800)" }} />
        <Container className="relative z-10">
          <div className="reveal max-w-2xl">
            <Eyebrow onDark>Branchen</Eyebrow>
            <h2 className="h-section mt-5">Werkzeuge für anspruchsvolle Märkte</h2>
            <p className="mt-6 text-white/70">
              Wo Bauteile höchste Maßhaltigkeit und Serienstabilität brauchen, sind unsere Werkzeuge zu Hause.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {branchen.map((b, i) => (
              <div key={b.slug} className={`reveal reveal-d${i + 1} img-zoom group relative overflow-hidden rounded-3xl`}>
                <div className="relative aspect-[16/10] w-full">
                  <Image src={b.image} alt={b.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/50 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-2xl font-bold">{b.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-white/75">{b.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {b.points.map((pt) => (
                      <span key={pt} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ PERSÖNLICH / FAMILIE ============ */}
      <section className="bg-[var(--color-cream)] section-y">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="reveal relative">
              <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(12,20,34,0.4)]">
                <Image src="/img/ingenieurin-pruefung.jpg" alt="Präzisionsmessung von Hand im Werkzeugbau" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-4 hidden rounded-2xl bg-[var(--color-brand-700)] px-6 py-4 text-white shadow-xl sm:block">
                <div className="signature text-2xl leading-none text-[var(--color-brand-200)]">seit der ersten Form</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-white/70">mit Herzblut dabei</div>
              </div>
            </div>

            <div className="reveal reveal-d1">
              <Eyebrow>Familienbetrieb</Eyebrow>
              <blockquote className="pull-quote mt-6 text-[var(--color-ink)]">
                <span className="text-[var(--color-brand-400)]">„</span>
                {family.quote}
                <span className="text-[var(--color-brand-400)]">"</span>
              </blockquote>
              <div className="mt-8 flex items-end gap-5">
                <span className="signature text-[3.2rem] text-[var(--color-brand-700)]">{family.signature}</span>
                <span className="mb-2 text-sm font-medium text-[var(--color-steel)]">{family.role}</span>
              </div>
              <p className="mt-6 max-w-xl text-[var(--color-steel)]">{family.body}</p>
              <ButtonLink href="/unternehmen" variant="primary" className="mt-8">
                {family.cta} <ArrowRight />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ VORTEILE ============ */}
      <section className="section-y">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div className="reveal">
              <Eyebrow>Warum Schäuffele</Eyebrow>
              <h2 className="h-section mt-5">Gründe, die in der Serie zählen</h2>
              <p className="mt-6 text-[var(--color-steel)]">
                Ein Werkzeug ist eine Investition über Jahre. Diese Stärken machen den Unterschied.
              </p>
            </div>
            <div className="divide-y divide-[var(--color-line)]">
              {vorteile.map((v, i) => (
                <div key={v.title} className={`reveal reveal-d${(i % 4) + 1} flex gap-6 py-6 first:pt-0`}>
                  <span className="font-display text-sm font-bold text-[var(--color-brand-400)]">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{v.title}</h3>
                    <p className="mt-2 text-[var(--color-steel)]">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-[var(--color-brand-700)] text-white">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center lg:py-20">
            <div className="reveal max-w-2xl">
              <h2 className="h-section">Sie haben ein Bauteil — wir bauen das Werkzeug dazu.</h2>
              <p className="mt-4 text-white/80">
                Senden Sie uns Ihre Anfrage oder rufen Sie an. Wir bewerten Ihr Projekt offen und technisch fundiert.
              </p>
            </div>
            <div className="reveal reveal-d1 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/kontakt" variant="on-dark">
                Anfrage stellen <ArrowRight />
              </ButtonLink>
              <ButtonLink href={`tel:${company.phoneHref}`} variant="ghost-dark">
                {company.phone}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
      <path d="M6.5 3h3l1.5 5-2 1.2a12 12 0 005.8 5.8l1.2-2 5 1.5v3a2 2 0 01-2.2 2A17 17 0 014.5 5.2 2 2 0 016.5 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
      <path d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
