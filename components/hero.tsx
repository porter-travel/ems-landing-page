"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "@/public/EMSHeroImage.json";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center justify-between gap-8 py-20 px-10 bg-accent">
      <div className="md:w-1/2 text-center md:text-left max-w-2xl">
        <h1 className="max-w-[20ch] mt-6 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.1] tracking-tight">
          Automated Upsells & Guest Engagement
        </h1>
        <p className="mt-6 max-w-[60ch] xs:text-lg">
          Automatically email guests before, during, and after their booking - or embed a link into your existing messages - to drive revenue and elevate the guest experience.
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
        <div
          className="
            w-[260px]
            h-[560px]
            box-border
            rounded-3xl
            border-4
            border-black
            overflow-hidden
            shadow-xl
          "
        >
          <Lottie
            animationData={heroAnimation}
            loop
            className="w-full h-full object-contain rounded-3xl"
            rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
