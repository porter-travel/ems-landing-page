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
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white ring-1 ring-indigo-500/20">
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
                href="https://enhancemystay.com/register"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,_hsl(227,86%,56%)_0%,_hsl(262,83%,67%)_60%,_hsl(199,89%,65%)_100%)] px-5 font-medium text-white shadow-[0_18px_32px_-18px_rgba(49,46,129,0.5)] transition hover:brightness-105"
              >
                Get Started Free
              </a>
              {/* Secondary */}
              <a
                href="https://calendly.com/emsgrow/30min"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 text-white backdrop-blur transition hover:bg-white/15"
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

