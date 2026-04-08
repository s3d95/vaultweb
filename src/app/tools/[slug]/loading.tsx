import { PageContainer } from "@/components/layout/page-container";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";

export default function LoadingToolDetails() {
  return (
    <PageContainer className="space-y-6 pb-16 pt-12">
      <LoadingSkeleton className="h-10 w-36" />
      <LoadingSkeleton className="h-96 w-full" />
      <div className="grid gap-4 md:grid-cols-3">
        <LoadingSkeleton className="h-48" />
        <LoadingSkeleton className="h-48" />
        <LoadingSkeleton className="h-48" />
      </div>
    </PageContainer>
  );
}

