import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import Link from "next/link";
import React, { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    name: "Manager",
    designation: "Boutique Hotel, Brighton",
    testimonial:
      "Guests actually used it. Orders doubled in the first weekend. Our team didn’t need a single training session.",
    avatar: "",
  },
  {
    id: 2,
    name: "Owner",
    designation: "Countryside B&B, Yorkshire",
    testimonial:
      "Finally a tool that does what it says. We cut response times by half and started taking upsell bookings before guests even arrived.",
    avatar: "",
  },
  {
    id: 3,
    name: "Ops Lead",
    designation: "Mid-size Hotel Chain, Manchester",
    testimonial:
      "We’ve tried four different platforms. EMS is the first one staff like using. And it doesn’t scare off guests.",
    avatar: "",
  },
  {
    id: 4,
    name: "Hotel GM",
    designation: "London",
    testimonial:
      "Our biggest win? No more missed requests. That alone has saved us a ton of comped drinks and apologies.",
    avatar: "",
  },
  {
    id: 5,
    name: "Event Venue Director",
    designation: "Bristol",
    testimonial:
      "We plugged in EMS for a weekend festival. Guests ordered food, asked questions, left reviews — all without us needing extra staff.",
    avatar: "",
  },
  {
    id: 6,
    name: "Hotel Receptionist",
    designation: "Glasgow",
    testimonial:
      "Live chat is a game-changer. Guests ask, we respond instantly, and our front desk isn’t swamped.",
    avatar: "",
  },
  {
    id: 7,
    name: "Guest Experience Manager",
    designation: "Seaside Resort",
    testimonial:
      "We were flying blind before. Now we know what guests are asking for while they’re still here. That’s powerful.",
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
        <Marquee pauseOnHover className="[--duration:20s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:20s]">
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
