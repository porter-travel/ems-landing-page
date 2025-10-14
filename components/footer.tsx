import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { title: "Emails", href: "/emails" },
  { title: "Fulfilment", href: "/fulfilment" },
  { title: "Insights", href: "/insights" },
];

const industryLinks = [
  { title: "Hotels", href: "/industries/hotels" },
  { title: "Restaurants", href: "/industries/restaurants" },
  { title: "Venues", href: "/industries/venues" },
  { title: "Airbnb", href: "/industries/airbnbs" },
];

const companyLinks = [
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact-us" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms of Service", href: "/terms-of-service" },
];

const Footer = () => {
  return (
    <footer className="mt-40 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10">
          <div>
            {/* Logo */}
            <Link href="/">
              <Image
                src="/EMSLogoWhite.png"
                alt="EMS logo"
                width={844}
                height={297}
                className="h-8 w-auto"
              />
            </Link>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <ul className="space-y-2">
                {productLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-white/80 transition hover:text-white"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {industryLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-white/80 transition hover:text-white"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {companyLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-white/80 transition hover:text-white"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subscribe Newsletter */}
          <div className="max-w-xs w-full">
            <h6 className="font-semibold">Stay up to date</h6>
            <form className="mt-6 flex items-center gap-2">
              <Input type="email" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5">
          {/* Copyright */}
          <span className="text-white/70 text-center sm:text-start">
            &copy; 2025 Travel Global Limited. All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-white/80">
            <Link href="https://www.linkedin.com/company/emsgrow/" target="_blank">
              <Linkedin className="h-5 w-5 transition hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
