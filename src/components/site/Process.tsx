import { process } from "@/content/site";
import {
  HandshakeIcon,
  MasksIcon,
  MediaIcon,
  MicIcon,
  RoseIcon,
} from "./icons";

const icons = [MicIcon, MasksIcon, RoseIcon, MediaIcon, HandshakeIcon];

const BLOCK_W = 742;
const CARD_W = 350;
const CARD_H = 170;
const PITCH = 186;
const BLOCK_H = PITCH * 4 + CARD_H;
const R = 29.75;
const SPINE = 172;
const HEAD_W = 11.75;
const HEAD_H = 9.6;

function leg(i: number) {
  const top = i * PITCH;
  const y = top + 65.95;
  // even steps sit in the start column, which is on the right in RTL
  const fromStart = i % 2 === 0;
  const edge = fromStart ? CARD_W + 42 : CARD_W;
  const x = fromStart ? SPINE : BLOCK_W - SPINE;
  const dir = fromStart ? -1 : 1;
  const tip = top + 169.6;
  return {
    edge,
    y,
    // the fade reaches full opacity just past the spine
    grad: x + dir * 1.15,
    // the elbow and the spine carry different dash phases in the design
    elbow: `M${edge} ${y}H${x - dir * R}A${R} ${R} 0 0 ${fromStart ? 0 : 1} ${x} ${y + R}`,
    spine: `M${x} ${y + R}V${tip - HEAD_H}`,
    head: `M${x - HEAD_W / 2} ${tip - HEAD_H}H${x + HEAD_W / 2}L${x} ${tip}Z`,
  };
}

function Connectors() {
  const legs = [0, 1, 2, 3].map(leg);
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${BLOCK_W} ${BLOCK_H}`}
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
    >
      <defs>
        {legs.map((l, i) => (
          <linearGradient
            key={i}
            id={`qp-fade-${i}`}
            gradientUnits="userSpaceOnUse"
            x1={l.edge}
            y1={l.y}
            x2={l.grad}
            y2={l.y}
          >
            <stop offset="0" stopColor="#936D49" stopOpacity="0" />
            <stop offset="1" stopColor="#936D49" stopOpacity="1" />
          </linearGradient>
        ))}
      </defs>
      {legs.map((l, i) => (
        <g key={i} fill="none" stroke={`url(#qp-fade-${i})`} strokeWidth="2">
          <path d={l.elbow} strokeDasharray="11.9 7.5" strokeDashoffset="8.25" />
          <path d={l.spine} strokeDasharray="11.5 6.95" strokeDashoffset="5.4" />
          <path d={l.head} fill={`url(#qp-fade-${i})`} stroke="none" />
        </g>
      ))}
    </svg>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-[#F0F0ED] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <h2 className="font-display text-center text-3xl leading-[1.25] font-semibold text-[#2C2E36] sm:text-4xl lg:text-[48px]">
          {process.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[740px] text-center text-base leading-[1.45] text-[#2C2E36] sm:text-lg lg:mt-[18px] lg:text-[24px] lg:leading-[27.5px]">
          {process.subtitle}
        </p>

        <div className="relative mx-auto mt-10 w-full max-w-[350px] lg:mt-[45px] lg:h-[914px] lg:w-[742px] lg:max-w-none">
          <Connectors />
          <ol className="relative flex flex-col gap-4">
            {process.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <li
                  key={step.title}
                  className={i % 2 === 0 ? "lg:self-start" : "lg:self-end"}
                >
                  <article className="rounded-[30px] bg-[#B8A18B] ps-[24.5px] pe-[22px] pt-6 pb-6 text-white lg:h-[170px] lg:w-[350px] lg:pb-0">
                    <div className="flex items-center gap-[17px]">
                      <span className="grid size-[50px] shrink-0 place-items-center rounded-full bg-white/[0.07] ring-1 ring-white/40 ring-inset">
                        <Icon className="size-6" />
                      </span>
                      <h3 className="font-display mt-[2px] text-xl leading-none font-semibold lg:text-[24px]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-base leading-[1.4] font-medium lg:mt-[21px] lg:text-[20px] lg:leading-[24px]">
                      {step.body}
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
