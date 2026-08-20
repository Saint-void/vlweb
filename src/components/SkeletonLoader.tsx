import React from 'react';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[#f3e6ea] rounded-xl border border-[#f0d5dd] ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-[#faf6f7] text-[#2e1c22] p-6 md:p-12 lg:p-16 max-w-[1800px] mx-auto space-y-12">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center py-4">
        <Skeleton className="h-10 w-36 rounded-full" />
        <div className="hidden md:flex gap-6">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-20" />
        </div>
        <Skeleton className="h-10 w-28 rounded-lg" />
      </div>

      {/* Hero Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
        <div className="lg:col-span-6 space-y-6">
          <Skeleton className="h-4 w-32 rounded-full" />
          <Skeleton className="h-16 w-3/4 rounded-xl" />
          <Skeleton className="h-20 w-full rounded-xl" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-40 rounded-lg" />
            <Skeleton className="h-12 w-32 rounded-lg" />
          </div>
        </div>
        <div className="lg:col-span-6">
          <Skeleton className="h-[420px] w-full rounded-2xl" />
        </div>
      </div>

      {/* Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
        <Skeleton className="h-64 w-full rounded-2xl" />
        <Skeleton className="h-64 w-full rounded-2xl" />
        <Skeleton className="h-64 w-full rounded-2xl" />
      </div>
    </div>
  );
}
