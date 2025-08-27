import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = React.HTMLAttributes<HTMLElement>;

export default function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-12 xs:py-20", className)} {...props}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}
