import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import PatternedCta from "@/components/cta/PatternedCta";
import PageScaffold from "@/components/layout/PageScaffold";
import Section from "@/components/layout/Section";
import Hero from "@/components/hero/Hero.tsx";
import FeatureCard from "@/components/cards/FeatureCard";
import type { Metadata } from "next";
import { Mail, Calendar, TrendingUp, Users, FileText, BarChart3, Clock, Inbox } from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurants | EMS",
  description:
    "Automate pre- and post-dining emails, share menus and track fulfilment to boost restaurant revenue.",
};

const why = [
  {
    icon: <TrendingUp className="h-6 w-6" aria-hidden />,
    title: "Quiet midweek shifts",
    description:
      "Pre-arrival emails upsell chef’s menus, pairings, or promotions to drive midweek spend.",
  },
  {
    icon: <FileText className="h-6 w-6" aria-hidden />,
    title: "Guests unsure what to order",
    description:
      "Menus and recommendations shared automatically before arrival. No more PDF attachments.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" aria-hidden />,
    title: "Lost loyalty",
    description:
      "Post-dining thank-you emails include review prompts and rebooking incentives to keep guests coming back.",
  },
];

const journey = [
  {
    icon: <Mail className="h-6 w-6" aria-hidden />,
    title: "Booking",
    description:
      "Guests instantly receive a thank-you note + optional upsell (wine flight, welcome cocktail, prix fixe).",
  },
  {
    icon: <Calendar className="h-6 w-6" aria-hidden />,
    title: "Day Before",
    description:
      "Reminder email with chef highlights or local recommendations.",
  },
  {
    icon: <Inbox className="h-6 w-6" aria-hidden />,
    title: "Day After",
    description: "Thank-you + review prompt.",
  },
  {
    icon: <Clock className="h-6 w-6" aria-hidden />,
    title: "Week After",
    description:
      "Targeted email offering midweek specials or return booking discounts.",
  },
];

const tools = [
  {
    icon: <Users className="h-6 w-6" aria-hidden />,
    title: "Fulfilment dashboards",
    description: "Track pre-orders and make sure they’re delivered smoothly.",
  },
  {
    icon: <Calendar className="h-6 w-6" aria-hidden />,
    title: "Calendar-linked slots",
    description: "Sell tasting menus or experiences tied to dates/times.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" aria-hidden />,
    title: "Revenue dashboards",
    description: "Monitor per-cover spend, upsell conversion, and campaign ROI.",
  },
  {
    icon: <Mail className="h-6 w-6" aria-hidden />,
    title: "Menu links in emails",
    description: "Easily share menus or allergen info without staff emails.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <PageScaffold>
        <Hero
          title="Turn Every Reservation Into Revenue"
          subtext="Send pre- and post-visit emails that upsell, delight, and bring guests back again."
          showCtas
        />
        {/* Why Operators Love EMS */}
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">Why Operators Love EMS</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {why.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                  {item.description}
                </FeatureCard>
              ))}
            </div>
          </Section>
        </section>

        {/* Seat-to-Repeat Guest Journey */}
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-md space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">Seat-to-Repeat Guest Journey</h2>
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
          <Section className="max-w-screen-md space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">Tools That Delight Guests and Staff</h2>
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
                “Guests arrive primed to spend more, and staff stay focused on service. Upsells now feel effortless.”
              </p>
              <p>— Ops Director, Warwickshire Bistro</p>
            </div>
          </Section>
        </section>

        <PatternedCta
          title="The guest experience is evolving. Are you?"
          subtext="Turn every cover into repeat business with automated flows."
        />
      </PageScaffold>
      <Footer />
    </>
  );
}
