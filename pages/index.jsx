import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Clock3, Layers } from "lucide-react";
import Layout from "../components/Layout";

const features = [
  { Icon: Layers, title: "Multiple services", body: "A growing catalogue of developer and utility tools gathered in a single place." },
  { Icon: Zap, title: "Fast and simple", body: "No account and no setup. Pick a service and get what you need in a few clicks." },
  { Icon: Clock3, title: "Always up to date", body: "Authentication codes are refreshed automatically every hour." },
  { Icon: ShieldCheck, title: "Built with care", body: "A lightweight, secure and privacy-friendly platform hosted on Vercel." }
];

const stats = [
  ["10", "Services listed"],
  ["1h", "Code refresh cycle"],
  ["24/7", "Availability"]
];

export default function Index() {
  return <Layout title="AuthCode — Developer & utility services">
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-sky-500/10 to-transparent"/>
      <div className="mx-auto max-w-5xl px-5 pb-16 pt-20 text-center md:pt-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[.2em] text-sky-300"><ShieldCheck size={13}/> Welcome to AuthCode</p>
        <h1 className="mx-auto mt-7 max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-6xl">Tools and services for <span className="text-sky-400">developers</span> and power users.</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/55">AuthCode brings together authentication utilities, inspection tools, scripts generators and more. Browse the full list of services and find what you need.</p>
        <div className="mt-10">
          <Link href="/home" className="inline-flex items-center gap-3 rounded-full bg-sky-500 px-9 py-4 text-sm font-extrabold uppercase tracking-widest text-[#0b1120] transition hover:-translate-y-0.5 hover:bg-sky-400">Go to services <ArrowRight size={17}/></Link>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-5xl px-5 pb-8">
      <div className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[.03] py-6">
        {stats.map(([value, label]) => <div key={label} className="px-3 text-center"><p className="text-2xl font-extrabold text-white md:text-3xl">{value}</p><p className="mt-1 text-[10px] uppercase tracking-widest text-white/40 md:text-xs">{label}</p></div>)}
      </div>
    </section>

    <section className="mx-auto max-w-5xl px-5 py-12">
      <p className="text-xs font-bold uppercase tracking-[.3em] text-sky-400">Why AuthCode</p>
      <h2 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">Everything you need, nothing you don&apos;t.</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {features.map(({ Icon, title, body }) => <div key={title} className="rounded-xl border border-white/10 bg-white/[.03] p-6">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-sky-400/15 text-sky-300"><Icon size={21}/></span>
          <h3 className="mt-5 text-base font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/45">{body}</p>
        </div>)}
      </div>
    </section>

    <section className="mx-auto max-w-5xl px-5 pb-20">
      <div className="rounded-2xl border border-sky-400/30 bg-gradient-to-br from-sky-500/15 to-transparent p-8 text-center md:p-12">
        <h2 className="text-2xl font-extrabold text-white">Ready to get started?</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/50">Open the services list and pick the tool you are looking for.</p>
        <Link href="/home" className="mt-7 inline-flex items-center gap-3 rounded-full border border-sky-300/50 px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest text-sky-100 transition hover:bg-sky-500 hover:text-[#0b1120]">Go to services <ArrowRight size={16}/></Link>
      </div>
    </section>
  </Layout>;
}
