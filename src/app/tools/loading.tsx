import { PageContainer } from "@/components/layout/page-container";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";

export default function LoadingTools() {
  return (
    <PageContainer className="space-y-6 pb-16 pt-12">
      <LoadingSkeleton className="h-12 w-1/3" />
      <LoadingSkeleton className="h-16 w-full" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <LoadingSkeleton key={index} className="h-80" />
        ))}
      </div>
    </PageContainer>
  );
}

