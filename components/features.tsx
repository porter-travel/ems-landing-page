import {
  ConciergeBell,
  Send,
  Star,
  Workflow,
  ChartBar,
  Palette,
} from "lucide-react";
import React from "react";
import FeatureCard from "./feature-card";

const features = [
  {
    icon: ConciergeBell,
    title: "EMS Serve",
    description:
      "QR-code linked ordering, requests, information and live chat - zero phone calls.",
  },
  {
    icon: Send,
    title: "EMS Send",
    description:
      "Automate pre-arrival upsells to help your guests personalise their stay before they check-in.",
  },
  {
    icon: Star,
    title: "EMS Rate",
    description:
      "Send contextual review prompts when guests interact with your services for higher review rates.",
  },
  {
    icon: Workflow,
    title: "Fulfilment",
    description:
      "Dedicated fulfilment screens by department to easily manage orders and requests.",
  },
  {
    icon: ChartBar,
    title: "Insights",
    description:
      "Live dashboards to track revenue, average order value, popular products and more.",
  },
  {
    icon: Palette,
    title: "Brand First",
    description:
      "Guest experience with your fonts, colours and logo - fully white-labelled.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <p className="text-center font-medium text-primary">All-In-One Guest Experience Toolkit</p>
      <h2 className="mt-2 text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        The Guest Happiness Blueprint
      </h2>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
