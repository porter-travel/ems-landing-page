import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import PatternedCta from "@/components/cta/PatternedCta";
import PageScaffold from "@/components/layout/PageScaffold";
import Section from "@/components/layout/Section";
import Hero from "@/components/hero/Hero";
import FeatureCard from "@/components/cards/FeatureCard";
import type { Metadata } from "next";
import { Mail, Calendar, TrendingUp, Users, FileText, BarChart3, Clock, Inbox } from "lucide-react";

export const metadata: Metadata = {
  title: "Venues | EMS",
  description:
    "Automate event comms, upsell VIP options and manage redemptions with fulfilment dashboards for venues.",
};

const why = [
  { icon: <TrendingUp className="h-6 w-6" aria-hidden />, title: "Missed pre-event sales", description: "Emails upsell VIP upgrades, parking passes, drink tokens, or meal deals before guests even arrive." },
  { icon: <FileText className="h-6 w-6" aria-hidden />, title: "Confused attendees", description: "Automated info packs cover set times, maps, travel advice, and FAQs in one click." },
  { icon: <BarChart3 className="h-6 w-6" aria-hidden />, title: "Weak post-event conversion", description: "Follow-up emails with merch, future event offers, or memberships lock in extra revenue." },
];

const journey = [
  { icon: <Mail className="h-6 w-6" aria-hidden />, title: "Purchase", description: "Welcome email + optional VIP/product upsells." },
  { icon: <Calendar className="h-6 w-6" aria-hidden />, title: "T-1 week", description: "Event info + transport details." },
  { icon: <Inbox className="h-6 w-6" aria-hidden />, title: "Day before", description: "Reminder email upselling drink tokens or meal packages." },
  { icon: <Clock className="h-6 w-6" aria-hidden />, title: "Post-event", description: "Thank-you + review + “missed merch” follow-up." },
];

const tools = [
  { icon: <Users className="h-6 w-6" aria-hidden />, title: "Fulfilment dashboards", description: "Manage pre-event product redemptions and orders." },
  { icon: <Calendar className="h-6 w-6" aria-hidden />, title: "Calendar-linked inventory", description: "Limit ticketed upsells like VIP meet & greet or parking slots." },
  { icon: <Mail className="h-6 w-6" aria-hidden />, title: "Segmented sends", description: "Target communications by ticket type, seating block, or membership level." },
  { icon: <TrendingUp className="h-6 w-6" aria-hidden />, title: "Insights dashboards", description: "See take-rates, AOV, and campaign impact instantly." },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <PageScaffold>
        <Hero
          title="Craft Seamless Guest Journeys"
          subtext="Automate pre-event comms, drive add-on sales, and capture post-event revenue—without adding staff workload."
          showCtas
        />

        {/* Why Operators Choose EMS */}
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">Why Operators Choose EMS</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {why.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                  {item.description}
                </FeatureCard>
              ))}
            </div>
          </Section>
        </section>

        {/* Door-to-Encore Guest Journey */}
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-lg space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">Door-to-Encore Guest Journey</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {journey.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                  {item.description}
                </FeatureCard>
              ))}
            </div>
          </Section>
        </section>

        {/* Tools */}
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-lg space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">Tools That Keep Ops Calm</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {tools.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                  {item.description}
                </FeatureCard>
              ))}
            </div>
          </Section>
        </section>

        {/* Testimonial */}
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-lg">
            <div className="rounded-2xl border bg-background/60 backdrop-blur p-6 md:p-7 text-center space-y-4">
              <p className="text-lg font-semibold">
                “Queues fell, per-head spend rose, and we’ve built repeatable revenue into every event.”
              </p>
              <p>— F&B Manager, Midlands Arena</p>
            </div>
          </Section>
        </section>

        <PatternedCta
          title="The guest experience is evolving. Are you?"
          subtext="Upgrade every touchpoint, not just the stage."
        />
      </PageScaffold>
      <Footer />
    </>
  );
}
