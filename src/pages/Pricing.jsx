import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { RegisterInterestCTA } from '../components/RegisterInterestCTA';

const PRICING_CARDS = [
  {
    id: 'register',
    badge: { text: 'Early Access Offer', variant: 'amber' },
    headline: 'Register Interest',
    priceDisplay: 'Pre-launch early-access offer',
    subline: 'Register now to secure eligibility',
    description: 'Register your interest now to secure your place on the early-access list. Early registrants will be eligible for our pre-launch offer — £50 for 50 credits + 25 free credits — when the Exec App opens to early users. Subject to final launch terms.',
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
    priceDisplay: 'Credit-based — indicative only',
    subline: 'Planned flexible usage, no long-term commitment',
    description: 'The PAYG tier is being designed for organisations that want flexible access without a fixed contract. Credits would be purchased as needed and used on your schedule. Indicative only — final commercial terms will be confirmed at launch.',
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
    priceDisplay: 'Custom — to be agreed',
    subline: 'Volume pricing and dedicated support for multi-site operations',
    description: 'Built for larger manufacturing organisations with multi-site operations, complex data environments, and enterprise requirements. Expected to include custom credit arrangements and dedicated implementation support. Contact us to discuss your requirements ahead of launch.',
    inclusions: [
      'Volume credit arrangements',
      'Multi-site deployment support',
      'Dedicated implementation guidance',
      'Custom integration scoping',
      'Priority support',
      'Account management',
    ],
    cta: 'Register Interest to Discuss Enterprise Needs',
    ctaTo: '/register-interest',
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
    <meta
      name="description"
      content="The Exec App uses a credit-based commercial model. Early registrants can secure a pre-launch offer. Full pricing at launch."
    />
  </Helmet>


  {/* HERO */}
  <motion.section
  className="py-28 border-b border-border bg-background"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px 0px' }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="max-w-4xl mx-auto px-6 text-center">

      <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
        Pricing
      </p>

      <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
        Straightforward. Transparent. Structured for scale.
      </h1>

      <p className="text-lg text-text-secondary mb-6">
        The Exec App is planned to use a credit-based commercial model. Credits
        support dashboard usage, reporting, and data connections.
      </p>

      <p className="text-sm text-text-secondary">
        Pricing shown is indicative for pre-launch purposes and may change.
        Final commercial terms will be confirmed at launch.
      </p>

    </div>
  </motion.section>


  {/* EARLY-ACCESS OFFER EXPLAINER */}
  <Section>
    <div className="max-w-4xl mx-auto">
      <div className="bg-secondary border border-accent/40 rounded-2xl p-6 sm:p-8 text-left shadow-sm">
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          Pre-launch early-access offer
        </h2>
        <p className="text-text-secondary mb-3">
          Register interest now to secure eligibility for our introductory offer — 50 credits for £50 + 25 free credits at launch.
          This is designed to give early users a meaningful period to evaluate the Exec App before standard pricing applies.
        </p>
        <p className="text-xs text-text-secondary mb-4">
          This is a pre-launch expression of interest only. No payment is taken at this stage.
          Full commercial terms will be shared and agreed ahead of any commitment.
        </p>
        <Button to="/register-interest">
          Register interest for early access
        </Button>
      </div>
    </div>
  </Section>


  {/* HOW CREDITS WORK */}
  <Section>
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-text-primary mb-3">
        What is a credit and how does it work?
      </h2>
      <p className="text-text-secondary mb-3">
        In the Exec App, a credit is the basic unit of usage. Credits are consumed as your organisation uses dashboards,
        refreshes data, and runs reports. The exact rate card will be published at launch, but the intent is that credits scale
        with how many sites, users, and dashboards you are actively running — not just how many accounts you have created.
      </p>
      <p className="text-text-secondary mb-3">
        As an illustrative guide, a smaller manufacturing site using a focused KPI set for leadership and plant reviews would
        typically consume fewer credits than a multi-site group running broader dashboards and more frequent refreshes.
        Final thresholds and tiers will be confirmed as part of launch.
      </p>
      <p className="text-xs text-text-secondary">
        All examples on this page are indicative and may change before general release.
      </p>
    </div>
  </Section>



  {/* PRICING CARDS */}
  <Section>

    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

      {PRICING_CARDS.map(plan => (

        <Card
          key={plan.id}
          className={`flex flex-col border rounded-xl p-6
          ${
            plan.highlighted
              ? 'border-accent shadow-lg scale-[1.03]'
              : 'border-border'
          }`}
        >

          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4
            ${
              plan.badge.variant === 'amber'
                ? 'bg-highlight text-background'
                : 'bg-accent/20 text-accent'
            }`}
          >
            {plan.badge.text}
          </span>


          <h2 className="text-xl font-bold text-text-primary mb-1">
            {plan.headline}
          </h2>

          <p className="font-semibold text-text-primary mb-1">
            {plan.priceDisplay}
          </p>

          <p className="text-sm text-text-secondary mb-4">
            {plan.subline}
          </p>


          <p className="text-sm text-text-secondary mb-6 flex-1">
            {plan.description}
          </p>


          {/* FEATURES */}
          <ul className="space-y-2 mb-6">

            {plan.inclusions.map((item, i) => (

              <li
                key={i}
                className="flex items-start gap-2 text-sm text-text-secondary"
              >

                <span className="text-success">✓</span>

                {item}

              </li>

            ))}

          </ul>


          <Button to={plan.ctaTo} className="w-full justify-center">
            {plan.cta}
          </Button>


          {plan.noteBelowCta && (
            <p className="text-xs text-text-secondary mt-4 text-center">
              {plan.noteBelowCta}
            </p>
          )}

        </Card>

      ))}

    </div>

  </Section>



  {/* FAQ */}
  <Section className="">

    <div className="max-w-3xl mx-auto">

      <h2 className="text-2xl font-bold text-text-primary mb-6">
        Pricing FAQ
      </h2>


      <div className="space-y-3">

        {PRICING_FAQ.map((faq, i) => (

          <details
            key={i}
            className="border border-border rounded-lg bg-card-bg"
          >

            <summary className="cursor-pointer px-4 py-3 flex justify-between items-center text-sm font-medium text-text-primary">

              {faq.q}

              <span className="text-text-secondary">+</span>

            </summary>


            <div className="px-4 pb-4 text-sm text-text-secondary">

              {faq.a.includes('sales@opex6.com') ? (
                <>
                  Yes. Organisations with multi-site or complex requirements
                  can discuss custom credit arrangements and dedicated support.

                  <a
                    href="mailto:sales@opex6.com"
                    className="text-accent ml-1 hover:underline"
                  >
                    Contact us at sales@opex6.com
                  </a>
                </>
              ) : (
                faq.a
              )}

            </div>

          </details>

        ))}

      </div>

    </div>

  </Section>



  {/* CTA */}
  <RegisterInterestCTA />
  
</>
  );
}
