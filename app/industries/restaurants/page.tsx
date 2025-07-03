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
          title="Seat more diners, turn tables faster, and keep them coming back."
          subtitle=""
        />
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <ul className="list-disc pl-5 space-y-2">
            <li>QR-code menus & table ordering slash average dwell time by 12 minutes.</li>
            <li>Real-time menu 86ing prevents disappointing ‘Sorry, we’re out’ moments.</li>
            <li>EMS Send remarketing fills slow shifts with targeted lunch offers.</li>
            <li>EMS Rate flags service issues the same evening—before they become 1-star posts.</li>
          </ul>
          <p className="font-semibold">Restaurants using EMS cut walk-outs by 18 % and grow per-cover spend by 22 % in the first quarter.</p>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">From Seat to Repeat – Workflow</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Seat – Host stands scan QR to assign table and server.</li>
            <li>Order & pay – Guests split bills, tip, and reorder without flagging staff.</li>
            <li>Feedback – Instant 5-second survey before they leave.</li>
            <li>Retarget – Hyper-local lunch offer arrives the next weekday.</li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Loyalty & CRM Booster</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Card-free points – Spend automatically logs to a profile; rewards trigger via EMS Send.</li>
            <li>Guest DNA – Dietary tags, preferred wines, and last-visit dishes surface for staff in real time.</li>
            <li>Win-back automations – Guests who’ve lapsed 60 days get a personalised offer proven to recapture 23 % of dormant diners.</li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto text-center">
          <p className="text-lg font-semibold">Book a tasting tour of EMS for restaurants →</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
