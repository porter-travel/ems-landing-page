import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import PatternedCta from "@/components/cta/PatternedCta";
import PageScaffold from "@/components/layout/PageScaffold";
import Section from "@/components/layout/Section";
import Hero from "@/components/hero/Hero";
import FeatureCard from "@/components/cards/FeatureCard";
import type { Metadata } from "next";
import { Mail, Calendar, TrendingUp, Users, FileText, BarChart3, Settings, Clock, Inbox } from "lucide-react";

export const metadata: Metadata = {
  title: "Hotels | EMS",
  description:
    "Automate guest comms and upsells while giving staff clear fulfilment dashboards across your hotel.",
};

const why = [
  {
    icon: <TrendingUp className="h-6 w-6" aria-hidden />,
    title: "Disjointed upsells",
    description:
      "Pre-arrival emails present upgrades, parking, spa slots, and late checkout—automatically, no calls or manual chasing.",
  },
  {
    icon: <FileText className="h-6 w-6" aria-hidden />,
    title: "Guests asking the same questions",
    description:
      "Welcome messages and property guides arrive in guests’ inboxes before check-in, answering Wi-Fi, parking, spa hours, and more.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" aria-hidden />,
    title: "OTA dependency",
    description:
      "Post-stay thank-you emails with rebook links capture more direct bookings and verified reviews.",
  },
  {
    icon: <Settings className="h-6 w-6" aria-hidden />,
    title: "Operational bottlenecks",
    description:
      "Orders route instantly to the right department via fulfilment dashboards and calendar-linked scheduling.",
  },
];

const journey = [
  {
    icon: <Calendar className="h-6 w-6" aria-hidden />,
    title: "Pre-Arrival",
    description:
      "A polished email introducing the stay, upselling add-ons, and linking to local guides.",
  },
  {
    icon: <Clock className="h-6 w-6" aria-hidden />,
    title: "In-Stay",
    description:
      "Mid-stay touchpoints with local recs, dining reminders, or late checkout prompts.",
  },
  {
    icon: <Mail className="h-6 w-6" aria-hidden />,
    title: "Post-Stay",
    description:
      "Thank-you emails that secure reviews and encourage direct rebooking.",
  },
];

const staffFeatures = [
  {
    icon: <Users className="h-6 w-6" aria-hidden />,
    title: "Fulfilment dashboards",
    description: "Track and assign upsell requests with clear SLAs.",
  },
  {
    icon: <Calendar className="h-6 w-6" aria-hidden />,
    title: "Calendar-linked products",
    description:
      "Manage bookable assets (spa slots, bike rentals, meeting rooms) without double-booking.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" aria-hidden />,
    title: "Real-time insights",
    description: "See revenue, take-rates, and product performance at a glance.",
  },
  {
    icon: <Inbox className="h-6 w-6" aria-hidden />,
    title: "CSV/PMS sync",
    description:
      "Start small with spreadsheet uploads or connect your PMS for full automation.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <PageScaffold>
        <Hero
          title="Digitise Every Stay, Your Way"
          subtext="Automated guest emails before, during, and after the stay. Drive upgrades, reduce calls, and make guests feel looked after from the moment they book."
          showCtas
        />
        {/* Why Hoteliers Choose EMS */}
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">Why Hoteliers Choose EMS</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {why.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                  {item.description}
                </FeatureCard>
              ))}
            </div>
          </Section>
        </section>

        {/* Guest Journey */}
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">Build the Guest Journey That Fits You</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {journey.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                  {item.description}
                </FeatureCard>
              ))}
            </div>
          </Section>
        </section>

        {/* Staff Features */}
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">Effortless for Staff</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {staffFeatures.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                  {item.description}
                </FeatureCard>
              ))}
            </div>
          </Section>
        </section>

        {/* Testimonial */}
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-md">
            <div className="rounded-2xl border bg-background/60 backdrop-blur p-6 md:p-7 text-center space-y-4">
              <p className="text-lg font-semibold">
                “Guests love the personal touch, staff love the simplicity—and the bottom line loves the upsells.”
              </p>
              <p>— GM, London Hotel Chain</p>
            </div>
          </Section>
        </section>

        <PatternedCta
          title="The guest experience is evolving. Are you?"
          subtext="Drop the manual upselling. EMS automates the journey and keeps it human."
        />
      </PageScaffold>
      <Footer />
    </>
  );
}
