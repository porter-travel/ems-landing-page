import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import {
  Inbox,
  MailCheck,
  ArrowUpRight,
  CalendarDays,
  Upload,
  Layout,
  BarChart2,
  Repeat,
  MousePointerClick,
  Send,
  MessageCircle,
} from "lucide-react";


const compliance = [
  {
    icon: MailCheck,
    title: "Dedicated sending reputation",
    description: "Your own domain, DKIM/SPF pre-configured.",
  },
  {
    icon: Inbox,
    title: "Responsive templates",
    description: "Auto-apply your fonts, colours, and logo.",
  },
];

const reasons = [
  {
    icon: Repeat,
    title: "Lifecycle Triggers",
    description:
      "Pre-arrival teasers, in-stay nudges, post-stay win-backs. Put upgrades, add-ons, and reviews in front of guests when they’re most likely to act",
  },
  {
    icon: MousePointerClick,
    title: "Drag-&-Drop Journeys",
    description: "Build or adjust flows in minutes—no code, no agency fees",
  },
  {
    icon: Upload,
    title: "CSV Upload or One-Click Sync",
    description: "Import a list today, plug in your PMS tomorrow—your choice",
  },
  {
    icon: Send,
    title: "Own-Domain Sending",
    description:
      "Boost open rates and brand trust with your hotel@yourdomain.com address",
  },
  {
    icon: MessageCircle,
    title: "Multi-Channel Ready",
    description: "Start with email; add SMS or WhatsApp when you’re ready",
  },
  {
    icon: BarChart2,
    title: "Real-Time Reporting",
    description: "See opens, clicks, and conversion £ in one revenue dashboard",
  },
];

const touchpoints = [
  {
    time: "T – 7 days",
    text: "\u201CAdd a late checkout for 20% off.\u201D – Average 14% take-rate",
  },
  {
    time: "Check-in morning",
    text: "\u201CFancy a welcome cocktail? Order now, skip the queue.\u201D",
  },
  {
    time: "Mid-stay",
    text: "Quick CSAT pulse; low scores route to the duty manager in real time.",
  },
  {
    time: "Checkout +1 hour",
    text: "\u201CRate your stay & save 10% on your next booking.\u201D",
  },
  {
    time: "D + 30",
    text: "Personalised offer based on spend tier or last-ordered service.",
  },
];

const steps = [
  {
    icon: Upload,
    title: "Upload or Sync Contacts",
    description: "Drag in a CSV or connect your booking system.",
  },
  {
    icon: Layout,
    title: "Pick a Journey Template",
    description: "Choose “Pre-stay Upsell”, “Abandoned Checkout”, or build from scratch.",
  },
  {
    icon: BarChart2,
    title: "Go Live & Track Revenue",
    description: "Real-time dashboard shows sales, ROI, and best-performing messages.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Automated Messages That Boost Revenue."
          subtitle="Automatically engage every guest before, during, and after each booking with perfectly timed, custom-branded messages—no complex integrations required."
        >
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full text-base bg-[#F65053] hover:bg-[#F65053]/90"
          >
            Start Free <ArrowUpRight className="h-5 w-5" />
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
          <h2 className="text-2xl font-semibold">Why Operators Choose EMS Send</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {reasons.map((item) => (
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
          <h2 className="text-2xl font-semibold">High-Impact Touchpoints (Examples)</h2>
          <ol className="relative border-l border-border pl-6 space-y-6">
            {touchpoints.map((item) => (
              <li key={item.time} className="relative">
                <span className="absolute -left-3 top-1.5 h-2 w-2 rounded-full bg-primary" />
                <p className="text-sm font-semibold">{item.time}</p>
                <p className="text-sm text-foreground/80">{item.text}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Built-In Deliverability & Branding</h2>
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
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Set-Up in Three Steps</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {steps.map((item) => (
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
          <p className="text-lg font-semibold">Teams typically launch their first revenue-generating flow in &lt;30 minutes.</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
