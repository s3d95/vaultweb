"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCw } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Keep error available during development and diagnostics.
    console.error(error);
  }, [error]);

  return (
    <PageContainer className="flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
      <div className="inline-flex rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-foreground/80">
        <AlertTriangle className="size-6" />
      </div>
      <h1 className="chrome-text mt-5 font-display text-3xl font-bold tracking-[-0.03em]">Something Went Wrong</h1>
      <p className="mt-3 text-sm text-dim">Something broke on this page. Please try again.</p>
      <button
        onClick={reset}
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-chrome transition-all duration-300 ease-chrome hover:-translate-y-0.5 hover:shadow-chrome-hover"
      >
        <RotateCw className="size-4" />
        Try Again
      </button>
    </PageContainer>
  );
}
