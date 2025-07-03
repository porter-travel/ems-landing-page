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
          title="Scale your short-stay portfolio without scaling your workload."
          subtitle=""
        />
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <ul className="list-disc pl-5 space-y-2">
            <li>Pre-stay welcome messages & smart lock PINs sent automatically.</li>
            <li>Mid-stay check-ins catch issues before they hit review scores.</li>
            <li>Housekeeper scheduling & photo proof inside EMS Serve.</li>
            <li>EMS Rate auto-prompts 5-star guests and privately resolves negatives.</li>
          </ul>
          <p className="font-semibold">Hosts report 35 % fewer after-hours calls and a 0.5-star uplift on Airbnb within 60 days.</p>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Full Guest Journey Timeline</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Booking +0 min – Instant confirmation with house manual link.</li>
            <li>T-3 days – Smart lock PIN + driving directions.</li>
            <li>Arrival evening – “Rate your check-in experience” micro-survey.</li>
            <li>Mid-stay – Automated local-tips SMS and upsell for late checkout.</li>
            <li>Checkout morning – Cleaning instructions + review prompt.</li>
            <li>D +3 days – Loyalty email with next-stay discount.</li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Centralised Ops Dashboard</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Unified calendar – See bookings from Airbnb, Vrbo, Booking.com in one view.</li>
            <li>Auto-scheduler – Housekeepers get tasks, checklists, and photo-proof uploads.</li>
            <li>Issue tracker – Guest messages flagged with severity; urgent items push to on-call phone.</li>
            <li>Owner reports – Monthly P&L, occupancy, and review scores delivered automatically.</li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto text-center">
          <p className="text-lg font-semibold">Automate the guest journey—request a demo today →</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
