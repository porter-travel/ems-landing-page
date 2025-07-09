"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    name: "Free",
    price: 0,
    description:
      "For small properties or Airbnb's who want to use EMS with no strings attached.",
    features: [
      "\u2705 10 tokens/month",
      "\u2705 EMS Serve",
      "\u2705 Basic fulfilment dashboard",
      "\u2705 14-day free trial included",
    ],
  },
  {
    name: "Basic",
    price: 45,
    description:
      "Perfect for solo properties handling orders, reviews, and basic requests in one clean flow.",
    features: [
      "\u2705 50 tokens/month",
      "\u2705 EMS Serve + EMS Rate",
      "\u2705 Up to 3 active features",
      "\u2705 Custom branding",
      "\u2705 Review capture + display",
      "\u2705 14-day free trial included",
    ],
  },
  {
    name: "Growth",
    price: 75,
    popular: true,
    description:
      "For ambitious venues and hotels layering in upsells, live chat, and smarter fulfilment.",
    features: [
      "\u2705 100 tokens/month",
      "\u2705 Full access to EMS Serve, Rate + Send",
      "\u2705 All features unlocked",
      "\u2705 Pre-arrival upsells",
      "\u2705 Live chat with automated routing",
      "\u2705 Advanced fulfilment dashboards",
      "\u2705 14-day free trial included",
    ],
  },
  {
    name: "Pro",
    price: 175,
    description:
      "Best for high-volume properties that want full power, zero limits, and total flexibility.",
    features: [
      "\u2705 Unlimited tokens",
      "\u2705 All EMS modules (Serve, Rate, Send)",
      "\u2705 Unlimited requests + interactions",
      "\u2705 Full analytics + reporting",
      "\u2705 Priority support + onboarding",
      "\u2705 14-day free trial included",
    ],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="flex flex-col items-center justify-center py-12 xs:py-20 px-6">
      <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold text-center tracking-tight">
        Only pay for what performs.
      </h1>
      <p className="mt-4 max-w-[60ch] xs:text-lg text-center">
        Each feature runs on tokens. Add, drop, or reshuffle them month to month.
      </p>
      <div className="mt-12 max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={
              "relative border rounded-xl p-6 text-center bg-background/50" +
              (plan.popular ? " border-primary" : "")
            }
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-block rounded-md bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              </div>
            )}
            <h3 className="text-lg font-medium mt-2">{plan.name}</h3>
            <div className="mt-2 flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold">£{plan.price}</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
            <p className="mt-4 text-sm">{plan.description}</p>
            <Button className="mt-4 w-full">Get Started</Button>
            <Separator className="my-4" />
            <ul className="space-y-1 text-sm text-left">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground max-w-[80ch]">
        All plans also include a 3.5% processing fee on any payments made through the platform
        <br />
        Choose a core plan for your main property—every additional property enjoys a 10 % discount.
      </p>
    </div>
  );
}
