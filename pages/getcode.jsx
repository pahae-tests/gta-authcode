import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check } from "lucide-react";
import Layout from "../components/Layout";

const before = `[General]
AuthLogin test~admin
AuthMode strict
SessionTimeout 3600
#UserFile disabled
#LogLevel verbose

[Network]
Host 127.0.0.1
Port 8443
UseTLS true
RetryCount 3

[Profile]
Name default
Region auto
Cache enabled`;

const after = `[Security]
Encryption AES256
Fallback disabled
VerifyOnStart true
MaxAttempts 5

[Output]
Format plain
Path ./logs/auth.log
Rotate daily
#Debug disabled`;

export default function GetCode() {
  const [code, setCode] = useState(null);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/code", { cache: "no-store" })
      .then(r => r.json())
      .then(d => (d.success ? setCode(d.code) : setError(true)))
      .catch(() => setError(true));
  }, []);

  const codeLine = `AuthCode ${error ? "ERROR" : code ?? "······"}`;

  async function copy() {
    if (!code) return;
    try { await navigator.clipboard.writeText(String(code)); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  }

  return <Layout title="Get Code">
    <section className="mx-auto max-w-3xl px-5 py-14">
      <Link href="/home" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-sky-300"><ArrowLeft size={14}/> Services</Link>
      <p className="mt-6 text-xs font-bold uppercase tracking-[.3em] text-sky-400">Configuration</p>
      <h1 className="mt-3 text-3xl font-extrabold text-white">Your authentication code</h1>
      <p className="mt-3 text-sm text-white/50">Find the line starting with <span className="font-mono text-sky-300">AuthCode</span> in the configuration below. The code changes every hour.</p>

      <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#050a16]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[11px] text-white/40">
          <span className="font-mono">auth.conf</span>
          <button onClick={copy} disabled={!code} className="inline-flex items-center gap-1.5 hover:text-sky-300 disabled:opacity-40">{copied ? <Check size={13}/> : <Copy size={13}/>} {copied ? "Code copied" : "Copy code"}</button>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-white/55">{before}{"\n\n"}<span className="-mx-5 block bg-sky-400/15 px-5 font-bold text-sky-200">{codeLine}</span>{"\n"}{after}</pre>
      </div>
      {error && <p className="mt-4 text-sm text-red-300">Could not load the code. Please refresh the page.</p>}
    </section>
  </Layout>;
}
