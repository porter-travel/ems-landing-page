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
          <h1 className="text-3xl font-semibold">From Click to Completion—Seamlessly</h1>
          <p>When a guest books a product or requests something, EMS makes sure your team delivers without bottlenecks. No missed requests, no “who’s handling this?”, no duplication. Just smooth fulfilment.</p>
          <h2 className="text-2xl font-semibold">Why Fulfilment Matters</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Guest expectations:</strong> If they pay for early check-in, it better be ready.</li>
            <li><strong>Staff clarity:</strong> Requests routed properly mean fewer mistakes.</li>
            <li><strong>Reputation impact:</strong> One missed order = one bad review.</li>
          </ul>
          <h2 className="text-2xl font-semibold">What Fulfilment Covers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dashboards:</strong> Live screens show all open requests, colour-coded by department and urgency.</li>
            <li><strong>Routing rules:</strong> “Bottle of champagne” ➜ F&amp;B. “Extra cot” ➜ Housekeeping. “Meeting room booking” ➜ Front desk.</li>
            <li><strong>Order emails:</strong> Instant alerts sent directly to the responsible staff/team inbox.</li>
            <li><strong>Calendar-linked management:</strong> Time-sensitive products (spa slots, parking spaces, bike rentals) are auto-scheduled.</li>
            <li><strong>Audit trails:</strong> Every request has a timestamp and completion log.</li>
            <li><strong>Escalations:</strong> Auto-reminders for overdue tasks—no more “slipped through the cracks.”</li>
          </ul>
          <h2 className="text-2xl font-semibold">Real Use Cases</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Hotels:</strong> Guest buys late checkout ➜ automatically updates housekeeping schedules.</li>
            <li><strong>Restaurants:</strong> Guest pre-orders tasting menu ➜ logged against reservation for kitchen prep.</li>
            <li><strong>Venues:</strong> Guest purchases parking pass ➜ fulfilment email to front-of-house for ticket allocation.</li>
            <li><strong>Airbnbs:</strong> Guest books firewood pack ➜ request flagged for property manager on changeover day.</li>
          </ul>
          <h2 className="text-2xl font-semibold">Staff View Benefits</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Clear dashboards: No endless emails or sticky notes.</li>
            <li>Mobile-friendly: Works on phones, tablets, laptops.</li>
            <li>Prioritised: SLAs and timers highlight what needs action first.</li>
            <li>Trackable: Managers see bottlenecks and performance at a glance.</li>
          </ul>
          <h2 className="text-2xl font-semibold">Manager View Benefits</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Confidence: Nothing gets lost.</li>
            <li>Accountability: Timestamped logs for who handled what.</li>
            <li>Efficiency: Optimise staff load based on order flow.</li>
          </ul>
          <blockquote className="border-l-4 pl-4 italic my-6">
            “Guests love the tone; ops loves the quiet inbox. The guide email cut questions by half.”
            <br />— Ops Manager, Countryside Hotel
          </blockquote>
          <p>Fulfilment is where promises meet reality. EMS makes sure you deliver.</p>
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

