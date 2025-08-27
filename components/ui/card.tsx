import * as React from "react";
import { cn } from "@/lib/utils";


type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border bg-background/60 text-foreground backdrop-blur transition-shadow hover:shadow-sm",
        className,
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };

