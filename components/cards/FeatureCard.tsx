import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
  badge?: ReactNode;
}

export default function FeatureCard({
  icon,
  title,
  children,
  className,
  badge,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-background/60 backdrop-blur p-6 md:p-7 hover:shadow-sm transition",
        className
      )}
    >
      {badge && (
        <span className="absolute top-4 right-4 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium">
          {badge}
        </span>
      )}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-2 text-sm text-foreground/80">{children}</div>
    </div>
  );
}
