import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const productLinks = [
  { title: "EMS Serve", href: "/ems-serve" },
  { title: "EMS Send", href: "/ems-send" },
  { title: "EMS Rate", href: "/ems-rate" },
];

const industryLinks = [
  { title: "Hotels", href: "/industries/hotels" },
  { title: "Restaurants", href: "/industries/restaurants" },
  { title: "Venues", href: "/industries/venues" },
  { title: "Airbnb", href: "/industries/airbnbs" },
];

const companyLinks = [
  { title: "About Us", href: "/about-us" },
  { title: "Contact Us", href: "/contact-us" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms of Service", href: "/terms-of-service" },
];

const Footer = () => {
  return (
    <footer className="mt-40 bg-[#1a1a1a] text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10">
          <div>
            {/* Logo */}
            <Link href="/">
              <img src="/EMSLogoWhite.png" alt="EMS logo" className="h-8 w-auto" />
            </Link>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <ul className="space-y-2">
                {productLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link href={href} className="text-white hover:text-white">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {industryLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link href={href} className="text-white hover:text-white">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {companyLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link href={href} className="text-white hover:text-white">
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
          <span className="text-white text-center sm:text-start">
            &copy; 2025 Travel Global Limited. All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-white">
            <Link href="https://www.linkedin.com/company/ems-core/" target="_blank">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
