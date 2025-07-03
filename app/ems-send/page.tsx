import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import {
  Send,
  Users,
  Mail,
  Inbox,
  Gauge,
  ShieldCheck,
  MailCheck,
  ListChecks,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: Send,
    title: "Automated journeys",
    description:
      "Welcome flows, mid-stay check-ins and abandoned-cart nudges built in.",
  },
  {
    icon: Users,
    title: "Smart segmentation",
    description:
      "Target by visit history, spend tier or onsite behaviour with ease.",
  },
  {
    icon: Mail,
    title: "Two-way messaging",
    description:
      "Guests can reply in-channel; your team manages it in one shared inbox.",
  },
  {
    icon: Inbox,
    title: "Drag-and-drop builder",
    description:
      "Beautiful templates render perfectly on every device—no HTML needed.",
  },
  {
    icon: Gauge,
    title: "A/B testing & AI",
    description:
      "Find the subject lines, send-times and offers that convert best.",
  },
];

const compliance = [
  {
    icon: ShieldCheck,
    title: "GDPR & CCPA ready",
    description:
      "Automatic consent capture, granular preferences and double opt-in.",
  },
  {
    icon: MailCheck,
    title: "Enterprise deliverability",
    description: "Dedicated IP pools and list hygiene for top inbox placement.",
  },
  {
    icon: ListChecks,
    title: "Preference centre",
    description:
      "Guests manage channels and frequency themselves—churn stays low.",
  },
  {
    icon: FileText,
    title: "Audit trail",
    description:
      "Every send, open and unsubscribe logged and exportable for regulators.",
  },
];

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
          <div className="grid sm:grid-cols-2 gap-4">
            {compliance.map((item) => (
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
          <p className="text-lg font-semibold">Turn every message into revenue: Start your free EMS Send trial →</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
