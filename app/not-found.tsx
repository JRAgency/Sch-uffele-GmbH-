import Link from "next/link";
import { Container, ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-[var(--color-ink)] text-white">
      <Container>
        <span className="font-display text-7xl font-bold text-[var(--color-brand-400)]">404</span>
        <h1 className="h-section mt-4">Seite nicht gefunden</h1>
        <p className="mt-4 max-w-md text-white/70">
          Die aufgerufene Seite existiert nicht. Kehren Sie zur Startseite zurück oder sehen Sie sich unsere Leistungen an.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="on-dark">Zur Startseite</ButtonLink>
          <Link href="/leistungen" className="btn btn--ghost-dark">Leistungen</Link>
        </div>
      </Container>
    </section>
  );
}
