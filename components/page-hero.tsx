import React from "react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

interface PageHeroProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, subtitle, children }: PageHeroProps) => (
  <section className="relative overflow-hidden py-20 px-6 text-center">
    {/* Patterned background */}
    <AnimatedGridPattern className="absolute inset-0 opacity-40 [mask-image:radial-gradient(white,transparent)]" />

    <div className="relative max-w-5xl mx-auto">
      <h1 className="text-4xl xs:text-5xl md:text-6xl font-bold max-w-3xl mx-auto tracking-tight">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80">
        {subtitle}
      </p>
      {children && (
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {children}
        </div>
      )}
    </div>
  </section>
);

export default PageHero;
