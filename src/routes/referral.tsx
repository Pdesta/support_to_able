import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { openEmailFromForm } from "@/lib/emailForm";

export const Route = createFileRoute("/referral")({
  head: () => ({
    meta: [
      { title: "Make an NDIS Referral | Support To Able Brisbane & QLD" },
      { name: "description", content: "Refer a participant to Support To Able. Quick, secure online referral form for hospitals, support coordinators, families and self-referrals." },
      { property: "og:title", content: "Make a Referral | Support To Able" },
      { property: "og:description", content: "Submit a secure online NDIS referral in minutes." },
      { property: "og:url", content: "/referral" },
    ],
    links: [{ rel: "canonical", href: "/referral" }],
  }),
  component: ReferralPage,
});

function ReferralPage() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const participantName = String(data.get("p_name") || "Participant");
    openEmailFromForm(form, `NDIS referral: ${participantName}`, `New NDIS referral for ${participantName}`);
  }
  return (
    <SiteLayout>
      <PageHero eyebrow="Referral" title="Make a referral" subtitle="Whether you're a hospital, support coordinator, family member or referring yourself — we're here to help." />

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <form onSubmit={onSubmit} className="grid gap-8 rounded-3xl border border-border bg-card p-7 sm:p-10">
          <Fieldset legend="Participant Details">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="p_name" required />
              <Field label="Date of birth" name="p_dob" type="date" required />
              <Field label="NDIS number" name="p_ndis" />
              <Field label="Phone" name="p_phone" type="tel" />
              <Field label="Email" name="p_email" type="email" />
              <Field label="Suburb" name="p_suburb" required />
            </div>
          </Fieldset>

          <Fieldset legend="Referrer Details">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="r_name" required />
              <Field label="Relationship to participant" name="r_rel" required />
              <Field label="Organisation (if applicable)" name="r_org" />
              <Field label="Phone" name="r_phone" type="tel" />
              <Field label="Email" name="r_email" type="email" required />
            </div>
          </Fieldset>

          <Fieldset legend="Support Requirements">
            <div className="grid gap-2">
              <label htmlFor="needs" className="text-sm font-semibold">Describe the support required <span className="text-destructive">*</span></label>
              <textarea id="needs" name="needs" rows={5} required className="rounded-2xl border border-input bg-background px-4 py-3 text-sm" />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Plan management" name="mgmt" placeholder="Self / Plan / NDIA" />
              <Field label="Preferred start date" name="start" type="date" />
            </div>
          </Fieldset>

          <Fieldset legend="Upload Documents (optional)">
            <input type="file" name="docs" multiple className="block w-full rounded-2xl border border-dashed border-input bg-background p-4 text-sm" />
            <p className="mt-2 text-xs text-muted-foreground">Selected document names will be added to the email. Please attach the actual files manually before sending.</p>
          </Fieldset>

          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" required className="mt-1 h-4 w-4" />
            <span className="text-muted-foreground">I confirm I have consent from the participant (or guardian) to submit this referral.</span>
          </label>

          <button type="submit" className="rounded-full bg-[var(--gradient-primary)] px-7 py-3.5 text-sm font-semibold text-primary-foreground disabled:opacity-60">
            Continue referral by email
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}

function Fieldset({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-4 font-display text-lg font-bold text-primary">{legend}</legend>
      {children}
    </fieldset>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-semibold">{label}{required && <span className="text-destructive"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className="rounded-2xl border border-input bg-background px-4 py-3 text-sm" />
    </div>
  );
}
