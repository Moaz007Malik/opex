import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";

const productLinks = [
  { to: "/exec-app", label: "Exec App" },
  { to: "/kpis", label: "KPIs & Dashboards" },
  { to: "/how-it-works", label: "How It Works" },
];

const resourceLinks = [
  { to: "/resources", label: "Blog / Resources" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/faq", label: "FAQ" },
];

function NavLink({ to, children }) {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link
      to={to}
      className={`font-medium text-[15px] transition-colors ${
        active ? "text-accent" : "text-black hover:text-accent"
      }`}
    >
      {children}
    </Link>
  );
}

function Dropdown({ label, links, open, onToggle }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => onToggle(true)}
      onMouseLeave={() => onToggle(false)}
    >
      <button
        type="button"
        className="font-medium text-[15px] text-black hover:text-accent transition-colors flex items-center gap-1"
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
        <div className="absolute top-full left-0 mt-2 py-2 w-52 bg-white border border-black/10 rounded-xl shadow-lg z-50">

          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="block px-4 py-2 text-sm text-black/70 hover:text-accent hover:bg-gray-50 transition-colors"
            >
              {label}
            </Link>
          ))}

        </div>
      )}
    </div>
  );
}

export function Header() {
  const [productOpen, setProductOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-black/10">

      {bannerVisible && (
        <div className="bg-blue-50 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4 text-xs sm:text-sm">
            <p className="text-black/80">
              Pre-launch early access: 50 credits for £50 + 25 free credits at launch (subject to final terms). No payment taken today.
            </p>
            <button
              type="button"
              onClick={() => setBannerVisible(false)}
              aria-label="Dismiss early-access banner"
              className="shrink-0 text-black/50 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
      
        <Link to="/" className="flex items-center gap-2" aria-label="OpEx6 home">
          <img
            src="/images/icon.png"
            alt="OpEx6 logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">

          <Dropdown
            label="Product"
            links={productLinks}
            open={productOpen}
            onToggle={setProductOpen}
          />

          <NavLink to="/pricing">Pricing</NavLink>

          <Dropdown
            label="Resources"
            links={resourceLinks}
            open={resourceOpen}
            onToggle={setResourceOpen}
          />

          <NavLink to="/about">About</NavLink>

          <NavLink to="/support">Support</NavLink>

          <Button to="/register-interest">
            Register Interest
          </Button>

        </nav>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-4">

          <Button to="/register-interest">
            Register Interest
          </Button>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="p-2 text-black hover:text-accent"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">

          <div className="flex flex-col h-full pt-20 px-6 pb-8">

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 p-2 text-black hover:text-accent"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col gap-6 text-lg">

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                  Product
                </p>

                {productLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-black hover:text-accent"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <Link to="/pricing" onClick={() => setMobileOpen(false)} className="block py-2 text-black hover:text-accent">
                Pricing
              </Link>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                  Resources
                </p>

                {resourceLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-black hover:text-accent"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-2 text-black hover:text-accent">
                About
              </Link>

              <Link to="/support" onClick={() => setMobileOpen(false)} className="block py-2 text-black hover:text-accent">
                Support
              </Link>

              <Button to="/register-interest" className="w-full justify-center mt-4">
                Register Interest
              </Button>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}