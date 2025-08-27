import { ArrowUpRight, CalendarDays } from "lucide-react";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtext?: string;
  align?: "center" | "left";
  showCtas?: boolean;
}

export default function Hero({
  eyebrow,
  title,
  subtext,
  align = "center",
  showCtas = false,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <AnimatedGridPattern className="absolute inset-0 opacity-40 [mask-image:radial-gradient(white,transparent)]" />
      <Section
        className={cn(
          "relative py-24 sm:py-32",
          align === "center" ? "text-center" : "text-left"
        )}
      >
        {eyebrow && (
          <p className="text-sm font-semibold text-primary">{eyebrow}</p>
        )}
        <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-heading tracking-tight">
          {title}
        </h1>
        {subtext && (
          <p className="mx-auto mt-6 max-w-[65ch] text-lg text-foreground/80">
            {subtext}
          </p>
        )}
        {showCtas && (
          <div
            className={cn(
              "mt-10 flex flex-col sm:flex-row gap-4",
              align === "center" ? "justify-center" : undefined
            )}
          >
            <Button size="lg" className="rounded-full text-base">
              Get Started Free <ArrowUpRight className="h-5 w-5" />
            </Button>
            <Button
              variant="contrast"
              size="lg"
              className="rounded-full text-base"
            >
              <CalendarDays className="h-5 w-5" /> Book a Demo
            </Button>
          </div>
        )}
      </Section>
    </section>
  );
}
