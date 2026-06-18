import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container-x ${className}`}>{children}</div>;
}

export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return <span className={`eyebrow ${onDark ? "on-dark" : ""}`}>{children}</span>;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "accent" | "outline" | "on-dark" | "ghost-dark";
  className?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const cls = `btn btn--${variant} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function SpecTable({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="overflow-hidden rounded-2xl border border-[var(--color-line)]">
      {rows.map((r, i) => (
        <div
          key={r.label}
          className={`flex items-center justify-between gap-4 px-5 py-4 ${
            i % 2 === 0 ? "bg-[var(--color-mist)]" : "bg-white"
          }`}
        >
          <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-steel)]">
            {r.label}
          </dt>
          <dd className="text-right text-sm font-medium text-[var(--color-ink)]">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
