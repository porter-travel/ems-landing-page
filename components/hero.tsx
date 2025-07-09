import { Button } from "@/components/ui/button";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center justify-between gap-8 py-20 px-10 bg-accent">
      <div className="md:w-1/2 text-center md:text-left max-w-2xl">
        <h1 className="max-w-[20ch] mt-6 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.1] tracking-tight">
          Ordering, Requests, Reviews
          <br className="hidden md:block" /> <span style={{ color: "#F65053" }}>Reimagined</span>
        </h1>
        <p className="mt-6 max-w-[60ch] xs:text-lg">
          EMS brings ordering, requests, live chat, and real-time feedback together—no clunky apps, no friction. Just faster service, more upsells, and happier guests.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-start md:justify-start gap-4">
          <Button size="lg" className="w-full sm:w-auto rounded-full text-base">
            Get Started Free <ArrowUpRight className="!h-5 !w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-full text-base shadow-none"
          >
            <CalendarDays className="!h-5 !w-5" /> Book a Demo
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="/EMSHeroImage.png"
          alt="Hero image"
          className="max-w-full h-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
