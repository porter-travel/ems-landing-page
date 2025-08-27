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
  title: "Airbnbs | EMS",
  description:
    "Automate guest emails, upsell local extras and manage fulfilment for short-term rentals and Airbnbs.",
};

const challenges = [
  {
    challenge: "Guests asking the same questions",
    fix: "Automated welcome emails with house guides, Wi-Fi codes, check-in details, and local tips.",
  },
  {
    challenge: "Missed add-on opportunities",
    fix: "Pre-arrival emails upsell early check-in, welcome hampers, firewood packs, or bike rentals.",
  },
  {
    challenge: "Rating pressure",
    fix: "Post-stay thank-you emails capture reviews and encourage direct rebooking.",
  },
];

const journey = [
  {
    stage: "Booking Confirmed",
    description: "Personalised email + upsell add-ons.",
  },
  {
    stage: "T-3 Days",
    description: "Reminder email with extras and recommendations.",
  },
  {
    stage: "Arrival Day",
    description: "Welcome email with property info and local guide links.",
  },
  {
    stage: "Mid-Stay",
    description: "Optional targeted email with experience offers.",
  },
  {
    stage: "Checkout",
    description: "Thank-you + review prompt + rebook discount.",
  },
];

const tools = [
  {
    icon: Users,
    title: "Fulfilment dashboards",
    description: "Track who booked what and whether it’s been delivered.",
  },
  {
    icon: Calendar,
    title: "Calendar-linked products",
    description: "Sell assets like parking spots or equipment rentals without clashes.",
  },
  {
    icon: TrendingUp,
    title: "Revenue insights",
    description: "See what products convert and where to improve.",
  },
  {
    icon: Mail,
    title: "CSV/PMS sync",
    description: "Upload bookings from a spreadsheet or connect your PMS.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Turn Every Booking Into a Bigger Payout"
          subtitle="Whether you run one spare room or hundreds of units, EMS automates pre-arrival communication, upsells extras, and captures reviews without you lifting a finger."
        >
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full text-base bg-[#F65053] hover:bg-[#F65053]/90"
          >
            Get Started Free <ArrowUpRight className="h-5 w-5" />
          </Button>
          <Button
            variant="contrast"
            size="lg"
            className="w-full sm:w-auto rounded-full text-base"
          >
            <CalendarDays className="h-5 w-5" /> Book a Demo
          </Button>
        </PageHero>

        <Section>
          <div className="max-w-screen-md mx-auto space-y-6">
            <h2 className="text-2xl font-semibold">Why Hosts &amp; Managers Choose EMS</h2>
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
            <h2 className="text-2xl font-semibold">Booking-to-Rebooking Guest Journey</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
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
          </div>
        </Section>

        <Section>
          <div className="max-w-screen-md mx-auto text-center space-y-4">
            <p className="text-lg font-semibold">
              “EMS turned endless questions into smooth self-service—and new revenue streams we never thought to try.”
            </p>
            <p>— Anna Doyle, Superhost</p>
          </div>
        </Section>

        <Section>
          <div className="max-w-screen-md mx-auto text-center space-y-4">
            <h2 className="text-2xl font-semibold">The guest experience is evolving. Are you?</h2>
            <p>Get more revenue and fewer headaches—without hiring more staff.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full text-base bg-[#F65053] hover:bg-[#F65053]/90"
              >
                Get Started Free <ArrowUpRight className="h-5 w-5" />
              </Button>
              <Button
                variant="contrast"
                size="lg"
                className="w-full sm:w-auto rounded-full text-base"
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
