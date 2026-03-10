import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const USE_CASES = [
  {
    sector: 'Food & Beverage Manufacturing',
    scenario: 'Gaining structured downtime visibility across a high-volume production line',
    body: 'Consider a food manufacturer operating multiple high-volume lines. Without structured downtime visibility, recurring equipment failures accumulate costs that are difficult to quantify or attribute. The Exec App\'s Downtime & Reliability dashboard framework is designed to help leadership identify recurring failure patterns, track MTBF and MTTR by asset, and give maintenance and operations teams a structured view of downtime by cause.',
    questions: [
      'What is our actual unplanned downtime cost?',
      'Which assets are generating the most downtime?',
      'Are the same faults repeating?',
    ],
  },
  {
    sector: 'Precision Engineering',
    scenario: 'Giving a multi-site leadership team a consolidated operational view',
    body: 'Consider a precision engineering group operating four manufacturing sites. Without a consolidated view, leadership relies on site-level weekly reports with inconsistent formats and definitions. The Exec App is designed to support a single dashboard framework covering production, quality, and performance across multiple sites — with consistent metric definitions and structured comparison across locations.',
    questions: [
      'How are our sites performing relative to each other?',
      'Where is OEE strongest and weakest?',
      'Are quality trends consistent across sites?',
    ],
  },
  {
    sector: 'Industrial Components',
    scenario: 'Structuring safety performance visibility for a group-level safety leadership team',
    body: 'Consider a manufacturing group with a strong safety commitment but reliance on manual, site-level safety reports. Near-miss data is inconsistent across sites. The Exec App\'s Safety & Risk dashboard framework is designed to support structured group-level safety performance visibility — incident tracking, near-miss data, corrective action closure status, and compliance metrics in one place.',
    questions: [
      'What is our group TRIR?',
      'Are near-misses being captured and acted on consistently?',
      'Where are corrective actions overdue?',
    ],
  },
  {
    sector: 'Process Manufacturing',
    scenario: 'Connecting operational performance data to margin visibility for the finance and operations leadership team',
    body: 'Consider a process manufacturer where the Finance Director has limited visibility of how operational decisions are affecting margin between month-end closes. The Exec App\'s Margin Intelligence framework is designed to help connect operational data — cost per unit, material waste, labour efficiency — to margin visibility, supporting more informed joint decision-making between operational and financial leadership.',
    questions: [
      'Where is margin pressure coming from operationally?',
      'Which product lines or shifts are performing above or below cost expectations?',
      'What is the cost impact of our current waste levels?',
    ],
  },
];

export function UseCases() {
  return (
    <>
      <Helmet>
        <title>Use Cases — OpEx6 | Operational Scenarios the Exec App Is Designed to Support</title>
        <meta name="description" content="Illustrative operational scenarios the Exec App is built to help address: downtime visibility, multi-site view, safety performance, margin intelligence." />
      </Helmet>

      {/* Section 7.1 — Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-2">Use Cases</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Operational Scenarios the Exec App Is Designed to Support.
          </h1>
          <p className="text-lg text-text-secondary">
            The following scenarios illustrate the kinds of operational visibility challenges the Exec App is built to help address. These are illustrative examples of common leadership questions and operational gaps — they are not representations of specific customers or confirmed deployment outcomes.
          </p>
        </div>
      </section>

      {/* Section 7.2 — Use Case Cards (4 cards) */}
      <Section className="bg-secondary/50">
        <div className="grid md:grid-cols-2 gap-6">
          {USE_CASES.map((uc, i) => (
            <Card key={i} className="flex flex-col">
              <span className="inline-block w-fit text-xs font-medium uppercase tracking-wider text-accent mb-2">
                {uc.sector}
              </span>
              <h2 className="font-semibold text-lg text-text-primary mb-3">{uc.scenario}</h2>
              <p className="text-text-secondary text-sm mb-4 flex-1">{uc.body}</p>
              <p className="text-text-primary text-sm font-medium mb-2">
                Questions this scenario is designed to help answer:
              </p>
              <ul className="space-y-1 text-text-secondary text-sm list-disc list-inside">
                {uc.questions.map((q, j) => (
                  <li key={j}>{q}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button to="/register-interest">Register Interest</Button>
        </div>
      </Section>
    </>
  );
}
