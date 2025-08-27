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
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Digitise Every Stay, Your Way"
          subtitle="Hospitality thrives on moments. EMS makes those moments easier to deliver by automating personalised emails before, during, and after each stay. Guests get clear info, tempting upgrades, and local recommendations—staff get a clean dashboard to fulfil, track, and measure everything."
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
            <h2 className="text-2xl font-semibold">Why Hoteliers Choose EMS</h2>
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
          <div className="max-w-screen-md mx-auto space-y-6">
            <h2 className="text-2xl font-semibold">Build the Guest Journey That Fits You</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
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
          <div className="max-w-screen-md mx-auto space-y-6">
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
          </div>
        </Section>

        <Section>
          <div className="max-w-screen-md mx-auto text-center space-y-4">
            <p className="text-lg font-semibold">
              “Guests love the personal touch, staff love the simplicity—and the bottom line loves the upsells.”
            </p>
            <p>— GM, London Hotel Chain</p>
          </div>
        </Section>

        <Section>
          <div className="max-w-screen-md mx-auto text-center space-y-4">
            <h2 className="text-2xl font-semibold">The guest experience is evolving. Are you?</h2>
            <p>Drop the manual upselling. EMS automates the journey and keeps it human.</p>
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
