import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import {
  QrCode,
  Utensils,
  Activity,
  Repeat,
  LayoutGrid,
  Info,
  Pencil,
  BarChart2,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

const challenges = [
  {
    challenge: "Slow table turns",
    fix: "QR table ordering with split-bill & tip options cuts dwell time.",
  },
  {
    challenge: "Menu questions",
    fix: "Info QRs show allergens, provenance, and chef notes—no staff interruptions.",
  },
  {
    challenge: "Kitchen overload",
    fix: "Fulfilment screens flag ageing tickets and let chefs pause items in a click.",
  },
  {
    challenge: "Quiet mid-week shifts",
    fix: "Pre-arrival upsell emails (welcome cocktail, chef’s menu) turn reservations into higher spend.",
  },
];

const journey = [
  {
    icon: QrCode,
    title: "Seat & Scan",
    description: "Guests scan the table QR, browse, customise, and pay in seconds.",
  },
  {
    icon: Utensils,
    title: "Serve & Upsell",
    description: "Smart add-on prompts (“Try truffle fries?”) boost basket size at checkout.",
  },
  {
    icon: Activity,
    title: "Pulse Feedback",
    description: "Automated EMS Rate email drops after dessert, capturing key verified feedback",
  },
  {
    icon: Repeat,
    title: "Retarget & Return",
    description: "Next-day EMS Send email offers an exclusive weekday lunch deal to fill slow shifts.",
  },
];

const tools = [
  {
    icon: LayoutGrid,
    title: "Live fulfilment boards",
    description: "Colour-coded timers spotlight orders that need attention.",
  },
  {
    icon: Info,
    title: "Allergy & Provenance QRs",
    description: "One tap reveals a full allergen matrix and farm-to-fork stories.",
  },
  {
    icon: Pencil,
    title: "Instant menu edits",
    description: "86 an item or update pricing across every QR in under 10 seconds.",
  },
  {
    icon: BarChart2,
    title: "Revenue dashboards",
    description: "Track per-cover spend, order flow, and upsell conversion in real time.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Turn every table into a revenue engine."
          subtitle="Give guests friction-free ordering, rich storytelling, and irresistible pre-arrival upsells while your team stays in full control."
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
          <h2 className="text-2xl font-semibold">Why Operators Love EMS</h2>
          <div className="grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
            {challenges.map((row) => (
              <div key={row.challenge} className="border p-6 -mt-px -ml-px">
                <div className="font-semibold">{row.challenge}</div>
                <p className="mt-2 text-sm xs:text-base">{row.fix}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">“Seat-to-Repeat” Guest Journey</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {journey.map((item) => (
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
          <h2 className="text-2xl font-semibold">Tools That Delight Guests and Staff</h2>
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
          <p className="text-lg font-semibold">“Guests love the control, staff love the calm—and we bank the upsells.”</p>
          <p className="mt-2">— Operations Director, Warwickshire Bistro</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
