import PageHero from "@/components/page-hero";
import FeatureCard from "@/components/cards/FeatureCard";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Section from "@/components/section";
import PatternedCta from "@/components/cta/PatternedCta";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  TrendingUp,
  Users,
  CalendarClock,
  BedDouble,
  Gift,
  Upload,
  Workflow,
  Palette,
  Send,
  LineChart,
  Timer,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Automated Engagement | EMS",
  description:
    "Pre-timed, branded email flows that guide guests and drive upsells before, during and after their stay.",
};

export default function Page() {
  const benefits = [
    {
      icon: <Mail className="h-6 w-6" aria-hidden />,
      title: "Guests expect it",
      description:
        "They live in their inbox. Timely communication is the difference between calm arrivals and chaos.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" aria-hidden />,
      title: "Revenue depends on it",
      description:
        "Pre-arrival is the single highest-converting window for upsells.",
    },
    {
      icon: <Users className="h-6 w-6" aria-hidden />,
      title: "Your staff can't scale",
      description:
        "Automation handles FAQs and upsell prompts so your team doesn't have to.",
    },
  ];

  const automation = [
    {
      icon: <CalendarClock className="h-6 w-6" aria-hidden />,
      title: "Pre-Arrival",
      description: (
        <ul className="list-disc ml-4 space-y-1">
          <li>Upgrades: larger rooms, sea views, VIP packages</li>
          <li>Practical add-ons: parking, early check-in, luggage drop</li>
          <li>Experience extras: spa slots, dining reservations, welcome hampers</li>
          <li>Guides: Wi-Fi, directions, property policies, curated local tips</li>
        </ul>
      ),
    },
    {
      icon: <BedDouble className="h-6 w-6" aria-hidden />,
      title: "In-Stay",
      description: (
        <ul className="list-disc ml-4 space-y-1">
          <li>Mid-stay nudges: late checkout prompts, spa/restaurant reminders</li>
          <li>Local recs: “Best café nearby”, “Events tonight in town”</li>
          <li>Service touches: “Need anything? Just reply to this email”</li>
        </ul>
      ),
    },
    {
      icon: <Gift className="h-6 w-6" aria-hidden />,
      title: "Post-Stay",
      description: (
        <ul className="list-disc ml-4 space-y-1">
          <li>Thank-you notes: personalised and warm</li>
          <li>
            Verified reviews: captured automatically, with private flagging of
            low scores
          </li>
          <li>Rebooking codes: bring them back direct, not via an OTA</li>
        </ul>
      ),
    },
  ];

  const steps = [
    {
      icon: <Upload className="h-6 w-6" aria-hidden />,
      title: "Upload or Connect",
      description:
        "Drag a CSV of guest data or sync your PMS/CRM.",
    },
    {
      icon: <Workflow className="h-6 w-6" aria-hidden />,
      title: "Create Flows",
      description:
        "Drag-and-drop builder for pre, during, and post-stay automations.",
    },
    {
      icon: <Palette className="h-6 w-6" aria-hidden />,
      title: "Customise",
      description:
        "Add your logo, fonts, and colours—emails look 100% on-brand.",
    },
    {
      icon: <Send className="h-6 w-6" aria-hidden />,
      title: "Publish & Embed",
      description:
        "Send directly or drop upsell links into any message.",
    },
    {
      icon: <LineChart className="h-6 w-6" aria-hidden />,
      title: "Optimise",
      description:
        "Use Insights to track opens, clicks, and revenue.",
    },
  ];

  const love = [
    {
      icon: <Users className="h-6 w-6" aria-hidden />,
      title: "No tech team needed",
      description: "Anyone can set it up.",
    },
    {
      icon: <Timer className="h-6 w-6" aria-hidden />,
      title: "Fast launch",
      description: "Get your first upsell emails out in under an hour.",
    },
    {
      icon: <Layers className="h-6 w-6" aria-hidden />,
      title: "Scalable",
      description:
        "Works for single properties or portfolios of hundreds.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Perfectly Timed, Effortlessly Branded"
          subtitle="Guests don’t want random newsletters—they want the right info at the right time. EMS turns your booking data into polished, branded email flows that guide, upsell, and delight."
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-full text-base bg-[#F65053] hover:bg-[#F65053]/90"
          >
            <Link href="https://enhancemystay.com/register">
              Get Started Free <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="contrast"
            size="lg"
            className="w-full sm:w-auto rounded-full text-base"
          >
            <Link href="https://calendly.com/emsgrow/30min">
              <CalendarDays className="h-5 w-5" /> Book a Demo
            </Link>
          </Button>
        </PageHero>

        <Section>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
            Why Automated Engagement Matters
          </h2>
          <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                {item.description}
              </FeatureCard>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
            What You Can Automate
          </h2>
          <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
            {automation.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                {item.description}
              </FeatureCard>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
            How It Works
          </h2>
          <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                {item.description}
              </FeatureCard>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
            Why Teams Love It
          </h2>
          <div className="w-full max-w-screen-md mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {love.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                {item.description}
              </FeatureCard>
            ))}
          </div>
        </Section>

        <PatternedCta
          title="The guest experience is evolving. Are you?"
          subtext="Drop the clunky workflows. EMS automates perfectly timed emails, property guides, and upsells—without lifting a finger."
        />

        <Footer />
      </main>
    </>
  );
}

