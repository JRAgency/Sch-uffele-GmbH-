import Link from "next/link";
import Logo from "./Logo";
import { company, services, agency } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-ink)] text-white">
      <div className="container-x relative z-10 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="h-12">
              <Logo variant="dark" className="h-full" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Familiengeführter Werkzeug- und Formenbau aus Brackenheim. Präzisions-Spritzgießwerkzeuge
              für Thermo- und Duroplaste — mit Herzblut bei der Sache.
            </p>
          </div>

          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/40">Leistungen</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/leistungen/${s.slug}`} className="text-sm text-white/70 transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/40">Unternehmen</h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/unternehmen" className="text-sm text-white/70 transition-colors hover:text-white">Über uns</Link></li>
              <li><Link href="/#branchen" className="text-sm text-white/70 transition-colors hover:text-white">Branchen</Link></li>
              <li><Link href="/kontakt" className="text-sm text-white/70 transition-colors hover:text-white">Kontakt</Link></li>
              <li><Link href="/impressum" className="text-sm text-white/70 transition-colors hover:text-white">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-sm text-white/70 transition-colors hover:text-white">Datenschutz</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/40">Kontakt</h3>
            <address className="mt-4 space-y-3 text-sm not-italic text-white/70">
              <p>
                {company.address.street}<br />
                {company.address.zip} {company.address.city}
              </p>
              <p>
                <a href={`tel:${company.phoneHref}`} className="block transition-colors hover:text-white">
                  Tel. {company.phone}
                </a>
                <a href={`mailto:${company.email}`} className="block transition-colors hover:text-white">
                  {company.email}
                </a>
              </p>
              <p className="text-white/50">{company.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {company.name} · {company.claim}</p>
          <p>
            Demo erstellt von{" "}
            <a href={agency.url} className="text-white/60 transition-colors hover:text-white">
              {agency.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
