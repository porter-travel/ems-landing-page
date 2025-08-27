import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CalendarDays } from "lucide-react";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="The Team Behind EMS"
          subtitle="“Every guest. Every touchpoint. Elevated.”"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full text-base bg-[#F65053] hover:bg-[#F65053]/90"
          >
            Get Started Free <ArrowUpRight className="h-5 w-5" />
          </Button>
          <Button
            variant="contrast"
            size="lg"
            className="w-full sm:w-auto rounded-full text-base"
          >
            <CalendarDays className="h-5 w-5" /> Book a Demo
          </Button>
        </PageHero>

        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p>It started with one question:</p>
          <p>Why do guests wade through noise when a simple email could do the work?</p>
          <p>
            In 2019 we built an AI engine to personalise hotel bookings. It worked—guests were happier, revenue went up. Hotels then asked: “Can you help us sell more before guests arrive?” We listened.
          </p>
          <p>
            EMS was born: an automation engine built for hospitality. From there, restaurants, venues, and Airbnbs joined in. The idea stayed the same—replace messy manual work with seamless, branded communications that guests love.
          </p>
        </section>

        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">What Drives Us</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Level the field — Give independents the same power as global chains.</li>
            <li>Keep it human — Staff focus on service, EMS handles the clicks.</li>
            <li>Ship fast — No jargon, no long integrations—just quick wins.</li>
          </ul>
        </section>

        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p>To democratise guest-experience tech.</p>
          <p>
            If you can upload a CSV, you can run EMS. No dev team, no six-month rollout. Just plug-and-play tools that boost revenue, save staff time, and turn guests into repeat fans.
          </p>
        </section>

        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">Who We Serve</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hotels chasing ancillary revenue.</li>
            <li>Restaurants driving midweek demand.</li>
            <li>Venues lifting per-head spend.</li>
            <li>Short-stay hosts boosting reviews and rebookings.</li>
          </ul>
        </section>

        <section className="px-6 py-10 max-w-screen-md mx-auto text-center space-y-4">
          <h2 className="text-2xl font-semibold">The guest experience is evolving. Are you?</h2>
          <p>Drop the clunky workflows. EMS brings automations, guides, and upsells into one streamlined system.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base bg-[#F65053] hover:bg-[#F65053]/90"
            >
              Get Started Free <ArrowUpRight className="h-5 w-5" />
            </Button>
            <Button
              variant="contrast"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
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
