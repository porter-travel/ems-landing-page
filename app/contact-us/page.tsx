import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Script from "next/script";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="Contact Us"
          subtitle="Let\u2019s Elevate Every Guest Experience"
        />
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4 text-center">
          <p>
            Have a question, need a custom quote, or just curious how EMS fits your operation?
          </p>
          <p>Drop us a line\u2014or jump straight into a live demo.</p>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-center">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-center">
            <li>
              General Enquiries: <a href="mailto:hello@emsgrow.com" className="text-primary underline">hello@emsgrow.com</a>
            </li>
            <li>
              Sales &amp; Partnerships: <a href="mailto:sales@emsgrow.com" className="text-primary underline">sales@emsgrow.com</a>
            </li>
            <li>
              Support: <a href="mailto:support@emsgrow.com" className="text-primary underline">support@emsgrow.com</a>
            </li>
          </ul>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6 text-center">
          <h2 className="text-2xl font-semibold">Book a 30-Minute Demo</h2>
          <p>
            See EMS in action\u2014pre-arrival upsells, QR ordering, verified reviews, and real-time dashboards\u2014all in one call.
          </p>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/emsgrow"
            style={{ minWidth: "320px", height: "700px" }}
          />
          <Script src="https://assets.calendly.com/assets/external/widget.js" async />
        </section>
        <Footer />
      </main>
    </>
  );
}
