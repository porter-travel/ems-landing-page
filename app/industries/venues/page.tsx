import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import {
  Ticket,
  Beer,
  Bell,
  Smile,
  Wallet,
  MessageCircle,
  BarChartBig,
} from "lucide-react";

const features = [
  { icon: Ticket, title: "Quick integrations", description: "Connect Ticketmaster, Eventbrite and Shopify in minutes." },
  { icon: Beer, title: "Mobile bars", description: "Guests order from seats and pick up when ready." },
  { icon: Bell, title: "Set-time alerts", description: "Keep crowds flowing and revenue climbing." },
  { icon: Smile, title: "Post-event surveys", description: "Feedback feeds promoter dashboards for re-bookings." },
];

const uplifts = [
  { icon: Wallet, title: "Higher spend", description: "+27% per head when mobile ordering enabled." },
  { icon: MessageCircle, title: "Review boost", description: "4.6★ → 4.9★ average score after 90 days." },
  { icon: BarChartBig, title: "Time saved", description: "12 hours weekly saved thanks to automated alerts." },
];

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
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
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
          <div className="grid sm:grid-cols-2 gap-4">
            {uplifts.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
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
