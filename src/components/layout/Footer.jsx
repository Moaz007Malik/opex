import { Link } from 'react-router-dom';

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
];

const legalLinks = [
  { to: '/support', label: 'Support' },
  { to: '/faq', label: 'FAQ' },
  { to: '/privacy', label: 'Privacy Notice' },
  { to: '/cookies', label: 'Cookie Policy' },
  { to: '/terms', label: 'Terms of Use' },
];

function FooterColumn({ title, links }) {
  return (
    <div>

      <h3 className="font-semibold text-black mb-4">
        {title}
      </h3>

      <ul className="space-y-2">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className="text-black/70 hover:text-accent transition-colors text-sm"
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
  return (
    <footer className="bg-white border-t border-black/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div>

            <Link
              to="/"
              className="text-xl font-bold text-black block mb-3"
            >
              OpEx6
            </Link>

            <p className="text-sm text-black/70 max-w-xs">
              Operational Intelligence That Executives Actually Use.
            </p>

            <div className="text-[11px] text-black/60 mt-6 space-y-1">

              <p className="font-medium text-black">
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
        <div className="mt-12 pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-black/60 text-center sm:text-left">

          <span>
            © 2025 OpEx6 Technologies Ltd. All rights reserved.
          </span>

          <div className="flex gap-6">

            <Link to="/privacy" className="hover:text-accent">
              Privacy Notice
            </Link>

            <Link to="/cookies" className="hover:text-accent">
              Cookie Policy
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