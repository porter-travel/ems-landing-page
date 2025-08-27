import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import PatternedCta from "@/components/cta/PatternedCta";
import PageScaffold from "@/components/layout/PageScaffold";
import Section from "@/components/layout/Section";
import Hero from "@/components/hero/Hero";
import FeatureCard from "@/components/cards/FeatureCard";
import type { Metadata } from "next";
import { Mail, Calendar, TrendingUp, Users, FileText, BarChart3, Inbox, Settings, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Airbnbs | EMS",
  description:
    "Automate guest emails, upsell local extras and manage fulfilment for short-term rentals and Airbnbs.",
};

const why = [
  {
    icon: <FileText className="h-6 w-6" aria-hidden />,
    title: "Guests asking the same questions",
    description:
      "Automated welcome emails with house guides, Wi-Fi codes, check-in details, and local tips.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" aria-hidden />,
    title: "Missed add-on opportunities",
    description:
      "Pre-arrival emails upsell early check-in, welcome hampers, firewood packs, or bike rentals.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" aria-hidden />,
    title: "Rating pressure",
    description:
      "Post-stay thank-you emails capture reviews and encourage direct rebooking.",
  },
];

const journey = [
  {
    icon: <Mail className="h-6 w-6" aria-hidden />,
    title: "Booking confirmed",
    description: "Personalised email + upsell add-ons.",
  },
  {
    icon: <Calendar className="h-6 w-6" aria-hidden />,
    title: "T-3 days",
    description: "Reminder email with extras and recommendations.",
  },
  {
    icon: <Inbox className="h-6 w-6" aria-hidden />,
    title: "Arrival",
    description: "Welcome email with property info and local guide links.",
  },
  {
    icon: <Settings className="h-6 w-6" aria-hidden />,
    title: "Mid-stay",
    description: "Optional targeted email with experience offers.",
  },
  {
    icon: <Clock className="h-6 w-6" aria-hidden />,
    title: "Checkout",
    description: "Thank-you + review prompt + rebook discount.",
  },
];

const tools = [
  {
    icon: <Users className="h-6 w-6" aria-hidden />,
    title: "Fulfilment dashboards",
    description: "Track who booked what and whether it’s been delivered.",
  },
  {
    icon: <Calendar className="h-6 w-6" aria-hidden />,
    title: "Calendar-linked products",
    description: "Sell assets like parking spots or equipment rentals without clashes.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" aria-hidden />,
    title: "Revenue insights",
    description: "See what products convert and where to improve.",
  },
  {
    icon: <Mail className="h-6 w-6" aria-hidden />,
    title: "CSV/PMS sync",
    description: "Upload bookings from a spreadsheet or connect your PMS.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <PageScaffold>
        <Hero
          title="Turn Every Booking Into a Bigger Payout"
          subtext="Automate pre-arrival communication, upsell extras, and capture reviews—hands-free."
          showCtas
        />
        {/* Why Hosts & Managers Choose EMS */}
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">Why Hosts &amp; Managers Choose EMS</h2>
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
          <Section className="max-w-screen-md space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">Booking-to-Rebooking Guest Journey</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
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
          <Section className="max-w-screen-md space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">Tools That Keep Hosts Happy</h2>
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
          <Section className="max-w-screen-md">
            <div className="rounded-2xl border bg-background/60 backdrop-blur p-6 md:p-7 text-center space-y-4">
              <p className="text-lg font-semibold">
                “EMS turned endless questions into smooth self-service—and new revenue streams we never thought to try.”
              </p>
              <p>— Anna Doyle, Superhost</p>
            </div>
          </Section>
        </section>

        <PatternedCta
          title="The guest experience is evolving. Are you?"
          subtext="Get more revenue and fewer headaches—without hiring more staff."
        />
      </PageScaffold>
      <Footer />
    </>
  );
}
