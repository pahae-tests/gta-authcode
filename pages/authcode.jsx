import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { ArrowRight } from "lucide-react";

const TOTAL = 5;
const RADIUS = 70;
const CIRC = 2 * Math.PI * RADIUS;

export default function AuthCode() {
  const [seconds, setSeconds] = useState(TOTAL);
  const ready = seconds <= 0;

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const progress = ((TOTAL - seconds) / TOTAL) * CIRC;

  return <Layout title="Authentification code">
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      <p className="text-xs font-bold uppercase tracking-[.3em] text-sky-400">Authentification code</p>
      <h1 className="mt-3 text-3xl font-extrabold text-white">{ready ? "Your code is ready." : "Generating your code…"}</h1>

      {!ready ? (
        <>
          <div className="relative mt-10 h-44 w-44">
            <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
              <circle cx="80" cy="80" r={RADIUS} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="10"/>
              <circle cx="80" cy="80" r={RADIUS} fill="none" stroke="#38bdf8" strokeWidth="10" strokeLinecap="round" strokeDasharray={CIRC} strokeDashoffset={CIRC - progress} style={{ transition: "stroke-dashoffset 1s linear" }}/>
            </svg>
            <div className="absolute inset-0 grid place-items-center text-5xl font-black tabular-nums text-white">{seconds}</div>
          </div>
          <p className="mt-8 text-xs text-white/40">Please wait…</p>
        </>
      ) : (
        <Link href="/getcode" className="mt-10 inline-flex items-center gap-3 rounded-full bg-sky-500 px-9 py-4 text-sm font-extrabold uppercase tracking-widest text-[#0b1120] transition hover:bg-sky-400">Get Code <ArrowRight size={17}/></Link>
      )}
    </section>
  </Layout>;
}
