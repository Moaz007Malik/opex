import { Link } from 'react-router-dom';

const productLinks = [
  { to: '/exec-app', label: 'Exec App' },
  { to: '/kpis-dashboards', label: 'KPIs & Dashboards' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/pricing', label: 'Pricing' },
];

const companyLinks = [
  { to: '/about', label: 'About' },
  { to: '/use-cases', label: 'Use Cases' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

const legalLinks = [
  { to: '/support', label: 'Support' },
  { to: '/faq', label: 'FAQ' },
  { to: '/privacy-notice', label: 'Privacy Notice' },
  { to: '/cookie-notice', label: 'Cookie Notice' },
  { to: '/terms-of-use', label: 'Terms of Use' },
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-semibold text-text-primary mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} className="text-text-secondary hover:text-accent transition-colors text-sm">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Link to="/" className="text-xl font-bold text-text-primary block mb-3">OpEx6</Link>
            <p className="text-sm text-text-secondary max-w-xs">
              Operational Intelligence That Executives Actually Use.
            </p>
            <p className="text-sm text-text-secondary mt-6">© 2025 OpEx6 Ltd.</p>
          </div>
          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal & Support" links={legalLinks} />
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-text-secondary text-center sm:text-left">
          <span>© 2025 OpEx6 Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy-notice" className="hover:text-accent">Privacy Notice</Link>
            <Link to="/cookie-notice" className="hover:text-accent">Cookie Notice</Link>
            <Link to="/terms-of-use" className="hover:text-accent">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
