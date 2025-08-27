import type { ReactNode } from "react";
import Section from "./Section";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CalendarDays } from "lucide-react";

interface PageScaffoldProps {
  title?: string;
  intro?: string;
  children: ReactNode;
}

export default function PageScaffold({ title, intro, children }: PageScaffoldProps) {
  return (
    <main className="pt-16 xs:pt-20 sm:pt-24">
      {(title || intro) && (
        <section className="py-16 sm:py-20 md:py-24">
          <Section className="text-center">
            {title && (
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
            )}
            {intro && (
              <p className="mx-auto mt-4 max-w-[70ch] text-lg text-foreground/80">
                {intro}
              </p>
            )}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full text-base bg-[#F65053] hover:bg-[#F65053]/90"
              >
                Get Started Free <ArrowUpRight className="h-5 w-5" />
              </Button>
              <Button
                variant="contrast"
                size="lg"
                className="w-full sm:w-auto rounded-full text-base"
              >
                <CalendarDays className="h-5 w-5" /> Book a Demo
              </Button>
            </div>
          </Section>
        </section>
      )}
      {children}
    </main>
  );
}
