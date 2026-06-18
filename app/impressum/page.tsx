import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/ui";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Schäuffele GmbH, Werkzeug- und Formenbau, Brackenheim.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <section className="section-y">
        <Container>
          <div className="prose-block mx-auto max-w-3xl space-y-10 text-[var(--color-ink)]">
            <Block title="Angaben gemäß § 5 DDG">
              <p>
                {company.name}<br />
                {company.claim}<br />
                {company.address.street}<br />
                {company.address.zip} {company.address.city}<br />
                {company.address.country}
              </p>
            </Block>

            <Block title="Vertreten durch">
              <p>Geschäftsführer: {company.ceo}</p>
            </Block>

            <Block title="Kontakt">
              <p>
                Telefon: {company.phone}<br />
                Fax: {company.fax}<br />
                E-Mail: {company.email}
              </p>
            </Block>

            <Block title="Registereintrag">
              <p>
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Stuttgart<br />
                Registernummer: HRB 320615
              </p>
            </Block>

            <Block title="Umsatzsteuer-ID">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                {company.vatId}
              </p>
            </Block>

            <Block title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
              <p>
                {company.ceo}<br />
                {company.address.street}, {company.address.zip} {company.address.city}
              </p>
            </Block>

            <Block title="EU-Streitschlichtung">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" className="text-[var(--color-brand-600)] underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="mt-3">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </Block>

            <p className="text-sm text-[var(--color-steel)]">
              {/* TODO Kunde: Angaben final prüfen (Registernummer, verantwortliche Person, ggf. weitere Gesellschaften). */}
              Hinweis: Bitte vor Veröffentlichung alle Angaben durch den Auftraggeber prüfen lassen.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="reveal">
      <h2 className="font-display text-xl font-bold">{title}</h2>
      <div className="mt-3 leading-relaxed text-[var(--color-steel)]">{children}</div>
    </div>
  );
}
