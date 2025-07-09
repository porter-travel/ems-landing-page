import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const NavMenu = ({ orientation, className, ...props }: NavigationMenuProps) => {
  if (orientation === "vertical") {
    return (
      <div className={cn("space-y-6", className)} {...props}>
        <div>
          <p className="font-semibold">Product</p>
          <ul className="mt-2 ml-4 flex flex-col gap-2">
            <li>
              <Link href="/ems-serve">EMS Serve</Link>
            </li>
            <li>
              <Link href="/ems-send">EMS Send</Link>
            </li>
            <li>
              <Link href="/ems-rate">EMS Rate</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Industries</p>
          <ul className="mt-2 ml-4 flex flex-col gap-2">
            <li>
              <Link href="/industries/hotels">Hotels</Link>
            </li>
            <li>
              <Link href="/industries/restaurants">Restaurants</Link>
            </li>
            <li>
              <Link href="/industries/venues">Venues</Link>
            </li>
            <li>
              <Link href="/industries/airbnbs">Airbnbs</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <NavigationMenu orientation={orientation} className={className} {...props}>
      <NavigationMenuList className="gap-6 space-x-0">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-56">
          <ul className="flex flex-col gap-2 p-3">
            <li>
              <NavigationMenuLink asChild>
                <Link href="/ems-serve">EMS Serve</Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link href="/ems-send">EMS Send</Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link href="/ems-rate">EMS Rate</Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
        <NavigationMenuContent className="min-w-56">
          <ul className="flex flex-col gap-2 p-3">
            <li>
              <NavigationMenuLink asChild>
                <Link href="/industries/hotels">Hotels</Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link href="/industries/restaurants">Restaurants</Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link href="/industries/venues">Venues</Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link href="/industries/airbnbs">Airbnbs</Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
    </NavigationMenu>
  );
};
