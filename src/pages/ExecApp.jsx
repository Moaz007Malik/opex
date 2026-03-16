import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const MODULES = [
  { title: 'Production Intelligence', copy: 'Designed to support visibility of throughput, OEE, shift performance, and production vs plan. Structured to help leadership understand line-level and site-level output performance.' },
  { title: 'Quality Control', copy: 'Built to help surface first-pass yield, defect rates, rework, and scrap data. Intended to support early identification of quality trends before they escalate.' },
  { title: 'Downtime & Reliability', copy: 'Designed to support MTBF, MTTR, planned vs unplanned downtime, and equipment availability tracking. Structured to help identify recurring failure patterns.' },
  { title: 'Margin Intelligence', copy: 'Intended to help leadership connect operational decisions to cost per unit, waste, labour efficiency, and margin performance, where underlying data is available.' },
  { title: 'Safety & Risk', copy: 'Built to support structured safety performance visibility, including incident tracking, near-miss data, and compliance status. Designed to support a move from reactive to structured safety reporting.' },
  { title: 'Delivery & Service', copy: 'Designed to support on-time-in-full, order fill rates, and service level performance visibility across the business.' },
];

const WHO_IT_FOR = [
  { role: 'CEO / Managing Director', support: 'A structured operational snapshot — performance, risk, and margin in a consistent format for board-level review' },
  { role: 'COO / Operations Director', support: 'Structured operational visibility across plants, lines, and shifts in a single dashboard framework' },
  { role: 'Plant Manager', support: 'Structured floor-level KPI dashboards covering throughput, quality, downtime, and safety' },
  { role: 'Head of Continuous Improvement', support: 'Trend data, pattern visibility, and CI programme tracking across the operation' },
  { role: 'Manufacturing Director', support: 'Multi-site production performance structured for comparison and review' },
  { role: 'Finance Director', support: 'Margin, cost, and waste dashboards designed to connect to operational drivers' },
  { role: 'Head of Safety', support: 'Structured safety and risk dashboards with compliance tracking support' },
];

const PLANNED_CAPABILITIES = [
  'Structured KPI dashboards — designed for consistent, accessible operational visibility',
  'Role-based access — configure what each user level sees',
  'Multi-site support — structured for comparison across plants and locations',
  'ERP & MES integration support — SAP, Oracle, Infor, Epicor, and more (scope depends on implementation)',
  'Export and reporting tools — designed to support structured operational and board reporting',
  'Accessible on desktop, tablet, and mobile',
  'Cloud-hosted platform',
  'Implementation support — structured onboarding guidance for early access customers',
];

export function ExecApp() {
  return (
    <>
      <Helmet>
        <title>Exec App — OpEx6 | One Dashboard Framework. Every KPI That Matters.</title>
        <meta name="description" content="The Exec App is the operational intelligence platform being built for manufacturing and industrial executives. Single, structured view of every metric that matters." />
      </Helmet>

      {/* Section 2.1 — Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-2">The Exec App by OpEx6</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            One Dashboard Framework. Every KPI That Matters.
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            The Exec App is the operational intelligence platform being built for manufacturing and industrial executives. It is designed to give leadership teams a single, structured view of every metric that matters — from OEE and throughput to safety performance and margin data — in a format structured for executive decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/register-interest">Register Interest</Button>
            <Button to="/kpis-dashboards" variant="secondary">Explore KPIs & Dashboards</Button>
          </div>
        </div>
      </section>

      {/* Section 2.2 — Product Module Cards (6 cards) */}
      <Section className="bg-secondary/50">
        <h2 className="text-3xl font-bold text-text-primary mb-10">
          What the Exec App is built to support.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((m, i) => (
            <Card key={i}>
              <h3 className="font-semibold text-lg text-text-primary mb-2">{m.title}</h3>
              <p className="text-text-secondary text-sm">{m.copy}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Section 2.3 — Who It Is Built For */}
      <Section>
        <h2 className="text-3xl font-bold text-text-primary mb-8">
          The Exec App is designed for the people accountable for operational performance.
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-text-primary font-semibold">Role</th>
                <th className="text-left py-4 px-4 text-text-primary font-semibold">What the Exec App is designed to support</th>
              </tr>
            </thead>
            <tbody>
              {WHO_IT_FOR.map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-4 px-4 text-text-primary font-medium">{row.role}</td>
                  <td className="py-4 px-4 text-text-secondary text-sm">{row.support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Section 2.4 — Planned Capabilities */}
      <Section className="bg-secondary/50">
        <h2 className="text-3xl font-bold text-text-primary mb-8">
          Designed to enterprise expectations. Built for practical deployment.
        </h2>
        <ul className="space-y-3 max-w-3xl">
          {PLANNED_CAPABILITIES.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-secondary">
              <span className="text-accent mt-1 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 2.5 — Bottom CTA */}
      <Section className="text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Ready to learn more?</h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-6">
          Register your interest now to be among the first to access the Exec App when it opens to early users. Early registrants are eligible for our pre-launch offer — 100 credits for £50, subject to final launch terms.
        </p>
        <Button to="/register-interest">Register My Interest</Button>
      </Section>
    </>
  );
}
