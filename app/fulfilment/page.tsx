import PageHero from "@/components/page-hero";
import FeatureCard from "@/components/feature-card";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
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

export default function Page() {
  const why = [
    {
      icon: UserCheck,
      title: "Guest expectations",
      description:
        "If they pay for early check-in, it better be ready.",
    },
    {
      icon: Users,
      title: "Staff clarity",
      description:
        "Requests routed properly mean fewer mistakes.",
    },
    {
      icon: AlertTriangle,
      title: "Reputation impact",
      description:
        "One missed order = one bad review.",
    },
  ];

  const covers = [
    {
      icon: LayoutDashboard,
      title: "Dashboards",
      description:
        "Live screens show all open requests, colour-coded by department and urgency.",
    },
    {
      icon: GitBranch,
      title: "Routing rules",
      description:
        "Requests automatically sent to the right team.",
    },
    {
      icon: Mail,
      title: "Order emails",
      description:
        "Instant alerts sent directly to the responsible inbox.",
    },
    {
      icon: CalendarClock,
      title: "Calendar-linked",
      description:
        "Time-sensitive products are auto-scheduled.",
    },
    {
      icon: ClipboardList,
      title: "Audit trails",
      description:
        "Every request has a timestamp and completion log.",
    },
    {
      icon: BellRing,
      title: "Escalations",
      description:
        "Auto-reminders for overdue tasks.",
    },
  ];

  const useCases = [
    {
      icon: BedDouble,
      title: "Hotels",
      description:
        "Late checkout purchases automatically update housekeeping schedules.",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurants",
      description:
        "Pre-ordered tasting menus logged for kitchen prep.",
    },
    {
      icon: Building2,
      title: "Venues",
      description:
        "Parking passes trigger front-of-house allocation.",
    },
    {
      icon: Home,
      title: "Airbnbs",
      description:
        "Firewood packs flagged for property managers on changeover day.",
    },
  ];

  const staffBenefits = [
    {
      icon: LayoutDashboard,
      title: "Clear dashboards",
      description: "No endless emails or sticky notes.",
    },
    {
      icon: Smartphone,
      title: "Mobile-friendly",
      description: "Works on phones, tablets, and laptops.",
    },
    {
      icon: Timer,
      title: "Prioritised",
      description: "SLAs and timers highlight what needs action first.",
    },
    {
      icon: BarChart3,
      title: "Trackable",
      description:
        "Managers see bottlenecks and performance at a glance.",
    },
  ];

  const managerBenefits = [
    {
      icon: ShieldCheck,
      title: "Confidence",
      description: "Nothing gets lost.",
    },
    {
      icon: ListChecks,
      title: "Accountability",
      description: "Timestamped logs for who handled what.",
    },
    {
      icon: TrendingUp,
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

        <section className="w-full py-12 xs:py-20 px-6">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
            Why Fulfilment Matters
          </h2>
          <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {why.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <section className="w-full py-12 xs:py-20 px-6">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
            What Fulfilment Covers
          </h2>
          <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {covers.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <section className="w-full py-12 xs:py-20 px-6">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
            Real Use Cases
          </h2>
          <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <section className="w-full py-12 xs:py-20 px-6">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
            Staff View Benefits
          </h2>
          <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffBenefits.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <section className="w-full py-12 xs:py-20 px-6">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
            Manager View Benefits
          </h2>
          <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managerBenefits.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <section className="px-6 py-12 max-w-screen-md mx-auto text-center space-y-4">
          <blockquote className="border-l-4 pl-4 italic text-left">
            “Guests love the tone; ops loves the quiet inbox. The guide email
            cut questions by half.”
            <br />— Ops Manager, Countryside Hotel
          </blockquote>
          <p>Fulfilment is where promises meet reality. EMS makes sure you deliver.</p>
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
        </section>

        <Footer />
      </main>
    </>
  );
}

