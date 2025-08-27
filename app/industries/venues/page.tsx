import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Section from "@/components/section";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  Calendar,
  TrendingUp,
  Users,
} from "lucide-react";

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
  {
    stage: "Ticket Purchase",
    description: "Welcome email + optional VIP/product upsells.",
  },
  {
    stage: "T-1 Week",
    description: "Event info + transport details.",
  },
  {
    stage: "Day Before",
    description: "Reminder email upselling drink tokens or meal packages.",
  },
  {
    stage: "Post-Event",
    description: "Thank-you + review + “missed merch” follow-up.",
  },
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
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Craft Seamless Guest Journeys"
          subtitle="For arenas, theatres, stadiums, and events, EMS automates communication from ticket purchase through encore. Guests get clarity and offers; your team gets predictable pre-orders and revenue uplift."
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

        <Section>
          <div className="max-w-screen-md mx-auto space-y-6">
            <h2 className="text-2xl font-semibold">Why Operators Choose EMS</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {challenges.map((row) => (
                <Card key={row.challenge} className="p-6 space-y-1">
                  <p className="text-[#F65053] text-xs font-semibold">Challenge</p>
                  <p className="font-semibold">{row.challenge}</p>
                  <p className="mt-3 text-[#F65053] text-xs font-semibold">EMS Fix</p>
                  <p className="text-sm">{row.fix}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-screen-md mx-auto space-y-4">
            <h2 className="text-2xl font-semibold">Door-to-Encore Guest Journey</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {journey.map((item) => (
                <Card key={item.stage} className="p-6 text-center space-y-2">
                  <p className="text-lg font-semibold">{item.stage}</p>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-screen-md mx-auto space-y-4">
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
          </div>
        </Section>

        <Section>
          <div className="max-w-screen-md mx-auto text-center space-y-4">
            <p className="text-lg font-semibold">
              “Queues fell, per-head spend rose, and we’ve built repeatable revenue into every event.”
            </p>
            <p>— F&B Manager, Midlands Arena</p>
          </div>
        </Section>

        <Section>
          <div className="max-w-screen-md mx-auto text-center space-y-4">
            <h2 className="text-2xl font-semibold">The guest experience is evolving. Are you?</h2>
            <p>Upgrade every touchpoint, not just the stage.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
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
            </div>
          </div>
        </Section>
        <Footer />
      </main>
    </>
  );
}
