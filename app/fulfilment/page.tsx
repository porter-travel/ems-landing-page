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
  UserCheck,
  Users,
  AlertTriangle,
  LayoutDashboard,
  GitBranch,
  Mail,
  CalendarClock,
  ClipboardList,
  BellRing,
  BedDouble,
  UtensilsCrossed,
  Building2,
  Home,
  Smartphone,
  Timer,
  BarChart3,
  ShieldCheck,
  ListChecks,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fulfilment | EMS",
  description:
    "Route upsell requests to the right team, track progress with SLAs and keep every promise to guests.",
};

export default function Page() {
  const why = [
    {
      icon: <UserCheck className="h-6 w-6" aria-hidden />,
      title: "Guest expectations",
      description:
        "If they pay for early check-in, it better be ready.",
    },
    {
      icon: <Users className="h-6 w-6" aria-hidden />,
      title: "Staff clarity",
      description:
        "Requests routed properly mean fewer mistakes.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6" aria-hidden />,
      title: "Reputation impact",
      description:
        "One missed order = one bad review.",
    },
  ];

  const covers = [
    {
      icon: <LayoutDashboard className="h-6 w-6" aria-hidden />,
      title: "Dashboards",
      description:
        "Live screens show all open requests, colour-coded by department and urgency.",
    },
    {
      icon: <GitBranch className="h-6 w-6" aria-hidden />,
      title: "Routing rules",
      description:
        "Requests automatically sent to the right team.",
    },
    {
      icon: <Mail className="h-6 w-6" aria-hidden />,
      title: "Order emails",
      description:
        "Instant alerts sent directly to the responsible inbox.",
    },
    {
      icon: <CalendarClock className="h-6 w-6" aria-hidden />,
      title: "Calendar-linked",
      description:
        "Time-sensitive products are auto-scheduled.",
    },
    {
      icon: <ClipboardList className="h-6 w-6" aria-hidden />,
      title: "Audit trails",
      description:
        "Every request has a timestamp and completion log.",
    },
    {
      icon: <BellRing className="h-6 w-6" aria-hidden />,
      title: "Escalations",
      description:
        "Auto-reminders for overdue tasks.",
    },
  ];

  const useCases = [
    {
      icon: <BedDouble className="h-6 w-6" aria-hidden />,
      title: "Hotels",
      description:
        "Late checkout purchases automatically update housekeeping schedules.",
    },
    {
      icon: <UtensilsCrossed className="h-6 w-6" aria-hidden />,
      title: "Restaurants",
      description:
        "Pre-ordered tasting menus logged for kitchen prep.",
    },
    {
      icon: <Building2 className="h-6 w-6" aria-hidden />,
      title: "Venues",
      description:
        "Parking passes trigger front-of-house allocation.",
    },
    {
      icon: <Home className="h-6 w-6" aria-hidden />,
      title: "Airbnbs",
      description:
        "Firewood packs flagged for property managers on changeover day.",
    },
  ];

  const staffBenefits = [
    {
      icon: <LayoutDashboard className="h-6 w-6" aria-hidden />,
      title: "Clear dashboards",
      description: "No endless emails or sticky notes.",
    },
    {
      icon: <Smartphone className="h-6 w-6" aria-hidden />,
      title: "Mobile-friendly",
      description: "Works on phones, tablets, and laptops.",
    },
    {
      icon: <Timer className="h-6 w-6" aria-hidden />,
      title: "Prioritised",
      description: "SLAs and timers highlight what needs action first.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" aria-hidden />,
      title: "Trackable",
      description:
        "Managers see bottlenecks and performance at a glance.",
    },
  ];

  const managerBenefits = [
    {
      icon: <ShieldCheck className="h-6 w-6" aria-hidden />,
      title: "Confidence",
      description: "Nothing gets lost.",
    },
    {
      icon: <ListChecks className="h-6 w-6" aria-hidden />,
      title: "Accountability",
      description: "Timestamped logs for who handled what.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" aria-hidden />,
      title: "Efficiency",
      description: "Optimise staff load based on order flow.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="From Click to Completion—Seamlessly"
          subtitle="When a guest books a product or requests something, EMS makes sure your team delivers without bottlenecks."
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
            Why Fulfilment Matters
          </h2>
          <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {why.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                {item.description}
              </FeatureCard>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
            What Fulfilment Covers
          </h2>
          <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {covers.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                {item.description}
              </FeatureCard>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
            Real Use Cases
          </h2>
          <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                {item.description}
              </FeatureCard>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
            Staff View Benefits
          </h2>
          <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffBenefits.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                {item.description}
              </FeatureCard>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
            Manager View Benefits
          </h2>
          <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managerBenefits.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                {item.description}
              </FeatureCard>
            ))}
          </div>
        </Section>

        <PatternedCta
          title="Fulfilment is where promises meet reality."
          subtext="EMS routes, tracks, and timestamps every order so nothing slips. Guests get what they paid for—on time."
        />

        <Footer />
      </main>
    </>
  );
}

