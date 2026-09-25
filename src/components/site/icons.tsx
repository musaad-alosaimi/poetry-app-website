/**
 * Generic UI icons, authored here because no icons were exported from the
 * Figma file. Swap any of these for the real exported SVGs when available.
 */
type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9.5 3.5 11 8.5l5 1.5-5 1.5-1.5 5-1.5-5L3 10l5-1.5z" />
      <path d="M17.5 3v4M19.5 5h-4" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function MicIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="16" cy="7.5" r="4.9" />
      <path d="m11.4 8.9-5.9 8.05a1 1 0 0 0 .1 1.29l.79.79a1 1 0 0 0 1.29.1L15.2 13" />
      <path d="M16.4 21.4c-1-.7-2.1-1.2-3.4-1.2-2.9 0-4.4 2-6 2" />
    </svg>
  );
}

export function MasksIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M22 5.4c0 8.7-3.9 11.6-5.9 11.6S10.2 14.1 10.2 5.4c0-1.9 2-2.9 5.9-2.9s5.9 1 5.9 2.9Z" />
      <path d="M13.9 6.5h.01M18.1 6.5h.01M6.6 13.4h.01" />
      <path d="M14.3 10.2c.9.9 2.3.9 3.2 0" />
      <path d="M10.3 7.6c-1.1.2-2.4.7-4 1.6-3.4 2-4.5 3.8-3.6 5.4 4.3 7.6 9.2 8.1 10.8 7.2.9-.5 1.8-2.1 1.8-4.6" />
      <path d="M9.1 16.7c.3-1.1 1.4-1.7 2.4-1.4" />
    </svg>
  );
}

export function RoseIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M20.6 9.2a6.9 6.9 0 1 1-13.8 0 6.9 6.9 0 0 1 13.8 0Z" />
      <path d="M17.9 9.9a3.2 3.2 0 1 1-5.6-2.1" />
      <path d="M7 8.4c1 4.6 3.9 6.6 7.5 6.6 2.3 0 4.1-.9 5.4-2.3" />
      <path d="M15.5 9.7a1.3 1.3 0 1 0 .01 0Z" fill="currentColor" stroke="none" />
      <path d="M3 21.5 11.2 13" />
      <path d="M11.4 15.9c-1.7 1.8-4.2 1.9-5.9 1.6-.3-1.7-.2-4.2 1.6-5.9 1.7.3 4.2 2.6 4.3 4.3Z" />
    </svg>
  );
}

export function MediaIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M12.6 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.6" />
      <path d="m3 16.6 4.6-4.6c.9-.9 2.1-.9 3 0l1.5 1.5" />
      <circle cx="9" cy="9" r="2.1" />
      <path d="M15.2 15.1a1 1 0 0 0-1.5.8v4.2a1 1 0 0 0 1.5.9l3.5-2.1a1 1 0 0 0 0-1.7Z" />
    </svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="m11 17.3 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14.3 2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a1 1 0 1 1-3-3l2.8-2.8a5.8 5.8 0 0 1 7.1-.9l.5.3a2 2 0 0 0 1.4.2L21 4.4" />
      <path d="m21 3.4 1 11h-2" />
      <path d="M3 3.4 2 14.4l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4.4h8" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.5 5C6.5 6.6 4.8 9.3 4.8 12.6c0 3.4 1.9 5.7 4.6 5.7 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-1.6 1.6-3 3.3-4L9.5 5Zm9 0c-3 1.6-4.7 4.3-4.7 7.6 0 3.4 1.9 5.7 4.6 5.7 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-1.6 1.6-3 3.3-4L18.5 5Z" />
    </svg>
  );
}

export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7 1.3 0 1.6.7 2.8.7 1.2 0 1.9-1.1 2.6-2.1.8-1.2 1.2-2.4 1.2-2.4s-2.3-.9-2.3-3.3ZM14.3 6.1c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-.9 2.6 1 .1 2-.5 2.6-1.2Z" />
    </svg>
  );
}

export function PlayStoreIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3.6 2.3c-.3.3-.5.7-.5 1.3v16.8c0 .6.2 1 .5 1.3l.1.1 9.4-9.4v-.2L3.7 2.2l-.1.1Zm12.6 6.3-2.8-2.8L4.7 1.4l11.5 7.2Zm0 6.8L4.7 22.6l8.7-4.4 2.8-2.8Zm1.2-6.1-2.4 1.4-3 3 3 3 2.4-1.4c1-.6 1-1.6 0-2.2l-.1-.1c1-.6 1-1.5.1-2.1v-1.6Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.2 3h3.3l-7.2 8.2L21.7 21h-6.6l-4.3-5.6L5.8 21H2.5l7.7-8.8L2.3 3H9l3.9 5.2L17.2 3Zm-1.2 16h1.8L8.1 4.9H6.2L16 19Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.8v1.5h.1c.5-.9 1.8-1.9 3.6-1.9 3.9 0 4.6 2.5 4.6 5.7v5.7h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.1h-4v-11Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z" />
    </svg>
  );
}

export function SnapchatIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.1 2c2.5 0 4.4 1.6 4.7 4 .1.9.1 1.8 0 2.7 0 .2 0 .3.3.3.3 0 .6-.1.9-.3.5-.2 1.1 0 1.3.4.2.4 0 .9-.5 1.2-.3.2-.7.3-1 .4-.5.2-.8.4-.7.8.5 1.5 1.6 2.7 3.1 3.3.4.2.6.4.5.7-.1.5-.9.8-2.3 1-.1.3-.2.6-.2.9-.1.3-.2.4-.5.4-.4 0-.8-.1-1.2-.1-1.1 0-1.8.2-2.5.8-.7.6-1.5 1.1-2.6 1.1s-1.9-.5-2.6-1.1c-.7-.6-1.4-.8-2.5-.8-.4 0-.8.1-1.2.1-.3 0-.4-.1-.5-.4-.1-.3-.1-.6-.2-.9-1.4-.2-2.2-.5-2.3-1-.1-.3.1-.5.5-.7 1.5-.6 2.6-1.8 3.1-3.3.1-.4-.2-.6-.7-.8-.3-.1-.7-.2-1-.4-.5-.3-.7-.8-.5-1.2.2-.4.8-.6 1.3-.4.3.2.6.3.9.3.3 0 .3-.1.3-.3-.1-.9-.1-1.8 0-2.7.3-2.4 2.2-4 4.7-4h.9Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 17" fill="none" {...props}>
      <rect width="20" height="17" rx="4.6" fill="currentColor" />
      <path
        d="M5.3 5.8 10 8.1l4.7-2.3"
        stroke="#F1EAE2"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M4.5 0.25L6 1.75L6 2.25L7.5 3.75L7.5 4.25L8 4.75L8 5.75L6 7.75L6.5 8.25L6.5 8.75L9 11.25L9 11.75L9.5 12.25L7 14.75L6 14.75L3 11.75L3 11.25L2 10.25L2 9.75L1 8.75L1 7.75L0.5 7.25L0.5 6.75L0 6.25L0 3.25L0.5 2.75L0.5 2.25L1 1.75L1 1.25L1.5 0.75L2.5 0.25Z" />
      <path d="M15.5 12.25L16.5 12.75L17.5 13.75L18.5 14.25L20 15.75L20 16.75L19.5 17.25L19.5 17.75L18 19.25L16.5 19.75L14 19.75L12.5 19.25L9.5 17.75L9 17.25L8 16.75L8 15.75L10.5 13.25L13 12.75L14 12.25Z" />
    </svg>
  );
}

export function XLineIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
      <path d="M17.2 3h3.3l-7.2 8.2L21.7 21h-6.6l-4.3-5.6L5.8 21H2.5l7.7-8.8L2.3 3H9l3.9 5.2L17.2 3Zm-1.2 16h1.8L8.1 4.9H6.2L16 19Z" />
    </svg>
  );
}
