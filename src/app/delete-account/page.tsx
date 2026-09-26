import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import {
  accountDeletionLastUpdated,
  accountDeletionSections,
} from "@/content/account-deletion";

export const metadata: Metadata = {
  title: "سياسة حذف الحساب | قافية",
  description:
    "كيف تحذف حسابك في تطبيق قافية، وما الذي يحدث لبياناتك عند الحذف وما قد نحتفظ به.",
};

export default function AccountDeletionPage() {
  return (
    <LegalPage
      title="سياسة حذف الحساب"
      lastUpdated={accountDeletionLastUpdated}
      sections={accountDeletionSections}
      related={{ href: "/privacy-policy/", label: "سياسة الخصوصية" }}
    />
  );
}
