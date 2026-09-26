import Link from "next/link";
import type { PolicySection } from "@/content/privacy";
import { Container } from "./ui";
import { Logo } from "./Logo";
import { Footer } from "./Footer";

/**
 * Shared shell for the plain-text policy pages (privacy, account deletion).
 * Body copy uses "\n\n" for paragraph breaks and "\n" for line breaks, the same
 * convention as the mobile app's policy content.
 */
export function LegalPage({
  title,
  intro,
  lastUpdated,
  sections,
  related,
}: {
  title: string;
  intro?: string;
  lastUpdated: string;
  sections: PolicySection[];
  related: { href: string; label: string };
}) {
  return (
    <>
      <header className="border-b border-black/5 bg-sand/85">
        <Container>
          <div className="flex h-16 items-center justify-between gap-6 lg:h-24">
            <Link href="/" aria-label="الرئيسية" className="text-ink">
              <Logo className="h-9 w-auto lg:h-11" />
            </Link>
            <Link
              href="/"
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              العودة إلى الرئيسية
            </Link>
          </div>
        </Container>
      </header>

      <main className="flex-1 bg-cream py-12 lg:py-20">
        <Container>
          <article className="mx-auto max-w-[820px]">
            <h1 className="font-display text-3xl leading-[1.25] font-semibold text-[#2C2E36] sm:text-4xl lg:text-[48px]">
              {title}
            </h1>
            <p className="mt-4 text-sm text-muted sm:text-base">
              آخر تحديث: {lastUpdated}
            </p>
            {intro ? (
              <p className="mt-6 text-base leading-[1.9] text-ink-soft sm:text-lg">
                {intro}
              </p>
            ) : null}

            <div className="mt-10 space-y-5">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-card border border-line bg-card px-5 py-6 sm:px-8"
                >
                  <h2 className="font-display text-xl leading-[1.4] font-semibold text-[#2C2E36] sm:text-2xl">
                    {section.title}
                  </h2>
                  <div className="mt-3 space-y-3 text-base leading-[1.9] text-ink-soft">
                    {section.body.split("\n\n").map((paragraph) => (
                      <p key={paragraph} className="whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <p className="mt-10 text-base text-ink-soft">
              راجع أيضًا:{" "}
              <Link
                href={related.href}
                className="font-medium text-taupe-deep underline underline-offset-4 hover:text-ink"
              >
                {related.label}
              </Link>
            </p>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
