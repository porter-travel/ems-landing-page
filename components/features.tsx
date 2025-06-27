import {
  ConciergeBell,
  Send,
  Star,
  Workflow,
  ChartBar,
  Palette,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: ConciergeBell,
    title: "EMS Serve",
    description: "One-tap ordering & on-demand requests—zero phone calls.",
  },
  {
    icon: Send,
    title: "EMS Send",
    description: "Your branded info hub: hours, menus, guides & push nudges.",
  },
  {
    icon: Star,
    title: "EMS Rate",
    description: "Contextual review prompts drive 80%+ completion.",
  },
  {
    icon: Workflow,
    title: "Workflows",
    description: "Auto-assign, remind & escalate in real time.",
  },
  {
    icon: ChartBar,
    title: "Insights",
    description: "Live dashboards track revenue, response times & NPS.",
  },
  {
    icon: Palette,
    title: "Brand First",
    description: "Fonts, colors, URL—fully white-label.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <p className="text-center font-medium text-primary">All-In-One Guest Toolkit</p>
      <h2 className="mt-2 text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Six Pillars of a Seamless Stay
      </h2>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <feature.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
