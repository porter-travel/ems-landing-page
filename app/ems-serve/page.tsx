import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import {
  Shuffle,
  BarChart2,
  QrCode,
  LayoutGrid,
  Bell,
  Plug,
  CalendarDays,
} from "lucide-react";

const guestLove = [
  {
    feature: "Digital Ordering",
    examples: "Room-service, poolside F&B, table orders",
    benefit: "Scan, customise, pay in <30 s",
  },
  {
    feature: "Service Requests",
    examples: "Extra towels, maintenance, late checkout",
    benefit: "One tap—no phone calls",
  },
  {
    feature: "Live Chat",
    examples: "Concierge questions, event updates",
    benefit: "Real-time answers, routed to the right team",
  },
  {
    feature: "Info Pages",
    examples: "Hotel guide, local eats, FAQs",
    benefit: "Everything they need in one link",
  },
  {
    feature: "Instant Reviews (EMS Rate)",
    examples: "2-click feedback after any interaction",
    benefit: "Happy guests post publicly; issues stay private",
  },
];

const workflow = [
  {
    icon: QrCode,
    title: "Scan & Select",
    description:
      "Guests hit a tailored QR (room, table, cabana) and see only the options that matter.",
  },
  {
    icon: Shuffle,
    title: "Smart Routing",
    description:
      "Orders, requests, and chats auto-assign to the correct team with load-balancing logic.",
  },
  {
    icon: Bell,
    title: "Delight & Repeat",
    description:
      "Ready alerts and one-tap re-order keep revenue rolling.",
  },
];

const operatorFeatures = [
  {
    icon: LayoutGrid,
    title: "Live fulfilment boards",
    description:
      "Colour-coded cards show status by team, SLA timer, and priority.",
  },
  {
    icon: Shuffle,
    title: "Auto-routing rules",
    description:
      "“Leaking tap” → Engineering · “Extra pillow” → Housekeeping—no manual triage.",
  },
  {
    icon: BarChart2,
    title: "Dashboards & trends",
    description:
      "See peak hours, top items, request volumes, and review scores in one view.",
  },
  {
    icon: CalendarDays,
    title: "Calendar view",
    description:
      "Perfect for spa slots, equipment hire, or event bookings.",
  },
  {
    icon: Plug,
    title: "No integrations needed",
    description:
      "Works out of the box; connect POS or PMS later via open API if you like.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Serve every guest, every time—seamlessly."
          subtitle="Custom-branded QR journeys that handle ordering, service requests, live chat, and info pages in one hub."
        />
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">Why Guests Love It</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pr-4">Feature</th>
                  <th className="py-2 pr-4">Example Uses</th>
                  <th className="py-2">Guest Benefit</th>
                </tr>
              </thead>
              <tbody>
                {guestLove.map((item) => (
                  <tr key={item.feature} className="border-b last:border-0">
                    <td className="py-2 pr-4 font-medium">{item.feature}</td>
                    <td className="py-2 pr-4">{item.examples}</td>
                    <td className="py-2">{item.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-semibold">
            Average properties cut wait-times 38 % and lift spend 19 % within 60 days.
          </p>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">How EMS Serve Works</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {workflow.map((item) => (
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
          <h2 className="text-2xl font-semibold">Built for Operators</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {operatorFeatures.map((item) => (
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
          <p className="text-lg font-semibold">Ready to raise the bar? Book a live demo of EMS Serve →</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
