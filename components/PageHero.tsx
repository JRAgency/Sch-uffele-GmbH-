import { Container, Eyebrow } from "./ui";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] pt-36 pb-16 text-white lg:pt-44 lg:pb-20">
      <div aria-hidden className="glow-blob" style={{ width: 380, height: 380, top: -140, right: -60, background: "var(--color-brand-700)" }} />
      <Container className="relative z-10">
        <div className="reveal">
          <Eyebrow onDark>{eyebrow}</Eyebrow>
        </div>
        <h1 className="h-section reveal reveal-d1 mt-5 max-w-4xl">{title}</h1>
        {intro && <p className="reveal reveal-d2 mt-6 max-w-2xl text-lg text-white/70">{intro}</p>}
      </Container>
    </section>
  );
}
