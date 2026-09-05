import type { Metadata } from "next";
import { Kufam, Tajawal } from "next/font/google";
import "./globals.css";

const kufam = Kufam({
  variable: "--font-kufam",
  subsets: ["arabic", "latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "قافية | حوّل القصيدة من لحظة عابرة إلى أثر ثقافي",
  description:
    "منصة قافية تصل بين الشعراء وأصحاب المناسبات لتحويل القصيدة إلى أثر ثقافي يُقتنى ويُهدى ويُعاش.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${kufam.variable} ${tajawal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
