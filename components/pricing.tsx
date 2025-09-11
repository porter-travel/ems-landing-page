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
      <div>
        <div className="mt-8 w-full flex justify-center">
          <Card className="p-8 flex flex-col items-center text-center max-w-sm w-full">
            <div className="flex flex-col items-center text-center">
  <h2 className="text-5xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
  £59
</h2>
<p className="text-sm font-normal text-muted-foreground text-center">
  per property per month + VAT
</p>
</div>

            <div className="mt-8 w-full">
              <h2 className="text-xl font-semibold">What’s included (per property):</h2>
              <ul className="mt-4 space-y-2 text-sm md:text-base text-center">
                {included.map((item) => (
                  <li key={item} className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 w-full">
              <h2 className="text-xl font-semibold">Processing & billing:</h2>
              <ul className="mt-4 space-y-1 text-sm md:text-base list-none text-center">
                <li>Payments taken via our checkout incur a 3.5% processing fee.</li>
                <li>All plans charged + VAT.</li>
                <li>Extra properties enjoy a 25% discount</li>
              </ul>
            </div>
          </Card>
        </div>
        <p className="mt-8 mx-auto text-center text-sm text-muted-foreground max-w-[60ch]">
  Need volume pricing or enterprise terms? <br />
  Contact us — we offer custom discounts for larger portfolios and dedicated support packages.
</p>
      </div>
    </Section>
  );
}

