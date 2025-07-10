import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import {
  Shuffle,
  BarChart2,
  QrCode,
  LayoutGrid,
  Bell,
  CalendarDays,
  ArrowUpRight,
  Utensils,
  ConciergeBell,
  MessageCircle,
  Info,
} from "lucide-react";

const guestLove = [
  {
    icon: Utensils,
    feature: "Digital Ordering",
    examples: "Room-service, poolside F&B, table orders",
    benefit: "Scan, customise, pay in <30 s",
  },
  {
    icon: ConciergeBell,
    feature: "Service Requests",
    examples: "Extra towels, maintenance, late checkout",
    benefit: "One tap—no phone calls",
  },
  {
    icon: MessageCircle,
    feature: "Live Chat",
    examples: "Concierge questions, event updates",
    benefit: "Real-time answers, routed to the right team",
  },
  {
    icon: Info,
    feature: "Info Pages",
    examples: "Hotel guide, local eats, FAQs",
    benefit: "Everything they need in one link",
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
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Serve every guest, every time - seamlessly."
          subtitle="Custom-branded QR journeys that handle ordering, service requests, live chat, and info pages in one hub."
        >
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full text-base bg-[#F65053] hover:bg-[#F65053]/90"
          >
            Get Started Free <ArrowUpRight className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-full text-base border-[#F65053] text-[#F65053]"
          >
            <CalendarDays className="h-5 w-5" /> Book a Demo
          </Button>
        </PageHero>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">Why Guests Love It</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {guestLove.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.feature}
                  className="bg-background border rounded-xl p-5 flex flex-col"
                >
                  <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-semibold">{item.feature}</span>
                  <p className="text-sm text-foreground/80">{item.examples}</p>
                  <p className="mt-1 text-foreground/80">{item.benefit}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">How EMS Serve Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <h2 className="text-2xl font-semibold">Built to simplify operations</h2>
          <img
            src="/EMSFulfilment.png"
            alt="Fulfilment"
            className="w-full rounded-xl"
          />
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
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
