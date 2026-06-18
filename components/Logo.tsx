import Link from "next/link";
import Image from "next/image";

/**
 * Offizielles Schäuffele-Logo (aus Original extrahiert, freigestellt).
 * variant "light" = blaues Logo für helle Hintergründe,
 * variant "dark"  = weißes Logo für dunkle Hintergründe (Hero-Header, Footer).
 */
export default function Logo({
  variant = "light",
  className = "",
  priority = false,
}: {
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
}) {
  const src = variant === "dark" ? "/logo-white.png" : "/logo.png";
  return (
    <Link href="/" aria-label="Schäuffele GmbH — Startseite" className={`inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt="Schäuffele GmbH — Werkzeug- und Formenbau"
        width={370}
        height={96}
        priority={priority}
        className="h-full w-auto"
        style={{ height: "100%", width: "auto" }}
      />
    </Link>
  );
}
