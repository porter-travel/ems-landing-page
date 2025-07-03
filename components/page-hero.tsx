import React from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <div className="py-20 px-6 bg-accent text-center">
    <h1 className="text-4xl xs:text-5xl md:text-6xl font-bold max-w-3xl mx-auto tracking-tight">
      {title}
    </h1>
    <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80">
      {subtitle}
    </p>
  </div>
);

export default PageHero;
