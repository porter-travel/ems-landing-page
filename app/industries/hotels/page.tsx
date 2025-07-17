import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CalendarDays,
  Utensils,
  ConciergeBell,
  Info,
  MessageCircle,
  LayoutGrid,
  Shuffle,
  BarChart2,
} from "lucide-react";

const challenges = [
  {
    challenge: "Disjointed upsells",
    fix: "Pre-arrival emails offer stay personalisation, spa slots, parking and more.",
  },
  {
    challenge: "Room-service delays",
    fix: "QR ordering routes tickets straight to kitchen/bar with throttling.",
  },
  {
    challenge: "Missed guest requests",
    fix: "One-tap service tickets auto-assign to housekeeping or engineering.",
  },
  {
    challenge: "OTA review pressure",
    fix: "Verified EMS Rate reviews lift scores & drive direct bookings.",
  },
];

const modules = [
  {
    icon: Utensils,
    title: "Digital Ordering",
    description: "Room service, poolside drinks, restaurant table ordering.",
  },
    {
    icon: ConciergeBell,
    title: "Service Requests",
    description: "Extra pillow, maintenance, airport transfer—logged & tracked.",
  },
  {
    icon: Info,
    title: "Info Pages",
    description: "Local guides, spa menus, Wi-Fi codes—all branded to you.",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Real-time concierge routed to the right team.",
  },
];

const staffFeatures = [
  {
    icon: LayoutGrid,
    title: "Live fulfilment boards",
    description: "Colour-coded cards by team, priority, and SLA.",
  },
  {
    icon: Shuffle,
    title: "Auto-routing rules",
    description: "“Broken AC” ➜ Engineering · “Extra towels” ➜ Housekeeping.",
  },
  {
    icon: BarChart2,
    title: "Exportable revenue reports",
    description: "CSV or scheduled PDFs for finance & owners.",
  },
  {
    icon: CalendarDays,
    title: "Calendar view",
    description: "Spa appointments, meeting-room bookings, equipment loans.",
  },
];

const touchpoints = [
  { stage: "Pre-arrival", exp: "Upgrade & add-on email" },
  { stage: "In-stay", exp: "QR room-service + live chat" },
  { stage: "Checkout", exp: "Automated review prompt" },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Digitise Every Stay, Your Way"
          subtitle="Give guests mobile-first options for check-in, room-service, chat, and upsells while staff handle it all from one easy dashboard."
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
          <h2 className="text-2xl font-semibold">Why Hoteliers Choose EMS</h2>
          <div className="grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
            {challenges.map((row) => (
              <div key={row.challenge} className="border p-6 -mt-px -ml-px space-y-1">
                <p className="text-[#F65053] text-xs font-semibold">Challenge</p>
                <p className="font-semibold">{row.challenge}</p>
                <p className="mt-3 text-[#F65053] text-xs font-semibold">EMS Fix</p>
                <p className="text-sm">{row.fix}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">“Pick & Mix” Your Perfect Guest Journey</h2>
          {/* Mobile/Tablet layout */}
          <div className="flex flex-wrap justify-center gap-4 md:hidden">
            {modules.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                className="w-full sm:w-1/2"
              />
            ))}
          </div>
          {/* Desktop layout: two rows of two cards */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {modules.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <p>Activate only the modules you need today; add more anytime with one click.</p>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">Effortless for Staff</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {staffFeatures.map((item) => (
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
          <h2 className="text-2xl font-semibold">Guest Journey Touchpoints</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
            {touchpoints.map((row) => (
              <div key={row.stage} className="border p-6 -mt-px -ml-px">
                <div className="font-semibold">{row.stage}</div>
                <p className="mt-2 text-sm xs:text-base">{row.exp}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto text-center">
          <p className="text-lg font-semibold">
            “Guests love the control, staff love the simplicity—and revenues speak for themselves.”
          </p>
          <p className="mt-2">— GM, London Hotel Chain</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
