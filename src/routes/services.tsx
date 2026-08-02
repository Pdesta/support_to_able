import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "NDIS Services Brisbane & QLD | Support To Able" },
      { name: "description", content: "Full range of NDIS supports including personal care, community access, daily living, support coordination, respite, transport and capacity building." },
      { property: "og:title", content: "NDIS Services | Support To Able" },
      { property: "og:description", content: "Full range of NDIS supports across South East Queensland." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { slug: "personal-care", title: "Personal Care", desc: "Compassionate support with hygiene, dressing, grooming and personal routines, delivered with dignity in your own home.", benefits: ["Trained support workers", "Flexible scheduling", "Maintain independence"], eligibility: "Available to NDIS participants with funded core supports." },
  { slug: "community-access", title: "Community Access", desc: "Get out, connect and participate — whether it's a coffee catch-up, sports, hobbies, or local events across South East Queensland.", benefits: ["Build social connections", "Try new activities", "Confidence in the community"], eligibility: "Suitable for participants with social & community participation funding." },
  { slug: "daily-living", title: "Daily Living", desc: "Practical day-to-day support so you can live the life you choose, on your terms.", benefits: ["Skill building", "1:1 support", "Routine and stability"], eligibility: "NDIS participants with assistance with daily life funding." },
  { slug: "household-tasks", title: "Household Tasks", desc: "Help with cleaning, laundry, meal preparation and home maintenance.", benefits: ["Safe, clean home", "Healthy meals", "Less stress"], eligibility: "Funded under core supports for participants unable to do these tasks." },
  { slug: "transport", title: "Transport", desc: "Safe, accessible transport to appointments, work, study and social activities throughout Brisbane, Ipswich, Logan and Gold Coast.", benefits: ["Reliable drivers", "Accessible vehicles", "Door-to-door service"], eligibility: "Available to participants with transport funding in their plan." },
  { slug: "support-coordination", title: "Support Coordination", desc: "Expert guidance to understand and use your NDIS plan, connect with providers and pursue your goals.", benefits: ["Maximise your plan", "Reduce admin", "Trusted advice"], eligibility: "Participants with support coordination funded in capacity building." },
  { slug: "short-term-accommodation", title: "Short Term Accommodation", desc: "Comfortable, supported stays away from home — perfect for trying new things or giving carers a break.", benefits: ["Fully supported", "Social opportunities", "Carer respite"], eligibility: "Participants with STA / respite funding." },
  { slug: "respite", title: "Respite", desc: "Quality short-term care that gives families and informal carers a well-earned rest.", benefits: ["Flexible options", "Trusted care", "Peace of mind"], eligibility: "Available through STA, MTA or core supports." },
  { slug: "life-skills-development", title: "Life Skills Development", desc: "Build the practical skills that lead to greater independence — cooking, budgeting, travel training and more.", benefits: ["Tailored programs", "Real-world practice", "Goal tracking"], eligibility: "Funded under improved daily living / capacity building." },
  { slug: "social-participation", title: "Social Participation", desc: "Group programs and 1:1 supports that help you build friendships and pursue your passions.", benefits: ["Group activities", "New friendships", "Active lifestyle"], eligibility: "Participants with social & community participation funding." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Services" title="Comprehensive NDIS supports for South East Queensland" subtitle="Every support we deliver is tailored to your goals, lifestyle and plan." />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} id={s.slug} className="scroll-mt-28 rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-card">
              <h2 className="font-display text-2xl font-bold text-card-foreground">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Benefits</p>
                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 rounded-2xl bg-primary-soft p-4 text-sm">
                <span className="font-semibold text-primary">Eligibility:</span>{" "}
                <span className="text-muted-foreground">{s.eligibility}</span>
              </div>
              <Link to="/contact" className="mt-6 inline-flex rounded-full bg-[var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground">
                Enquire about {s.title}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
