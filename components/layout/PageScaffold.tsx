import type { ReactNode } from "react";
import Section from "./Section";

interface PageScaffoldProps {
  title?: string;
  intro?: string;
  children: ReactNode;
}

export default function PageScaffold({ title, intro, children }: PageScaffoldProps) {
  return (
    <main className="pt-16 md:pt-20">
      {(title || intro) && (
        <section className="py-16 md:py-20">
          <Section className="text-center">
            {title && (
              <h1 className="text-4xl md:text-5xl font-heading tracking-tight">{title}</h1>
            )}
            {intro && (
              <p className="mx-auto mt-4 max-w-[70ch] text-lg text-foreground/80">
                {intro}
              </p>
            )}
          </Section>
        </section>
      )}
      {children}
    </main>
  );
}
