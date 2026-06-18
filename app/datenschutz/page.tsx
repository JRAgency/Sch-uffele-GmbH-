import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/ui";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zum Datenschutz bei der Schäuffele GmbH gemäß DSGVO.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <section className="section-y">
        <Container>
          <div className="mx-auto max-w-3xl space-y-9">
            <p className="rounded-2xl bg-[var(--color-mist)] p-5 text-sm text-[var(--color-steel)]">
              {/* TODO Kunde: Vor Launch durch Datenschutzbeauftragten/Anwalt prüfen lassen. Dies ist eine Demo-Vorlage. */}
              Hinweis: Diese Datenschutzerklärung ist eine Vorlage für die Demo und vor Veröffentlichung rechtlich zu prüfen.
            </p>

            <Block title="1. Verantwortlicher">
              <p>
                {company.name}, {company.address.street}, {company.address.zip} {company.address.city}<br />
                Geschäftsführer: {company.ceo}<br />
                Telefon: {company.phone} · E-Mail: {company.email}
              </p>
            </Block>

            <Block title="2. Allgemeines zur Datenverarbeitung">
              <p>
                Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung
                einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Rechtsgrundlagen
                sind insbesondere Art. 6 Abs. 1 lit. a, b und f DSGVO.
              </p>
            </Block>

            <Block title="3. Hosting & Server-Logfiles">
              <p>
                Beim Aufruf dieser Website werden durch den Hosting-Provider automatisch Informationen in Server-Logfiles
                gespeichert (z. B. IP-Adresse, Datum/Uhrzeit, abgerufene Datei, Browsertyp). Dies dient der technischen
                Bereitstellung und Sicherheit (Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden nicht mit anderen Datenquellen
                zusammengeführt.
              </p>
            </Block>

            <Block title="4. Schriftarten (lokal gehostet)">
              <p>
                Diese Website nutzt Schriftarten, die lokal auf dem Server eingebunden sind. Es erfolgt dabei{" "}
                <strong>keine</strong> Verbindung zu Servern Dritter (z. B. Google Fonts). Ihre IP-Adresse wird hierfür
                nicht an Dritte übertragen.
              </p>
            </Block>

            <Block title="5. Kontaktaufnahme / Anfrageformular">
              <p>
                Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung
                der Anfrage (Art. 6 Abs. 1 lit. b und f DSGVO). Das Anfrageformular dieser Seite erstellt eine E-Mail in
                Ihrem eigenen E-Mail-Programm — es werden keine Formulardaten ohne Ihr Zutun an uns übertragen. Wir löschen
                die Daten, sobald sie für die Zweckerreichung nicht mehr erforderlich sind.
              </p>
            </Block>

            <Block title="6. Cookies">
              <p>
                Wir setzen nur technisch notwendige Cookies bzw. vergleichbare Speichertechniken (z. B. zum Speichern Ihrer
                Cookie-Entscheidung im lokalen Speicher Ihres Browsers) ein. Ein Tracking findet nicht statt.
              </p>
            </Block>

            <Block title="7. Google Maps (consent-basiert)">
              <p>
                Auf der Kontaktseite binden wir eine Karte von Google Maps ein. Die Karte wird{" "}
                <strong>erst nach Ihrer ausdrücklichen Zustimmung</strong> geladen. Erst dann werden Daten (u. a. Ihre
                IP-Adresse) an Google übertragen. Anbieter ist Google Ireland Limited. Weitere Informationen finden Sie in
                der Datenschutzerklärung von Google.
              </p>
            </Block>

            <Block title="8. Ihre Rechte">
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
                Datenübertragbarkeit sowie Widerspruch. Zudem steht Ihnen ein Beschwerderecht bei einer
                Datenschutz-Aufsichtsbehörde zu.
              </p>
            </Block>
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
