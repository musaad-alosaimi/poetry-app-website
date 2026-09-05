"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/content/site";
import { Container, SectionHeading } from "./ui";
import { ArrowIcon, QuoteIcon } from "./icons";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [scrollable, setScrollable] = useState(false);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollable(max > 1);
    // In RTL, scrollLeft counts down from 0 into negative values.
    setProgress(max > 0 ? Math.abs(el.scrollLeft) / max : 0);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    onScroll();
    const observer = new ResizeObserver(onScroll);
    observer.observe(el);
    return () => observer.disconnect();
  }, [onScroll]);

  // "Next" advances toward the inline end, which is leftward in RTL.
  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: -direction * el.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="bg-cream py-16 lg:py-24">
      <Container>
        <SectionHeading
          title={testimonials.title}
          subtitle={testimonials.subtitle}
        />

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:mt-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.items.map((t) => (
            <figure
              key={t.name}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-card border border-line bg-card p-6 sm:w-[48%] lg:w-[calc(25%-0.75rem)]"
            >
              <QuoteIcon className="size-6 text-taupe/50" />
              <blockquote className="mt-4 flex-1 text-sm leading-loose text-ink-soft">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="mt-0.5 text-xs text-muted">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className={`mt-6 items-center gap-4 ${scrollable ? "flex" : "hidden"}`}>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="السابق"
              className="grid size-10 place-items-center rounded-full border border-line bg-card text-ink-soft transition-colors hover:bg-sand"
            >
              <ArrowIcon className="size-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="التالي"
              className="grid size-10 place-items-center rounded-full border border-line bg-card text-ink-soft transition-colors hover:bg-sand"
            >
              <ArrowIcon className="size-4" />
            </button>
          </div>

          <div className="h-1 flex-1 overflow-hidden rounded-full bg-sand">
            <div
              className="h-full rounded-full bg-taupe-deep transition-[width] duration-150"
              style={{ width: `${Math.max(progress, 0.15) * 100}%` }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
