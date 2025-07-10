import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import {
  Inbox,
  ShieldCheck,
  MailCheck,
  ArrowUpRight,
  CalendarDays,
  Upload,
  Layout,
  BarChart2,
} from "lucide-react";


const compliance = [
  {
    icon: MailCheck,
    title: "Dedicated sending reputation",
    description: "Your own domain, DKIM/SPF pre-configured.",
  },
  {
    icon: Inbox,
    title: "Responsive templates",
    description: "Auto-apply your fonts, colours, and logo.",
  },
  {
    icon: ShieldCheck,
    title: "Granular consent",
    description: "GDPR/CCPA compliant preference centre out of the box.",
  },
];

const steps = [
  {
    icon: Upload,
    title: "Upload or Sync Contacts",
    description: "Drag in a CSV or connect your booking system.",
  },
  {
    icon: Layout,
    title: "Pick a Journey Template",
    description: "Choose “Pre-stay Upsell”, “Abandoned Checkout”, or build from scratch.",
  },
  {
    icon: BarChart2,
    title: "Go Live & Track Revenue",
    description: "Real-time dashboard shows sales, ROI, and best-performing messages.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Reach, resonate, and revenue follows."
          subtitle="Automatically engage every guest before, during, and after each booking with perfectly timed, custom-branded messages—no complex integrations required."
        >
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full text-base bg-[#F65053] hover:bg-[#F65053]/90"
          >
            Start Free <ArrowUpRight className="h-5 w-5" />
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
          <h2 className="text-2xl font-semibold">Why Operators Choose EMS Send</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-2 border">What it does</th>
                  <th className="p-2 border">How it helps you earn more</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border font-semibold">
                    Lifecycle Triggers
                    <div className="font-normal">
                      Pre-arrival teasers, in-stay nudges, post-stay win-backs
                    </div>
                  </td>
                  <td className="p-2 border">
                    Put upgrades, add-ons, and reviews in front of guests when they’re most likely to act
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border font-semibold">Drag-&-Drop Journeys</td>
                  <td className="p-2 border">Build or adjust flows in minutes—no code, no agency fees</td>
                </tr>
                <tr>
                  <td className="p-2 border font-semibold">CSV Upload or One-Click Sync</td>
                  <td className="p-2 border">Import a list today, plug in your PMS tomorrow—your choice</td>
                </tr>
                <tr>
                  <td className="p-2 border font-semibold">Own-Domain Sending</td>
                  <td className="p-2 border">Boost open rates and brand trust with your hotel@yourdomain.com address</td>
                </tr>
                <tr>
                  <td className="p-2 border font-semibold">Multi-Channel Ready</td>
                  <td className="p-2 border">Start with email; add SMS or WhatsApp when you’re ready</td>
                </tr>
                <tr>
                  <td className="p-2 border font-semibold">Real-Time Reporting</td>
                  <td className="p-2 border">See opens, clicks, and conversion £ in one revenue dashboard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">High-Impact Touchpoints (Examples)</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>T – 7 days · “Add a late checkout for 20 % off.” – Average 14 % take-rate</li>
            <li>Check-in morning · “Fancy a welcome cocktail? Order now, skip the queue.”</li>
            <li>Mid-stay · Quick CSAT pulse; low scores route to the duty manager in real time.</li>
            <li>Checkout +1 hour · “Rate your stay & save 10 % on your next booking.”</li>
            <li>D + 30 · Personalised offer based on spend tier or last-ordered service.</li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Built-In Deliverability & Branding</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {compliance.map((item) => (
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
          <h2 className="text-2xl font-semibold">Set-Up in Three Steps</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((item) => (
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
          <p className="text-lg font-semibold">Teams typically launch their first revenue-generating flow in &lt;30 minutes.</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
