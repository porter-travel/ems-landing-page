import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CalendarDays } from "lucide-react";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <section className="max-w-screen-md mx-auto px-6 space-y-6">
          <h1 className="text-3xl font-semibold">Perfectly Timed, Effortlessly Branded</h1>
          <p>Guests don’t want random newsletters—they want the right info, at the right time. EMS turns your booking data into polished, branded email flows that guide, upsell, and delight from start to finish.</p>
          <h2 className="text-2xl font-semibold">Why Automated Engagement Matters</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Guests expect it:</strong> They live in their inbox. Timely communication is the difference between calm arrivals and chaos at the front desk.</li>
            <li><strong>Revenue depends on it:</strong> Pre-arrival is the single highest-converting window for upsells.</li>
            <li><strong>Your staff can’t scale:</strong> You can’t manually answer every “What time is check-in?” or chase every upsell. Automation does the heavy lifting.</li>
          </ul>
          <h2 className="text-2xl font-semibold">What You Can Automate</h2>
          <h3 className="text-xl font-semibold">Pre-Arrival</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Upgrades: larger rooms, sea views, VIP packages</li>
            <li>Practical add-ons: parking, early check-in, luggage drop</li>
            <li>Experience extras: spa slots, dining reservations, welcome hampers</li>
            <li>Guides: Wi-Fi, directions, property policies, curated local tips</li>
          </ul>
          <h3 className="text-xl font-semibold">In-Stay</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mid-stay nudges: late checkout prompts, spa/restaurant reminders</li>
            <li>Local recs: “Best café nearby”, “Events tonight in town”</li>
            <li>Service touches: “Need anything? Just reply to this email”</li>
          </ul>
          <h3 className="text-xl font-semibold">Post-Stay</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Thank-you notes: personalised and warm</li>
            <li>Verified reviews: captured automatically, with private flagging of low scores</li>
            <li>Rebooking codes: bring them back direct, not via an OTA</li>
          </ul>
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Upload or Connect:</strong> Drag a CSV of guest data (name, email, dates) or sync your PMS/CRM.</li>
            <li><strong>Create Flows:</strong> Drag-and-drop builder for pre, during, and post-stay automations.</li>
            <li><strong>Customise:</strong> Add your logo, fonts, colours—emails look 100% on-brand.</li>
            <li><strong>Publish &amp; Embed:</strong> Send directly or drop upsell links into confirmation emails, SMS, or guest-comms platforms.</li>
            <li><strong>Optimise:</strong> Use Insights to track opens, clicks, and revenue.</li>
          </ul>
          <h2 className="text-2xl font-semibold">Why Teams Love It</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>No tech team needed: Anyone can set it up.</li>
            <li>Fast launch: Get your first upsell emails out in under an hour.</li>
            <li>Scalable: Works for single properties or portfolios of hundreds.</li>
          </ul>
          <blockquote className="border-l-4 pl-4 italic my-6">
            “Pre-arrival emails now do the selling for us. Upgrades, parking, late checkout—+17% ancillary within a month.”
            <br />— GM, 74-room Boutique Hotel, Bath
          </blockquote>
          <p>Automated Engagement is the foundation of modern guest experience.<br />Inform them, inspire them, upsell them—without lifting a finger.</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto rounded-full text-base bg-[#F65053] hover:bg-[#F65053]/90">
              Get Started Free <ArrowUpRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base border-[#F65053] text-[#F65053]">
              <CalendarDays className="h-5 w-5" /> Book a Demo
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

