import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const STEPS = [
  {
    title: 'Connect Your Systems',
    icon: 'plug',
    body: 'The Exec App is designed to integrate with your existing ERP, MES, SCADA, and data systems. Supported integration targets include SAP, Oracle, Infor, Epicor, Microsoft Dynamics, Rockwell, Siemens MindSphere, and Ignition. Integration scope and timelines are determined during implementation scoping. No rip-and-replace is required.',
  },
  {
    title: 'Configure Your Dashboards',
    icon: 'sliders',
    body: 'Select your KPI categories and configure dashboards to reflect your operational structure — by plant, line, shift, and role. The framework is structured to be configured around your operations, not a generic template.',
  },
  {
    title: 'Set Up Your Users',
    icon: 'users',
    body: 'Add your leadership team, plant managers, and operational leads. Role-based access is designed so each user sees what is relevant to their level and function. Executives see the strategic view; plant teams see the operational detail.',
  },
  {
    title: 'Structured Operational Intelligence',
    icon: 'dashboard',
    body: 'Your leadership team has a single, structured view of operational performance across the KPI areas configured for your business. Consistent data. Consistent definitions. One place.',
  },
];

function StepIcon({ icon }) {
  const className = 'w-6 h-6 text-accent';
  if (icon === 'plug') {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1v2a2 2 0 01-2 2h-2v2a2 2 0 01-2-2v-2H9a2 2 0 01-2-2v-2H5a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    );
  }
  if (icon === 'sliders') {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    );
  }
  if (icon === 'users') {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  }
  if (icon === 'dashboard') {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    );
  }
  return null;
}

export function HowItWorks() {
  return (
    <>
      <Helmet>
        <title>How It Works — OpEx6 | From Operational Data to Executive Clarity</title>
        <meta name="description" content="The Exec App is designed to reduce the time and effort to get a structured view of operational performance. Connect, configure, and give your leadership a structured intelligence view." />
      </Helmet>

      {/* Section 4.1 — Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            From Operational Data to Executive Clarity.
          </h1>
          <p className="text-lg text-text-secondary">
            The Exec App is designed to reduce the time and effort it takes to get a structured, consistent view of operational performance. The framework is structured for practical deployment — connecting to your existing systems, configuring to your operational context, and giving your leadership team a structured intelligence view.
          </p>
        </div>
      </section>

      {/* Section 4.2 — 4-Step Process */}
      <Section className="bg-secondary/50">
        <div className="space-y-8">
          {STEPS.map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <StepIcon icon={step.icon} />
              </div>
              <Card className="flex-1">
                <h3 className="font-semibold text-lg text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.body}</p>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 4.3 — Implementation Support */}
      <Section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Structured onboarding for early access customers.
        </h2>
        <p className="text-text-secondary max-w-3xl">
          Early access customers receive structured onboarding support to help map data sources, configure dashboards, and get their teams set up. Implementation timelines depend on the complexity and number of integrations required.
        </p>
      </Section>

      {/* Section 4.4 — Bottom CTA */}
      <Section className="bg-secondary/50 text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Ready to get started?</h2>
        <p className="text-text-secondary max-w-xl mx-auto mb-6">
          Register your interest today to be contacted ahead of launch with your early access details.
        </p>
        <Button to="/register-interest">Register My Interest</Button>
      </Section>
    </>
  );
}
