import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import PatternedCta from "@/components/cta/PatternedCta";
import PageScaffold from "@/components/layout/PageScaffold";
import Section from "@/components/layout/Section";
import Hero from "@/components/hero/Hero";
import FeatureCard from "@/components/cards/FeatureCard";
import { Users, Handshake, Rocket, BedDouble, UtensilsCrossed, Building2, Home } from "lucide-react";

export default function Page() {
  const values = [
    {
      icon: <Users className="h-6 w-6" aria-hidden />,
      title: "Level the field",
      description: "Give independents the same power as global chains.",
    },
    {
      icon: <Handshake className="h-6 w-6" aria-hidden />,
      title: "Keep it human",
      description: "Staff focus on service, EMS handles the clicks.",
    },
    {
      icon: <Rocket className="h-6 w-6" aria-hidden />,
      title: "Ship fast",
      description: "No jargon, no long integrations—just quick wins.",
    },
  ];

  const serve = [
    {
      icon: <BedDouble className="h-6 w-6" aria-hidden />,
      title: "Hotels",
      description: "Chasing ancillary revenue.",
    },
    {
      icon: <UtensilsCrossed className="h-6 w-6" aria-hidden />,
      title: "Restaurants",
      description: "Driving midweek demand.",
    },
    {
      icon: <Building2 className="h-6 w-6" aria-hidden />,
      title: "Venues",
      description: "Lifting per-head spend.",
    },
    {
      icon: <Home className="h-6 w-6" aria-hidden />,
      title: "Short-stay hosts",
      description: "Boosting reviews and rebookings.",
    },
  ];

  return (
    <>
      <Navbar />
      <PageScaffold>
        <Hero
          title="The Team Behind EMS"
          subtext="Every guest. Every touchpoint. Elevated. We build pick-and-mix tools that turn routine interactions into unforgettable (and profitable) moments."
          showCtas
        />
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-md">
            <div className="rounded-2xl border bg-background/60 backdrop-blur p-6 md:p-7 space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold">Our Story</h2>
              <p>It started with one question:</p>
              <p>Why do guests wade through noise when a simple email could do the work?</p>
              <p>
                In 2019 we built an AI engine to personalise hotel bookings. It worked—guests were happier, revenue went up.
                Hotels then asked: “Can you help us sell more before guests arrive?” We listened.
              </p>
              <p>
                EMS was born: an automation engine built for hospitality. From there, restaurants, venues, and Airbnbs joined in.
                The idea stayed the same—replace messy manual work with seamless, branded communications that guests love.
              </p>
            </div>
          </Section>
        </section>
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">What Drives Us</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {values.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                  {item.description}
                </FeatureCard>
              ))}
            </div>
          </Section>
        </section>
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-md">
            <div className="rounded-2xl border bg-background/60 backdrop-blur p-6 md:p-7 space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold">Mission</h2>
              <p>
                To democratise guest-experience tech. If you can upload a CSV, you can run EMS. No dev team, no six-month rollout.
                Just plug-and-play tools that boost revenue, save staff time, and turn guests into repeat fans.
              </p>
            </div>
          </Section>
        </section>
        <section className="py-12 md:py-16">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">Who We Serve</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {serve.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title}>
                  {item.description}
                </FeatureCard>
              ))}
            </div>
          </Section>
        </section>
        <PatternedCta
          title="The guest experience is evolving. Are you?"
          subtext="Drop the clunky workflows. EMS brings automations, guides, and upsells into one streamlined system."
        />
      </PageScaffold>
      <Footer />
    </>
  );
}
