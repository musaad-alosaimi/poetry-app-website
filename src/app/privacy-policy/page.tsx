import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyLastUpdated, privacySections } from "@/content/privacy";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | قافية",
  description:
    "تعرّف على البيانات التي تجمعها منصة قافية وكيف تستخدمها وتحميها، وحقوقك في بياناتك.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="سياسة الخصوصية"
      lastUpdated={privacyLastUpdated}
      sections={privacySections}
      related={{ href: "/delete-account/", label: "سياسة حذف الحساب" }}
    />
  );
}
