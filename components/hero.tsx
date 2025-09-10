"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/EMSHeroImage.png";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background pattern */}
      <AnimatedGridPattern className="absolute inset-0 opacity-40 [mask-image:radial-gradient(white,transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 min-h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        {/* Left column: text + CTAs */}
        <div className="md:w-1/2 text-center md:text-left max-w-2xl">
          <h1 className="max-w-[20ch] mt-6 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.1] tracking-tight">
            Automated Upsells & Guest Engagement
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg text-foreground/80">
            Automatically email guests before, during, and after their booking —
            or embed a link into your existing messages — to drive revenue and
            elevate the guest experience.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-start gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
            >
              <Link href="https://enhancemystay.com/register">
                Get Started Free <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="contrast"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
            >
              <Link href="https://calendly.com/emsgrow/30min">
                <CalendarDays className="!h-5 !w-5" /> Book a Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Right column: hero image */}
        <div className="md:w-1/2 flex justify-center items-stretch mt-10 md:mt-0">
          <div className="flex items-center w-full max-w-sm lg:max-w-md xl:max-w-lg">
            <Image
              src={heroImage}
              alt="EMS Hero"
              className="w-full h-auto max-h-full object-contain rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
