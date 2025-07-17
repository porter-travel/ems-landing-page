import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <PageHero
          title="The Team Behind EMS"
          subtitle="\u201CEvery guest. Every touchpoint. Elevated.\u201D We build pick-and-mix tech that helps hotels, restaurants, venues, clinics, and short-stay hosts turn routine interactions into unforgettable (and profitable) moments."
        />
        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p>
            Back in 2019 we asked a simple question: Why are guests spending
            hours dealing with information overload while their phones can do
            everything?
          </p>
          <p>
            We started by crunching OTA data with a home-grown AI engine that
            matched travellers to the perfect room. It worked—bookings rose,
            guests smiled.
          </p>
          <p>
            Then hotels told us, “Great, but can you also help us sell fizz,
            late checkout, and spa slots before they arrive?” Challenge
            accepted.
          </p>
          <p>
            We pivoted, packed our brains into EMS—a pick-and-mix platform that
            fires personalised upsells, QR ordering, and real-time feedback
            without the headache of heavy integrations.
          </p>
          <p>
            Hoteliers loved it. Then restaurateurs asked for table-ordering,
            arenas wanted seat-delivery, and Airbnb hosts begged for hands-free
            review capture. Challenge accepted.
          </p>
          <p>
            Today EMS is a modular platform—QR journeys, pre-arrival emails,
            live chat, instant surveys—ready to bolt onto any experience you
            offer, from gala dinners to day surgeries and more!
          </p>
        </section>

        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">What Drives Us</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Level the field – Give independents the same power as multinationals.</li>
            <li>Keep it human – Let staff focus on smiles while the platform handles the clicks.</li>
            <li>Ship fast – Frequent updates, daily feedback loops, zero tech jargon.</li>
          </ul>
        </section>

        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p>Democratise guest-experience tech.</p>
          <p>
            If you can print a QR code, you can launch EMS. No dev team, no
            six-month rollout—just plug-and-play tools that add spend, slash
            queues, and turn guests into superfans.
          </p>
        </section>

        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">Who We Serve</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Boutique &amp; chain hotels chasing ancillary revenue.</li>
            <li>Restaurants &amp; cafés turning tables faster without pressure.</li>
            <li>Stadiums, theatres &amp; festivals keeping crowds flowing (and spending).</li>
            <li>Airbnb hosts &amp; property managers earning more, sleeping better.</li>
            <li>Private clinics &amp; spas upgrading patient care with concierge-style add-ons.</li>
          </ul>
        </section>

        <section className="px-6 py-10 max-w-screen-md mx-auto space-y-4 text-center">
          <h2 className="text-2xl font-semibold">Join Us</h2>
          <p>Ready to swap clipboard chaos for connected guests and new profit lines?</p>
          <p>Let’s enhance every guest experience—together.</p>
        </section>

        <Footer />
      </main>
    </>
  );
}
