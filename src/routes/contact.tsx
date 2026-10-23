import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { openEmailFromForm } from "@/lib/emailForm";
import { Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Support To Able | NDIS Provider Brisbane & QLD" },
      { name: "description", content: "Get in touch with Support To Able. Email Supporttoable@gmail.com or send an enquiry. Servicing Brisbane, Ipswich, Logan, Redland, Moreton Bay and the Gold Coast." },
      { property: "og:title", content: "Contact Support To Able" },
      { property: "og:description", content: "We're here to help — call, email or send us a message." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const senderName = `${data.get("first") ?? ""} ${data.get("last") ?? ""}`.trim();
    const subject = String(data.get("subject") || "Website enquiry");
    openEmailFromForm(form, `Website enquiry: ${subject}`, `New website enquiry from ${senderName || "a visitor"}`);
  }
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="We're here to help" subtitle="Reach out anytime — our friendly intake team responds within one business day." />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div className="space-y-4">
          <ContactCard icon={Mail} title="Email" lines={[<a key="e" href="mailto:Supporttoable@gmail.com" className="text-primary hover:underline">Supporttoable@gmail.com</a>, "We respond within 1 business day"]} />
          <ContactCard icon={MapPin} title="Service Areas" lines={["Brisbane · Ipswich · Logan", "Redland · Moreton Bay · Gold Coast"]} />
          <ContactCard icon={Clock} title="Office Hours" lines={["Mon–Fri: 8:30am – 5:30pm", "24/7 on-call for active participants"]} />
          <div className="overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Service area map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=152.5%2C-28.2%2C153.7%2C-27.0&layer=mapnik"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-border bg-card p-7">
          <h2 className="font-display text-2xl font-bold">Send us a message</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="First name" name="first" required />
            <Field label="Last name" name="last" required />
          </div>
          <Field label="Email" name="email" type="email" required />
          <Field label="Subject" name="subject" required />
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-semibold">Message <span className="text-destructive">*</span></label>
            <textarea id="message" name="message" rows={6} required className="rounded-2xl border border-input bg-background px-4 py-3 text-sm" />
          </div>
          <button type="submit" className="rounded-full bg-[var(--gradient-primary)] px-7 py-3.5 text-sm font-semibold text-primary-foreground disabled:opacity-60">
            Send message by email
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}

function ContactCard({ icon: Icon, title, lines }: { icon: any; title: string; lines: React.ReactNode[] }) {
  return (
    <div className="flex gap-4 rounded-3xl border border-border bg-card p-5">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary"><Icon className="h-5 w-5" /></span>
      <div className="min-w-0">
        <h3 className="font-semibold">{title}</h3>
        <div className="mt-1 space-y-0.5 text-sm text-muted-foreground">{lines.map((l, i) => <div key={i}>{l}</div>)}</div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-semibold">{label}{required && <span className="text-destructive"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} className="rounded-2xl border border-input bg-background px-4 py-3 text-sm" />
    </div>
  );
}
