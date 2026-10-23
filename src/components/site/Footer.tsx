import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary-soft/50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block" aria-label="Support To Able home">
              <img src={logo} alt="Support To Able" width={1536} height={1024} loading="lazy" className="h-14 w-auto" />
            </Link>

            <p className="mt-4 text-sm text-muted-foreground">
              Empowering Independence. Supporting Ability. NDIS support provider serving South East Queensland.
            </p>
            <div className="mt-5 flex gap-2">
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-background text-primary hover:bg-primary hover:text-primary-foreground"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-background text-primary hover:bg-primary hover:text-primary-foreground"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full bg-background text-primary hover:bg-primary hover:text-primary-foreground"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/ndis" className="hover:text-primary">NDIS Support</Link></li>
              <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link to="/referral" className="hover:text-primary">Make a Referral</Link></li>
              <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Our Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary">Personal Care</Link></li>
              <li><Link to="/services" className="hover:text-primary">Community Access</Link></li>
              <li><Link to="/services" className="hover:text-primary">Daily Living</Link></li>
              <li><Link to="/services" className="hover:text-primary">Support Coordination</Link></li>
              <li><Link to="/services" className="hover:text-primary">Respite Support</Link></li>
              <li><Link to="/services" className="hover:text-primary">Transport</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Get In Touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href="mailto:Supporttoable@gmail.com" className="hover:text-primary">Supporttoable@gmail.com</a></li>
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>Brisbane • Ipswich • Logan • Redland • Moreton Bay • Gold Coast</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-background p-6">
          <h3 className="text-sm font-semibold text-foreground">Acknowledgement of Country</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Support To Able acknowledges the Traditional Custodians of the lands on which we work and live throughout Queensland and pays respect to Elders past and present.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Support To Able. All rights reserved.</p>
          <p>ABN 91 207 146 339</p>
        </div>
      </div>
    </footer>
  );
}
