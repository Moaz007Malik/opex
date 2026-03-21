import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";

const productLinks = [
  { to: "/exec-app", label: "Exec App" },
  { to: "/kpis", label: "KPIs & Dashboards" },
  { to: "/how-it-works", label: "How It Works" },
];

const resourceLinks = [
  { to: "/resources", label: "Resources" },
  { to: "/use-cases", label: "Use Cases" },
];

function DesktopNavLink({ to, children }) {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link
      to={to}
      className={`font-medium text-[15px] transition-colors ${
        active ? "text-accent" : "text-text-primary hover:text-accent"
      }`}
    >
      {children}
    </Link>
  );
}

function DesktopDropdown({ label, links, open, onToggle }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => onToggle(true)}
      onMouseLeave={() => onToggle(false)}
    >
      <button
        type="button"
        onClick={() => onToggle(!open)}
        className="font-medium text-[15px] text-text-primary hover:text-accent transition-colors flex items-center gap-1"
      >
        {label}

        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 py-2 w-56 bg-card-bg border border-border rounded-xl shadow-lg z-50">

          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="block px-4 py-2 text-sm text-text-primary hover:text-accent hover:bg-background/80 transition-colors"
            >
              {label}
            </Link>
          ))}

        </div>
      )}
    </div>
  );
}

function MobileLink({ to, children, onNavigate }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className={`flex items-center justify-between rounded-lg px-3 py-2 text-[15px] transition-colors ${
        active
          ? "bg-accent/12 text-accent"
          : "text-text-primary hover:text-accent hover:bg-background/60"
      }`}
    >
      <span className="font-medium">{children}</span>
      <span className={`text-xs ${active ? "text-accent" : "text-text-primary"}`}>
        {active ? "Current" : ""}
      </span>
    </Link>
  );
}

function MobileAccordion({ title, children, open, onToggle }) {
  return (
    <div className="border border-border rounded-xl bg-background/40 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
        aria-expanded={open}
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-text-primary">
          {title}
        </span>
        <svg
          className={`w-5 h-5 text-text-secondary transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="px-2 pb-3">{children}</div>}
    </div>
  );
}

export function Header() {
  const [productOpen, setProductOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(true);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40">

      {/* Important: keep backdrop-blur off the <header> itself.
          Some mobile browsers treat backdrop-filter ancestors as a containing block for fixed children,
          which can cause the mobile menu drawer to only cover the header area. */}
      <div className="bg-background border-b border-border">
        {bannerVisible && (
          <div className="bg-secondary/30 border-b border-border/40">
            <div className="max-w-[1400px] mx-auto px-6 py-2 flex items-center justify-between gap-4 text-xs sm:text-sm text-text-primary">
              <p>
                Pre-launch early access: 50 credits for £50 + 25 free credits at launch (subject to final terms). No payment taken today.
              </p>
              <button
                type="button"
                onClick={() => setBannerVisible(false)}
                aria-label="Dismiss early-access banner"
                className="shrink-0 text-text-secondary hover:text-text-primary"
              >
                X
              </button>
            </div>
          </div>
        )}

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
      
          <Link to="/" className="flex items-center gap-3" aria-label="OpEx6 home">
            <img
              src="/images/icon.png"
              alt="OpEx6 logo"
              className="h-12 w-auto"
            />
            <span className="text-sm sm:text-base uppercase font-semibold text-text-primary tracking-wide">
              OpEx6
            </span>
          </Link>

          {/* Desktop header */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">

            <DesktopDropdown
              label="Product"
              links={productLinks}
              open={productOpen}
              onToggle={setProductOpen}
            />

            <DesktopNavLink to="/pricing">Pricing</DesktopNavLink>

            <DesktopDropdown
              label="Resources"
              links={resourceLinks}
              open={resourceOpen}
              onToggle={setResourceOpen}
            />

            <DesktopNavLink to="/about">About</DesktopNavLink>
            <DesktopNavLink to="/support">Support</DesktopNavLink>

            </nav>

            <Button to="/register-interest">Register Interest</Button>
          </div>

          {/* Mobile header */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg border border-border bg-card-bg text-text-secondary hover:text-text-primary hover:border-accent/50 transition"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Button
              to="/register-interest"
              className="py-2 text-xs"
            >
              Register Interest
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-background/65 backdrop-blur"
            aria-label="Close menu overlay"
          />

          <div className="absolute right-0 top-0 h-full w-[92vw] max-w-[420px] bg-background border-l border-border shadow-2xl">
            <div className="h-16 px-4 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2"
                aria-label="OpEx6 home"
              >
                <img src="/images/icon.png" alt="OpEx6 logo" className="h-7 w-auto" />
                <span className="text-sm uppercase font-semibold text-text-primary tracking-wide">OpEx6</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg border border-border bg-card-bg text-text-secondary hover:text-text-primary hover:border-accent/50 transition"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-4rem)]">
              <div className="rounded-2xl border border-border bg-card-bg p-4">
                <p className="text-sm font-semibold text-text-primary mb-1">Explore the framework</p>
                <p className="text-xs text-text-secondary mb-3">
                  Navigate by category, KPIs, and use cases — designed to support future “select your focus areas”
                  journeys.
                </p>
                <Button to="/register-interest" className="w-full justify-center" onClick={() => setMobileOpen(false)}>
                  Register Interest
                </Button>
              </div>

              <MobileAccordion
                title="Product"
                open={mobileProductOpen}
                onToggle={() => setMobileProductOpen((v) => !v)}
              >
                <div className="space-y-1">
                  {productLinks.map(({ to, label }) => (
                    <MobileLink key={to} to={to} onNavigate={() => setMobileOpen(false)}>
                      {label}
                    </MobileLink>
                  ))}
                </div>
              </MobileAccordion>

              <div className="space-y-1">
                <MobileLink to="/pricing" onNavigate={() => setMobileOpen(false)}>
                  Pricing
                </MobileLink>
              </div>

              <MobileAccordion
                title="Resources"
                open={mobileResourcesOpen}
                onToggle={() => setMobileResourcesOpen((v) => !v)}
              >
                <div className="space-y-1">
                  {resourceLinks.map(({ to, label }) => (
                    <MobileLink key={to} to={to} onNavigate={() => setMobileOpen(false)}>
                      {label}
                    </MobileLink>
                  ))}
                </div>
              </MobileAccordion>

              <div className="space-y-1">
                <MobileLink to="/about" onNavigate={() => setMobileOpen(false)}>
                  About
                </MobileLink>
                <MobileLink to="/support" onNavigate={() => setMobileOpen(false)}>
                  Support
                </MobileLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}