import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Support To Able" },
      { name: "description", content: "How Support To Able collects, uses and protects your personal information in line with the Australian Privacy Principles." },
      { property: "og:title", content: "Privacy Policy | Support To Able" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="We are committed to protecting the privacy of participants, families, staff and visitors." />
      <article className="prose mx-auto max-w-3xl px-4 py-16 text-foreground sm:px-6 lg:px-8">
        <p className="text-muted-foreground">Last updated: January 2026</p>
        <h2 className="mt-8 font-display text-2xl font-bold">1. Information we collect</h2>
        <p className="mt-3 text-muted-foreground">We collect personal information necessary to provide NDIS supports including contact details, NDIS plan information, health information and emergency contacts.</p>
        <h2 className="mt-8 font-display text-2xl font-bold">2. How we use it</h2>
        <p className="mt-3 text-muted-foreground">Information is used to deliver and improve our services, meet legal obligations, communicate with you and process payments through the NDIA or your plan manager.</p>
        <h2 className="mt-8 font-display text-2xl font-bold">3. Disclosure</h2>
        <p className="mt-3 text-muted-foreground">We do not sell your information. We may share information with your consent, with other providers involved in your care, or where required by law.</p>
        <h2 className="mt-8 font-display text-2xl font-bold">4. Storage and security</h2>
        <p className="mt-3 text-muted-foreground">Information is stored in secure, access-controlled systems hosted in Australia. We follow industry-standard security practices.</p>
        <h2 className="mt-8 font-display text-2xl font-bold">5. Your rights</h2>
        <p className="mt-3 text-muted-foreground">You may request access to or correction of your personal information at any time by contacting Supporttoable@gmail.com.</p>
        <h2 className="mt-8 font-display text-2xl font-bold">6. Complaints</h2>
        <p className="mt-3 text-muted-foreground">If you believe we've mishandled your information, contact us first. You may also contact the Office of the Australian Information Commissioner (OAIC).</p>
      </article>
    </SiteLayout>
  );
}
