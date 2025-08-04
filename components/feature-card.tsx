import { LucideIcon } from "lucide-react";
import React from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: React.ReactNode;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col bg-background border rounded-xl py-6 px-5 ${className || ""}`}
    >
      <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-lg font-semibold">{title}</span>
      {typeof description === "string" ? (
        <p className="mt-1 text-foreground/80 text-[15px]">{description}</p>
      ) : (
        <div className="mt-1 text-foreground/80 text-[15px]">{description}</div>
      )}
    </div>
  );
}
