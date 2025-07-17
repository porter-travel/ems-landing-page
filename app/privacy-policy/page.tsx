import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </section>
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6 text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.1 Who We Are</h2>
            <p>
              EMS (“we”, “our”, “us”) is a trading name of Travel Global
              Limited (company no. 12323610). Our registered office is 8
              Overstone Court, Cardiff, CF10 5NT.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.2 The Data We Collect</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border">
                <thead className="border-b">
                  <tr>
                    <th className="p-2 text-left">Category</th>
                    <th className="p-2 text-left">Examples</th>
                    <th className="p-2 text-left">Legal Basis¹</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Contact data</td>
                    <td className="p-2">Name, email, phone</td>
                    <td className="p-2">Contract; Legitimate interest</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Booking data</td>
                    <td className="p-2">Stay/visit dates, room/table numbers, spend totals</td>
                    <td className="p-2">Contract</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Transaction data</td>
                    <td className="p-2">Purchases made through EMS</td>
                    <td className="p-2">Contract</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Usage data</td>
                    <td className="p-2">Log-ins, page views, device type, IP address</td>
                    <td className="p-2">Legitimate interest</td>
                  </tr>
                  <tr>
                    <td className="p-2">Marketing prefs</td>
                    <td className="p-2">Opt-in/out status, channel choices</td>
                    <td className="p-2">Consent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-foreground/80">
              ¹As defined by UK GDPR/ EU GDPR and the Data Protection Act 2018.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.3 How We Use Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and secure the EMS platform</li>
              <li>Process guest orders, requests and payments</li>
              <li>
                Send pre-arrival upsell emails/SMS/WhatsApp on behalf of our
                business customers
              </li>
              <li>Display verified reviews (EMS Rate)</li>
              <li>Improve services via anonymised analytics</li>
              <li>
                Where you consent, send EMS marketing updates (you can unsubscribe
                anytime)
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.4 Cookies &amp; Similar Technologies</h2>
            <p>
              We use functional cookies for log-in sessions and analytics cookies
              (e.g., Google Analytics). A cookie banner gives you control over
              optional cookies.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.5 Data Sharing</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                With service providers — payment processors, cloud hosting,
                email/SMS gateways (all bound by DPA-compliant contracts).
              </li>
              <li>
                With business customers — if you interact with, or leave a review
                for, a hotel, restaurant, venue, etc. through EMS, that business
                receives your relevant data.
              </li>
              <li>Legal or regulatory requests when required.</li>
            </ul>
            <p>We never sell personal data.</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.6 International Transfers</h2>
            <p>
              Data may be stored or processed outside the UK/EU. Where this occurs
              we rely on adequacy decisions, Standard Contractual Clauses, or
              other permitted safeguards.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.7 Retention</h2>
            <p>
              We keep data while you have an account or as needed to deliver EMS,
              plus up to 6 years thereafter for legal, accounting or
              fraud-prevention purposes.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.8 Your Rights</h2>
            <p>
              You can ask to access, correct, delete, restrict, or port your data,
              or object to processing. Email privacy@emsgrow.com. You can also
              lodge a complaint with the UK ICO.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.9 Security</h2>
            <p>
              We use TLS encryption, role-based access, periodic penetration
              testing, and ISO-27001-certified data centres.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1.10 Contact</h2>
            <p>
              Questions? Email privacy@emsgrow.com or write to Data Protection
              Officer, Travel Global Limited, 8 Overstone Court, Cardiff, CF10
              5NT.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
