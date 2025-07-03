import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import {
  CreditCard,
  Shuffle,
  Wrench,
  User,
  BarChart2,
  QrCode,
  LayoutGrid,
  Bell,
  Plug,
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Digital ordering",
    description:
      "Guests scan, customise and pay in seconds—no downloads or waiting.",
  },
  {
    icon: Shuffle,
    title: "Live order routing",
    description:
      "Tickets flow to the right station with smart throttling to prevent bottlenecks.",
  },
  {
    icon: Wrench,
    title: "Adaptive menus",
    description:
      "Update items, modifiers and prices across locations in one click.",
  },
  {
    icon: User,
    title: "Guest profiles",
    description:
      "Build rich profiles with spend history to personalise upsells.",
  },
  {
    icon: BarChart2,
    title: "Actionable analytics",
    description:
      "Track fulfilment times, item popularity and staff performance.",
  },
];

const workflow = [
  {
    icon: QrCode,
    title: "Guest orders",
    description:
      "They scan a code, customise and pay in under 30 seconds.",
  },
  {
    icon: Shuffle,
    title: "Smart routing",
    description:
      "Engine sends the ticket to the exact station with load balancing.",
  },
  {
    icon: Bell,
    title: "Delight & repeat",
    description:
      "Guests get an instant alert when ready plus a one-tap reorder button.",
  },
];

const integrations = [
  { icon: LayoutGrid, title: "POS & PMS", description: "Toast, Lightspeed, Oracle, Opera, Mews…" },
  { icon: CreditCard, title: "Payment gateways", description: "Stripe, Adyen, Apple Pay, Google Pay." },
  {
    icon: Plug,
    title: "IoT & hardware",
    description: "KDS, printers, kiosks and digital signage all connect easily.",
  },
  {
    icon: Wrench,
    title: "Open API",
    description: "Build custom apps or pull order data into your BI stack in minutes.",
  },
];

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
          <p className="font-semibold">
            Cut wait times by 38 %, boost average spend by 19 %, and free staff to focus on hospitality—not admin.
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
          <h2 className="text-2xl font-semibold">Plug-and-Play Integrations</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {integrations.map((item) => (
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
