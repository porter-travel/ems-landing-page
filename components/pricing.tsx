"use client";

import { Card } from "@/components/ui/card";
import Section from "@/components/section";
import { Check } from "lucide-react";

const included = [
  "Unlimited automations",
  "Branded upsell microsite",
  "Advanced guest guides",
  "Calendar-linked products",
  "Fulfilment dashboards",
  "Live reporting & insights",
  "CSV upload + 1-click PMS sync",
  "Embed links & widgets",
  "Multi-property management",
  "White-glove onboarding",
  "14-day free trial included",
];

export default function Pricing() {
  return (
    <Section id="pricing">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold text-center tracking-tight">
          Simple pricing. One clear price.
        </h1>
        <p className="mt-4 max-w-[60ch] xs:text-lg text-center">
          Everything you need to unlock pre-arrival upsells, guest guides and fulfilment.
        </p>
        <div className="mt-8 w-full max-w-screen-md">
          <Card className="p-8 flex flex-col items-center">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold">£59</span>
              <span className="text-lg font-semibold">/ property / month + VAT</span>
            </div>
            <div className="mt-8 w-full">
              <h2 className="text-xl font-semibold text-center">What’s included (per property):</h2>
              <ul className="mt-4 space-y-2 text-sm md:text-base">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-1 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 w-full">
              <h2 className="text-xl font-semibold text-center">Processing & billing:</h2>
              <ul className="mt-4 space-y-1 text-sm md:text-base list-disc list-inside">
                <li>Payments taken via our checkout incur a 3.5% processing fee.</li>
                <li>All plans charged + VAT.</li>
                <li>Extra properties enjoy a 25% discount</li>
              </ul>
            </div>
          </Card>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground max-w-[80ch]">
          Need volume pricing or enterprise terms? Contact us - we offer custom discounts for larger portfolios and dedicated support packages.
        </p>
      </div>
    </Section>
  );
}

