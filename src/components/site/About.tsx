import { about } from "@/content/site";
import { Logo } from "./Logo";
import { Container } from "./ui";

/* Stand-ins for the two card glyphs, which were never exported from Figma. */
const icons = {
  "hand-heart": (
    <>
      <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
      <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 15 6 6" />
      <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
    </>
  ),
  "heart-circle": (
    <>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7" />
    </>
  ),
};

export function About() {
  return (
    <section id="about" className="bg-cream pt-20 pb-24 lg:pt-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_2.42fr] lg:gap-x-11">
          {/* Right-hand column in the design; stacks above the copy on mobile. */}
          <Logo
            aria-hidden
            className="mx-auto w-56 text-[#936D49] lg:mx-0 lg:mt-1 lg:w-full"
          />

          <div>
            <h2 className="text-3xl leading-[1.2] font-bold sm:text-4xl lg:text-[3.6rem]">
              <span className="text-[#2C2E36]">{about.titleLead}</span>{" "}
              <span className="text-[#936D49]">{about.titleAccent}</span>
            </h2>

            <p className="mt-6 text-lg leading-[1.45] text-[#2C2E36] sm:text-xl lg:text-[1.65rem] lg:leading-[1.09]">
              {about.body}
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {about.cards.map((card) => (
                <div key={card.title} className="rounded-[14px] bg-[#FCFAF8] p-4">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-[30px] shrink-0 place-items-center rounded-[9px] bg-[#F2ECE7]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#936D49"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-[17px]"
                        aria-hidden
                      >
                        {icons[card.icon]}
                      </svg>
                    </span>
                    <h3 className="text-[1.375rem] leading-none font-bold text-[#936D49]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-base leading-[1.06] text-[#936D49]">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
