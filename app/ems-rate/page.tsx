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
          title="Capture feedback, grow loyalty, protect your reputation."
          subtitle="Instant surveys, automated review requests, and AI-powered sentiment analysis—built for hospitality."
        />
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <p>What you don’t know can hurt your brand. EMS Rate closes the loop fast:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>In-service micro-surveys – Catch issues before checkout with one-tap ratings embedded in Wi-Fi portals, QR cards, or the EMS Serve interface.</li>
            <li>Post-visit review booster – Automatically invite happy guests to share their experience on Google, TripAdvisor, and Booking.com.</li>
            <li>AI sentiment & themes – Dashboards surface the trends behind your scores—menu variety, cleanliness, staff friendliness, and more.</li>
            <li>Reputation reply hub – Respond to every public review from one screen, using suggested replies that match your tone.</li>
            <li>Service recovery workflows – Route low scores to the right manager and trigger vouchers or follow-up calls automatically.</li>
          </ul>
          <p className="font-semibold">Properties using EMS Rate increase average review score by 0.7 stars in six months.</p>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Close-the-Loop Workflow</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Real-time pulse – Micro-surveys fire during the stay; issues auto-create tasks in EMS Serve.</li>
            <li>Review routing – Happy guests receive branded Google/TripAdvisor prompts; unhappy ones are taken to a private form.</li>
            <li>Service recovery – Action plans auto-assign to the right manager with built-in SLA timers and escalation rules.</li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Why EMS Rate Beats Generic Survey Tools</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Designed for hospitality – Room, table, and ticket IDs link feedback to exact staff and shift.</li>
            <li>Predictive alerts – AI flags at-risk guests before they leave the property.</li>
            <li>Omni-language – Surveys localise to 30+ languages automatically.</li>
            <li>Revenue reporting – See how a +0.1-star lift correlates to ADR or per-cover spend.</li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto text-center">
          <p className="text-lg font-semibold">Own your online reputation: Schedule an EMS Rate walkthrough →</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
