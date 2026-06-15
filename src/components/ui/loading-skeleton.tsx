import { cn } from "@/lib/utils";

type LoadingSkeletonProps = {
  className?: string;
};

export function LoadingSkeleton({ className }: LoadingSkeletonProps) {
  return (
    <div
      className={cn(
        "skeleton animate-shimmer rounded-2xl border border-white/[0.06]",
        className
      )}
    />
  );
}
