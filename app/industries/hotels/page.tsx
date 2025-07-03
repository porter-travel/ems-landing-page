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
          title="From lobby to late checkout, craft stays guests rave about."
          subtitle=""
        />
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <p className="font-semibold">Pain points</p>
          <p>Long queues at reception, fragmented comms, OTA dependency, negative reviews.</p>
          <p className="font-semibold">Solution narrative</p>
          <p>EMS unifies operations and guest engagement, so front-desk teams spend less time clicking screens and more time creating memorable moments.</p>
          <h2 className="text-2xl font-semibold">Key benefits</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Mobile check-in & keyless entry codes sent via EMS Send.</li>
            <li>Upsell add-ons—late checkout, spa, dining—delivered contextually through EMS Serve.</li>
            <li>Real-time housekeeping updates reduce room-ready delays by 25 %.</li>
            <li>Automated review invites via EMS Rate amplify direct booking credibility.</li>
          </ul>
          <p className="italic">“Within 90 days we saw a 15 % uplift in direct bookings and a dramatic fall in reception wait times.” — General Manager, The London Harbour Hotel</p>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Guest Journey Touchpoints</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Pre-arrival – Automated upsell emails for room upgrades, spa, or parking.</li>
            <li>Check-in – Mobile key + digital registration in under two minutes.</li>
            <li>In-stay – One-tap room-service ordering via EMS Serve.</li>
            <li>Checkout – Express bill review & payment; review invite triggered instantly.</li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Results You Can Count On</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>28 % reduction in front-desk queue times within 60 days.</li>
            <li>19 % increase in guest spend on ancillaries (late checkout, F&B, spa).</li>
            <li>0.6-star lift in average review rating across major OTAs by month 4.</li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto text-center">
          <p className="text-lg font-semibold">Unlock next-level guest satisfaction → Talk to our hotel specialists</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
