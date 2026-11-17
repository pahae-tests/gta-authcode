import Link from "next/link";
import { ShieldCheck, Boxes, KeyRound, Download, Ban, Megaphone, Lock, Keyboard, MonitorCog, Unlock, ChevronRight } from "lucide-react";
import Layout from "../components/Layout";

const services = [
  { name: "Service authentificator", desc: "Authenticate and manage your services.", Icon: ShieldCheck, href: "/notfound" },
  { name: "Stack Inspector", desc: "Detect the technologies behind any website.", Icon: Boxes, href: "/notfound" },
  { name: "API keys", desc: "Generate and manage API keys.", Icon: KeyRound, href: "/notfound" },
  { name: "Free video downloader", desc: "Save videos from the web for offline viewing.", Icon: Download, href: "/notfound" },
  { name: "Authentification code for cracked games", desc: "Get the current authentication code.", Icon: Unlock, href: "/authcode", highlight: true },
  { name: "Spam blocker", desc: "Keep unwanted messages out of your inbox.", Icon: Ban, href: "/notfound" },
  { name: "Advertising in adsterra", desc: "Advertising solutions and placements.", Icon: Megaphone, href: "/notfound" },
  { name: "Configuration of SSL certificates", desc: "Set up and renew SSL/TLS certificates.", Icon: Lock, href: "/notfound" },
  { name: "AutoHotkey scripts generetor", desc: "Generate AutoHotkey scripts in a few clicks.", Icon: Keyboard, href: "/notfound" },
  { name: "Desktop serial apps", desc: "Serial tools for desktop applications.", Icon: MonitorCog, href: "/notfound" }
];

export default function Services() {
  return <Layout title="Services — AuthCode">
    <section className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-xs font-bold uppercase tracking-[.3em] text-sky-400">Services</p>
      <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">Everything in one place.</h1>
      <p className="mt-4 max-w-xl text-sm leading-6 text-white/50">Browse the list of available tools and services below.</p>
      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {services.map(({ name, desc, Icon, href, highlight }) => (
          <Link key={name} href={href} className={`group flex items-center justify-between gap-4 rounded-xl border p-5 transition hover:-translate-y-0.5 ${highlight ? "border-sky-400/50 bg-sky-500/10" : "border-white/10 bg-white/[.03] hover:border-white/25 hover:bg-white/[.06]"}`}>
            <div className="flex min-w-0 items-center gap-4">
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${highlight ? "bg-sky-400/20 text-sky-300" : "bg-white/5 text-white/50"}`}><Icon size={21}/></span>
              <div className="min-w-0">
                <h2 className="text-sm font-bold text-white">{name}</h2>
                <p className="mt-1 text-xs text-white/40">{desc}</p>
              </div>
            </div>
            <ChevronRight size={18} className="shrink-0 text-white/30 transition group-hover:translate-x-1 group-hover:text-sky-300"/>
          </Link>
        ))}
      </div>
    </section>
  </Layout>;
}
