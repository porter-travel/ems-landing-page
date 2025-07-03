import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import {
  QrCode,
  Ban,
  Megaphone,
  AlertTriangle,
  MapPin,
  Utensils,
  Check,
  Gift,
  Heart,
} from "lucide-react";

const benefits = [
  { icon: QrCode, title: "QR menus", description: "Table ordering cuts dwell time by 12 minutes." },
  { icon: Ban, title: "Real-time 86ing", description: "Prevent those awkward 'we\u2019re out' moments." },
  { icon: Megaphone, title: "Fill slow shifts", description: "Targeted lunch offers drive traffic." },
  { icon: AlertTriangle, title: "Issue alerts", description: "EMS Rate flags problems before they hit reviews." },
];

const workflow = [
  { icon: MapPin, title: "Seat", description: "Host scans QR to assign table and server." },
  { icon: Utensils, title: "Order & pay", description: "Guests split bills, tip and reorder without waiting." },
  { icon: Check, title: "Feedback", description: "Instant 5-second survey before they leave." },
  { icon: Gift, title: "Retarget", description: "Hyper-local lunch offer hits the next weekday." },
];

const loyalty = [
  { icon: Heart, title: "Card-free points", description: "Spend logs to a profile; rewards trigger via EMS Send." },
  { icon: Utensils, title: "Guest DNA", description: "Dietary tags and favourites surface for staff." },
  { icon: Gift, title: "Win-back", description: "Lapsed guests get offers proven to recapture 23%." },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Seat more diners, turn tables faster, and keep them coming back."
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
          <p className="font-semibold">Restaurants using EMS cut walk-outs by 18 % and grow per-cover spend by 22 % in the first quarter.</p>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">From Seat to Repeat – Workflow</h2>
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
          <h2 className="text-2xl font-semibold">Loyalty & CRM Booster</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {loyalty.map((item) => (
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
          <p className="text-lg font-semibold">Book a tasting tour of EMS for restaurants →</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
