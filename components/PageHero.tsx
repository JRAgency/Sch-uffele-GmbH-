import { Container, Eyebrow } from "./ui";
import { company } from "@/lib/site";

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
    <section className="relative overflow-hidden bg-[var(--color-ink)] pt-36 pb-16 text-white lg:pt-44 lg:pb-24">
      <div aria-hidden className="glow-blob" style={{ width: 460, height: 460, top: -180, right: "-4%", background: "var(--color-brand-700)" }} />
      <div aria-hidden className="glow-blob" style={{ width: 300, height: 300, bottom: -160, left: "-6%", background: "var(--color-brand-900)" }} />

      <Container className="relative z-10">
        {/* Editorial-Split: Titel links, Intro rechts — füllt Ultrawide gezielt */}
        <div className="grid items-end gap-x-16 gap-y-7 lg:grid-cols-[1.45fr_1fr]">
          <div className="reveal">
            <Eyebrow onDark>{eyebrow}</Eyebrow>
            <h1 className="h-section mt-5 max-w-4xl">{title}</h1>
          </div>

          {intro ? (
            <p className="reveal reveal-d1 text-lg leading-relaxed text-white/70 lg:border-l lg:border-white/15 lg:pb-2 lg:pl-8">
              {intro}
            </p>
          ) : (
            <div className="reveal reveal-d1 hidden items-end justify-end lg:flex lg:pb-2">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/35">
                {company.short} · {company.address.city}
              </span>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
