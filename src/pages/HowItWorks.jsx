import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const STEPS = [
  {
    title: 'Step 1 — Connect your data sources',
    icon: 'plug',
    body: 'Connect the operational systems, files, and reporting inputs that matter most — starting with where OEE, throughput, downtime, quality, and cost data already live. Integration scope and timelines are defined during implementation scoping.',
  },
  {
    title: 'Step 2 — Configure your KPI framework',
    icon: 'sliders',
    body: 'Apply the KPI categories, metrics, and visibility structure relevant to your operation. Configure views by plant, line, shift, and role so the framework reflects how your business actually runs.',
  },
  {
    title: 'Step 3 — Set up leadership views',
    icon: 'users',
    body: 'Give executives, plant leaders, and operational managers the views that are relevant to them. Executives see the structured high-level picture; site and functional leaders see the operational detail they need to act.',
  },
  {
    title: 'Step 4 — Go live with structured operational visibility',
    icon: 'dashboard',
    body: 'Use one framework to review performance, issues, and improvement priorities more consistently. Shift leadership conversations from assembling data to deciding what to do about it.',
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
    <meta
      name="description"
      content="The Exec App is designed to reduce the time and effort to get a structured view of operational performance. Connect, configure, and give your leadership a structured intelligence view."
    />
  </Helmet>

  {/* HERO */}
  <section className="py-32 bg-gray-50 border-b border-black/10">
    <div className="max-w-4xl mx-auto px-6 text-center">

      <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
        How the Exec App is being built to roll out.
      </h1>

      <p className="text-lg text-black/70 mb-6">
        The implementation approach is designed to be practical: connect the data
        sources that matter, apply a structured KPI framework, and give leadership
        teams the views they need to make better decisions.
      </p>

      <p className="text-sm text-black/60">
        OpEx6 is currently in pre-launch / early-access phase. Product features,
        screenshots, integrations, availability, and pricing may change before
        general release.
      </p>

    </div>
  </section>


  {/* PROCESS STEPS */}
  <Section>

    <div className="max-w-5xl mx-auto">

      <h2 className="text-3xl font-bold text-black mb-14 text-center">
        The rollout process
      </h2>

      <div className="relative">

        <div className="absolute left-5 top-0 bottom-0 w-px bg-black/10" />

        <div className="space-y-12">

          {STEPS.map((step, i) => (

            <div key={i} className="relative pl-14">

              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center font-semibold">
                {i + 1}
              </div>

              <Card className="bg-white border border-black/10 rounded-xl shadow-sm p-6">

                <div className="flex items-center gap-3 mb-3">
                  <StepIcon icon={step.icon} />
                  <h3 className="font-semibold text-black">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm text-black/70">
                  {step.body}
                </p>

              </Card>

            </div>

          ))}

        </div>

      </div>

    </div>

  </Section>


  {/* IMPLEMENTATION TIMELINE */}
  <Section className="bg-gray-50">

    <div className="max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-black mb-4">
        A simple implementation progression.
      </h2>

      <p className="text-black/70 text-sm mb-10 max-w-2xl">
        Exact timelines depend on data complexity and integration scope, but
        the progression typically follows these stages.
      </p>

      <div className="grid md:grid-cols-4 gap-6">

        {[
          'Discovery & scoping',
          'Data connection',
          'Configuration & testing',
          'Rollout & review',
        ].map((label, index) => (

          <Card
            key={index}
            className="bg-white border border-black/10 rounded-xl shadow-sm p-6"
          >

            <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold mb-3">
              {index + 1}
            </div>

            <p className="font-medium text-black text-sm mb-1">
              {label}
            </p>

            {index === 0 && (
              <p className="text-black/70 text-sm">
                Confirm scope, systems, and priority KPI areas.
              </p>
            )}

            {index === 1 && (
              <p className="text-black/70 text-sm">
                Connect core data sources and validate feeds.
              </p>
            )}

            {index === 2 && (
              <p className="text-black/70 text-sm">
                Apply KPI framework, configure views, and test with pilot users.
              </p>
            )}

            {index === 3 && (
              <p className="text-black/70 text-sm">
                Extend access, refine dashboards, and embed into leadership routines.
              </p>
            )}

          </Card>

        ))}

      </div>

    </div>

  </Section>


  {/* IMPLEMENTATION SUPPORT */}
  <Section>

    <div className="max-w-4xl">

      <h2 className="text-2xl font-bold text-black mb-4">
        Structured onboarding for early access customers.
      </h2>

      <p className="text-black/70">
        Early access customers receive structured onboarding support to help
        map data sources, configure dashboards, and get their teams set up.
        Implementation timelines depend on the complexity and number of
        integrations required.
      </p>

    </div>

  </Section>


  {/* FAQ LINK */}
  <Section className="text-center">

    <p className="text-black/70 mb-2">
      Questions about setup, rollout, or integrations?
    </p>

    <p className="text-black/70">
      <Link
        to="/faq"
        className="underline underline-offset-4 hover:text-accent"
      >
        See the FAQ
      </Link>.
    </p>

  </Section>


  {/* CTA */}
  <Section className="bg-gray-50 text-center">

    <h2 className="text-2xl font-bold text-black mb-4">
      Register interest in the Exec App.
    </h2>

    <p className="text-black/70 max-w-xl mx-auto mb-6">
      Register your interest today to be contacted ahead of launch with your
      early access details and implementation guidance for your environment.
    </p>

    <Button to="/register-interest">
      Register Interest in the Exec App
    </Button>

  </Section>

</>
  );
}
