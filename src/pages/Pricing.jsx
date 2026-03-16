import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const PRICING_CARDS = [
  {
    id: 'register',
    badge: { text: 'Early Access Offer', variant: 'amber' },
    headline: 'Register Interest',
    priceDisplay: 'Early launch offer — details confirmed at launch',
    subline: 'Register now to secure eligibility',
    description: 'Register your interest now to secure your place on the early access list. Early registrants will be eligible for our introductory launch offer — 100 credits for £50 — when the Exec App opens to users. Subject to final launch terms.',
    inclusions: [
      '100 platform credits',
      'Access to all KPI categories',
      'All 15 dashboard modules',
      'Export and reporting tools',
      'Early access status',
    ],
    cta: 'Register My Interest',
    ctaTo: '/register-interest',
    noteBelowCta: 'This is a pre-launch registration. No payment is taken now. Full offer terms will be communicated ahead of launch.',
    highlighted: false,
  },
  {
    id: 'payg',
    badge: { text: 'Coming at Launch', variant: 'accent' },
    headline: 'PAYG',
    priceDisplay: 'Credit-based — pricing confirmed at launch',
    subline: 'Flexible usage, no long-term commitment',
    description: 'The PAYG tier is designed for organisations that want flexible access without a fixed contract. Buy credits as you need them and use the platform on your schedule. Pricing will be published at launch.',
    inclusions: [
      'Credits purchased as needed',
      'No minimum contract requirement',
      'Access to KPI categories and dashboards',
      'Standard reporting and export tools',
    ],
    cta: 'Register Interest to Be Notified at Launch',
    ctaTo: '/register-interest',
    noteBelowCta: null,
    highlighted: true,
  },
  {
    id: 'enterprise',
    badge: { text: 'Custom', variant: 'accent' },
    headline: 'Enterprise',
    priceDisplay: "Let's talk",
    subline: 'Volume pricing and dedicated support for multi-site operations',
    description: 'Built for larger manufacturing organisations with multi-site operations, complex data environments, and enterprise requirements. Custom credit arrangements and dedicated implementation support. Contact us to discuss your requirements.',
    inclusions: [
      'Volume credit arrangements',
      'Multi-site deployment support',
      'Dedicated implementation guidance',
      'Custom integration scoping',
      'Priority support',
      'Account management',
    ],
    cta: 'Get in Touch',
    ctaTo: '/contact',
    noteBelowCta: null,
    highlighted: false,
  },
];

const PRICING_FAQ = [
  {
    q: 'What is a credit?',
    a: 'A credit is the unit of usage within the Exec App. Credits are consumed as you use dashboards, run reports, and connect data sources. The full credit rate card will be published at launch.',
  },
  {
    q: 'Is the 100 credits for £50 offer available now?',
    a: 'This offer will be available to early registrants when the Exec App opens. We are collecting interest now — no payment is taken at this stage. Register to secure your eligibility.',
  },
  {
    q: 'Can I try the platform before committing?',
    a: 'Details of early access and any introductory access options will be shared with registered users ahead of launch. Register your interest to stay informed.',
  },
  {
    q: 'Is enterprise pricing available?',
    a: 'Yes. Organisations with multi-site or complex requirements can discuss custom credit arrangements and dedicated support. Contact us at sales@opex6.com.',
  },
];

export function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing — OpEx6 | Straightforward. Transparent. Structured for scale.</title>
        <meta name="description" content="The Exec App uses a credit-based commercial model. Early registrants can secure a pre-launch offer. Full pricing at launch." />
      </Helmet>

      {/* Section 5.1 — Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-2">Pricing</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Straightforward. Transparent. Structured for scale.
          </h1>
          <p className="text-lg text-text-secondary">
            The Exec App uses a credit-based commercial model. Credits support your dashboard usage, reporting, and data connections. Full pricing details will be published at launch — but early registrants can secure a pre-launch offer.
          </p>
        </div>
      </section>

      {/* Section 5.2 — Three Pricing Cards */}
      <Section className="bg-secondary/50">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {PRICING_CARDS.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col ${plan.highlighted ? 'md:-mt-2 md:mb-2 border-accent ring-1 ring-accent/30 shadow-lg shadow-accent/10' : ''}`}
            >
              <span
                className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-4 ${
                  plan.badge.variant === 'amber' ? 'bg-highlight/20 text-highlight' : 'bg-accent/20 text-accent'
                }`}
              >
                {plan.badge.text}
              </span>
              <h2 className="text-xl font-bold text-text-primary mb-1">{plan.headline}</h2>
              <p className="text-text-primary font-semibold mb-0.5">{plan.priceDisplay}</p>
              <p className="text-text-secondary text-sm mb-4">{plan.subline}</p>
              <p className="text-text-secondary text-sm mb-6 flex-1">{plan.description}</p>
              <ul className="space-y-2 mb-6">
                {plan.inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-success shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button to={plan.ctaTo} className="w-full justify-center">
                {plan.cta}
              </Button>
              {plan.noteBelowCta && (
                <p className="text-text-secondary text-xs mt-4 text-center">{plan.noteBelowCta}</p>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Section 5.3 — Pricing FAQ Strip */}
      <Section>
        <h2 className="text-2xl font-bold text-text-primary mb-8">Pricing FAQ</h2>
        <div className="space-y-6 max-w-3xl">
          {PRICING_FAQ.map((faq, i) => (
            <div key={i}>
              <h3 className="font-semibold text-text-primary mb-1">{faq.q}</h3>
              <p className="text-text-secondary text-sm">
                {faq.a.includes('sales@opex6.com') ? (
                  <>
                    Yes. Organisations with multi-site or complex requirements can discuss custom credit arrangements and dedicated support.{' '}
                    <a href="mailto:sales@opex6.com" className="text-accent hover:underline">Contact us at sales@opex6.com</a>.
                  </>
                ) : (
                  faq.a
                )}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
