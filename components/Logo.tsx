import Link from "next/link";

/**
 * Schäuffele-Logo als SVG nachgebaut (Original = blaues Quadrat-Emblem
 * mit stilisiertem Monogramm + Wortmarke "Schäuffele GmbH").
 * variant "light" = für helle Hintergründe, "dark" = für dunkle.
 */
export default function Logo({
  variant = "light",
  className = "",
  emblemOnly = false,
}: {
  variant?: "light" | "dark";
  className?: string;
  emblemOnly?: boolean;
}) {
  const wordColor = variant === "dark" ? "#ffffff" : "#1f3a6e";
  const subColor = variant === "dark" ? "rgba(255,255,255,0.7)" : "#5d6b80";

  const Emblem = (
    <svg
      viewBox="0 0 64 64"
      className="h-full w-auto shrink-0"
      role="img"
      aria-label="Schäuffele"
    >
      <rect x="2" y="2" width="60" height="60" rx="10" fill="#1f3a6e" />
      <rect x="2" y="2" width="60" height="60" rx="10" fill="none" stroke="#2f5fb0" strokeWidth="1.5" />
      {/* zwei vertikale Balken (Werkzeug-Schäfte) */}
      <rect x="15" y="16" width="5.5" height="32" rx="2" fill="#ffffff" />
      <rect x="24" y="16" width="5.5" height="32" rx="2" fill="#8aa9dc" />
      {/* stilisiertes S */}
      <path
        d="M49 19.5c-2.6-1.6-9.6-2.2-11.4 1.6-1.9 4 2.2 5.3 5.6 6.1 3.4.8 7.6 2 5.6 6.2-1.9 3.9-9 3.2-11.6 1.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );

  if (emblemOnly) {
    return <span className={`block ${className}`}>{Emblem}</span>;
  }

  return (
    <Link href="/" aria-label="Schäuffele GmbH — Startseite" className={`flex items-center gap-3 ${className}`}>
      <span className="block h-full">{Emblem}</span>
      <span className="flex flex-col justify-center leading-none">
        <span
          className="font-display font-bold tracking-tight"
          style={{ color: wordColor, fontSize: "1.18em", lineHeight: 1 }}
        >
          Schäuffele
        </span>
        <span
          className="font-medium uppercase"
          style={{
            color: subColor,
            fontSize: "0.46em",
            letterSpacing: "0.18em",
            marginTop: "0.28em",
          }}
        >
          Werkzeug- und Formenbau
        </span>
      </span>
    </Link>
  );
}
