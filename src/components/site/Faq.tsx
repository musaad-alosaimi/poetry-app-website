import { faq } from "@/content/site";
import { Container, SectionHeading } from "./ui";
import { PlusIcon } from "./icons";

export function Faq() {
  return (
    <section id="faq" className="bg-sand-fade py-16 lg:py-24">
      <Container>
        <SectionHeading title={faq.title} subtitle={faq.subtitle} />

        <div className="mt-10 grid grid-cols-1 items-start gap-4 lg:mt-14 lg:grid-cols-2">
          {faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-card border border-line bg-card px-5 open:pb-1"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <PlusIcon className="size-4 shrink-0 text-taupe-deep transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="border-t border-line pt-4 pb-4 text-sm leading-loose text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
