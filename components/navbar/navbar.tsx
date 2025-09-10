import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import Link from "next/link";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 xs:h-16 bg-background/50 backdrop-blur-sm border max-w-screen-xl mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex items-center gap-3">
          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="https://enhancemystay.com/login">Sign In</Link>
          </Button>
          <Button asChild className="hidden xs:inline-flex">
            <Link href="https://enhancemystay.com/register">Get Started</Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
