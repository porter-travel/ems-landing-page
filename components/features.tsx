import {
  Workflow,
  Link,
  Store,
  Map,
  Handshake,
  LineChart,
} from "lucide-react";
import React from "react";
import FeatureCard from "./feature-card";

const features = [
  {
    icon: Workflow,
    title: "Effortless Automation",
    description:
      "Pre-built, perfectly timed automated upsell journeys",
  },
  {
    icon: Link,
    title: "Seamless Embeds",
    description:
      "Drop your branded upsell microsite link into any email, SMS, or guest-platform message.",
  },
  {
    icon: Store,
    title: "White-Label Upsell Store",
    description:
      "Your logo, colours, and fonts on a high-converting ecommerce page.",
  },
  {
    icon: Map,
    title: "Guest Guides & Local Info",
    description:
      "Link to property guides, welcome messages, and curated recommendations",
  },
  {
    icon: Handshake,
    title: "Bespoke Onboarding",
    description:
      "Hands-on setup, custom strategy sessions, and ongoing check-ins from our dynamic team.",
  },
  {
    icon: LineChart,
    title: "Real-Time Insights",
    description: "Monitor campaign performance with live dashboards.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        What Sets Enhance My Stay Apart
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
