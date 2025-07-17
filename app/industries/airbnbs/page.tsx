import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import {
  MailOpen,
  QrCode,
  LayoutGrid,
  BarChartBig,
  ArrowUpRight,
  CalendarDays
} from "lucide-react";



const challenges = [
  {
    challenge: "Guests ask the same questions",
    fix:
      "Info QRs link to digital house guides, Wi-Fi codes, local tips—no inbox ping-pong.",
  },
  {
    challenge: "Leaving money on the table",
    fix:
      "Pre-arrival upsell emails (early check-in, welcome hamper, firewood pack) convert before guests arrive.",
  },
  {
    challenge: "After-hours messages",
    fix: "One-tap service requests route issues to on-call or maintenance instantly.",
  },
  {
    challenge: "Ratings make or break revenue",
    fix: "EMS Rate prompts verified reviews and flags problems privately.",
  },
];

const journey = [
  {
    moment: "Booking confirmed",
    touch: "Thank-you email + optional paid add-ons",
    value: "New revenue before arrival",
  },
  {
    moment: "T-3 days",
    touch: "Reminder email upsells early check-in or late checkout",
    value: "Increases spend & staggered arrivals",
  },
  {
    moment: "Arrival",
    touch: "QR welcome card opens guidebook & service request menu",
    value: "Fewer calls, happier guests",
  },
  {
    moment: "Mid-stay",
    touch: "Quick micro-survey + local experience offer",
    value: "Real-time issue capture & upsell",
  },
  {
    moment: "Checkout",
    touch: "Capture review & rebook discount",
    value: "Higher star rating, direct repeat stays",
  },
];

const tools = [
  {
    icon: MailOpen,
    title: "Pre-Arrival EMS Send",
    description:
      "Drag-and-drop emails timed to each stay; upsell extras in a click.",
  },
  {
    icon: QrCode,
    title: "In-House QRs",
    description:
      "Digital guidebooks, firewood orders, linen swaps—everything in guests’ pockets.",
  },
  {
    icon: LayoutGrid,
    title: "Live Fulfilment Board",
    description:
      "See open requests, who’s on it, and SLA timers at a glance.",
  },
  {
    icon: BarChartBig,
    title: "Revenue Dashboards",
    description:
      "Track add-on sales and review scores per property or portfolio.",
  },
];
export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Turn every booking into a bigger payout."
          subtitle="From one spare room to 500+ units, EMS lets hosts and property managers upsell extras, answer questions with QR codes, and collect rave reviews on autopilot."
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
          <h2 className="text-2xl font-semibold">Why Hosts & Managers Choose EMS</h2>
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
          <h2 className="text-2xl font-semibold">“Booking-to-Rebooking” Guest Journey</h2>
          <ol className="relative border-l border-border pl-6 space-y-6">
            {journey.map((row) => (
              <li key={row.moment} className="relative">
                <span className="absolute -left-3 top-4 h-2 w-2 rounded-full bg-primary" />
                <div className="bg-background border rounded-xl p-4 ml-2">
                  <p className="text-sm font-semibold">{row.moment}</p>
                  <p className="text-sm text-foreground/80">{row.touch}</p>
                  <p className="text-sm text-foreground/80">{row.value}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Tools That Keep Hosts Happy</h2>
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
          <p className="text-lg font-semibold">“EMS turned guest questions into self-serve clicks and upsells I never thought to offer.”</p>
          <p className="mt-2">— Anna Doyle, Superhost & Portfolio Manager</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
