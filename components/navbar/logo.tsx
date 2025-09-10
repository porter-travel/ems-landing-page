import Image from "next/image";

export const Logo = () => (
  <Image
    src="/emslogo.png"
    alt="Logo"
    width={177}
    height={62}
    className="h-8 w-auto"
  />
);
