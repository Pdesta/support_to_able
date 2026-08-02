import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Support To Able" },
      { name: "description", content: "Terms and conditions governing the use of Support To Able services and website." },
      { property: "og:title", content: "Terms & Conditions | Support To Able" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Terms & Conditions" subtitle="Please read these terms carefully before using our services or website." />
      <article className="mx-auto max-w-3xl px-4 py-16 text-foreground sm:px-6 lg:px-8">
        <p className="text-muted-foreground">Last updated: January 2026</p>
        <h2 className="mt-8 font-display text-2xl font-bold">1. Services</h2>
        <p className="mt-3 text-muted-foreground">Support To Able provides NDIS-funded disability supports across South East Queensland. Specific services, hours and rates are agreed in a Service Agreement with each participant.</p>
        <h2 className="mt-8 font-display text-2xl font-bold">2. Fees and payment</h2>
        <p className="mt-3 text-muted-foreground">Services are charged in line with the current NDIS Price Guide unless otherwise agreed. Payment is processed through your plan management arrangement.</p>
        <h2 className="mt-8 font-display text-2xl font-bold">3. Cancellations</h2>
        <p className="mt-3 text-muted-foreground">Short-notice cancellations may be charged in line with NDIS rules. Full cancellation terms are set out in your Service Agreement.</p>
        <h2 className="mt-8 font-display text-2xl font-bold">4. Your responsibilities</h2>
        <p className="mt-3 text-muted-foreground">You agree to treat our staff with respect, provide a safe environment for service delivery and notify us of changes that affect your support.</p>
        <h2 className="mt-8 font-display text-2xl font-bold">5. Feedback and complaints</h2>
        <p className="mt-3 text-muted-foreground">We welcome feedback and take complaints seriously. Contact us anytime; you may also contact the NDIS Quality and Safeguards Commission.</p>
        <h2 className="mt-8 font-display text-2xl font-bold">6. Website use</h2>
        <p className="mt-3 text-muted-foreground">Information on this website is general in nature and does not constitute medical or legal advice.</p>
      </article>
    </SiteLayout>
  );
}
