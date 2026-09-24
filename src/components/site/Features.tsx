import Image from "next/image";
import type { ReactNode } from "react";
import { features } from "@/content/site";
import { Container, SectionHeading } from "./ui";

/**
 * Geometry is measured off the design at a 1440 viewport: a 1240 container,
 * 24px gutters, two rows of 496px cards split 1/1 then 2/1. The artwork in each
 * card is placed as a percentage of the card box so it tracks the breakpoints.
 */
export function Features() {
  return (
    <section id="features" className="bg-cream pb-16 lg:pb-24">
      <Container>
        <SectionHeading title={features.title} subtitle={features.subtitle} />

        <div className="mt-10 grid gap-6 lg:mt-14">
          <FeatureCard {...features.dashboard}>
            <Art
              src="/feat-dashboard.webp"
              width={996}
              height={298}
              left="6.58%"
              top="23.79%"
              w="81.91%"
            />
          </FeatureCard>

          <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
            <FeatureCard {...features.experience}>
              <Art
                src="/feat-experience.webp"
                width={1592}
                height={1233}
                left="1.98%"
                top="6.86%"
                w="96.17%"
                fade="linear-gradient(to bottom, #000 26%, transparent 64%)"
              />
            </FeatureCard>

            <FeatureCard {...features.orders}>
              <Art
                src="/feat-orders.webp"
                width={788}
                height={840}
                left="2.70%"
                top="5.04%"
                w="94.84%"
                fade="linear-gradient(to bottom, #000 30%, transparent 96%)"
              />
            </FeatureCard>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeatureCard({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <article className="relative h-[420px] overflow-hidden rounded-3xl bg-[linear-gradient(to_bottom,#fff_0%,#fff_25%,#ede6df_100%)] md:h-[460px] lg:h-[496px]">
      {children}
      <div className="absolute inset-x-5 bottom-10 text-[#936D49]">
        <h3 className="text-2xl leading-[34px] font-bold">{title}</h3>
        <p className="mt-3 text-base leading-[21px]">{body}</p>
      </div>
    </article>
  );
}

function Art({
  src,
  width,
  height,
  left,
  top,
  w,
  fade,
}: {
  src: string;
  width: number;
  height: number;
  left: string;
  top: string;
  w: string;
  fade?: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      width={width}
      height={height}
      className="pointer-events-none absolute h-auto max-w-none select-none"
      style={{ left, top, width: w, maskImage: fade }}
    />
  );
}
