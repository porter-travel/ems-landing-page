import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import Link from "next/link";
import React, { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    name: "GM",
    designation: "74-room boutique hotel, Bath",
    testimonial:
      "Pre-arrival emails now do the selling for us. Upgrades, parking, late checkout—+17% ancillary within a month.",
    avatar: "",
  },
  {
    id: 2,
    name: "Front Office Manager",
    designation: "city hotel, Glasgow",
    testimonial:
      "The welcome email killed the 'where do I park?' calls. Guests arrive calmer—and upsell take-rate hit 12%.",
    avatar: "",
  },
  {
    id: 3,
    name: "Spa Director",
    designation: "resort hotel, Cornwall",
    testimonial:
      "Mid-stay tips + spa offer = weeknight spa bookings up 22%. All from one automated flow.",
    avatar: "",
  },
  {
    id: 4,
    name: "Marketing Lead",
    designation: "heritage hotel, York",
    testimonial:
      "Local recs in the day-before email get 60% click-through. Guests feel looked after before they even check in.",
    avatar: "",
  },
  {
    id: 5,
    name: "Revenue Manager",
    designation: "airport hotel, Manchester",
    testimonial:
      "We added late checkout to the T-24h email and it prints money. +£9.80 per booking on average.",
    avatar: "",
  },
  {
    id: 6,
    name: "Owner",
    designation: "coastal inn, Dorset",
    testimonial:
      "Post-stay thank-you + direct rebook code: repeat stays up 14% without lifting a finger.",
    avatar: "",
  },
  {
    id: 7,
    name: "GM",
    designation: "business hotel, Birmingham",
    testimonial:
      "No fancy integrations—just a CSV and great timing. We launched in a day and it paid back in a week.",
    avatar: "",
  },
  {
    id: 8,
    name: "Ops Manager",
    designation: "countryside hotel, Cotswolds",
    testimonial:
      "Guests love the tone; ops loves the quiet inbox. The guide email cut questions by half.",
    avatar: "",
  },
  {
    id: 9,
    name: "Owner-Operator",
    designation: "brasserie, Bristol",
    testimonial:
      "Pre-booking email with a welcome cocktail? 18% of diners pre-add it. Easy win.",
    avatar: "",
  },
  {
    id: 10,
    name: "GM",
    designation: "modern European, Leeds",
    testimonial:
      "Chef's menu 'pre-order only' in the confirmation email sells out weekends. Higher spend, smoother service.",
    avatar: "",
  },
  {
    id: 11,
    name: "Group Manager",
    designation: "neighbourhood dining, London",
    testimonial:
      "Day-of reminder with local parking tips + add a dessert board—+11% ticket on a Tuesday.",
    avatar: "",
  },
  {
    id: 12,
    name: "Co-Founder",
    designation: "wine bar & kitchen, Edinburgh",
    testimonial:
      "Post-meal note with neighbourhood recs keeps us top of mind. Return bookings climbed 9%.",
    avatar: "",
  },
  {
    id: 13,
    name: "Marketing Lead",
    designation: "casual dining group, Cardiff",
    testimonial:
      "We swapped generic newsletters for timed flows around bookings. Open rates doubled; basket size followed.",
    avatar: "",
  },
  {
    id: 14,
    name: "Commercial Manager",
    designation: "2k-cap venue, Liverpool",
    testimonial:
      "Pre-event email upsells drink tokens and VIP entry—per-head spend up 15% before doors open.",
    avatar: "",
  },
  {
    id: 15,
    name: "F&B Lead",
    designation: "theatre, Newcastle",
    testimonial:
      "Set-time mail with 'skip the queue—pre-order now' is a license to print money.",
    avatar: "",
  },
  {
    id: 16,
    name: "Ops Director",
    designation: "arena, Midlands",
    testimonial:
      "Missed-the-merch follow-up the next morning clears stock without discounting.",
    avatar: "",
  },
  {
    id: 17,
    name: "Event Manager",
    designation: "concert hall, Dublin",
    testimonial:
      "Local travel and timings in the welcome note slashed 'what time?' messages. Team finally breathes.",
    avatar: "",
  },
  {
    id: 18,
    name: "Director",
    designation: "holiday lets, North Devon",
    testimonial:
      "Pre-arrival email offers early check-in/firewood hamper. +£7.30 per stay across 42 cottages.",
    avatar: "",
  },
  {
    id: 19,
    name: "Superhost",
    designation: "12 units, Brighton",
    testimonial:
      "Mid-stay local recs stopped the 'what should we do?' messages—and lifted late-checkout buys by 13%.",
    avatar: "",
  },
  {
    id: 20,
    name: "Portfolio Manager",
    designation: "60 units, Lake District",
    testimonial:
      "Post-stay thank-you + direct rebook link = repeat direct up 16%. OTA fees down, stress down.",
    avatar: "",
  },
  {
    id: 21,
    name: "Owner",
    designation: "serviced apartments, Belfast",
    testimonial:
      "We just upload bookings. The flows do the rest. Zero faff, real money.",
    avatar: "",
  },
];

const Testimonials = () => (
  <div id="testimonials" className="flex justify-center items-center py-20">
    <div className="h-full w-full">
      <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center tracking-tight px-6">
        Testimonials
      </h2>
      <div className="relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:40s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:40s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-96 max-w-sm bg-accent rounded-xl p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <TwitterLogo className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default Testimonials;
