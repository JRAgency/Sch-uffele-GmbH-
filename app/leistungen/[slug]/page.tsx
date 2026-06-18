import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { Container, ButtonLink, ArrowRight, SpecTable } from "@/components/ui";
import { services, company } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} — ${s.short}`,
    description: s.excerpt,
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={`Leistung ${s.no}`} title={s.title} intro={s.short} />

      <section className="section-y">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div className="reveal">
              <div className="img-zoom relative aspect-[16/10] overflow-hidden rounded-3xl">
                <Image src={s.image} alt={s.title} fill sizes="(max-width:1024px) 100vw, 60vw" priority className="object-cover" />
              </div>
              <p className="mt-8 text-lg leading-relaxed text-[var(--color-ink)]">{s.intro}</p>

              <h2 className="mt-10 font-display text-xl font-bold">Das leisten wir konkret</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[var(--color-steel)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                      <circle cx="12" cy="12" r="11" fill="var(--color-brand-50)" />
                      <path d="M7 12l3.2 3.2L17 8.5" stroke="var(--color-brand-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <aside className="reveal reveal-d1 lg:sticky lg:top-28 lg:self-start">
              {s.specs && (
                <>
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-[var(--color-steel)]">
                    Eckdaten
                  </h3>
                  <div className="mt-4">
                    <SpecTable rows={s.specs} />
                  </div>
                </>
              )}
              <div className="mt-6 rounded-3xl bg-[var(--color-ink)] p-7 text-white">
                <h3 className="font-display text-xl font-bold">Projekt besprechen</h3>
                <p className="mt-2 text-sm text-white/70">
                  Schicken Sie uns Ihr Bauteil — wir bewerten Machbarkeit und Werkzeugkonzept.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <ButtonLink href="/kontakt" variant="on-dark">Anfrage stellen <ArrowRight /></ButtonLink>
                  <a href={`tel:${company.phoneHref}`} className="text-center text-sm font-medium text-white/80 transition-colors hover:text-white">
                    oder anrufen: {company.phone}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="bg-[var(--color-mist)] section-y">
        <Container>
          <h2 className="h-section reveal">Weitere Leistungen</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Link key={r.slug} href={`/leistungen/${r.slug}`} className={`card reveal reveal-d${i + 1} group overflow-hidden`}>
                <div className="img-zoom relative aspect-[16/10]">
                  <Image src={r.image} alt={r.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-steel)]">{r.excerpt}</p>
                  <span className="link-arrow mt-4">Mehr <ArrowRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
