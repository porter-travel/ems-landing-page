import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export default function Section({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto max-w-7xl px-6 sm:px-8 lg:px-12", className)}
      {...props}
    >
      {children}
    </div>
  );
}
