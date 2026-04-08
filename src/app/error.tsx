"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
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
    <PageContainer className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <div className="inline-flex rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-red-300">
        <AlertTriangle className="size-6" />
      </div>
      <h1 className="mt-4 font-display text-3xl uppercase tracking-[0.1em] text-foreground">Unexpected Error</h1>
      <p className="mt-2 text-sm text-foreground/65">The page crashed while rendering. Retry to continue.</p>
      <button
        onClick={reset}
        className="mt-6 rounded-xl border border-accent/70 bg-accent/20 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/30"
      >
        Retry
      </button>
    </PageContainer>
  );
}
