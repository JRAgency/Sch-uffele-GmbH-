"use client";

import { useState } from "react";
import { company, services } from "@/lib/site";

const intents = ["Angebot", "Rückruf", "Beratungstermin", "Allgemeine Frage"];
const werkstoffe = ["Thermoplast", "Duroplast", "Noch offen / Beratung"];

export default function InquiryForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const [intent, setIntent] = useState("Angebot");
  const [bereiche, setBereiche] = useState<string[]>([]);
  const [werkstoff, setWerkstoff] = useState("");
  const [stueck, setStueck] = useState("");
  const [nachricht, setNachricht] = useState("");

  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [firma, setFirma] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [ort, setOrt] = useState("");
  const [datenschutz, setDatenschutz] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const canSubmit = vorname && nachname && emailValid && datenschutz;

  const toggleBereich = (b: string) =>
    setBereiche((prev) => (prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]));

  const submit = () => {
    if (!canSubmit) return;
    const body = [
      `Anliegen: ${intent}`,
      `Leistungsbereiche: ${bereiche.join(", ") || "—"}`,
      `Werkstoff: ${werkstoff || "—"}`,
      `Stückzahl/Jahr: ${stueck || "—"}`,
      "",
      "Nachricht:",
      nachricht || "—",
      "",
      "— Kontakt —",
      `Name: ${vorname} ${nachname}`,
      `Firma: ${firma || "—"}`,
      `Telefon: ${telefon || "—"}`,
      `E-Mail: ${email}`,
      `Ort: ${ort || "—"}`,
    ].join("\n");
    const url = `mailto:${company.email}?subject=${encodeURIComponent(
      `Anfrage (${intent}) – ${firma || vorname + " " + nachname}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setDone(true);
  };

  if (done) {
    return (
      <div className="card p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-brand-50)]">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="var(--color-brand-600)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold">Vielen Dank!</h3>
        <p className="mx-auto mt-3 max-w-md text-[var(--color-steel)]">
          Ihr E-Mail-Programm öffnet sich mit der vorausgefüllten Anfrage. Wir melden uns kurzfristig bei Ihnen.
        </p>
        <button
          onClick={() => {
            setDone(false);
            setStep(1);
          }}
          className="btn btn--outline mt-7"
        >
          Neue Anfrage starten
        </button>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-9">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-steel)]">
          <span className={step >= 1 ? "text-[var(--color-brand-600)]" : ""}>1 · Anliegen</span>
          <span className={step >= 2 ? "text-[var(--color-brand-600)]" : ""}>2 · Projekt</span>
          <span className={step >= 3 ? "text-[var(--color-brand-600)]" : ""}>3 · Kontakt</span>
        </div>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-[var(--color-mist-2)]">
          <div
            className="h-full rounded-full bg-[var(--color-brand-600)] transition-[width] duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-7">
          <div>
            <label className="mb-3 block text-sm font-semibold">Worum geht es?</label>
            <div className="flex flex-wrap gap-2">
              {intents.map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIntent(i)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    intent === i
                      ? "border-[var(--color-brand-600)] bg-[var(--color-brand-50)] text-[var(--color-brand-700)]"
                      : "border-[var(--color-line)] text-[var(--color-steel)] hover:border-[var(--color-brand-300)]"
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-3 block text-sm font-semibold">Welche Leistungen interessieren Sie? (Mehrfachauswahl)</label>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => toggleBereich(s.title)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    bereiche.includes(s.title)
                      ? "border-[var(--color-brand-600)] bg-[var(--color-brand-50)] text-[var(--color-brand-700)]"
                      : "border-[var(--color-line)] text-[var(--color-steel)] hover:border-[var(--color-brand-300)]"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div>
            <label className="mb-3 block text-sm font-semibold">Werkstoff</label>
            <div className="flex flex-wrap gap-2">
              {werkstoffe.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWerkstoff(w)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    werkstoff === w
                      ? "border-[var(--color-brand-600)] bg-[var(--color-brand-50)] text-[var(--color-brand-700)]"
                      : "border-[var(--color-line)] text-[var(--color-steel)] hover:border-[var(--color-brand-300)]"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold" htmlFor="stueck">Geplante Stückzahl / Jahr (optional)</label>
            <input id="stueck" className="field" value={stueck} onChange={(e) => setStueck(e.target.value)} placeholder="z. B. 250.000 Teile" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold" htmlFor="nachricht">Ihre Nachricht</label>
            <textarea
              id="nachricht"
              className="field min-h-32 resize-y"
              value={nachricht}
              onChange={(e) => setNachricht(e.target.value)}
              placeholder="Beschreiben Sie kurz Ihr Bauteil oder Werkzeug — Geometrie, Anforderungen, Termine."
            />
          </div>
          <p className="rounded-xl bg-[var(--color-mist)] p-4 text-sm text-[var(--color-steel)]">
            Tipp: Eine Bauteilzeichnung oder ein 3D-Modell können Sie nach dem Absenden direkt per E-Mail anhängen.
          </p>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold" htmlFor="vorname">Vorname *</label>
              <input id="vorname" className="field" value={vorname} onChange={(e) => setVorname(e.target.value)} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold" htmlFor="nachname">Nachname *</label>
              <input id="nachname" className="field" value={nachname} onChange={(e) => setNachname(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold" htmlFor="firma">Firma</label>
            <input id="firma" className="field" value={firma} onChange={(e) => setFirma(e.target.value)} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold" htmlFor="telefon">Telefon</label>
              <input id="telefon" className="field" value={telefon} onChange={(e) => setTelefon(e.target.value)} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold" htmlFor="email">E-Mail *</label>
              <input
                id="email"
                type="email"
                className="field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {email && !emailValid && <p className="mt-1 text-xs text-red-600">Bitte gültige E-Mail eingeben.</p>}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold" htmlFor="ort">PLZ / Ort</label>
            <input id="ort" className="field" value={ort} onChange={(e) => setOrt(e.target.value)} />
          </div>
          <label className="flex items-start gap-3 text-sm text-[var(--color-steel)]">
            <input
              type="checkbox"
              checked={datenschutz}
              onChange={(e) => setDatenschutz(e.target.checked)}
              className="mt-1 h-4 w-4 accent-[var(--color-brand-600)]"
            />
            <span>
              Ich habe die{" "}
              <a href="/datenschutz" className="font-medium text-[var(--color-brand-600)] underline">
                Datenschutzerklärung
              </a>{" "}
              gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung der Anfrage zu. *
            </span>
          </label>
        </div>
      )}

      {/* Controls */}
      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 1 ? (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="btn btn--outline">
            Zurück
          </button>
        ) : (
          <span />
        )}
        {step < 3 ? (
          <button type="button" onClick={() => setStep((s) => s + 1)} className="btn btn--primary">
            Weiter
          </button>
        ) : (
          <button type="button" onClick={submit} disabled={!canSubmit} className="btn btn--primary disabled:cursor-not-allowed disabled:opacity-40">
            Anfrage senden
          </button>
        )}
      </div>
    </div>
  );
}
