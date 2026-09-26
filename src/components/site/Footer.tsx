import { footer } from "@/content/site";
import { Container } from "./ui";
import { Logo } from "./Logo";
import { LinkedinIcon, MailIcon, PhoneIcon, SnapchatIcon, XLineIcon } from "./icons";

// Rendered right-to-left, so this list is reversed relative to the design's
// left-to-right reading order.
const socials = [
  { Icon: LinkedinIcon, label: "LinkedIn", size: "size-[22.5px]" },
  { Icon: SnapchatIcon, label: "Snapchat", size: "size-6" },
  { Icon: XLineIcon, label: "X", size: "size-5" },
];

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(to_bottom,#f0f0ed,#ebe1d7)] pt-[94px] pb-[41px] text-[#6A4E34]">
      <Container>
        <div className="grid grid-cols-1 gap-x-[22px] gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="-ms-[2px] h-[64px] w-auto text-[#936D49]" />
            <div className="mt-[16.5px] flex gap-4">
              {socials.map(({ Icon, label, size }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-8 place-items-center rounded-full bg-[#936D49] text-white transition-opacity hover:opacity-85"
                >
                  <Icon className={size} />
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="pt-[4.5px] text-[20px] leading-none font-medium">{col.title}</h3>
              <ul className="mt-[21.5px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base leading-[23px] font-medium transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="pt-[4.5px] text-[20px] leading-none font-medium">{footer.contact.title}</h3>
            <ul className="mt-[28px] space-y-[21px]">
              <li>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="flex items-center gap-[11px] transition-opacity hover:opacity-70"
                >
                  <MailIcon className="h-[17px] w-5 shrink-0" />
                  <span className="text-base font-medium">{footer.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footer.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-[11px] transition-opacity hover:opacity-70"
                >
                  <PhoneIcon className="size-5 shrink-0" />
                  <span dir="ltr" className="text-base font-medium">
                    {footer.contact.phone}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[46.5px] h-px bg-black/[0.07]" />

        <div className="mt-[34px] flex flex-col items-center gap-3 px-[10px] text-base font-medium text-[#2C2E36] sm:flex-row sm:justify-between">
          <span>{footer.handle}</span>
          <span>{footer.copyright}</span>
        </div>
      </Container>
    </footer>
  );
}
