import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  // 1240px of content inside 100px gutters at 1440, as measured off the design.
  return (
    <div
      className={`mx-auto w-full max-w-[1340px] px-5 sm:px-8 lg:px-[50px] ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "hero";
}) {
  const tones = {
    light: "border-line bg-card/70 text-ink-soft",
    dark: "border-white/15 bg-white/10 text-cream",
    hero: "border-white/70 bg-white/35 text-ink-soft backdrop-blur-sm",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs sm:text-sm ${tones[tone]}`}
    >
      <span className="size-1.5 rounded-full bg-taupe" />
      {children}
    </span>
  );
}

export function SectionHeading({
  title,
  subtitle,
  tone = "light",
}: {
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mx-auto max-w-[780px] text-center">
      <h2
        className={`font-display text-3xl leading-[1.25] font-semibold sm:text-4xl lg:text-[48px] ${
          tone === "dark" ? "text-cream" : "text-[#2C2E36]"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-5 text-base leading-[1.12] sm:text-lg lg:text-[26.5px] ${
            tone === "dark" ? "text-cream/70" : "text-[#2C2E36]"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

/**
 * The pill CTA used across the page: label with a circular arrow badge on the
 * trailing edge.
 */
export function PillButton({
  href,
  children,
  tone = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "solid" | "ghost";
  className?: string;
}) {
  const tones = {
    solid: "bg-taupe text-white hover:bg-taupe-deep",
    ghost: "bg-white/70 text-ink hover:bg-white",
  };
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-1.5 pe-6 ps-1.5 text-sm font-medium transition-colors sm:text-base ${tones[tone]} ${className}`}
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-taupe transition-transform group-hover:-rotate-45">
        <CornerArrowIcon className="size-4" />
      </span>
      {children}
    </a>
  );
}

function CornerArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 17 7 7M7 7v7M7 7h7" />
    </svg>
  );
}
