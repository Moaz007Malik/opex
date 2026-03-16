import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const VALUES = [
  {
    title: 'Clarity',
    body: 'Operational complexity should produce clear insight, not more noise. Everything we build is designed to be immediately useful to the people who need it most.',
  },
  {
    title: 'Precision',
    body: 'We are building a platform for people who care about accuracy. Every metric is defined, standardised, and structured for consistency across the organisation.',
  },
  {
    title: 'Relevance',
    body: 'Dashboards alone are not the goal. The goal is better operational decisions — and the outcomes those decisions produce.',
  },
];

export function About() {
  return (
    <>
      <Helmet>
        <title>About OpEx6 — We Are Building the Operational Intelligence Platform Manufacturing Leaders Have Needed</title>
        <meta name="description" content="OpEx6 is being built to give manufacturing executives the structured, consistent operational intelligence they need to make faster and better decisions." />
      </Helmet>

      {/* Section 11.1 — Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            We Are Building the Operational Intelligence Platform Manufacturing Leaders Have Needed.
          </h1>
          <p className="text-lg text-text-secondary">
            Too many manufacturing businesses make consequential operational decisions based on last week's report, inconsistent data, or information that is already out of date. OpEx6 is being built to change that. We are creating the platform that gives manufacturing executives the structured, consistent operational intelligence they need to make faster and better decisions.
          </p>
        </div>
      </section>

      {/* Section 11.2 — Mission */}
      <Section className="bg-secondary/50">
        <div className="max-w-3xl">
          <p className="text-xl text-text-primary font-medium">
            Our mission: To give every manufacturing leader the structured operational intelligence they need to make better decisions — consistently, clearly, and at pace.
          </p>
        </div>
      </Section>

      {/* Section 11.3 — Values (3 cards) */}
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <Card key={i}>
              <h2 className="font-semibold text-lg text-text-primary mb-2">{v.title}</h2>
              <p className="text-text-secondary text-sm">{v.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Section 11.4 — Bottom CTA */}
      <Section className="bg-secondary/50 text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Join us at launch.</h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-6">
          Register your interest today and be among the first to access the Exec App. We are building this platform for operational leaders who want better intelligence — and we would like to hear from you.
        </p>
        <Button to="/register-interest">Register My Interest</Button>
      </Section>
    </>
  );
}
