import Link from "next/link";
import { FileX2, ArrowLeft } from "lucide-react";
import Layout from "../components/Layout";

export default function NotFoundContent() {
  return <Layout title="Content not available">
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-red-500/10 text-red-300"><FileX2 size={30}/></span>
      <p className="mt-6 text-xs font-bold uppercase tracking-[.3em] text-red-300">Not available</p>
      <h1 className="mt-3 text-3xl font-extrabold text-white">This content no longer exists.</h1>
      <p className="mt-4 text-sm leading-6 text-white/50">This content no longer exists or is no longer served.</p>
      <Link href="/home" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white/80 transition hover:border-sky-400 hover:text-sky-300"><ArrowLeft size={15}/> Back to services</Link>
    </section>
  </Layout>;
}
