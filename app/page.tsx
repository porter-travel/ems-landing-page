import PatternedCta from "@/components/cta/PatternedCta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import PatternedHero from "@/components/hero/PatternedHero";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PatternedHero
          title="Automated Upsells & Guest Engagement"
          subtext="Automatically email guests before, during, and after their booking - or embed a link into your existing messages - to drive revenue and elevate the guest experience."
          showCtas
        />
        <Features />
        <Pricing />
        <FAQ />
        <Testimonials />
        <PatternedCta
          title="The guest experience is evolving. Are you?"
          subtext="Drop the clunky workflows. EMS brings ordering, requests, chat, and upsells into one streamlined system."
        />
        <Footer />
      </main>
    </>
  );
}
