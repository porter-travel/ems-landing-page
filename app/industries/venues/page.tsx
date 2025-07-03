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
          title="Run flawless events—from ticket scan to last-call review."
          subtitle=""
        />
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <ul className="list-disc pl-5 space-y-2">
            <li>Integrate with Ticketmaster, Eventbrite, and Shopify in minutes.</li>
            <li>Queue-busting mobile bars: guests order from seats, pick up when ready.</li>
            <li>Automated set-time notifications keep crowds flowing and F&B revenue climbing.</li>
            <li>Post-event surveys feed straight into promoter dashboards to secure re-bookings.</li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">End-to-End Event Flow</h2>
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-2 border">Stage</th>
                <th className="p-2 border">EMS Touchpoint</th>
                <th className="p-2 border">Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Ticket purchased</td>
                <td className="p-2 border">Auto-welcome email with FAQ & cashless wallet link</td>
                <td className="p-2 border">Fewer “what time do doors open?” calls</td>
              </tr>
              <tr>
                <td className="p-2 border">On arrival</td>
                <td className="p-2 border">Mobile wallet scan → instant entry</td>
                <td className="p-2 border">35 % faster gate throughput</td>
              </tr>
              <tr>
                <td className="p-2 border">During show</td>
                <td className="p-2 border">Push alert: “Bar closed in 15 min—last orders now”</td>
                <td className="p-2 border">+18 % F&B sales final hour</td>
              </tr>
              <tr>
                <td className="p-2 border">Exit</td>
                <td className="p-2 border">One-tap survey & merch discount</td>
                <td className="p-2 border">Higher NPS & incremental revenue</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Proven Revenue Uplifts</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>+27 % average spend per head when mobile bar ordering is enabled.</li>
            <li>4.6★ → 4.9★ average review score for venues after 90 days on EMS.</li>
            <li>12 hours saved weekly by ops teams thanks to automated set-time notifications.</li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto text-center">
          <p className="text-lg font-semibold">See how EMS turns events into encores →</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
