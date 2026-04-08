import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";

export default function NotFound() {
  return (
    <PageContainer className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="font-display text-4xl uppercase tracking-[0.12em] text-foreground">Page Not Found</h1>
      <p className="mt-3 max-w-xl text-sm text-foreground/65 sm:text-base">
        The requested resource does not exist in Saad Vault.
      </p>
      <Link
        href="/tools"
        className="mt-6 rounded-xl border border-accent/70 bg-accent/20 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/30"
      >
        Return to Tools
      </Link>
    </PageContainer>
  );
}

