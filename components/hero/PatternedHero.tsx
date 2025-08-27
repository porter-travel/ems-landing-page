import { ArrowUpRight, CalendarDays } from "lucide-react";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

interface PatternedHeroProps {
  eyebrow?: string;
  title: string;
  subtext?: string;
  showCtas?: boolean;
}

export default function PatternedHero({
  eyebrow,
  title,
  subtext,
  showCtas = false,
}: PatternedHeroProps) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl bg-[#1A1A1A] py-24 sm:py-32 text-center text-white">
        <AnimatedGridPattern className="absolute inset-0 opacity-40 [mask-image:radial-gradient(white,transparent)]" />
        {eyebrow && (
          <p className="text-sm font-semibold text-primary">{eyebrow}</p>
        )}
        <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-heading tracking-tight">
          {title}
        </h1>
        {subtext && (
          <p className="mx-auto mt-6 max-w-[65ch] text-lg text-white/80">
            {subtext}
          </p>
        )}
        {showCtas && (
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Get Started Free <ArrowUpRight className="h-5 w-5" />
            </Button>
            <Button variant="contrast" size="lg" className="rounded-full text-base">
              <CalendarDays className="h-5 w-5" /> Book a Demo
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
