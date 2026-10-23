import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/hero.jpg";
import careImg from "@/assets/care.jpg";
import communityImg from "@/assets/community.jpg";
import {
  HeartHandshake, Users, Home as HomeIcon, Car, Sparkles, Compass,
  Coffee, Brain, Mail, MessageSquare, ClipboardList, Rocket,
  ShieldCheck, MapPin, Zap, BadgeCheck,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Support To Able | NDIS Support Across South East Queensland" },
      { name: "description", content: "Personalised NDIS supports across South East Queensland. Personal care, community access, support coordination and more. Get started today." },
      { property: "og:title", content: "Support To Able | NDIS Provider South East QLD" },
      { property: "og:description", content: "Personalised NDIS supports that help you achieve your goals, build independence and stay connected." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: HeartHandshake, title: "Personal Care", desc: "Respectful daily assistance with hygiene, dressing and personal routines.", slug: "personal-care" },
  { icon: Users, title: "Community Participation", desc: "Be part of your community through social, recreational and group activities.", slug: "community-access" },
  { icon: HomeIcon, title: "Daily Living Support", desc: "Practical help so you can live independently and confidently at home.", slug: "daily-living" },
  { icon: Sparkles, title: "Household Tasks", desc: "Cleaning, laundry, meal prep and home maintenance done together.", slug: "household-tasks" },
  { icon: Car, title: "Transport Assistance", desc: "Safe, reliable transport to appointments, work, study and social outings.", slug: "transport" },
  { icon: Compass, title: "Support Coordination", desc: "Make the most of your plan with expert guidance every step of the way.", slug: "support-coordination" },
  { icon: Coffee, title: "Respite Support", desc: "Short-term care that gives families and carers a well-deserved break.", slug: "respite" },
  { icon: Brain, title: "Capacity Building", desc: "Develop new skills to grow your independence and reach your goals.", slug: "life-skills-development" },
];

const reasons = [
  { icon: HeartHandshake, title: "Person-Centred Support", desc: "We take time to understand what matters to you and how you want to be supported." },
  { icon: Users, title: "Culturally Inclusive Care", desc: "We celebrate every culture, language and background — including First Nations, CALD and LGBTQIA+ communities." },
  { icon: BadgeCheck, title: "Qualified Support Workers", desc: "Trained, screened and matched to suit your needs and personality." },
  { icon: Zap, title: "Flexible Services", desc: "Support that fits your lifestyle and adapts as your needs change." },
  { icon: MapPin, title: "Local Queensland Team", desc: "Supporting communities across Brisbane, Ipswich, Logan, Redland, Moreton Bay and the Gold Coast." },
  { icon: ShieldCheck, title: "NDIS Focused", desc: "We know the scheme inside out and help you make the most of it." },
  { icon: MessageSquare, title: "Reliable & Responsive", desc: "Speak with our team about your support needs and the next steps." },
];

const steps = [
  { icon: Mail, title: "Contact Us", desc: "Reach out by email or our online form. We'll listen first." },
  { icon: MessageSquare, title: "Discuss Your Goals", desc: "A friendly conversation about what matters to you and your plan." },
  { icon: ClipboardList, title: "Build Your Support Plan", desc: "We co-design supports tailored to your needs, lifestyle and budget." },
  { icon: Rocket, title: "Begin Services", desc: "Your matched support worker starts — and we stay close to keep things right." },
];


const faqs = [
  { q: "What is the NDIS?", a: "The National Disability Insurance Scheme funds reasonable and necessary supports for Australians under 65 living with a permanent and significant disability." },
  { q: "Am I eligible for NDIS funding?", a: "Generally you must be under 65, an Australian citizen or permanent resident, and have a permanent disability that significantly affects daily life." },
  { q: "How do I access supports through Support To Able?", a: "Simply contact our friendly intake team. We'll meet with you, discuss your goals and start matching you with the right supports." },
  { q: "Are you a registered NDIS provider?", a: "Support To Able is a new NDIS provider operating across South East Queensland. We currently support Self-Managed and Plan-Managed participants while we progress through the NDIS Commission registration process." },
  { q: "What areas do you service?", a: "We deliver supports across Brisbane, Ipswich, Logan, Redland, Moreton Bay and the Gold Coast." },
  { q: "Can I choose my own support worker?", a: "Absolutely. We match based on personality, interests and needs — and you're always welcome to request a change." },
  { q: "How are services funded?", a: "Services are funded through your NDIS plan. We work with Self-Managed, Plan-Managed and NDIA-Managed participants." },
  { q: "Do you offer short-term or emergency support?", a: "Yes, we provide respite, short-term accommodation and rapid-response supports when needed." },
  { q: "Can my family or carer refer me?", a: "Of course. Anyone with consent can complete our online referral form and our team will reach out." },
  { q: "How quickly can support start?", a: "In most cases we can begin services within 7 days of your initial enquiry, often sooner for urgent needs." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
              <BadgeCheck className="h-3.5 w-3.5" /> NDIS Support Provider · South East QLD
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Supporting You To <span className="text-primary">Live Life</span> Your Way
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Personalised NDIS supports that help you achieve your goals, build independence and stay connected to your community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/referral" className="rounded-full border border-primary/30 bg-background px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft">
                Make a Referral
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 text-left">
              {[
                { k: "Person-Centred", v: "Care Built Around You" },
                { k: "Local", v: "South East QLD Team" },
                { k: "6 Regions", v: "Across South East Queensland" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl bg-background/70 p-4 backdrop-blur">
                  <dt className="font-display text-2xl font-bold text-primary">{s.k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-[var(--gradient-primary)] opacity-20 blur-2xl" />
            <img
              src={heroImg}
              alt="A multicultural group of NDIS participants and a support worker laughing together in a Queensland park"
              width={1600}
              height={1100}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Our Services" title="Supports that meet you where you are" subtitle="From everyday tasks to building lifelong skills, we offer a complete range of NDIS supports across South East Queensland." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              hash={s.slug}
              className="group block rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Learn more about ${s.title}`}
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-soft">
            View all services
          </Link>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-primary-soft/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img src={careImg} alt="Support worker helping a participant at home" width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card" />
            </div>
            <div>
              <SectionHeader align="left" eyebrow="Why Choose Us" title="A team that puts you first" subtitle="We're a proudly Queensland-based provider built around the people we support." />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {reasons.map((r) => (
                  <li key={r.title} className="flex gap-3 rounded-2xl bg-background p-4">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-foreground">
                      <r.icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground">{r.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="How It Works" title="Getting started is simple" subtitle="Four easy steps from your first call to support that fits your life." />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-3xl border border-border bg-card p-6">
              <span className="absolute -top-4 left-6 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] px-3 py-1 text-xs font-bold text-primary-foreground">Step {i + 1}</span>
              <span className="mt-4 grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft text-accent-foreground">
                <s.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>


      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Your NDIS questions, answered" />
        <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-semibold text-card-foreground">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-soft text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--gradient-primary)] p-10 text-primary-foreground sm:p-16">
          <div className="absolute inset-0 -z-0 opacity-20" style={{ backgroundImage: `url(${communityImg})`, backgroundSize: "cover", backgroundPosition: "center" }} aria-hidden />
          <div className="relative">
            <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl lg:text-5xl">Ready to start your journey?</h2>
            <p className="mt-4 max-w-xl text-primary-foreground/90">
              Our friendly intake team is here to help. Reach out today and let's build supports that empower you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary hover:bg-background/90">Get Started</Link>
              <Link to="/referral" className="rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">Make a Referral</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function SectionHeader({ eyebrow, title, subtitle, align = "center" }: { eyebrow?: string; title: string; subtitle?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}

export { SectionHeader };
