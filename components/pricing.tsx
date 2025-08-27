"use client";
export default function Pricing() {
  return (
    <div id="pricing" className="flex flex-col items-center justify-center py-12 xs:py-20 px-6">
      <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold text-center tracking-tight">
        Simple pricing. One clear price.
      </h1>
      <p className="mt-4 max-w-[60ch] xs:text-lg text-center">
        Everything you need to unlock pre-arrival upsells, guest guides and fulfilment.
      </p>
      <div className="mt-8 flex items-baseline justify-center gap-2">
        <span className="text-5xl font-bold">£40</span>
        <span className="text-lg font-semibold">/ property / month + VAT</span>
      </div>
      <div className="mt-8 max-w-screen-md mx-auto">
        <h2 className="text-xl font-semibold text-center">What’s included (per property):</h2>
        <ul className="mt-4 space-y-2 text-sm md:text-base">
          <li>✅ Unlimited automations — Pre-, in- and post-stay journeys; unlimited sends.</li>
          <li>✅ Branded upsell microsite — Your logo, fonts and colours.</li>
          <li>✅ Advanced guest guides — Property info, welcome messages and local recommendations.</li>
          <li>✅ Calendar-linked products — Sell anything that needs a time slot e.g. bike rental, picnic slots etc.</li>
          <li>✅ Fulfilment dashboards — View orders in real-time and easily update the status.</li>
          <li>✅ Live reporting & insights — Revenue, open rates, popular products, best customers.</li>
          <li>✅ CSV upload + 1-click PMS sync — Start with CSVs; connect SiteMinder/HLS etc.</li>
          <li>✅ Embed links & widgets — Drop the upsell link in emails, SMS or PMS messages.</li>
          <li>✅ Multi-property management — Manage properties from one account.</li>
          <li>✅ White-glove onboarding — Strategy call, setup help and optimisation check-ins.</li>
          <li>✅ 14-day free trial included</li>
        </ul>
      </div>
      <div className="mt-8 max-w-screen-md mx-auto">
        <h2 className="text-xl font-semibold text-center">Processing & billing:</h2>
        <ul className="mt-4 space-y-1 text-sm md:text-base list-disc list-inside">
          <li>Payments taken via our checkout incur a 3.5% processing fee.</li>
          <li>All plans charged + VAT.</li>
          <li>Extra properties enjoy a 25% discount</li>
        </ul>
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground max-w-[80ch]">
        Need volume pricing or enterprise terms? Contact us - we offer custom discounts for larger portfolios and dedicated support packages.
      </p>
    </div>
  );
}

