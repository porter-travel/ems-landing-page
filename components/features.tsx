import {
  Workflow,
  Link as LinkIcon,
  Store,
  Map,
  Handshake,
  LineChart,
  Upload,
  Send,
  ClipboardList,
  Mail,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";
import React from "react";
import FeatureCard from "./feature-card";
import Section from "./section";
import Link from "next/link";

const overview = [
  {
    icon: Mail,
    title: "Automated Engagement",
    description: "Pre-timed emails that guide and upsell.",
    href: "/emails",
  },
  {
    icon: ClipboardCheck,
    title: "Fulfilment",
    description: "Route orders with clear SLAs.",
    href: "/fulfilment",
  },
  {
    icon: BarChart3,
    title: "Insights",
    description: "See what converts and optimise.",
    href: "/insights",
  },
];

const features = [
  {
    icon: Workflow,
    title: "Effortless Automation",
    description:
      "Pre-built, perfectly timed automated upsell journeys.",
  },
  {
    icon: LinkIcon,
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

const coreFeatures = [
  {
    icon: Send,
    title: "EMS Send",
    description: (
      <ul className="list-disc ml-4 space-y-1">
        <li>Automated, pre-timed upsell emails</li>
        <li>CSV upload or one-click PMS sync</li>
        <li>Custom-branded upsell ecommerce pages</li>
        <li>Property guides, welcome messages & local recommendations</li>
      </ul>
    ),
  },
  {
    icon: ClipboardList,
    title: "Fulfilment Tools",
    description: (
      <ul className="list-disc ml-4 space-y-1">
        <li>Department-specific order & request dashboards</li>
        <li>Automated routing to F&B, housekeeping, concierge</li>
        <li>Track stock levels and blackout dates in one place</li>
        <li>
          Configure automatic reminders or escalations if requests aren’t
          fulfilled within your target time
        </li>
      </ul>
    ),
  },
  {
    icon: LineChart,
    title: "Insights Dashboard",
    description: (
      <ul className="list-disc ml-4 space-y-1">
        <li>Live revenue tracking & take-rates</li>
        <li>Popular offers and average order value</li>
        <li>Download CSV reports for stakeholders</li>
        <li>Identify key trends to optimise performance</li>
      </ul>
    ),
  },
];

const Features = () => {
  return (
    <Section id="features">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Overview
      </h2>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {overview.map((item) => (
          <Link key={item.title} href={item.href} className="h-full">
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              className="h-full"
            />
          </Link>
        ))}
      </div>
      <h2 className="mt-20 text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
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
      <h2 className="mt-20 text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Core Features
      </h2>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreFeatures.map((item) => (
          <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Features;
