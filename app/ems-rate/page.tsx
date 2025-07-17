import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Layout,
  Search,
  Brain,
  Activity,
  Send,
  Star,
  MessageCircle,
  BarChartBig,
  Image,
  Globe,
  Mail,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Verified-only reviews",
    description:
      "Every comment comes from a guest who scanned a QR code, ordered, chatted, or checked-in — no bots, no fakes, no trolls.",
  },
  {
    icon: Layout,
    title: "Embeddable widgets",
    description:
      "Drop our responsive widget on your site or link-in-bio to showcase live, verified reviews and boost conversion.",
  },
  {
    icon: Search,
    title: "Public search portal (emsrate.com)",
    description:
      "Prospects can discover your business and read all your EMS reviews in one trusted place.",
  },
  {
    icon: Brain,
    title: "AI sentiment & predictive alerts",
    description:
      "Dashboards highlight emerging themes (\u201Cslow breakfast\u201D, \u201Cspotless rooms\u201D) and flag score dips before they snowball.",
  },
];

const workflow = [
  {
    icon: Activity,
    title: "Interaction captured",
    description:
      "A guest places an order, submits a request, or chats via EMS Serve.",
  },
  {
    icon: Send,
    title: "Seamless prompt",
    description:
      "EMS automatically follows up at the optimal time — no apps, no log-ins.",
  },
  {
    icon: Star,
    title: "Verified review posted",
    description:
      "Feedback goes live instantly on your EMS widget and emsrate.com.",
  },
  {
    icon: MessageCircle,
    title: "Respond",
    description:
      "Reply directly, or use our AI-suggested response in the Reputation Hub.",
  },
  {
    icon: BarChartBig,
    title: "Analyse & improve",
    description:
      "AI groups comments by theme and reveals revenue impact (e.g. \u201C+0.2\u2605 = +\u00A34.60 ADR\u201D).",
  },
];

const showcase = [
  {
    icon: Layout,
    title: "Website widgets",
    description:
      "Paste one line of code to stream fresh reviews onto any page.",
  },
  {
    icon: Image,
    title: "Social-ready graphics",
    description:
      "Auto-generate branded review cards for Instagram, LinkedIn, or Stories in a click.",
  },
  {
    icon: Globe,
    title: "Public profile",
    description:
      "Your emsrate.com page acts as a living testimonial wall and SEO booster.",
  },
  {
    icon: Mail,
    title: "Email signatures & QR flyers",
    description:
      "Add a dynamic star badge that updates in real time.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Verified Feedback That Drives Revenue"
          subtitle="Capture in-moment feedback, publish only verified reviews, and surface AI insights that lift bookings and loyalty — all from one plug-and-play hub."
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
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">Why EMS Rate Beats Generic Review Sites</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((item) => (
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
          <h2 className="text-2xl font-semibold">Show Off Your Stars Everywhere</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {showcase.map((item) => (
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
