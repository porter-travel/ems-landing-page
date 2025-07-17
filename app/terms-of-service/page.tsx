import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6 text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.1 Acceptance</h2>
            <p>
              By accessing or using EMS, you (“Customer” or “User”) agree to these
              Terms and our Privacy Policy. If you use EMS on behalf of a
              business, you confirm you have authority to bind that entity.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.2 Services</h2>
            <p>
              EMS provides software for digital ordering, messaging, feedback
              and analytics. Features vary by subscription plan.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.3 Your Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Configure menus, prices, content and notices accurately.</li>
              <li>
                Comply with all laws (e.g., age verification for alcohol sales,
                food-allergen disclosure, data-privacy rules).
              </li>
              <li>Keep log-in credentials secure.</li>
              <li>
                Obtain all consents required to import or upload guest data
                into EMS.
              </li>
              <li>Not use EMS for unlawful, harmful or infringing content.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.4 Fees &amp; Payment</h2>
            <p>
              Subscription fees are invoiced monthly in advance (unless
              otherwise agreed).
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.5 Intellectual Property</h2>
            <p>
              EMS, including all software, content and trademarks, remains the
              sole property of Travel Global Ltd. You receive a non-exclusive,
              non-transferable licence to use EMS during your subscription.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.6 Indemnity</h2>
            <p>
              You agree to indemnify, defend and hold harmless Travel Global
              Ltd, its directors, employees and suppliers against any claims,
              damages, fines, or costs arising from:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>your breach of these Terms;</li>
              <li>
                your violation of law (including alcohol-age checks, PCI-DSS
                obligations, privacy law, or consumer-protection rules);
              </li>
              <li>your content, menus, pricing or promotions; or</li>
              <li>misuse of EMS by you or your staff.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.7 Disclaimers</h2>
            <p>
              EMS is provided “as-is”. We do not guarantee uninterrupted
              service, nor that EMS will meet every specific requirement. To
              the fullest extent permitted by law we disclaim all implied
              warranties.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.8 Limitation of Liability</h2>
            <p>
              Our total aggregate liability to you, whether in contract, tort
              or otherwise, is limited to the greater of (i) £1,000 or (ii) the
              fees paid by you to EMS in the 12 months preceding the claim. We
              are not liable for consequential, indirect, or punitive damages,
              loss of profits, data or goodwill.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.9 Suspension &amp; Termination</h2>
            <p>
              We may suspend or terminate your access for material breach
              (including non-payment) with 14 days’ notice (or immediately for
              illegal activity). Either party may terminate at period end with
              30 days’ notice.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.10 Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of England &amp; Wales. Courts
              of England &amp; Wales have exclusive jurisdiction.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.11 Changes</h2>
            <p>
              We may update these Terms by posting a revised version. Material
              changes will be notified 30 days in advance. Continued use after
              the effective date constitutes acceptance.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.12 Contact</h2>
            <p>
              For contractual matters email
              <a href="mailto:legal@emsgrow.com" className="underline">
                legal@emsgrow.com
              </a>{" "}
              or write to Legal Team, Travel Global Limited, 8 Overstone Court,
              Cardiff, CF10 5NT.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
