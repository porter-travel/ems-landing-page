"use client";


const plans = [
  {
    name: "Free",
    price: "\u00a30/month",
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
    price: "\u00a330/month",
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
    price: "\u00a350/month",
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
    price: "\u00a3175/month",
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
          <div key={plan.name} className="border rounded-xl p-6 text-center bg-background/50">
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">{plan.price}</p>
            <p className="mt-4 text-sm">{plan.description}</p>
            <ul className="mt-4 space-y-1 text-sm text-left">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground max-w-[65ch]">
        All plans also include a 3.5% processing fee on any payments made through the platform
        <br />
        You purchase one core plan for your first property, then add extra sites you manage for just an additional \u00a325 per month.
      </p>
    </div>
  );
}
