import Head from "next/head";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Layout({ children, title = "AuthCode Services" }) {
  return <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="A small collection of developer and utility services." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-white/10 bg-[#0b1120]/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold tracking-wide text-white">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-sky-500/15 text-sky-300"><ShieldCheck size={18}/></span>
            AuthCode<span className="text-sky-400">.services</span>
          </Link>
          <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-widest text-white/50">
            <Link href="/" className="hover:text-sky-300">Home</Link>
            <Link href="/home" className="hover:text-sky-300">Services</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/30">© {new Date().getFullYear()} AuthCode Services</footer>
    </div>
  </>;
}
