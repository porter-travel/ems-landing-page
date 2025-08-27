import { cn } from "@/lib/utils";

interface BottomCtaProps {
  title: string;
  subtext: string;
  className?: string;
}

export default function BottomCta({ title, subtext, className }: BottomCtaProps) {
  return (
    <section className={cn("w-full bg-[#1A1A1A] text-white", className)}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        <p className="mt-4 max-w-[65ch] text-balance text-white/80">{subtext}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#get-started"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 hover:opacity-90 transition"
          >
            Get Started Free
          </a>
          <a
            href="#demo"
            className="inline-flex h-11 items-center justify-center rounded-xl border bg-white px-5 text-[#1A1A1A] hover:bg-white/90 transition"
          >
            <span className="inline-flex items-center gap-2">
              Book a Demo
              <svg className="size-4 stroke-current" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

