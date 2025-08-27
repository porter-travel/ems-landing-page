import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  children,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-background/60 backdrop-blur p-6 md:p-7 hover:shadow-sm transition",
        className
      )}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-2 text-sm text-foreground/80">{children}</div>
    </div>
  );
}
