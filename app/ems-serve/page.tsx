import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Serve every guest, every time—seamlessly."
          subtitle="Elevate on-property service with real-time ordering, payments, and guest insights in one intuitive hub."
        />
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <p>
            Today’s guests expect ultra-fast, friction-free service from the moment they arrive. EMS Serve puts your entire front-of-house workflow on autopilot:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Digital ordering & payments – Guests scan, browse, customise, and pay in seconds—no app downloads, no waiting.</li>
            <li>Live order routing – Orders flow straight to the right prep station or bar, with smart throttling to prevent back-of-house bottlenecks.</li>
            <li>Adaptive menus – Update items, modifiers, prices, or imagery across every location in a single click.</li>
            <li>Guest profiles – Build rich, GDPR-compliant profiles with spend history and preferences to personalise upsells in real time.</li>
            <li>Analytics that matter – Track fulfilment times, item popularity, repeat-order rate, and staff performance on a single dashboard.</li>
          </ul>
          <p className="font-semibold">
            Cut wait times by 38 %, boost average spend by 19 %, and free staff to focus on hospitality—not admin.
          </p>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">How EMS Serve Works</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Guest orders – They scan a QR code or tap an NFC tag, customise, and pay in under 30 seconds.</li>
            <li>Smart routing – Our engine sends the ticket to the exact station (bar, kitchen, service desk) with built-in load balancing.</li>
            <li>Delight & repeat – When the order is ready, guests get an instant text or screen alert—plus a one-tap reorder button that boosts repeat purchase by 14 %.</li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Plug-and-Play Integrations</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>POS & PMS – Toast, Lightspeed, Oracle, Opera, Mews, …</li>
            <li>Payment gateways – Stripe, Adyen, Apple Pay, Google Pay, Pay by Bank.</li>
            <li>IoT & hardware – Kitchen display systems, printers, kiosk screens, and digital signage.</li>
            <li>Open API – Build custom apps or pull order data straight into your BI stack in minutes—no extra licence fees.</li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto text-center">
          <p className="text-lg font-semibold">Ready to raise the bar? Book a live demo of EMS Serve →</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
