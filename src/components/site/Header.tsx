"use client";

import { useEffect, useState } from "react";
import { nav, hero } from "@/content/site";
import { Container, PillButton } from "./ui";
import { Logo } from "./Logo";
import { CloseIcon, MenuIcon } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-black/5 bg-sand/85 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 lg:h-24">
          <a href="#hero" onClick={() => setOpen(false)} className="text-ink">
            <Logo className="h-9 w-auto lg:h-11" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <PillButton href="#download">{hero.headerCta}</PillButton>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
            >
              {open ? (
                <CloseIcon className="size-5" />
              ) : (
                <MenuIcon className="size-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-black/5 lg:hidden">
          <Container>
            <nav className="flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-ink-soft transition-colors hover:bg-black/5 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 sm:hidden">
                <PillButton href="#download" className="w-full justify-center">
                  {hero.headerCta}
                </PillButton>
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
