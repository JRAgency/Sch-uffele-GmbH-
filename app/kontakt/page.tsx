import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/ui";
import InquiryForm from "@/components/InquiryForm";
import ConsentMap from "@/components/ConsentMap";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Anfrage",
  description:
    "Kontaktieren Sie die Schäuffele GmbH in Brackenheim — per Anfrageformular, Telefon oder E-Mail. Wir bewerten Ihr Werkzeugprojekt persönlich.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen wir über Ihr Werkzeug"
        intro="Stellen Sie Ihre Anfrage in wenigen Schritten — oder rufen Sie uns direkt an."
      />

      <section className="section-y">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            {/* Form */}
            <div className="reveal">
              <InquiryForm />
            </div>

            {/* Contact details */}
            <div className="reveal reveal-d1 space-y-6">
              <div className="card p-7">
                <h2 className="font-display text-xl font-bold">Direkter Draht</h2>
                <div className="mt-5 space-y-4 text-sm">
                  <ContactRow label="Telefon">
                    <a href={`tel:${company.phoneHref}`} className="font-medium text-[var(--color-brand-700)] hover:underline">{company.phone}</a>
                  </ContactRow>
                  <ContactRow label="Fax">{company.fax}</ContactRow>
                  <ContactRow label="E-Mail">
                    <a href={`mailto:${company.email}`} className="font-medium text-[var(--color-brand-700)] hover:underline">{company.email}</a>
                  </ContactRow>
                  <ContactRow label="Adresse">
                    {company.address.street}<br />
                    {company.address.zip} {company.address.city}
                  </ContactRow>
                  <ContactRow label="Zeiten">{company.hours}</ContactRow>
                </div>
              </div>

              <div className="card overflow-hidden">
                <div className="aspect-[4/3] w-full">
                  <ConsentMap />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="w-20 shrink-0 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-steel)]">{label}</span>
      <span className="text-[var(--color-ink)]">{children}</span>
    </div>
  );
}
