import Image from "next/image";
import { fields } from "@/content/site";
import { Container, SectionHeading } from "./ui";

// The row is full-bleed: it starts at the container's inline edge and scrolls
// past the viewport edge, so the next card peeks the way the design shows it.
const EDGE = "max(20px, calc((100vw - 1340px) / 2 + 50px))";

export function Fields() {
  return (
    <section id="fields" className="bg-fields py-16 lg:pt-24 lg:pb-[100px]">
      <Container>
        <SectionHeading title={fields.title} subtitle={fields.subtitle} />
      </Container>

      <div
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth"
        style={{
          paddingInlineStart: EDGE,
          paddingInlineEnd: EDGE,
          scrollPaddingInlineStart: EDGE,
        }}
      >
        {fields.items.map((item) => (
          <article
            key={item.title}
            className="relative aspect-square w-[268px] shrink-0 snap-start overflow-hidden rounded-[32px] sm:w-[286px]"
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="286px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[#6b5036] via-[#6b5036]/50 to-transparent"
            />

            <div className="relative flex h-full flex-col justify-end p-4">
              <h3 className="font-display text-[32px] leading-[1.1] font-semibold text-white">
                {item.title}
              </h3>
              {/* Clamped so the copy wraps to three lines as the design shows. */}
              <p className="mt-[26px] max-w-[220px] text-[16px] leading-[19.5px] text-white">
                {item.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
