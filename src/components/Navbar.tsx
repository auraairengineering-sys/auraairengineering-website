"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { mainNav, site } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-primary-700 text-surface/85 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-1.5 text-xs">
          <span className="tracking-wide">Engineered microclimate solutions — delivered worldwide</span>
          <div className="flex items-center gap-5">
            <a href={`tel:${site.phones.indiaHref}`} className="inline-flex items-center gap-1.5 hover:text-accent">
              <Phone className="h-3 w-3" /> India {site.phones.india}
            </a>
            <a href={`tel:${site.phones.usaHref}`} className="inline-flex items-center gap-1.5 hover:text-accent">
              <Phone className="h-3 w-3" /> USA {site.phones.usa}
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent"
            >
              <MessageCircle className="h-3 w-3" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-line/70 bg-canvas/95 backdrop-blur supports-[backdrop-filter]:bg-canvas/80"
            : "border-transparent bg-canvas"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href) ? "text-secondary" : "text-ink hover:text-secondary"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full w-72 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mt-1 overflow-hidden rounded-xl border border-line/70 bg-white p-2 shadow-lift">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-ink transition-colors hover:bg-canvas hover:text-secondary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-secondary" : "text-ink hover:text-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact#quote"
              className="hidden rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-600 hover:shadow-lift sm:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-primary lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-line/70 bg-canvas lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.href} className="border-b border-line/50 py-1">
                  <button
                    type="button"
                    onClick={() => setMobileSolutions((v) => !v)}
                    className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-ink"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileSolutions ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileSolutions && (
                    <div className="flex flex-col pb-2 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2 text-sm text-ink-soft hover:text-secondary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-line/50 py-3 text-sm font-medium text-ink hover:text-secondary"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact#quote"
              className="mt-4 rounded-md bg-accent px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
