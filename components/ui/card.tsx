import * as React from "react";
import { cn } from "@/lib/utils";


type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-2xl border bg-background text-foreground shadow", className)}

      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };

