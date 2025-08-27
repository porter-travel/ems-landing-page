import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import PatternedCta from "@/components/cta/PatternedCta";
import PageScaffold from "@/components/layout/PageScaffold";
import Section from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import type { Metadata } from "next";
import { Mail, Calendar, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Venues | EMS",
  description:
    "Automate event comms, upsell VIP options and manage redemptions with fulfilment dashboards for venues.",
};

const challenges = [
  {
    challenge: "Missed pre-event sales",
    fix: "Emails upsell VIP upgrades, parking passes, drink tokens, or meal deals before guests even arrive.",
  },
  {
    challenge: "Confused attendees",
    fix: "Automated info packs cover set times, maps, travel advice, and FAQs in one click.",
  },
  {
    challenge: "Weak post-event conversion",
    fix: "Follow-up emails with merch, future event offers, or memberships lock in extra revenue.",
  },
];

const journey = [
  { stage: "Ticket Purchase", description: "Welcome email + optional VIP/product upsells." },
  { stage: "T-1 Week", description: "Event info + transport details." },
  { stage: "Day Before", description: "Reminder email upselling drink tokens or meal packages." },
  { stage: "Post-Event", description: "Thank-you + review + “missed merch” follow-up." },
];

const tools = [
  {
    icon: Users,
    title: "Fulfilment dashboards",
    description: "Manage pre-event product redemptions and orders.",
  },
  {
    icon: Calendar,
    title: "Calendar-linked inventory",
    description: "Limit ticketed upsells like VIP meet & greet or parking slots.",
  },
  {
    icon: Mail,
    title: "Segmented sends",
    description: "Target communications by ticket type, seating block, or membership level.",
  },
  {
    icon: TrendingUp,
    title: "Insights dashboards",
    description: "See take-rates, AOV, and campaign impact instantly.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <PageScaffold
        title="Craft Seamless Guest Journeys"
        intro="For arenas, theatres, stadiums, and events, EMS automates communication from ticket purchase through encore. Guests get clarity and offers; your team gets predictable pre-orders and revenue uplift."
      >
        {/* Why Operators Choose EMS */}
        <section className="py-16 sm:py-20 md:py-24">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-2xl font-semibold">Why Operators Choose EMS</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {challenges.map((row) => (
                <Card
                  key={row.challenge}
                  className="rounded-2xl border bg-background/60 backdrop-blur p-6 space-y-1"
                >
                  <p className="text-[#F65053] text-xs font-semibold">Challenge</p>
                  <p className="font-semibold">{row.challenge}</p>
                  <p className="mt-3 text-[#F65053] text-xs font-semibold">EMS Fix</p>
                  <p className="text-sm">{row.fix}</p>
                </Card>
              ))}
            </div>
          </Section>
        </section>

        {/* Door-to-Encore Guest Journey */}
        <section className="py-16 sm:py-20 md:py-24">
          <Section className="max-w-screen-md space-y-4">
            <h2 className="text-2xl font-semibold">Door-to-Encore Guest Journey</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {journey.map((item) => (
                <Card
                  key={item.stage}
                  className="rounded-2xl border bg-background/60 backdrop-blur p-6 space-y-2 text-center"
                >
                  <p className="text-lg font-semibold">{item.stage}</p>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                </Card>
              ))}
            </div>
          </Section>
        </section>

        {/* Tools */}
        <section className="py-16 sm:py-20 md:py-24">
          <Section className="max-w-screen-md space-y-4">
            <h2 className="text-2xl font-semibold">Tools That Keep Crowds Happy and Ops Calm</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {tools.map((item) => (
                <Card
                  key={item.title}
                  className="rounded-2xl border bg-background/60 backdrop-blur p-6 space-y-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                </Card>
              ))}
            </div>
          </Section>
        </section>

        {/* Testimonial */}
        <section className="py-16 sm:py-20 md:py-24">
          <Section className="max-w-screen-md text-center space-y-4">
            <p className="text-lg font-semibold">
              “Queues fell, per-head spend rose, and we’ve built repeatable revenue into every event.”
            </p>
            <p>— F&B Manager, Midlands Arena</p>
          </Section>
        </section>

        <PatternedCta
          title="The guest experience is evolving. Are you?"
          subtext="Upgrade every touchpoint, not just the stage."
        />
        <Footer />
      </PageScaffold>
    </>
  );
}
