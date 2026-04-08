import { cn } from "@/lib/utils";

type LoadingSkeletonProps = {
  className?: string;
};

export function LoadingSkeleton({ className }: LoadingSkeletonProps) {
  return <div className={cn("animate-pulse rounded-xl bg-edge/60", className)} />;
}

