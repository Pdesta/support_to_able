import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { openEmailFromForm } from "@/lib/emailForm";
import { Heart, GraduationCap, Clock, Coffee, Award, Users } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Support Worker Jobs Brisbane & QLD | Support To Able" },
      { name: "description", content: "Join a values-driven NDIS provider. Disability support worker, support coordinator and admin roles across Brisbane, Ipswich, Logan and Gold Coast." },
      { property: "og:title", content: "Careers at Support To Able" },
      { property: "og:description", content: "Make a real difference. Join our growing Queensland team." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const benefits = [
  { icon: Heart, title: "Meaningful Work", desc: "Make a real difference in people's lives every single day." },
  { icon: GraduationCap, title: "Training & Development", desc: "Paid training, mentorship and clear pathways for growth." },
  { icon: Clock, title: "Flexible Hours", desc: "Shifts that fit around your life — full-time, part-time or casual." },
  { icon: Coffee, title: "Wellbeing First", desc: "Supportive culture, EAP access and team get-togethers." },
  { icon: Award, title: "Above-Award Pay", desc: "Competitive rates with penalties and travel allowances." },
  { icon: Users, title: "Great Team", desc: "Work alongside people who truly care about what they do." },
];

const roles = [
  { title: "Disability Support Worker", location: "Brisbane / Logan / Ipswich", type: "Casual / Part-Time" },
  { title: "Support Coordinator", location: "Gold Coast", type: "Full-Time" },
  { title: "Rostering Officer", location: "Brisbane HQ", type: "Full-Time" },
  { title: "Registered Nurse (Community)", location: "South East QLD", type: "Part-Time" },
];

function CareersPage() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const applicant = String(data.get("name") || "Applicant");
    const role = String(data.get("role") || "General application");
    openEmailFromForm(form, `Job application: ${role} — ${applicant}`, `New job application from ${applicant}`);
  }
  return (
    <SiteLayout>
      <PageHero eyebrow="Careers" title="Build a career that changes lives" subtitle="Join a Queensland-grown NDIS provider that values its team as much as the people we support." />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Why work with us</h2>
          <p className="mt-4 text-muted-foreground">Our culture is built on respect, learning and genuine care — for participants and our team alike.</p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <li key={b.title} className="rounded-3xl border border-border bg-card p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft text-accent-foreground"><b.icon className="h-6 w-6" /></span>
              <h3 className="mt-4 font-display text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-primary-soft/40 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold">Open positions</h2>
          <ul className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-background">
            {roles.map((r) => (
              <li key={r.title} className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.location} · {r.type}</p>
                </div>
                <a href="#apply" className="inline-flex rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary-soft">Apply now</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="apply" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-bold">Apply now</h2>
        <p className="mt-3 text-center text-muted-foreground">Tell us a little about yourself and our team will be in touch.</p>
        <form onSubmit={onSubmit} className="mt-10 grid gap-4 rounded-3xl border border-border bg-card p-7">
          <Field label="Full name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" />
          <Field label="Position applying for" name="role" required />
          <Field label="Suburb / location" name="location" required />
          <div className="grid gap-2">
            <label className="text-sm font-semibold" htmlFor="cover">Cover note</label>
            <textarea id="cover" name="cover" rows={5} required className="rounded-2xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground" placeholder="Tell us about your experience and why you'd like to join us." />
          </div>
          <button type="submit" className="rounded-full bg-[var(--gradient-primary)] px-7 py-3.5 text-sm font-semibold text-primary-foreground disabled:opacity-60">
            Send application by email
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-semibold">{label}{required && <span className="text-destructive"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} className="rounded-2xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground" />
    </div>
  );
}
