import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { EARLY_ACCESS } from '../config/siteCopy.js';

const PRICING_CARDS = [
  {
    id: "early",
    badgeText: "EARLY ACCESS OFFER",
    badgeVariant: "amber",
    title: "Register Interest",
    subtitle: "Pre-launch early-access offer",
    label: "Register now to secure eligibility",
    description: EARLY_ACCESS.PRICING_CARD_DESCRIPTION,
    checklist: [
      EARLY_ACCESS.PRICING_CHECKLIST_CREDITS,
      "Access to all KPI categories",
      "All 15 dashboard modules",
      "Export and reporting tools",
      "Early access status",
    ],
    ctaText: "Register My Interest",
    ctaVariant: "primary",
    ctaTo: "/register-interest",
    noteBelowCta:
      "This is a pre-launch registration. No payment is taken now. Full offer terms will be communicated ahead of launch.",
  },
  {
    id: "payg",
    badgeText: "COMING AT LAUNCH",
    badgeVariant: "blue",
    title: "PAYG",
    subtitle: "Credit-based — indicative only",
    label: "Planned flexible usage, no long-term commitment",
    description:
      "The PAYG tier is being designed for organisations that want flexible access without a fixed contract. Credits would be purchased as needed and used on your schedule. Indicative only — final commercial terms will be confirmed at launch.",
    checklist: [
      "Credits purchased as needed",
      "No minimum contract requirement",
      "Access to KPI categories and dashboards",
      "Standard reporting and export tools",
    ],
    ctaText: "Register Interest to Be Notified at Launch",
    ctaVariant: "secondary",
    ctaTo: "/register-interest",
  },
  {
    id: "enterprise",
    badgeText: "CUSTOM",
    badgeVariant: "grey",
    title: "Enterprise",
    subtitle: "Custom — to be agreed",
    label: "Volume pricing and dedicated support for multi-site operations",
    description:
      "Built for larger manufacturing organisations with multi-site operations, complex data environments, and enterprise requirements. Expected to include custom credit arrangements and dedicated implementation support options. Contact us to discuss your requirements ahead of launch.",
    checklist: [
      "Volume credit arrangements",
      "Multi-site deployment support",
      "Dedicated implementation guidance",
      "Custom integration scoping",
      "Priority support",
      "Account management",
    ],
    ctaText: "Register Interest to Discuss Enterprise Needs",
    ctaVariant: "secondary",
    ctaTo: "/register-interest",
  },
];

const PRICING_FAQ = [
  {
    q: "Q1: What is a credit?",
    a: "A: A credit is the unit of usage within the Exec App. Credits are consumed as your organisation uses dashboards, refreshes data, and runs reports. The full credit rate card will be published at launch.",
  },
  {
    q: "Q2: Is the 100 credits for £50 offer available now?",
    a: "A: This offer will be available to early registrants when the Exec App opens. We are collecting interest now — no payment is taken at this stage. Register to secure your eligibility.",
  },
  {
    q: "Q3: Can I try the platform before committing?",
    a: "A: Details of early access and any introductory access options will be shared with registered users ahead of launch. Register your interest to stay informed.",
  },
  {
    q: "Q4: Is enterprise pricing available?",
    a: "A: Yes. Organisations with multi-site or complex requirements can discuss custom credit arrangements and dedicated support. Contact us at sales@opex6.com.",
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
      <div className="max-w-[1400px] mx-auto px-6 text-center">

      <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
        PRICING
      </p>

      <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
        Straightforward. Transparent. Structured for scale.
      </h1>

      <p className="text-lg text-text-secondary mb-6">
        The Exec App is planned to use a credit-based commercial model. Credits
        support dashboard usage, reporting, and data connections.
      </p>

      <p className="text-base text-text-secondary">
        Pricing shown is indicative for pre-launch purposes and may change.
        Final commercial terms will be confirmed at launch.
      </p>

    </div>
  </motion.section>

  {/* PRICING CARDS */}
  <Section>
    <div className="max-w-[1400px] mx-auto grid lg:grid-cols-3 gap-6">
      {PRICING_CARDS.map((plan) => {
        const badgeClasses =
          plan.badgeVariant === 'amber'
            ? 'bg-highlight text-background border border-highlight/60'
            : plan.badgeVariant === 'blue'
              ? 'bg-accent/20 text-accent border border-accent/40'
              : 'bg-card-bg text-text-secondary border border-border';

        return (
          <Card
            key={plan.id}
            className="relative rounded-2xl p-7 sm:p-8"
          >
            <span
              className={`absolute top-5 left-5 z-10 text-xs font-semibold px-3 py-1 rounded-full ${badgeClasses}`}
            >
              {plan.badgeText}
            </span>

            <div className="pt-10">
              <h2 className="text-2xl font-bold text-text-primary">
                {plan.title}
              </h2>
              <p className="text-base text-text-secondary font-semibold mt-1">
                {plan.subtitle}
              </p>
              <p className="text-sm text-text-secondary font-semibold mt-3">
                {plan.label}
              </p>

              <p className="text-base text-text-secondary mt-4 leading-relaxed">
                {plan.description}
              </p>

              <ul className="mt-5 space-y-2">
                {plan.checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-base text-text-secondary"
                  >
                    <span className="text-accent mt-0.5" aria-hidden="true">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <Button
                  to={plan.ctaTo}
                  variant={plan.ctaVariant}
                  className="w-full justify-center"
                >
                  {plan.ctaText}
                </Button>
                {plan.noteBelowCta && (
                  <p className="text-sm text-text-secondary mt-4 leading-relaxed">
                    {plan.noteBelowCta}
                  </p>
                )}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  </Section>

  {/* WHAT IS A CREDIT */}
  <Section>
    <div className="max-w-[1400px] mx-auto">
      <h2 className="text-2xl font-bold text-text-primary mb-3">
        What is a credit and how does it work?
      </h2>

      <p className="text-text-secondary mb-4">
        In the Exec App, a credit is the basic unit of usage. Credits are
        consumed as your organisation uses dashboards, refreshes data, and runs
        reports. The exact rate card will be published at launch, but the
        intent is that credits scale with how many sites, users, and dashboards you are actively running — not just how many accounts you have created.
      </p>

      <p className="text-text-secondary mb-4">
        As an illustrative guide, a smaller manufacturing site using a focused KPI set for leadership and plant reviews would typically consume fewer credits than a multi-site group running broader dashboards and more frequent refreshes. Final thresholds and tiers will be confirmed as part of launch.
      </p>

      <p className="text-sm text-text-secondary">
        All examples on this page are indicative and may change before general release.
      </p>
    </div>
  </Section>

  {/* PRICING FAQ */}
  <Section className="bg-background">
    <div className="max-w-[1400px] mx-auto">
      <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
        Pricing FAQ
      </h2>

      <div className="space-y-4">
        {PRICING_FAQ.map((faq) => (
          <div
            key={faq.q}
            className="border border-border rounded-xl bg-card-bg p-5"
          >
            <p className="text-base font-semibold text-text-primary">
              {faq.q}
            </p>
            <p className="text-base text-text-secondary mt-2 leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  </Section>

</>
  );
}
