import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import PatternedCta from "@/components/cta/PatternedCta";
import PageScaffold from "@/components/layout/PageScaffold";
import Section from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import type { Metadata } from "next";
import { Mail, Calendar, TrendingUp, Users } from "lucide-react";

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
  { stage: "Booking Confirmed", description: "Personalised email + upsell add-ons." },
  { stage: "T-3 Days", description: "Reminder email with extras and recommendations." },
  { stage: "Arrival Day", description: "Welcome email with property info and local guide links." },
  { stage: "Mid-Stay", description: "Optional targeted email with experience offers." },
  { stage: "Checkout", description: "Thank-you + review prompt + rebook discount." },
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
      <PageScaffold
        title="Turn Every Booking Into a Bigger Payout"
        intro="Whether you run one spare room or hundreds of units, EMS automates pre-arrival communication, upsells extras, and captures reviews without you lifting a finger."
      >
        {/* Why Hosts & Managers Choose EMS */}
        <section className="py-16 sm:py-20 md:py-24">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-2xl font-semibold">Why Hosts &amp; Managers Choose EMS</h2>
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
          <Section className="max-w-screen-md space-y-4">
            <h2 className="text-2xl font-semibold">Booking-to-Rebooking Guest Journey</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
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
            <h2 className="text-2xl font-semibold">Tools That Keep Hosts Happy</h2>
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
              “EMS turned endless questions into smooth self-service—and new revenue streams we never thought to try.”
            </p>
            <p>— Anna Doyle, Superhost</p>
          </Section>
        </section>

        <PatternedCta
          title="The guest experience is evolving. Are you?"
          subtext="Get more revenue and fewer headaches—without hiring more staff."
        />
        <Footer />
      </PageScaffold>
    </>
  );
}
