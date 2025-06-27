"use client";


const plans = [
  { name: "Free", price: "\u00a30 pm", tokens: "10 tokens" },
  { name: "Basic", price: "\u00a330 pm", tokens: "50 tokens" },
  { name: "Growth", price: "\u00a350 pm", tokens: "100 tokens" },
  { name: "Pro", price: "\u00a3175", tokens: "\u221e tokens" },
];

export default function Pricing() {
  return (
    <div id="pricing" className="flex flex-col items-center justify-center py-12 xs:py-20 px-6">
      <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold text-center tracking-tight">
        Pay for What You Use, Not What You Don’t
      </h1>
      <p className="mt-4 max-w-[60ch] xs:text-lg text-center">
        Every guest interaction consumes 1 token. Tokens top-up monthly—no hidden fees, no per-seat surprises.
      </p>
      <div className="mt-12 max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="border rounded-xl p-6 text-center bg-background/50">
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">{plan.price}</p>
            <p className="mt-4 font-medium">{plan.tokens}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground max-w-[65ch]">
        All plans also include a 3.5% processing fee on any payments made through the platform
      </p>
    </div>
  );
}
