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
  title: "Restaurants | EMS",
  description:
    "Automate pre- and post-dining emails, share menus and track fulfilment to boost restaurant revenue.",
};

const challenges = [
  {
    challenge: "Quiet midweek shifts",
    fix: "Pre-arrival emails upsell chef’s menus, pairings, or promotions to drive midweek spend.",
  },
  {
    challenge: "Guests unsure what to order",
    fix: "Menus and recommendations shared automatically before arrival. No more PDF attachments.",
  },
  {
    challenge: "Lost loyalty",
    fix: "Post-dining thank-you emails include review prompts and rebooking incentives to keep guests coming back.",
  },
];

const journey = [
  {
    stage: "Booking Confirmed",
    description:
      "Guests instantly receive a thank-you note + optional upsell (wine flight, welcome cocktail, prix fixe).",
  },
  {
    stage: "Day Before",
    description:
      "Reminder email with chef highlights or local recommendations.",
  },
  {
    stage: "Day After",
    description: "Thank-you + review prompt.",
  },
  {
    stage: "Week After",
    description:
      "Targeted email offering midweek specials or return booking discounts.",
  },
];

const tools = [
  {
    icon: Users,
    title: "Fulfilment dashboards",
    description: "Track pre-orders and make sure they’re delivered smoothly.",
  },
  {
    icon: Calendar,
    title: "Calendar-linked slots",
    description: "Sell tasting menus or experiences tied to dates/times.",
  },
  {
    icon: TrendingUp,
    title: "Revenue dashboards",
    description: "Monitor per-cover spend, upsell conversion, and campaign ROI.",
  },
  {
    icon: Mail,
    title: "Menu links in emails",
    description: "Easily share menus or allergen info without staff emails.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Turn Every Reservation Into Revenue"
          subtitle="From the moment a guest books, EMS can work in the background. Share menus, allergen info, chef’s notes, or upsell experiences like welcome cocktails or set menus. After the meal, EMS collects reviews and entices guests back for the next booking."
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
            <h2 className="text-2xl font-semibold">Why Operators Love EMS</h2>
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
            <h2 className="text-2xl font-semibold">Seat-to-Repeat Guest Journey</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {journey.map((item) => (
                <Card key={item.stage} className="p-6 space-y-2 text-center">
                  <p className="text-lg font-semibold">{item.stage}</p>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-screen-md mx-auto space-y-4">
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
          </div>
        </Section>

        <Section>
          <div className="max-w-screen-md mx-auto text-center space-y-4">
            <p className="text-lg font-semibold">
              “Guests arrive primed to spend more, and staff stay focused on service. Upsells now feel effortless.”
            </p>
            <p>— Ops Director, Warwickshire Bistro</p>
          </div>
        </Section>

        <Section>
          <div className="max-w-screen-md mx-auto text-center space-y-4">
            <h2 className="text-2xl font-semibold">The guest experience is evolving. Are you?</h2>
            <p>Turn every cover into repeat business with automated flows.</p>
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
