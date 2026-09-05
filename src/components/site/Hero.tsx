import Image from "next/image";
import { hero } from "@/content/site";
import { Badge, Container, PillButton } from "./ui";

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-hero relative overflow-hidden pt-28 lg:pt-36"
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <Badge tone="hero">{hero.badge}</Badge>

          <h1 className="mt-6 max-w-4xl text-3xl leading-[1.35] font-bold text-white sm:text-4xl lg:text-[3.5rem] lg:leading-[1.25]">
            {/* One block per line at lg, natural wrapping below it. */}
            {hero.title.map((line, i) => (
              <span key={line} className="lg:block">
                {i > 0 ? " " : null}
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <PillButton href="#download">{hero.primaryCta}</PillButton>
            <PillButton href="#download">{hero.secondaryCta}</PillButton>
          </div>
        </div>
      </Container>

      {/* Phones bleed past the section edge and are clipped by it, as in the design. */}
      <div className="mt-12 flex justify-center lg:mt-16">
        <Image
          src="/hero-phones.webp"
          alt="لقطات من تطبيق قافية"
          width={1792}
          height={1049}
          priority
          className="w-full max-w-4xl translate-y-[6%] px-4"
        />
      </div>
    </section>
  );
}
