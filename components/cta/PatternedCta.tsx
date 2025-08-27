import { cn } from "@/lib/utils";

interface PatternedCtaProps {
  title: string;
  subtext: string;
  className?: string;
}

export default function PatternedCta({ title, subtext, className }: PatternedCtaProps) {
  return (
    <section className={cn("w-full", className)}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-[#1A1A1A] text-white ring-1 ring-white/10">
          {/* Decorative hatch background */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
          >
            <defs>
              <pattern
                id="hatch"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="white"
                  strokeOpacity="0.7"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hatch)" />
          </svg>

          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-16 md:py-20 lg:px-16">
            <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-[70ch] text-center text-white/80">
              {subtext}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {/* Primary */}
              <a
                href="#get-started"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-primary-foreground hover:opacity-90 transition"
              >
                Get Started Free
              </a>
              {/* Secondary */}
              <a
                href="#demo"
                className="inline-flex h-11 items-center justify-center rounded-xl border bg-white px-5 text-[#1A1A1A] hover:bg-white/90 transition"
              >
                <span className="inline-flex items-center gap-2">
                  Book a Demo
                  <svg
                    className="size-4 stroke-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
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
        </div>
      </div>
    </section>
  );
}

