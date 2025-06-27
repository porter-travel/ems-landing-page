import {
  BadgeDollarSign,
  Route,
  ShieldCheck,
  Truck,
  Undo2,
  UserRoundCheck,
} from "lucide-react";

const faq = [
  {
    icon: UserRoundCheck,
    question: "Do I need a developer to get started?",
    answer: "Nope. EMS is turnkey—QR codes, no-code CMS, and 24–48 hour launch.",
  },
  {
    icon: BadgeDollarSign,
    question: "How does the token model work?",
    answer: "Each scan, order, request or review prompt = 1 token.",
  },
  {
    icon: Route,
    question: "Can I integrate with my PMS or POS?",
    answer:
      "Absolutely—built-in connectors for all major systems plus a robust REST API.",
  },
  {
    icon: ShieldCheck,
    question: "Is EMS truly white-label?",
    answer: "Yes: your domain, your branding, your data—always.",
  },
  {
    icon: Truck,
    question: "What support do you offer?",
    answer:
      "24/7 email, live chat and dedicated onboarding for Growth & Enterprise plans.",
  },
  {
    icon: Undo2,
    question: "How secure is guest data?",
    answer:
      "SOC 2 compliant, end-to-end encryption, GDPR & PCI-DSS standards.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
    >
      <div className="max-w-screen-lg">
        <h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 xs:text-lg text-center text-muted-foreground">
          Quick answers to common questions about our products and services.
        </p>

        <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
