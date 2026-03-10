import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

const productLinks = [
  { to: '/exec-app', label: 'Exec App' },
  { to: '/kpis-dashboards', label: 'KPIs & Dashboards' },
  { to: '/how-it-works', label: 'How It Works' },
];

const resourceLinks = [
  { to: '/resources', label: 'Blog / Resources' },
  { to: '/use-cases', label: 'Use Cases' },
  { to: '/faq', label: 'FAQ' },
];

function NavLink({ to, children }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={`font-medium text-[15px] ${active ? 'text-accent' : 'text-text-primary hover:text-accent'} transition-colors`}
    >
      {children}
    </Link>
  );
}

function Dropdown({ label, links, open, onToggle }) {
  return (
    <div className="relative" onMouseEnter={() => onToggle(true)} onMouseLeave={() => onToggle(false)}>
      <button
        type="button"
        className="font-medium text-[15px] text-text-primary hover:text-accent transition-colors flex items-center gap-1"
      >
        {label}
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 py-2 w-48 bg-secondary border border-slate-700 rounded-lg shadow-xl z-50">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className="block px-4 py-2 text-sm text-text-secondary hover:text-accent hover:bg-slate-800 transition-colors">
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

  return (
    <header className="sticky top-0 z-40 bg-primary border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-18">
        <Link to="/" className="text-xl font-bold text-text-primary tracking-tight">
          OpEx6
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Dropdown label="Product" links={productLinks} open={productOpen} onToggle={setProductOpen} />
          <NavLink to="/pricing">Pricing</NavLink>
          <Dropdown label="Resources" links={resourceLinks} open={resourceOpen} onToggle={setResourceOpen} />
          <NavLink to="/about">About</NavLink>
          <NavLink to="/support">Support</NavLink>
          <Button to="/register-interest">Register Interest</Button>
        </nav>

        <div className="lg:hidden flex items-center gap-4">
          <Button to="/register-interest">Register Interest</Button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="p-2 text-text-primary hover:text-accent"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-primary lg:hidden">
          <div className="flex flex-col h-full pt-20 px-6 pb-8">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 p-2 text-text-primary hover:text-accent"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col gap-6 text-lg">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">Product</p>
                {productLinks.map(({ to, label }) => (
                  <Link key={to} to={to} onClick={() => setMobileOpen(false)} className="block py-2 text-text-primary hover:text-accent">
                    {label}
                  </Link>
                ))}
              </div>
              <Link to="/pricing" onClick={() => setMobileOpen(false)} className="block py-2 text-text-primary hover:text-accent">Pricing</Link>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">Resources</p>
                {resourceLinks.map(({ to, label }) => (
                  <Link key={to} to={to} onClick={() => setMobileOpen(false)} className="block py-2 text-text-primary hover:text-accent">
                    {label}
                  </Link>
                ))}
              </div>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-2 text-text-primary hover:text-accent">About</Link>
              <Link to="/support" onClick={() => setMobileOpen(false)} className="block py-2 text-text-primary hover:text-accent">Support</Link>
              <Button to="/register-interest" className="w-full justify-center mt-4">Register Interest</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
