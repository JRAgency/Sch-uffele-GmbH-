import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Container, ButtonLink, ArrowRight } from "@/components/ui";
import { services, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leistungen — Werkzeug- und Formenbau",
  description:
    "Spritzgießwerkzeuge, Konstruktion, Präzisionsfräsen, Erodieren, Montage und Bemusterung sowie Wartung — alle Leistungen der Schäuffele GmbH im Überblick.",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Vom Konzept bis zum abgemusterten Serienwerkzeug"
        intro="Alle Schritte der Werkzeugentstehung in eigener Hand — präzise aufeinander abgestimmt."
      />

      <section className="section-y">
        <Container>
          <div className="space-y-6">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/leistungen/${s.slug}`}
                className="card reveal group grid items-stretch overflow-hidden md:grid-cols-[0.9fr_1.4fr]"
              >
                <div className="img-zoom relative aspect-[16/11] md:aspect-auto">
                  <Image src={s.image} alt={s.title} fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center p-7 lg:p-10">
                  <span className="font-display text-sm font-bold text-[var(--color-brand-400)]">{s.no}</span>
                  <h2 className="mt-2 font-display text-2xl font-bold lg:text-3xl">{s.title}</h2>
                  <p className="mt-3 max-w-xl text-[var(--color-steel)]">{s.intro}</p>
                  <span className="link-arrow mt-6">
                    Details ansehen <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-brand-700)] text-white">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 py-14 lg:flex-row lg:items-center">
            <h2 className="h-section max-w-xl">Welches Werkzeug brauchen Sie?</h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/kontakt" variant="on-dark">Anfrage stellen <ArrowRight /></ButtonLink>
              <ButtonLink href={`tel:${company.phoneHref}`} variant="ghost-dark">{company.phone}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
