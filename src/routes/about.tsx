import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import teamImg from "@/assets/team.jpg";
import { Heart, Compass, Sparkles, Users, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Support To Able | Queensland NDIS Provider" },
      { name: "description", content: "Learn about Support To Able — our mission, vision and values. A proudly Queensland-based NDIS provider empowering independence." },
      { property: "og:title", content: "About Support To Able" },
      { property: "og:description", content: "A proudly Queensland-based NDIS provider empowering independence." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Respect", desc: "We honour every person's dignity, voice and lived experience." },
  { icon: Compass, title: "Choice", desc: "You drive the decisions. We provide options and information." },
  { icon: Sparkles, title: "Independence", desc: "Every support we deliver builds capability and confidence." },
  { icon: Users, title: "Inclusion", desc: "Belonging matters. We help connect people to community." },
  { icon: ShieldCheck, title: "Integrity", desc: "We do what we say, transparently and consistently." },
];


function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About Us" title="People-first NDIS support, made in Queensland" subtitle="We exist to empower people living with disability to achieve their goals, build independence and live life on their own terms." />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <img src={teamImg} alt="The Support To Able team" width={1400} height={900} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card" />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Support To Able was founded by Queensland locals who saw a gap between what the NDIS promised and what participants were actually receiving. We set out to build a provider that puts participants first — flexible, reliable, and grounded in genuine care. From a small team in Brisbane, we now support hundreds of Queenslanders across the South East to live the lives they choose.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground">To empower people living with disability to achieve their goals, build independence, participate in their communities, and live life on their own terms.</p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold">Our Vision</h3>
            <p className="mt-3 text-muted-foreground">A Queensland where every person — regardless of ability — has the support, opportunity and respect to thrive.</p>
          </div>
        </div>
      </section>

      <section className="bg-primary-soft/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Values</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">What guides everything we do</h2>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => (
              <li key={v.title} className="rounded-3xl bg-background p-6 text-center shadow-soft">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary"><v.icon className="h-6 w-6" /></span>
                <h3 className="mt-4 font-display text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-primary-soft/40 p-10 text-center shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Team</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">A dedicated Queensland team</h2>
          <p className="mt-4 text-muted-foreground">
            Our team brings together support workers, coordinators and allied professionals
            with lived experience and deep local knowledge. Every team member is carefully
            screened, NDIS Worker Screened, and trained to deliver person-centred support
            with respect, reliability and genuine care.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
