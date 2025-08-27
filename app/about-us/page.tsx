import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import PatternedCta from "@/components/cta/PatternedCta";
import PageScaffold from "@/components/layout/PageScaffold";
import Section from "@/components/layout/Section";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageScaffold
        title="The Team Behind EMS"
        intro="“Every guest. Every touchpoint. Elevated.”"
      >
        <section className="py-16 sm:py-20 md:py-24">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-2xl font-semibold">Our Story</h2>
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
          </Section>
        </section>

        <section className="py-16 sm:py-20 md:py-24">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-2xl font-semibold">What Drives Us</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Level the field — Give independents the same power as global chains.</li>
              <li>Keep it human — Staff focus on service, EMS handles the clicks.</li>
              <li>Ship fast — No jargon, no long integrations—just quick wins.</li>
            </ul>
          </Section>
        </section>

        <section className="py-16 sm:py-20 md:py-24">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p>To democratise guest-experience tech.</p>
            <p>
              If you can upload a CSV, you can run EMS. No dev team, no six-month rollout. Just plug-and-play tools that boost
              revenue, save staff time, and turn guests into repeat fans.
            </p>
          </Section>
        </section>

        <section className="py-16 sm:py-20 md:py-24">
          <Section className="max-w-screen-md space-y-6">
            <h2 className="text-2xl font-semibold">Who We Serve</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hotels chasing ancillary revenue.</li>
              <li>Restaurants driving midweek demand.</li>
              <li>Venues lifting per-head spend.</li>
              <li>Short-stay hosts boosting reviews and rebookings.</li>
            </ul>
          </Section>
        </section>

        <PatternedCta
          title="The guest experience is evolving. Are you?"
          subtext="Drop the clunky workflows. EMS brings automations, guides, and upsells into one streamlined system."
        />
        <Footer />
      </PageScaffold>
    </>
  );
}
