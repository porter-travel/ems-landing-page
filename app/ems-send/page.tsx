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
          title="Send the right message at the perfect moment."
          subtitle="Omni-channel guest engagement—email, SMS, WhatsApp, and push—driven by real-time data from EMS Serve."
        />
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <p>Stop blasting one-size-fits-all emails and start meaningful conversations:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Automated journeys – Welcome flows, mid-stay check-ins, abandoned-cart nudges, and re-engagement campaigns out of the box.</li>
            <li>Smart segmentation – Target by first vs. repeat visit, spend tier, onsite behaviour, or custom tags.</li>
            <li>True two-way messaging – Guests can reply in-channel; your team sees it all in one shared inbox.</li>
            <li>Drag-and-drop builder – Gorgeous templates render flawlessly on every device—zero HTML required.</li>
            <li>A/B/C testing & AI optimisation – Let the system find the subject lines, send-times, and offers that win.</li>
          </ul>
          <p className="font-semibold">Clients see an average 42 % lift in direct bookings within 90 days.</p>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Lifecycle Journey Examples</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-2 border">Trigger</th>
                  <th className="p-2 border">Channel</th>
                  <th className="p-2 border">Example Message</th>
                  <th className="p-2 border">Goal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Booking confirmed</td>
                  <td className="p-2 border">Email</td>
                  <td className="p-2 border">“We can’t wait to host you—upgrade to a harbour-view room for 20 % off.”</td>
                  <td className="p-2 border">Upsell</td>
                </tr>
                <tr>
                  <td className="p-2 border">Mid-stay day 2</td>
                  <td className="p-2 border">WhatsApp</td>
                  <td className="p-2 border">“How’s your stay so far? Reply 1-5.”</td>
                  <td className="p-2 border">Real-time feedback</td>
                </tr>
                <tr>
                  <td className="p-2 border">Abandoned checkout</td>
                  <td className="p-2 border">SMS</td>
                  <td className="p-2 border">“Still thinking it over? Here’s a 10 % code that expires tonight.”</td>
                  <td className="p-2 border">Conversion</td>
                </tr>
                <tr>
                  <td className="p-2 border">30 days post-stay</td>
                  <td className="p-2 border">Email</td>
                  <td className="p-2 border">“We miss you! Enjoy a complimentary dessert on your next visit.”</td>
                  <td className="p-2 border">Repeat visit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Compliance & Deliverability</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>100 % GDPR & CCPA ready – Automatic consent capture, granular preferences, and double opt-in.</li>
            <li>Enterprise deliverability – Dedicated IP pools and automatic list hygiene for &gt; 99 % inbox placement.</li>
            <li>Built-in preference centre – Let guests manage channels and frequency; keep churn below 0.8 %.</li>
            <li>Audit trail – Every send, open, click, and unsubscribe is logged and exportable for regulators.</li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto text-center">
          <p className="text-lg font-semibold">Turn every message into revenue: Start your free EMS Send trial →</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
