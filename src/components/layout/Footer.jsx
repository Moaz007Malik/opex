import { Link } from 'react-router-dom';
import { KPI_FRAMEWORK } from '../../config/siteCopy.js';

const productLinks = [
  { to: '/exec-app', label: 'Exec App' },
  { to: '/kpis', label: 'KPIs & Dashboards' },
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
  { to: '/privacy', label: 'Privacy Notice' },
  { to: '/cookies', label: 'Cookie Notice' },
  { to: '/terms', label: 'Terms of Use' },
];

function FooterColumn({ title, links }) {
  return (
    <div>

      <h3 className="font-semibold text-text-primary mb-4">
        {title}
      </h3>

      <ul className="space-y-2">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className="text-text-secondary hover:text-accent transition-colors text-sm"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div>
          
            <Link
              to="/"
              className="inline-flex items-center gap-2 mb-3"
              aria-label="OpEx6 home"
            >
              <img
                src="/images/LogoNoBG.png"
                alt="OpEx6 logo"
                className="h-12 w-auto"
              />
            </Link>

            <p className="text-sm text-text-secondary max-w-xs">
              OpEx6 Operational Intelligence That Executives Actually Use.
            </p>
            <p className="text-sm text-text-secondary max-w-xs mt-2">
              Being built around {KPI_FRAMEWORK.MANUFACTURING_KPI_LINE} — structured
              for plant, multi-site, and board reviews.
            </p>

            <div className="text-[11px] text-text-secondary mt-6 space-y-1">

              <p className="font-medium text-text-primary">
                OpEx6 Technologies Ltd
              </p>

              <p>
                Registered in England and Wales | Company No. [company number]
              </p>

              <p>
                Registered office: [registered office address]
              </p>

              <p>
                Contact:{' '}
                <a
                  href="mailto:[email]"
                  className="hover:text-accent"
                >
                  [email]
                </a>
              </p>

            </div>

          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal & Support" links={legalLinks} />

        </div>


        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-text-secondary text-center sm:text-left">

          <span>
            © {year} OpEx6 Technologies Ltd. All rights reserved.
          </span>

          <div className="flex gap-6">

            <Link to="/privacy" className="hover:text-accent">
              Privacy Notice
            </Link>

            <Link to="/cookies" className="hover:text-accent">
              Cookie Notice
            </Link>

            <Link to="/terms" className="hover:text-accent">
              Terms of Use
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}