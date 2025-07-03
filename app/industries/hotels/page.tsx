import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import CTABanner from "@/components/cta-banner";
import { Navbar } from "@/components/navbar";
import FeatureCard from "@/components/feature-card";
import {
  KeyRound,
  ConciergeBell,
  Brush,
  Star,
  CalendarCheck2,
  DoorOpen,
  UtensilsCrossed,
  CreditCard,
  Smile,
} from "lucide-react";

const benefits = [
  { icon: KeyRound, title: "Mobile check-in", description: "Keyless entry codes sent via EMS Send." },
  { icon: ConciergeBell, title: "Contextual upsells", description: "Late checkout, spa and dining offers delivered in-app." },
  { icon: Brush, title: "Housekeeping updates", description: "Real-time room status reduces delays by 25%." },
  { icon: Star, title: "Automated reviews", description: "EMS Rate invites boost direct booking credibility." },
];

const touchpoints = [
  { icon: CalendarCheck2, title: "Pre-arrival", description: "Upsell emails for upgrades, spa or parking." },
  { icon: DoorOpen, title: "Check-in", description: "Mobile key and digital registration in minutes." },
  { icon: UtensilsCrossed, title: "In-stay", description: "One-tap room-service ordering via EMS Serve." },
  { icon: CreditCard, title: "Checkout", description: "Express bill review and instant review invite." },
];

const results = [
  { icon: Smile, title: "Reduced queues", description: "28% shorter front-desk lines within 60 days." },
  { icon: ConciergeBell, title: "Higher spend", description: "19% lift in ancillaries like late checkout and F&B." },
  { icon: Star, title: "Reputation boost", description: "0.6-star lift in average OTA rating by month four." },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="From lobby to late checkout, craft stays guests rave about."
          subtitle=""
        />
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <p className="font-semibold">Pain points</p>
          <p>Long queues at reception, fragmented comms, OTA dependency, negative reviews.</p>
          <p className="font-semibold">Solution narrative</p>
          <p>EMS unifies operations and guest engagement, so front-desk teams spend less time clicking screens and more time creating memorable moments.</p>
          <h2 className="text-2xl font-semibold">Key benefits</h2>
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
          <p className="italic">“Within 90 days we saw a 15 % uplift in direct bookings and a dramatic fall in reception wait times.” — General Manager, The London Harbour Hotel</p>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Guest Journey Touchpoints</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {touchpoints.map((item) => (
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
          <h2 className="text-2xl font-semibold">Results You Can Count On</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {results.map((item) => (
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
          <p className="text-lg font-semibold">Unlock next-level guest satisfaction → Talk to our hotel specialists</p>
        </section>
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
