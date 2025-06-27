import { Button } from "@/components/ui/button";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import React from "react";
import LogoCloud from "./logo-cloud";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6 bg-accent">
      <div className="md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <h1 className="max-w-[20ch] mt-6 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            EMS — The Guest Experience Engine, Unchained
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            Tired of missed room-service calls, endless follow-ups and generic feedback forms? EMS puts every guest touchpoint—ordering, service requests, live chat and in-moment reviews—into a single, white-label mobile interface. No apps to download, no software to master. Just scan, serve, sell and scale.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto rounded-full text-base">
              Start Your Free Trial <ArrowUpRight className="!h-5 !w-5" />
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
      </div>
      <LogoCloud className="mt-24 max-w-3xl mx-auto" />
    </div>
  );
};

export default Hero;
