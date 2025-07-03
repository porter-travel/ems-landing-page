import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import {
  MailOpen,
  Smile,
  CalendarCheck2,
  CheckCircle2,
  Lock,
  Compass,
  Smartphone,
  FileWarning,
  BarChartBig,
} from "lucide-react";

const benefits = [
  { icon: MailOpen, title: "Automated welcome", description: "Smart lock PINs and instructions sent automatically." },
  { icon: Smile, title: "Mid-stay check-ins", description: "Catch issues before they hit review scores." },
  { icon: CalendarCheck2, title: "Housekeeper scheduling", description: "Tasks and photo proof managed inside EMS Serve." },
  { icon: CheckCircle2, title: "Review booster", description: "EMS Rate prompts 5-star guests and resolves negatives." },
];

const journey = [
  { icon: MailOpen, title: "Booking", description: "Instant confirmation with house manual link." },
  { icon: Lock, title: "T-3 days", description: "Smart lock PIN and driving directions." },
  { icon: Smartphone, title: "Arrival", description: "Rate your check-in micro-survey." },
  { icon: Compass, title: "Mid-stay", description: "Local tips SMS and upsell for late checkout." },
  { icon: CheckCircle2, title: "Checkout", description: "Cleaning instructions and review prompt." },
  { icon: CalendarCheck2, title: "D+3 days", description: "Loyalty email with next-stay discount." },
];

const ops = [
  { icon: CalendarCheck2, title: "Unified calendar", description: "See bookings from all channels in one view." },
  { icon: Smartphone, title: "Auto-scheduler", description: "Housekeepers get tasks, checklists and photo uploads." },
  { icon: FileWarning, title: "Issue tracker", description: "Guest messages flagged with severity and escalation." },
  { icon: BarChartBig, title: "Owner reports", description: "Monthly P&L and occupancy delivered automatically." },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Scale your short-stay portfolio without scaling your workload."
          subtitle=""
        />
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <p className="font-semibold">Hosts report 35 % fewer after-hours calls and a 0.5-star uplift on Airbnb within 60 days.</p>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Full Guest Journey Timeline</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {journey.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Centralised Ops Dashboard</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {ops.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto text-center">
          <p className="text-lg font-semibold">Automate the guest journey—request a demo today →</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
