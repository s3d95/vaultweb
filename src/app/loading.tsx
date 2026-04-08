import { PageContainer } from "@/components/layout/page-container";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";

export default function Loading() {
  return (
    <PageContainer className="space-y-6 pb-16 pt-12">
      <LoadingSkeleton className="h-12 w-2/3" />
      <LoadingSkeleton className="h-6 w-1/2" />
      <div className="grid gap-6 md:grid-cols-3">
        <LoadingSkeleton className="h-72" />
        <LoadingSkeleton className="h-72" />
        <LoadingSkeleton className="h-72" />
      </div>
    </PageContainer>
  );
}

