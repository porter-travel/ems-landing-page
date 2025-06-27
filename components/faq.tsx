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
    question: "Is this just for hotels?",
    answer:
      "Nope. We work with restaurants, venues, airbnbs - anywhere guests hang out.",
  },
  {
    icon: Truck,
    question: "Do I need to buy any new hardware?",
    answer:
      "No, guests just scan a QR code on their phone. Staff can use their phones, tablets or laptops.",
  },
  {
    icon: ShieldCheck,
    question: "Can we custom brand the experience?",
    answer:
      "Hell yes. Your vibe, your voice, your rules. The whole EMS platform can be completely white-labelled.",
  },
  {
    icon: Route,
    question: "How long does setup take?",
    answer:
      "You can start using EMS in minutes. Full customisation with products, requests, branding and live chat can take a couple of hours, depending on how complex you go.",
  },
  {
    icon: BadgeDollarSign,
    question: "Is there a free trial or something?",
    answer:
      "Yes! Get started today and enjoy 14 days free to test the platform.",
  },
  {
    icon: Undo2,
    question: "I don’t have a tech team. Is that a problem?",
    answer:
      "Not at all! We built EMS so anyone can set it up and benefit from offering a more digital guest experience.",
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
