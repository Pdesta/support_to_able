import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/ndis")({
  head: () => ({
    meta: [
      { title: "NDIS Support Categories Explained | Support To Able QLD" },
      { name: "description", content: "Understand the NDIS — self-managed, plan-managed and NDIA-managed options, funding categories and the participant journey." },
      { property: "og:title", content: "NDIS Support Categories | Support To Able" },
      { property: "og:description", content: "Self-managed, Plan-managed, NDIA-managed — what they mean and how we help." },
      { property: "og:url", content: "/ndis" },
    ],
    links: [{ rel: "canonical", href: "/ndis" }],
  }),
  component: NdisPage,
});

const managementTypes = [
  { title: "Self-Managed", desc: "You manage your own funding, choose any provider and handle invoices directly. Maximum choice, more admin.", points: ["Use any provider (registered or not)", "Pay invoices directly", "Track your own budget"] },
  { title: "Plan-Managed", desc: "A plan manager handles the financial admin while you keep choice and control of your providers.", points: ["Use any provider", "No invoicing or claims", "Real-time budget tracking"] },
  { title: "NDIA-Managed", desc: "The NDIA pays registered providers directly. Simplest option with the least admin.", points: ["Registered providers only", "NDIA handles payments", "View claims via myplace"] },
];

const categories = [
  { title: "Core Supports", desc: "Everyday assistance — personal care, transport, consumables and community participation." },
  { title: "Capacity Building", desc: "Skills, learning and capability — coordination, employment, daily activity, social participation." },
  { title: "Capital Supports", desc: "Assistive technology, home modifications and specialist disability accommodation." },
];

const journey = [
  { step: "1", title: "Access Request", desc: "Apply to the NDIA and provide evidence of disability." },
  { step: "2", title: "Planning Meeting", desc: "Meet with a planner to discuss goals, supports and funding." },
  { step: "3", title: "Plan Approved", desc: "You receive a plan with funded supports for 12-24 months." },
  { step: "4", title: "Implementation", desc: "Choose providers (like us!) and begin services." },
  { step: "5", title: "Plan Review", desc: "Regular reviews adjust your plan as your needs evolve." },
];

const faqs = [
  { q: "Who is eligible for the NDIS?", a: "Australians under 65 with a permanent and significant disability who are citizens or permanent residents." },
  { q: "How long does an NDIS plan last?", a: "Plans usually last 12-24 months and are reviewed before they expire." },
  { q: "Can I change providers?", a: "Yes — you have full choice and control. We make transitions smooth and stress-free." },
  { q: "What if my plan doesn't have enough funding?", a: "We help you prepare for reviews and can advocate for the supports you need." },
];

function NdisPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="NDIS Support" title="Understanding the NDIS — made simple" subtitle="Plain-English answers to help you navigate the National Disability Insurance Scheme." />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold">What is the NDIS?</h2>
          <p className="mt-4 text-muted-foreground">
            The National Disability Insurance Scheme (NDIS) is Australia's national approach to funding reasonable and necessary supports for people with permanent and significant disability. It puts you in control: you choose your goals, your providers and how your funding is used.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-center font-display text-3xl font-bold">How your plan can be managed</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {managementTypes.map((m) => (
              <article key={m.title} className="rounded-3xl border border-border bg-card p-7">
                <h3 className="font-display text-xl font-bold text-primary">{m.title}</h3>
                <p className="mt-3 text-muted-foreground">{m.desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {m.points.map((p) => <li key={p} className="flex gap-2"><span className="text-accent">✓</span> {p}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-center font-display text-3xl font-bold">Funding categories</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((c) => (
              <div key={c.title} className="rounded-3xl bg-primary-soft p-6">
                <h3 className="font-display text-lg font-bold text-primary">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-center font-display text-3xl font-bold">The participant journey</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {journey.map((j) => (
              <li key={j.step} className="rounded-3xl border border-border bg-card p-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-primary)] font-bold text-primary-foreground">{j.step}</span>
                <h3 className="mt-3 font-display font-bold">{j.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{j.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-border rounded-3xl border border-border bg-card">
            {faqs.map((f, i) => (
              <details key={i} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-soft text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] bg-[var(--gradient-primary)] p-10 text-center text-primary-foreground sm:p-14">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Need help navigating the NDIS?</h2>
          <p className="mt-3 text-primary-foreground/90">Our team can guide you, no matter where you are in the journey.</p>
          <Link to="/contact" className="mt-6 inline-flex rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary">Talk to our team</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
