import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import PatternedCta from "@/components/cta/PatternedCta";
import PageScaffold from "@/components/layout/PageScaffold";
import Section from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import type { Metadata } from "next";
import { Mail, Calendar, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Hotels | EMS",
  description:
    "Automate guest comms and upsells while giving staff clear fulfilment dashboards across your hotel.",
};

const challenges = [
  {
    challenge: "Disjointed upsells",
    fix: "Pre-arrival emails present upgrades, parking, spa slots, and late checkout—automatically, no calls or manual chasing.",
  },
  {
    challenge: "Guests asking the same questions",
    fix: "Welcome messages and property guides arrive in guests’ inboxes before check-in, answering Wi-Fi, parking, spa hours, and more.",
  },
  {
    challenge: "OTA dependency",
    fix: "Post-stay thank-you emails with rebook links capture more direct bookings and verified reviews.",
  },
  {
    challenge: "Operational bottlenecks",
    fix: "Orders route instantly to the right department via fulfilment dashboards and calendar-linked scheduling.",
  },
];

const journey = [
  {
    stage: "Pre-Arrival",
    description:
      "A polished email introducing the stay, upselling add-ons, and linking to local guides.",
  },
  {
    stage: "In-Stay",
    description:
      "Mid-stay touchpoints with local recs, dining reminders, or late checkout prompts.",
  },
  {
    stage: "Post-Stay",
    description:
      "Thank-you emails that secure reviews and encourage direct rebooking.",
  },
];

const staffFeatures = [
  {
    icon: Users,
    title: "Fulfilment dashboards",
    description: "Track and assign upsell requests with clear SLAs.",
  },
  {
    icon: Calendar,
    title: "Calendar-linked products",
    description:
      "Manage bookable assets (spa slots, bike rentals, meeting rooms) without double-booking.",
  },
  {
    icon: TrendingUp,
    title: "Real-time insights",
    description: "See revenue, take-rates, and product performance at a glance.",
  },
  {
    icon: Mail,
    title: "CSV/PMS sync",
    description:
      "Start small with spreadsheet uploads or connect your PMS for full automation.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <PageScaffold
        title="Digitise Every Stay, Your Way"
        intro="Hospitality thrives on moments. EMS makes those moments easier to deliver by automating personalised emails before, during, and after each stay. Guests get clear info, tempting upgrades, and local recommendations—staff get a clean dashboard to fulfil, track, and measure everything."
      >
        {/* Why Hoteliers Choose EMS */}
        <section className="py-16 sm:py-20 md:py-24">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-2xl font-semibold">Why Hoteliers Choose EMS</h2>
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

        {/* Guest Journey */}
        <section className="py-16 sm:py-20 md:py-24">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-2xl font-semibold">Build the Guest Journey That Fits You</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {journey.map((item) => (
                <Card
                  key={item.stage}
                  className="rounded-2xl border bg-background/60 backdrop-blur p-6 text-center space-y-2"
                >
                  <p className="text-lg font-semibold">{item.stage}</p>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                </Card>
              ))}
            </div>
          </Section>
        </section>

        {/* Staff Features */}
        <section className="py-16 sm:py-20 md:py-24">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-2xl font-semibold">Effortless for Staff</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {staffFeatures.map((item) => (
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
              “Guests love the personal touch, staff love the simplicity—and the bottom line loves the upsells.”
            </p>
            <p>— GM, London Hotel Chain</p>
          </Section>
        </section>

        <PatternedCta
          title="The guest experience is evolving. Are you?"
          subtext="Drop the manual upselling. EMS automates the journey and keeps it human."
        />
        <Footer />
      </PageScaffold>
    </>
  );
}
