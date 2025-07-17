import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CalendarDays,
  LayoutGrid,
  Pause,
  Filter,
  BookOpen,
} from "lucide-react";

const challenges = [
  {
    challenge: "Pre-event upsells",
    fix: "EMS Send emails upselling VIP parking, seat upgrades, or pre-ordered drinks.",
  },
  {
    challenge: "Concession queues",
    fix: "Seat & Collect QRs let guests order on their phone—either delivered to seats or prepped for fast pickup.",
  },
  {
    challenge: "Info overload",
    fix: "Info QRs surface set times, maps, allergen lists, or ward visiting hours instantly.",
  },
  {
    challenge: "Missed merch sales",
    fix: "Post-event EMS Send nudges fans who didn’t buy on-site with a “Missed the merch?” link.",
  },
];

const journey = [
  { stage: "Ticket purchase", exp: "Auto-welcome email with FAQ & VIP add-ons" },
  { stage: "In-seat", exp: "QR ordering (delivery or collect)" },
  { stage: "Set-time alert", exp: "Push: “Bar closes in 15 min—last orders now”" },
  { stage: "Exit", exp: "Feedback & merch discount" },
  { stage: "Day +1", exp: "Follow-up email: missed-merch, season tickets" },
];

const tools = [
  {
    icon: LayoutGrid,
    title: "Live fulfilment screens",
    description: "Colour-coded timers flag ageing orders and help staff pace volume.",
  },
  {
    icon: Pause,
    title: "Pause / Resume menu items",
    description: "Run out of nachos? Hide them in two taps—auto-message explains to guests.",
  },
  {
    icon: Filter,
    title: "Segmented EMS Send",
    description: "Target by seat block, membership tier, or day-patient ward.",
  },
  {
    icon: BookOpen,
    title: "QR story cards",
    description: "Showcase provenance of craft beers, artist bios, or post-op recovery advice.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Craft seamless guest experiences—no matter the venue."
          subtitle="Stadiums, theatres, arenas, festivals, even private hospitals—EMS puts ticketing, on-site ordering, and follow-up revenue under one roof."
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
          <h2 className="text-2xl font-semibold">Why Operators Choose EMS</h2>
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
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">“Door-to-Encore” Journey</h2>
          <ol className="relative border-l border-border pl-6 space-y-6">
            {journey.map((row) => (
              <li key={row.stage} className="relative">
                <span className="absolute -left-3 top-4 h-2 w-2 rounded-full bg-primary" />
                <div className="bg-background border rounded-xl p-4 ml-2">
                  <p className="text-sm font-semibold">{row.stage}</p>
                  <p className="text-sm text-foreground/80">{row.exp}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Tools That Keep Crowds Happy and Ops Calm</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {tools.map((item) => (
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
          <p className="text-lg font-semibold">“Queues vanished, bar sales soared, and fans loved the control.”</p>
          <p className="mt-2">— F&B Manager, Midlands Arena</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
