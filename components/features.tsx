import {
  Workflow,
  Link,
  Store,
  Map,
  Handshake,
  LineChart,
  Upload,
  Send,
} from "lucide-react";
import React from "react";
import FeatureCard from "./feature-card";

const features = [
  {
    icon: Workflow,
    title: "Effortless Automation",
    description:
      "Pre-built, perfectly timed automated upsell journeys.",
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

const howItWorks = [
  {
    icon: Upload,
    title: "Upload or Connect",
    description:
      "Drag & drop a CSV of guest data - names, emails, stay dates - or connect your PMS/CRM.",
  },
  {
    icon: Workflow,
    title: "Create an Automation",
    description:
      "Build your own automations to target guests at key points pre, during or post-stay.",
  },
  {
    icon: Send,
    title: "Publish & Embed",
    description:
      "Publish your branded microsite in seconds and embed the link into your guest messages.",
  },
  {
    icon: LineChart,
    title: "Monitor & Optimise",
    description:
      "Watch opens, clicks, and incremental revenue populate your Insights Dashboard.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Upsells Unleashed
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
      <h2 className="mt-20 text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        How It Works
      </h2>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {howItWorks.map((item) => (
          <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
