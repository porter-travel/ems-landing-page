import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import Link from "next/link";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Link href="/">
          <Logo />
        </Link>
        <NavMenu orientation="vertical" className="mt-12" />

        <div className="mt-8 space-y-4">
          <Button asChild variant="outline" className="w-full sm:hidden">
            <Link href="https://enhancemystay.com/login">Sign In</Link>
          </Button>
          <Button asChild className="w-full xs:hidden">
            <Link href="https://enhancemystay.com/register">Get Started</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
