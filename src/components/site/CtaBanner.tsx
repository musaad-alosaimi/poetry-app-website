import Image from "next/image";
import { finalCta } from "@/content/site";
import { Container } from "./ui";
import { AppleIcon, PlayStoreIcon, SparkleIcon } from "./icons";

export function CtaBanner() {
  return (
    <section
      id="download"
      className="relative isolate flex flex-col overflow-hidden bg-[#cdbfae] py-16 lg:block lg:h-[586px] lg:py-0"
    >
      <Image
        src="/cta-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <Image
        src="/cta-phones.webp"
        alt="تطبيق قافية على الجوال"
        width={1400}
        height={1172}
        className="pointer-events-none order-last mx-auto mt-12 w-[92%] max-w-[520px] lg:absolute lg:bottom-0 lg:end-0 lg:mt-0 lg:h-auto lg:w-[48.611%] lg:max-w-none"
      />

      <Container className="relative lg:h-full">
        {/* The phone art occupies 48.611% from the section's end edge. This cap keeps the
            copy clear of it on narrow desktops; the percentage resolves against the
            container, so the offset is tuned to stop binding at the 1440 design width. */}
        <div className="text-center lg:absolute lg:inset-y-0 lg:start-[50px] lg:max-w-[calc(51.389%-90px)] lg:pt-[101px] lg:text-start">
          <span className="inline-flex h-[43px] items-center gap-1.5 rounded-full border border-white/60 bg-white/30 px-3 text-[15px] leading-none text-[#936D49] backdrop-blur-sm">
            <SparkleIcon className="size-[18px]" />
            {finalCta.badge}
          </span>

          <h2 className="font-display mt-4 text-3xl leading-[1.3] font-semibold text-[#2C2E36] sm:text-4xl lg:mt-[12px] lg:text-[48px] lg:leading-[62px]">
            {finalCta.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#2C2E36] sm:text-lg lg:mt-[2px] lg:text-[24px]">
            {finalCta.body}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-[19px] lg:mt-7 lg:justify-start">
            {finalCta.stores.map((store) => (
              <StoreButton key={store.name} {...store} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function StoreButton({ caption, name }: { caption: string; name: string }) {
  const isApple = name === "App Store";
  return (
    <a
      href="#"
      className={`flex h-[65px] flex-row-reverse items-center rounded-2xl border border-white/50 bg-white/15 px-8 text-white transition-colors hover:bg-white/25 ${isApple ? "gap-[10px]" : "gap-[13px]"}`}
    >
      {isApple ? (
        <AppleIcon className="h-10 w-8" />
      ) : (
        <PlayStoreIcon className="size-[29px]" />
      )}
      <span className="text-end leading-none">
        <span className="block text-[13px] lg:text-[15px]">{caption}</span>
        <span
          className={`mt-1 block leading-none ${isApple ? "text-[28px]" : "text-[22px]"}`}
        >
          {name}
        </span>
      </span>
    </a>
  );
}
