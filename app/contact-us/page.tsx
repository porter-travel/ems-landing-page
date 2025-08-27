"use client";

import PatternedHero from "@/components/hero/PatternedHero";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Section from "@/components/layout/Section";
import Script from "next/script";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PatternedHero
          title="Contact Us"
          subtext="Let’s Elevate Every Guest Experience"
        />
        <section className="py-10 text-center">
          <Section className="space-y-4">
            <p>
              Have a question, need a custom quote, or just curious how EMS fits your operation?
            </p>
            <p>Drop us a line—or jump straight into a live demo.</p>
          </Section>
        </section>
        <section className="py-10">
          <Section className="space-y-4 text-center">
            <h2 className="text-2xl font-semibold">Quick Links</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="border rounded-lg p-4">
                <span className="font-semibold">General Enquiries</span>
                <p className="mt-1">
                  <a href="mailto:hello@emsgrow.com" className="text-primary underline">hello@emsgrow.com</a>
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <span className="font-semibold">Sales &amp; Partnerships</span>
                <p className="mt-1">
                  <a href="mailto:sales@emsgrow.com" className="text-primary underline">sales@emsgrow.com</a>
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <span className="font-semibold">Support</span>
                <p className="mt-1">
                  <a href="mailto:support@emsgrow.com" className="text-primary underline">support@emsgrow.com</a>
                </p>
              </div>
            </div>
          </Section>
        </section>
        <section className="py-10 text-center">
          <Section className="space-y-6">
            <h2 className="text-2xl font-semibold">Book a 30-Minute Demo</h2>
            <p>
              See EMS in action—pre-arrival upsells, guest guides, fulfilment tools and real-time dashboards—all in one call.
            </p>
            <div className="border rounded-lg p-2">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/emsgrow"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
            <Script src="https://assets.calendly.com/assets/external/widget.js" async />
          </Section>
        </section>
        <Footer />
      </main>
    </>
  );
}
