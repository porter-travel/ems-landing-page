import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import {
  ClipboardList,
  ThumbsUp,
  Brain,
  MessageCircle,
  RotateCcw,
  Activity,
  CheckCircle2,
  Languages,
  BarChartBig,
} from "lucide-react";

const benefits = [
  {
    icon: ClipboardList,
    title: "In-service micro-surveys",
    description:
      "Catch issues before checkout with quick ratings embedded in Wi-Fi portals or EMS Serve.",
  },
  {
    icon: ThumbsUp,
    title: "Post-visit review booster",
    description:
      "Automatically invite happy guests to share their experience on top review sites.",
  },
  {
    icon: Brain,
    title: "AI sentiment & themes",
    description:
      "Dashboards surface trends behind your scores—cleanliness, service and more.",
  },
  {
    icon: MessageCircle,
    title: "Reputation reply hub",
    description:
      "Respond to every public review from one screen with suggested replies.",
  },
  {
    icon: RotateCcw,
    title: "Service recovery workflows",
    description:
      "Route low scores to managers and trigger vouchers or follow-ups automatically.",
  },
];

const workflow = [
  {
    icon: Activity,
    title: "Real-time pulse",
    description:
      "Micro-surveys fire during the stay and issues create tasks in EMS Serve.",
  },
  {
    icon: CheckCircle2,
    title: "Review routing",
    description:
      "Happy guests get branded prompts; unhappy ones see a private form.",
  },
  {
    icon: RotateCcw,
    title: "Service recovery",
    description:
      "Action plans auto-assign with SLA timers and escalation rules.",
  },
];

const advantages = [
  {
    icon: ClipboardList,
    title: "Designed for hospitality",
    description:
      "Room, table and ticket IDs link feedback to exact staff and shift.",
  },
  {
    icon: Activity,
    title: "Predictive alerts",
    description:
      "AI flags at-risk guests before they leave the property.",
  },
  {
    icon: Languages,
    title: "Omni-language",
    description: "Surveys localise to over 30 languages automatically.",
  },
  {
    icon: BarChartBig,
    title: "Revenue reporting",
    description:
      "See how even a small rating lift correlates to ADR or per-cover spend.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Capture feedback, grow loyalty, protect your reputation."
          subtitle="Instant surveys, automated review requests, and AI-powered sentiment analysis—built for hospitality."
        />
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <p>What you don’t know can hurt your brand. EMS Rate closes the loop fast:</p>
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
          <p className="font-semibold">Properties using EMS Rate increase average review score by 0.7 stars in six months.</p>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Close-the-Loop Workflow</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {workflow.map((item) => (
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
          <h2 className="text-2xl font-semibold">Why EMS Rate Beats Generic Survey Tools</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {advantages.map((item) => (
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
          <p className="text-lg font-semibold">Own your online reputation: Schedule an EMS Rate walkthrough →</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
