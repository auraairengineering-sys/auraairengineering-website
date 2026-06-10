import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { solutions } from "@/lib/content";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.8c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 3.06a5.02 5.02 0 1 1 0 10.04 5.02 5.02 0 0 1 0-10.04Zm0 8.28a3.26 3.26 0 1 0 0-6.52 3.26 3.26 0 0 0 0 6.52Zm6.4-8.48a1.17 1.17 0 1 1-2.34 0 1.17 1.17 0 0 1 2.34 0Z" />
    </svg>
  );
}
function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 6.5a3.02 3.02 0 0 0-2.12-2.14C19.5 3.86 12 3.86 12 3.86s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.5C0 8.38 0 12 0 12s0 3.62.5 5.5a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.62 24 12 24 12s0-3.62-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "Projects & Case Studies", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-surface">
      <div className="grid-texture">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            <div>
              <Logo variant="light" />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-surface/70">
                Aura Air Engineering &amp; Misting Systems is an advanced engineering company
                specializing in customized climate control, high-pressure misting, and air
                management solutions — delivering precision-driven systems for efficiency,
                reliability, and global industrial applications.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  { Icon: FacebookIcon, href: site.social.facebook, label: "Facebook" },
                  { Icon: InstagramIcon, href: site.social.instagram, label: "Instagram" },
                  { Icon: YoutubeIcon, href: site.social.youtube, label: "YouTube" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-surface/20 text-surface/80 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Quick Links
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-surface/75 transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Solutions
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm">
                {solutions.slice(0, 7).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/solutions/${s.slug}`}
                      className="text-surface/75 transition-colors hover:text-accent"
                    >
                      {s.short}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</h3>
              <ul className="mt-5 space-y-3.5 text-sm text-surface/75">
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="flex flex-col">
                    <a href={`tel:${site.phones.usaHref}`} className="hover:text-accent">
                      {site.phones.usa} (USA)
                    </a>
                    <a href={`tel:${site.phones.indiaHref}`} className="hover:text-accent">
                      {site.phones.india} (India)
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a href={`mailto:${site.email}`} className="break-all hover:text-accent">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>Global delivery — India HQ &amp; USA presence</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-surface/15 pt-7 text-xs text-surface/60 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent">
                Terms &amp; Conditions
              </Link>
              <Link href="/contact" className="hover:text-accent">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
