import { LucideIcon } from "lucide-react";
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
    <Card className={cn("flex flex-col p-6", className)}>
      <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-lg font-semibold">{title}</span>
      {typeof description === "string" ? (
        <p className="mt-1 text-foreground/80 text-[15px]">{description}</p>
      ) : (
        <div className="mt-1 text-foreground/80 text-[15px]">{description}</div>
      )}
    </Card>
  );
}
