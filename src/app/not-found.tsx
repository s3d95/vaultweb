import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";

export default function NotFound() {
  return (
    <PageContainer className="relative flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
      <span
        aria-hidden
        className="pointer-events-none absolute select-none font-display text-[34vw] font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.04)]"
      >
        404
      </span>
      <p className="relative mb-3 font-mono text-xs uppercase tracking-[0.3em] text-dim">error 404</p>
      <h1 className="chrome-text relative font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
        Page Not Found
      </h1>
      <p className="relative mt-4 max-w-xl text-sm text-dim sm:text-base">
        We couldn&apos;t find this page.
      </p>
      <Link
        href="/tools"
        className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-chrome transition-all duration-300 ease-chrome hover:-translate-y-0.5 hover:shadow-chrome-hover"
      >
        <ArrowLeft className="size-4" />
        Back to Programs
      </Link>
    </PageContainer>
  );
}
