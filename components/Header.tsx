"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { nav, company } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  const pathname = usePathname();
  const onDark = !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSub(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,padding] duration-500`}
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.86)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(12,20,34,0.08)" : "none",
      }}
    >
      <div className="container-x flex items-center justify-between" style={{ paddingBlock: scrolled ? "0.7rem" : "1.1rem" }}>
        <div style={{ height: scrolled ? "44px" : "52px" }} className="transition-[height] duration-500">
          <Logo variant={onDark ? "dark" : "light"} className="h-full" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  onDark ? "text-white/90 hover:text-white" : "text-[var(--color-ink)] hover:text-[var(--color-brand-600)]"
                }`}
              >
                {item.label}
                {item.children && item.children.length > 0 && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </Link>
              {item.children && item.children.length > 0 && (
                <div className="invisible absolute left-0 top-full w-64 translate-y-2 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white p-2 shadow-[0_30px_60px_-30px_rgba(12,20,34,0.35)]">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-[var(--color-ink)] transition-colors hover:bg-[var(--color-mist)] hover:text-[var(--color-brand-600)]"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phoneHref}`}
            className={`text-sm font-medium transition-colors ${
              onDark ? "text-white/80 hover:text-white" : "text-[var(--color-steel)] hover:text-[var(--color-brand-600)]"
            }`}
          >
            {company.phone}
          </a>
          <Link href="/kontakt" className={`btn ${onDark ? "btn--on-dark" : "btn--primary"}`}>
            Anfrage stellen
          </Link>
        </div>

        {/* Burger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 h-0.5 w-6 transition-all duration-300 ${onDark ? "bg-white" : "bg-[var(--color-ink)]"} ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-6 transition-all duration-300 ${onDark ? "bg-white" : "bg-[var(--color-ink)]"} ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-6 transition-all duration-300 ${onDark ? "bg-white" : "bg-[var(--color-ink)]"} ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-white transition-transform duration-500 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ paddingTop: "5rem" }}
      >
        <div className="container-x flex h-full flex-col overflow-y-auto pb-10">
          <nav className="flex flex-col divide-y divide-[var(--color-line)]">
            {nav.map((item) => (
              <div key={item.href} className="py-1">
                {item.children && item.children.length > 0 ? (
                  <>
                    <button
                      onClick={() => setSub((s) => (s === item.href ? null : item.href))}
                      className="flex w-full items-center justify-between py-3 text-left font-display text-lg font-semibold uppercase tracking-tight"
                    >
                      {item.label}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={`transition-transform ${sub === item.href ? "rotate-180" : ""}`}>
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                    {sub === item.href && (
                      <div className="flex flex-col gap-1 pb-3 pl-1">
                        <Link href={item.href} className="py-1.5 text-sm font-medium text-[var(--color-brand-600)]">
                          Übersicht
                        </Link>
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} className="py-1.5 text-sm text-[var(--color-steel)]">
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="block py-3 font-display text-lg font-semibold uppercase tracking-tight">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <a href={`tel:${company.phoneHref}`} className="btn btn--outline">
              {company.phone}
            </a>
            <Link href="/kontakt" className="btn btn--primary">
              Anfrage stellen
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
